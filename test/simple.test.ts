import { LangiumDocument } from 'langium';
import { parseDocument } from 'langium/lib/test';
import { createItemLanguageServices } from '../src/language-server/item-language-module';
import { Model } from '../src/language-server/generated/ast';
//import { inspect } from 'util';

const services = createItemLanguageServices();

const myModelText1 = `
package myPackage1 {

    property_set myset {
        property optional myprop1: STRING
    }

}

package myPackage (property_set myPackage1.myset) {

    rawtype int INT 32

    struct demo1 {
        scalar x: myPackage.int (.myprop1="")
    }

}
`;

describe('SimpleTest', () => {
    test('Find all references', async () => {
        const model = await getModel(myModelText1);
        expect(model).not.toBe(null);
        expect(model.$document?.parseResult?.lexerErrors.length).toBe(0);
        expect(model.$document?.parseResult?.parserErrors.length).toBe(0);
        let errors = ''; 
        model.$document?.references?.forEach( (val, idx, arr) => {
            //console.log(`error: ${inspect(val.error)}`)
            if (val.error!==undefined) {
                errors += `${val.error.message}\n`;
            }
        });
        expect(errors).toBe('');
    });
});

async function getModel(text: string) : Promise<Model> {
    const myDoc: LangiumDocument = await parseDocument(services, text);
    return myDoc.parseResult.value as Model;
}

// async function getReferences(): Promise<ReferenceDescription[]> {
//     const datatypeDoc: LangiumDocument = await parseDocument(services, datatypeFile);
//     const referencingDoc: LangiumDocument = await parseDocument(services, referencingFile);
//     services.index.IndexManager.update([referencingDoc, datatypeDoc]);
//     const model = (datatypeDoc.parseResult.value as Domainmodel);

//     const stringType = model.elements[0];

//     const allRefs: ReferenceDescription[] = [];
//     services.index.IndexManager.findAllReferences(stringType, createPath(stringType))
//         .forEach((ref) => allRefs.push(ref));
//     return allRefs;
// }

// function range(ref: ReferenceDescription): string {
//     return ref.segment.range.start.line + ':' + ref.segment.range.start.character + '->' + ref.segment.range.end.line + ':' + ref.segment.range.end.character;
// }
// function createPath(node: AstNode): string {
//     return services.index.AstNodeLocator.getAstNodePath(node);
// }
