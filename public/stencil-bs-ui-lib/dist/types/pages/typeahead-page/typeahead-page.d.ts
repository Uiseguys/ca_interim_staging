export declare class StencilComponent {
    complex: {
        type: string;
        data: {
            name: string;
            capital: string;
        };
    }[];
    searchString: string;
    complexResult: any[];
    data: string[];
    myOptions: {
        id: number;
        visual: string;
        label: string;
    }[];
    getTemplate(): string;
    extenderImagePrefix: {
        id: number;
        imgPrefix: string;
        label: string;
    }[];
    getImagePrefixTemplate(): string;
    result: any;
    typeaheadOnSubmit(e: any): void;
    render(): JSX.Element[];
}
