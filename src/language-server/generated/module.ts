/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { ItemLanguageAstReflection } from './ast';
import { grammar } from './grammar';

export const languageMetaData: LanguageMetaData = {
    languageId: 'item-language',
    fileExtensions: ['.item', '.msg']
};

export const ItemLanguageGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => grammar(),
    AstReflection: () => new ItemLanguageAstReflection(),
    LanguageMetaData: () => languageMetaData,
    parser: {}
};
