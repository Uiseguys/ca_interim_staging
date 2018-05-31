import { EventEmitter } from '@stencil/core';
export declare class CwcTypeahead {
    date: string;
    minSearchLength: number;
    googleAutocomplete: boolean;
    data: any[];
    itemAs: string;
    idValue: string;
    searchKey: string;
    template: string;
    highlight: boolean;
    placeholder: string;
    filterValue: string;
    optionsShown: boolean;
    focusIndex: number;
    private filtered;
    typeaheadOnSubmit: EventEmitter;
    typeaheadOnSubmitHandler(result: any): void;
    /**
     * Life cycle hooks
    */
    componentWillUpdate(): void;
    componentDidUpdate(): void;
    /**
     * Private functions
    */
    private filter();
    private filterStringArray(data);
    private findInComplex(data, address);
    /**
     * Handlers
    */
    handleInputChange(e: any): void;
    handleSelectFromTemplate(e: any, i: number): void;
    handleSelect(value: any, index: any): void;
    handleHover(i: number): void;
    /**
     * Public methods
    */
    close(): void;
    initGoogleAutocomplete(ref: any): void;
    render(): JSX.Element;
    /**
     * Keyboard handlers
     *
     **/
    handleDownArrow(ev: any): void;
    handleUpArrow(ev: any): void;
    handleEscape(ev: any): void;
    handleEnter(ev: any): void;
}
