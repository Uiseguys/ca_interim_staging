export declare class CwcList {
    items: object[];
    itemAs: string;
    template: string;
    addClass?: string;
    addClassFirst?: string;
    addClassLast?: string;
    addClassEven?: string;
    addClassOdd?: string;
    wrapperClass: string;
    regex: RegExp;
    el: HTMLElement;
    /**
   * Adds custom class for every first, last, even and odd node
   *
   * @private
   * @param {string} [base='']
   * @param {number} index
   * @param {number} count
   * @returns {string}
   * @memberof StencilComponent
   */
    private addListClasses(base, index, count);
    /**
     * Insert into string helper function
     *
     * @param {any} str
     * @param {any} index
     * @param {any} value
     * @returns {string}
     * @memberof CwcList
     */
    insert(str: any, index: any, value: any): string;
    /**
     * Inserts additional list-item-* classes into string node depends of item position.
     *
     * @param {any} str
     * @param {any} index
     * @returns {string}
     * @memberof CwcList
     */
    insertClassList(str: any, index: any): string;
    render(): JSX.Element;
}
