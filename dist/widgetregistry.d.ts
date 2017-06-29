export declare class WidgetRegistry {
    private widgets;
    private defaultWidget;
    constructor();
    setDefaultWidget(widget: any): void;
    getDefaultWidget(): any;
    hasWidget(type: string): boolean;
    register(type: string, widget: any): void;
    getWidgetType(type: string): any;
}
