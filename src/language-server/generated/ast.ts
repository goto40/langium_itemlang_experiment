/******************************************************************************
 * This file was generated by langium-cli 0.2.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, isAstNode } from 'langium';

export interface ApplicableFor extends AstNode {
    readonly $container: PropertyDefinition;
    concrete_types: Array<Reference<RawType>>
}

export const ApplicableFor = 'ApplicableFor';

export function isApplicableFor(item: unknown): item is ApplicableFor {
    return reflection.isInstance(item, ApplicableFor);
}

export interface Attribute extends AstNode {
    readonly $container: Struct;
    content: AttributeContent
    if_attr: IfAttribute
}

export const Attribute = 'Attribute';

export function isAttribute(item: unknown): item is Attribute {
    return reflection.isInstance(item, Attribute);
}

export interface AttributeContent extends AstNode {
    readonly $container: Attribute | Enum | Struct | Constants;
    name: string
    properties: Array<Property>
}

export const AttributeContent = 'AttributeContent';

export function isAttributeContent(item: unknown): item is AttributeContent {
    return reflection.isInstance(item, AttributeContent);
}

export interface AttrRef extends AstNode {
    readonly $container: VariantAttribute | Val;
    ref: Reference<FormulaElement>
}

export const AttrRef = 'AttrRef';

export function isAttrRef(item: unknown): item is AttrRef {
    return reflection.isInstance(item, AttrRef);
}

export interface CmpOp extends AstNode {
    readonly $container: Predicate_CmpPart;
    EQ: '=='
    GE: '>='
    GT: '>'
    LE: '<='
    LT: '<'
    NEQ: '!='
}

export const CmpOp = 'CmpOp';

export function isCmpOp(item: unknown): item is CmpOp {
    return reflection.isInstance(item, CmpOp);
}

export interface Constants extends AstNode {
    readonly $container: Package;
    constant_entries: Array<Constant>
    description: string
    name: string
}

export const Constants = 'Constants';

export function isConstants(item: unknown): item is Constants {
    return reflection.isInstance(item, Constants);
}

export interface Dif extends AstNode {
    readonly $container: Formula;
    parts: Array<Mul>
}

export const Dif = 'Dif';

export function isDif(item: unknown): item is Dif {
    return reflection.isInstance(item, Dif);
}

export interface Dim extends AstNode {
    readonly $container: ArrayAttribute;
    dim: Formula
}

export const Dim = 'Dim';

export function isDim(item: unknown): item is Dim {
    return reflection.isInstance(item, Dim);
}

export interface Div extends AstNode {
    readonly $container: Mul;
    parts: Array<Val>
}

export const Div = 'Div';

export function isDiv(item: unknown): item is Div {
    return reflection.isInstance(item, Div);
}

export interface ExtNumber extends AstNode {
    readonly $container: Val;
    FALSE: 'false'
    TRUE: 'true'
}

export const ExtNumber = 'ExtNumber';

export function isExtNumber(item: unknown): item is ExtNumber {
    return reflection.isInstance(item, ExtNumber);
}

export interface Formula extends AstNode {
    readonly $container: Predicate_Cmp | Predicate_CmpPart | Val | EnumEntry | Dim | VariantMapping | Constant | NumberValue;
    parts: Array<Dif>
}

export const Formula = 'Formula';

export function isFormula(item: unknown): item is Formula {
    return reflection.isInstance(item, Formula);
}

export interface FormulaElement extends AstNode {
    readonly $container: Attribute | Enum | Struct | Constants;
}

export const FormulaElement = 'FormulaElement';

export function isFormulaElement(item: unknown): item is FormulaElement {
    return reflection.isInstance(item, FormulaElement);
}

export interface IfAttribute extends AstNode {
    readonly $container: Attribute;
    predicate: Predicate
}

export const IfAttribute = 'IfAttribute';

export function isIfAttribute(item: unknown): item is IfAttribute {
    return reflection.isInstance(item, IfAttribute);
}

export interface Import extends AstNode {
    readonly $container: Model;
    importURI: string
}

export const Import = 'Import';

export function isImport(item: unknown): item is Import {
    return reflection.isInstance(item, Import);
}

export interface InternalType extends AstNode {
    readonly $container: PropertyDefinition;
    ATTRTYPE: 'ATTRTYPE'
    BOOL: 'BOOL'
    ENUM: 'ENUM'
    FLOAT: 'FLOAT'
    INT: 'INT'
    STRING: 'STRING'
    UINT: 'UINT'
}

export const InternalType = 'InternalType';

export function isInternalType(item: unknown): item is InternalType {
    return reflection.isInstance(item, InternalType);
}

export interface Model extends AstNode {
    imports: Array<Import>
    packages: Array<Package>
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface Mul extends AstNode {
    readonly $container: Dif;
    parts: Array<Div>
}

export const Mul = 'Mul';

export function isMul(item: unknown): item is Mul {
    return reflection.isInstance(item, Mul);
}

export interface NumberPropertiesPerStructDefRestriction extends AstNode {
    readonly $container: PropertyDefinition;
    max: number
    min: number
}

export const NumberPropertiesPerStructDefRestriction = 'NumberPropertiesPerStructDefRestriction';

export function isNumberPropertiesPerStructDefRestriction(item: unknown): item is NumberPropertiesPerStructDefRestriction {
    return reflection.isInstance(item, NumberPropertiesPerStructDefRestriction);
}

export interface NumberValue extends AstNode {
    readonly $container: Property;
    x: Formula
}

export const NumberValue = 'NumberValue';

export function isNumberValue(item: unknown): item is NumberValue {
    return reflection.isInstance(item, NumberValue);
}

export interface Package extends AstNode {
    readonly $container: Model | Package;
    constants: Array<Constants>
    description: string
    items: Array<Type>
    name: string
    packages: Array<Package>
    property_set?: Reference<PropertySet>
    property_sets: Array<PropertySet>
}

export const Package = 'Package';

export function isPackage(item: unknown): item is Package {
    return reflection.isInstance(item, Package);
}

export interface Predicate extends AstNode {
    readonly $container: IfAttribute;
    parts: Array<Predicate_And>
}

export const Predicate = 'Predicate';

export function isPredicate(item: unknown): item is Predicate {
    return reflection.isInstance(item, Predicate);
}

export interface Predicate_And extends AstNode {
    readonly $container: Predicate;
    parts: Array<Predicate_Cmp>
}

export const Predicate_And = 'Predicate_And';

export function isPredicate_And(item: unknown): item is Predicate_And {
    return reflection.isInstance(item, Predicate_And);
}

export interface Predicate_Cmp extends AstNode {
    readonly $container: Predicate_And;
    other_parts: Array<Predicate_CmpPart>
    part0: Sum
}

export const Predicate_Cmp = 'Predicate_Cmp';

export function isPredicate_Cmp(item: unknown): item is Predicate_Cmp {
    return reflection.isInstance(item, Predicate_Cmp);
}

export interface Predicate_CmpPart extends AstNode {
    readonly $container: Predicate_Cmp;
    cmp_op: CmpOp
    part: Sum
}

export const Predicate_CmpPart = 'Predicate_CmpPart';

export function isPredicate_CmpPart(item: unknown): item is Predicate_CmpPart {
    return reflection.isInstance(item, Predicate_CmpPart);
}

export interface Property extends AstNode {
    readonly $container: Struct | EnumEntry | VariantMapping | AttributeContent;
    definition: Reference<PropertyDefinition>
    numberValue: NumberValue
    textValue: TextValue
}

export const Property = 'Property';

export function isProperty(item: unknown): item is Property {
    return reflection.isInstance(item, Property);
}

export interface PropertyDefinition extends AstNode {
    readonly $container: PropertySet;
    applicable_for: Array<ApplicableFor>
    description: string
    internaltype: InternalType
    name: string
    numberOfPropRestriction: NumberPropertiesPerStructDefRestriction
    optional: boolean
}

export const PropertyDefinition = 'PropertyDefinition';

export function isPropertyDefinition(item: unknown): item is PropertyDefinition {
    return reflection.isInstance(item, PropertyDefinition);
}

export interface PropertySet extends AstNode {
    readonly $container: Package;
    extends?: Reference<PropertySet>
    name: string
    property_definitions: Array<PropertyDefinition>
}

export const PropertySet = 'PropertySet';

export function isPropertySet(item: unknown): item is PropertySet {
    return reflection.isInstance(item, PropertySet);
}

export interface RawTypeType extends AstNode {
    readonly $container: RawType;
    FLOAT: 'FLOAT'
    INT: 'INT'
    UINT: 'UINT'
}

export const RawTypeType = 'RawTypeType';

export function isRawTypeType(item: unknown): item is RawTypeType {
    return reflection.isInstance(item, RawTypeType);
}

export interface TextValue extends AstNode {
    readonly $container: Property;
    x: string
}

export const TextValue = 'TextValue';

export function isTextValue(item: unknown): item is TextValue {
    return reflection.isInstance(item, TextValue);
}

export interface Type extends AstNode {
    readonly $container: Package;
    name: string
}

export const Type = 'Type';

export function isType(item: unknown): item is Type {
    return reflection.isInstance(item, Type);
}

export interface Val extends AstNode {
    readonly $container: Div;
    ref: AttrRef
    sum: Sum
    value: ExtNumber
    valueClassificator: ValueClassificator
}

export const Val = 'Val';

export function isVal(item: unknown): item is Val {
    return reflection.isInstance(item, Val);
}

export interface ValueClassificator extends AstNode {
    readonly $container: Val;
    CONST: 'CONST'
    ENUM: 'ENUM'
}

export const ValueClassificator = 'ValueClassificator';

export function isValueClassificator(item: unknown): item is ValueClassificator {
    return reflection.isInstance(item, ValueClassificator);
}

export interface VariantMapping extends AstNode {
    readonly $container: VariantAttribute;
    id: Formula
    properties: Array<Property>
    the_name: string
    type: Reference<Struct>
}

export const VariantMapping = 'VariantMapping';

export function isVariantMapping(item: unknown): item is VariantMapping {
    return reflection.isInstance(item, VariantMapping);
}

export interface ApplicableForRawType extends ApplicableFor {
}

export const ApplicableForRawType = 'ApplicableForRawType';

export function isApplicableForRawType(item: unknown): item is ApplicableForRawType {
    return reflection.isInstance(item, ApplicableForRawType);
}

export interface ArrayAttribute extends AttributeContent {
    dims: Array<Dim>
    embedded: boolean
    type: Reference<Type>
}

export const ArrayAttribute = 'ArrayAttribute';

export function isArrayAttribute(item: unknown): item is ArrayAttribute {
    return reflection.isInstance(item, ArrayAttribute);
}

export interface ScalarAttribute extends AttributeContent, FormulaElement {
    embedded: boolean
    type: Reference<Type>
}

export const ScalarAttribute = 'ScalarAttribute';

export function isScalarAttribute(item: unknown): item is ScalarAttribute {
    return reflection.isInstance(item, ScalarAttribute);
}

export interface VariantAttribute extends AttributeContent {
    mappings: Array<VariantMapping>
    variant_selector: AttrRef
}

export const VariantAttribute = 'VariantAttribute';

export function isVariantAttribute(item: unknown): item is VariantAttribute {
    return reflection.isInstance(item, VariantAttribute);
}

export interface BoolNumber extends ExtNumber {
}

export const BoolNumber = 'BoolNumber';

export function isBoolNumber(item: unknown): item is BoolNumber {
    return reflection.isInstance(item, BoolNumber);
}

export interface Sum extends Formula {
}

export const Sum = 'Sum';

export function isSum(item: unknown): item is Sum {
    return reflection.isInstance(item, Sum);
}

export interface Constant extends FormulaElement {
    description: string
    name: string
    type: Reference<RawType>
    value: Formula
}

export const Constant = 'Constant';

export function isConstant(item: unknown): item is Constant {
    return reflection.isInstance(item, Constant);
}

export interface EnumEntry extends FormulaElement {
    name: string
    properties: Array<Property>
    value: Formula
}

export const EnumEntry = 'EnumEntry';

export function isEnumEntry(item: unknown): item is EnumEntry {
    return reflection.isInstance(item, EnumEntry);
}

export interface Predicate_Or extends Predicate {
}

export const Predicate_Or = 'Predicate_Or';

export function isPredicate_Or(item: unknown): item is Predicate_Or {
    return reflection.isInstance(item, Predicate_Or);
}

export interface Enum extends Type {
    description: string
    enum_entries: Array<EnumEntry>
    type: Reference<RawType>
}

export const Enum = 'Enum';

export function isEnum(item: unknown): item is Enum {
    return reflection.isInstance(item, Enum);
}

export interface RawType extends Type {
    bits: number
    rawtypetype: RawTypeType
}

export const RawType = 'RawType';

export function isRawType(item: unknown): item is RawType {
    return reflection.isInstance(item, RawType);
}

export interface Struct extends Type {
    attributes: Array<Attribute>
    constant_entries: Array<Constant>
    properties: Array<Property>
}

export const Struct = 'Struct';

export function isStruct(item: unknown): item is Struct {
    return reflection.isInstance(item, Struct);
}

export type NUMBER = number

export type FQN = string

export type ItemLanguageAstType = 'ApplicableFor' | 'Attribute' | 'AttributeContent' | 'AttrRef' | 'CmpOp' | 'Constants' | 'Dif' | 'Dim' | 'Div' | 'ExtNumber' | 'Formula' | 'FormulaElement' | 'IfAttribute' | 'Import' | 'InternalType' | 'Model' | 'Mul' | 'NumberPropertiesPerStructDefRestriction' | 'NumberValue' | 'Package' | 'Predicate' | 'Predicate_And' | 'Predicate_Cmp' | 'Predicate_CmpPart' | 'Property' | 'PropertyDefinition' | 'PropertySet' | 'RawTypeType' | 'TextValue' | 'Type' | 'Val' | 'ValueClassificator' | 'VariantMapping' | 'ApplicableForRawType' | 'ArrayAttribute' | 'ScalarAttribute' | 'VariantAttribute' | 'BoolNumber' | 'Sum' | 'Constant' | 'EnumEntry' | 'Predicate_Or' | 'Enum' | 'RawType' | 'Struct';

export type ItemLanguageAstReference = 'ApplicableFor:concrete_types' | 'AttrRef:ref' | 'Package:property_set' | 'Property:definition' | 'PropertySet:extends' | 'VariantMapping:type' | 'ArrayAttribute:type' | 'ScalarAttribute:type' | 'Constant:type' | 'Enum:type';

export class ItemLanguageAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['ApplicableFor', 'Attribute', 'AttributeContent', 'AttrRef', 'CmpOp', 'Constants', 'Dif', 'Dim', 'Div', 'ExtNumber', 'Formula', 'FormulaElement', 'IfAttribute', 'Import', 'InternalType', 'Model', 'Mul', 'NumberPropertiesPerStructDefRestriction', 'NumberValue', 'Package', 'Predicate', 'Predicate_And', 'Predicate_Cmp', 'Predicate_CmpPart', 'Property', 'PropertyDefinition', 'PropertySet', 'RawTypeType', 'TextValue', 'Type', 'Val', 'ValueClassificator', 'VariantMapping', 'ApplicableForRawType', 'ArrayAttribute', 'ScalarAttribute', 'VariantAttribute', 'BoolNumber', 'Sum', 'Constant', 'EnumEntry', 'Predicate_Or', 'Enum', 'RawType', 'Struct'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            case ApplicableForRawType: {
                return this.isSubtype(ApplicableFor, supertype);
            }
            case ArrayAttribute:
            case VariantAttribute: {
                return this.isSubtype(AttributeContent, supertype);
            }
            case ScalarAttribute: {
                return this.isSubtype(AttributeContent, supertype) || this.isSubtype(FormulaElement, supertype);
            }
            case BoolNumber: {
                return this.isSubtype(ExtNumber, supertype);
            }
            case Sum: {
                return this.isSubtype(Formula, supertype);
            }
            case Constant:
            case EnumEntry: {
                return this.isSubtype(FormulaElement, supertype);
            }
            case Predicate_Or: {
                return this.isSubtype(Predicate, supertype);
            }
            case Enum:
            case RawType:
            case Struct: {
                return this.isSubtype(Type, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: ItemLanguageAstReference): string {
        switch (referenceId) {
            case 'ApplicableFor:concrete_types': {
                return RawType;
            }
            case 'AttrRef:ref': {
                return FormulaElement;
            }
            case 'Package:property_set': {
                return PropertySet;
            }
            case 'Property:definition': {
                return PropertyDefinition;
            }
            case 'PropertySet:extends': {
                return PropertySet;
            }
            case 'VariantMapping:type': {
                return Struct;
            }
            case 'ArrayAttribute:type': {
                return Type;
            }
            case 'ScalarAttribute:type': {
                return Type;
            }
            case 'Constant:type': {
                return RawType;
            }
            case 'Enum:type': {
                return RawType;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }
}

export const reflection = new ItemLanguageAstReflection();