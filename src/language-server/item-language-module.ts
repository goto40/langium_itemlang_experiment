import { createDefaultModule, DefaultModuleContext, inject, LangiumServices, Module, PartialLangiumServices } from 'langium';
import { ItemLanguageGeneratedModule } from './generated/module';
import { ItemLanguageValidationRegistry, ItemLanguageValidator } from './item-language-validator';
import { ItemLangScopeComputation, ItemLangScopeProvider } from './item-language-scope';
import { ItemLangNameProvider } from './item-language-naming';
/**
 * Declaration of custom services - add your own service classes here.
 */
export type ItemLanguageAddedServices = {
    validation: {
        ItemLanguageValidator: ItemLanguageValidator
    }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
export type ItemLanguageServices = LangiumServices & ItemLanguageAddedServices

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const ItemLanguageModule: Module<ItemLanguageServices, PartialLangiumServices & ItemLanguageAddedServices> = {
    references: {
        ScopeComputation: (injector) => new ItemLangScopeComputation(injector),
        NameProvider: () => new ItemLangNameProvider(),
        ScopeProvider: (services) => new ItemLangScopeProvider(services)
    },
    validation: {
        ValidationRegistry: (injector) => new ItemLanguageValidationRegistry(injector),
        ItemLanguageValidator: () => new ItemLanguageValidator()
    },
};

/**
 * Inject the full set of language services by merging three modules:
 *  - Langium default services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 */
export function createItemLanguageServices(context?: DefaultModuleContext): ItemLanguageServices {
    return inject(
        createDefaultModule(context),
        ItemLanguageGeneratedModule,
        ItemLanguageModule
    );
}