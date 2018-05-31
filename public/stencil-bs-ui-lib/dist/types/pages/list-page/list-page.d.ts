export declare class ListPage {
    users1: any[];
    users2: any[];
    lodashData: {
        name: string;
    }[];
    getLodashTemplate(): string;
    customEventHandler(event: any): void;
    componentWillLoad(): void;
    initUsers1Data(count?: number): void;
    initUsers2Data(count?: number): void;
    getUser2Template(): string;
    getUserTemplate(): string;
    getUsersPage(): number;
    getUsers(count?: number): Promise<{}>;
    render(): JSX.Element;
}
