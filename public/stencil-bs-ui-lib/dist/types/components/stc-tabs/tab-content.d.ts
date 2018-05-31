import { IStcTabContentData } from './interfaces';
export declare class StcTabContent {
    name: string;
    isSelected: boolean;
    getChild(): IStcTabContentData;
    unselect(): void;
    select(): void;
    render(): JSX.Element;
}
