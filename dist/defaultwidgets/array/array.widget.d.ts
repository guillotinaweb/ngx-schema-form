import { ArrayLayoutWidget } from '../../widget';
export declare class ArrayWidget extends ArrayLayoutWidget {
    addItem(): void;
    removeItem(index: number): void;
    trackByIndex(index: number, item: any): number;
}
