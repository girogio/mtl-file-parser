import { Material } from './types';
declare class MTLFile {
    materials: Material[];
    currentMaterial?: Material;
    lineNumber: number;
    fileName: string;
    fileContents: string;
    defaultMaterialName: string;
    constructor(fileContents: string);
    _reset(): void;
    parse(): Material[];
    static _stripComments(lineString: string): string;
    _createMaterial(name: string): void;
    _getCurrentMaterial(): Material;
    _parseNewMTL(lineItems: string[]): void;
    _parseIllum(lineItems: string[]): void;
    _parseKa(lineItems: string[]): void;
    _parseKd(lineItems: string[]): void;
    _parseKs(lineItems: string[]): void;
    _parseKe(_lineItems: string[]): void;
    _parseKStatementRGB(lineItems: string[]): {
        red: number;
        green: number;
        blue: number;
    } | undefined;
    _parseTF(_lineItems: string[]): void;
    _parseNs(_lineItems: string[]): void;
    _parseNi(_lineItems: string[]): void;
    _parseD(lineItems: string[]): void;
    _parseTr(lineItems: string[]): void;
    _parseSharpness(lineItems: string[]): void;
    _parseMapKa(lineItems: string[]): void;
    _parseMapKd(lineItems: string[]): void;
    _parseMapD(lineItems: string[]): void;
    _parseMapKs(lineItems: string[]): void;
    _parseMapNs(lineItems: string[]): void;
    _parseDisp(lineItems: string[]): void;
    _parseDecal(lineItems: string[]): void;
    _parseBump(lineItems: string[]): void;
    _parseRefl(lineItems: string[]): void;
    _notImplemented(message: string): void;
    _fileError(message: string): void;
}
export default MTLFile;