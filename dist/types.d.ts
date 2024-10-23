export interface Material {
    name?: string;
    illum: number;
    Ka: {
        method: string;
        red: number;
        green: number;
        blue: number;
    };
    Kd: {
        method: string;
        red: number;
        green: number;
        blue: number;
    };
    Ks: {
        method: string;
        red: number;
        green: number;
        blue: number;
    };
    Ke: {
        method: string;
        red: number;
        green: number;
        blue: number;
    };
    map_Ka: {
        file?: string;
    };
    map_Kd: {
        file?: string;
    };
    map_Ks: {
        file?: string;
    };
    map_d: {
        file?: string;
    };
    dissolve: number;
    opticalDensity: number;
}
