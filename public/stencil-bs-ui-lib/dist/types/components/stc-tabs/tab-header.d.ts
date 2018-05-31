import { EventEmitter } from '@stencil/core';
import { IStcTabHeaderData } from './interfaces';
export declare class StcTabHeader {
    id: string;
    name: string;
    onSelect: EventEmitter;
    isSelected: boolean;
    getChild(): IStcTabHeaderData;
    unselect(): void;
    select(): void;
    onClick(): void;
    render(): JSX.Element[];
}
