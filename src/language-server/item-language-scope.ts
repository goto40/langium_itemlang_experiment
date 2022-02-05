import { AstNodeDescription, DefaultScopeComputation, interruptAndCheck, LangiumDocument, LangiumServices, PrecomputedScopes,  AstNode, Scope, DefaultScopeProvider, SimpleScope, stream} from 'langium';
import { CancellationToken } from 'vscode-jsonrpc';
import { ItemLangNameProvider } from './item-language-naming';
import { Model, Package, isPackage, Property, PropertyDefinition } from './generated/ast';
import { inspect } from 'util'

function get_parent_package(node: AstNode): Package|null {
    let p = node.$container;
    while(!isPackage(p)) {
        // "?." == "safe navigation" 
        p = p?.$container;
        if (p === null) return null;
    }
    return p as Package
}

export class ItemLangScopeProvider extends DefaultScopeProvider {

    getScope(node: AstNode, referenceId: string): Scope {
        if (referenceId=="Property:definition" && node.$type=='Property') {
            const scopes: AstNodeDescription[] = [];
            console.log("PI looking for "+referenceId+" "+(node as Property).definition.$refText);
            const definitions : PropertyDefinition[] = []; //get_parent_package(node)?.property_set?.ref?.property_definitions;
            console.log(`1definitions ${inspect(get_parent_package(node)?.property_set?.ref)}`)
            //console.log(`1definitions ${inspect(get_parent_package(node)?.property_set)}`)
            //console.log(`2definitions ${definitions}`)
            if (definitions) {
                definitions.forEach(element => {
                    scopes.push( { node: element, type: element.$type, name: element.name, documentUri:node.$document!.uri, path: ''} )
                });
            }
            if (scopes.length==8880) {
                return new SimpleScope(stream(scopes));
            }
            else {
                const result = super.getScope(node, referenceId);
                return result;    
            }
        }
        else {
            const result = super.getScope(node, referenceId);
            // console.error(`PI default lookup for ${referenceId}, ${node.$type} -> ${inspect(result)}`);
            // result.getAllElements().forEach( (val, idx) => {
            //     console.log(`----------------------${referenceId}`);
            //     console.log(inspect(val))
            // })
            return result;
        }
    }

}
export class ItemLangScopeComputation extends DefaultScopeComputation {

    constructor(services: LangiumServices) {
        super(services);
    }

    async computeScope(document: LangiumDocument, cancelToken = CancellationToken.None): Promise<PrecomputedScopes> {
        const model = document.parseResult.value as Model;
        const scopes = new Map();
        await this.processContainer(model, scopes, document, cancelToken);
        return scopes;
    }

    protected async processContainer(container: Model | Package, scopes: PrecomputedScopes, document: LangiumDocument, cancelToken: CancellationToken): Promise<AstNodeDescription[]> {
        const localDescriptions: AstNodeDescription[] = [];
        for (const element of container.packages) {
            interruptAndCheck(cancelToken);
            const nestedDescriptions = await this.processContainer(element, scopes, document, cancelToken);
            for (const description of nestedDescriptions) {
                // Add qualified names to the container
                const qualified = this.createQualifiedDescription(element, description, document);
                localDescriptions.push(qualified);
            }
        }
        if (isPackage(container)) {
            for (const element of (container as Package).property_sets) {
                interruptAndCheck(cancelToken);
                const description = this.descriptions.createDescription(element, element.name, document);
                localDescriptions.push(description);                
            }    
            for (const element of (container as Package).items) {
                interruptAndCheck(cancelToken);
                const description = this.descriptions.createDescription(element, element.name, document);
                localDescriptions.push(description);                
            }    
            // for (const element of (container as Package).constants) {
            //     interruptAndCheck(cancelToken);
            //     const description = this.descriptions.createDescription(element, element.name, document);
            //     localDescriptions.push(description);                
            // }    
        }
        scopes.set(container, localDescriptions); // scopes for this container
        return localDescriptions;
    }

    protected createQualifiedDescription(pack: Package, description: AstNodeDescription, document: LangiumDocument): AstNodeDescription {
        const name = (this.nameProvider as ItemLangNameProvider).getQualifiedName(pack.name, description.name);
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.descriptions.createDescription(description.node!, name, document);
    }

}
