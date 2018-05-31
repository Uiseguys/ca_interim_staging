import { EventEmitter } from '@stencil/core';
export declare class CwcInfiniteListWatcher {
    listSelector: string;
    lastItemSelector: string;
    containerSelector: string;
    bindToList: boolean;
    bottomOffset?: number;
    debounce: number;
    listElement: HTMLElement;
    debounceStatus: boolean;
    onBottomReach: EventEmitter;
    loadMore(): void;
    startDebounce(): void;
    componentWillLoad(): void;
    listScrollHandler(): void;
    windowScrollHandler(): void;
    render(): JSX.Element;
}
