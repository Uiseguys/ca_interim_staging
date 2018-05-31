import { HostElement } from '@stencil/core';
import 'bootstrap.native/dist/bootstrap-native-v4';
export declare class StencilComponent {
    btn: Element;
    content: Element;
    el: HostElement;
    openState: boolean;
    componentDidLoad(): void;
    componentWillUpdate(): void;
    toggle(): void;
    close(): void;
    open(): void;
    onBlurHandler(): void;
    render(): JSX.Element;
}
