/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class TemplateSchemaElement {
    /**
     * @param {?} elementRef
     * @return {?}
     */
    getTextContent(elementRef) {
        const /** @type {?} */ nodes = Array.from(elementRef.nativeElement.childNodes);
        const /** @type {?} */ node = /** @type {?} */ (nodes.filter((el) => {
            return el.nodeType === el.TEXT_NODE;
        }).pop());
        if (!node || !node.nodeValue) {
            return '';
        }
        return node.nodeValue.trim();
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUtc2NoZW1hLWVsZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2NoZW1hLWZvcm0vIiwic291cmNlcyI6WyJsaWIvdGVtcGxhdGUtc2NoZW1hL3RlbXBsYXRlLXNjaGVtYS1lbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7OztJQUVKLGNBQWMsQ0FBQyxVQUFzQjtRQUNuQyx1QkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELHVCQUFNLElBQUkscUJBQWdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtZQUN6RCxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3JDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQSxDQUFDO1FBRVQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ1g7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUM5QjtDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVTY2hlbWFFbGVtZW50IHtcblxuICBnZXRUZXh0Q29udGVudChlbGVtZW50UmVmOiBFbGVtZW50UmVmKTogc3RyaW5nIHtcbiAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20oZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXMpO1xuICAgIGNvbnN0IG5vZGUgPSA8SFRNTEVsZW1lbnQ+bm9kZXMuZmlsdGVyKChlbDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbC5ub2RlVHlwZSA9PT0gZWwuVEVYVF9OT0RFO1xuICAgIH0pLnBvcCgpO1xuXG4gICAgaWYgKCFub2RlIHx8ICFub2RlLm5vZGVWYWx1ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlLm5vZGVWYWx1ZS50cmltKCk7XG4gIH1cblxufVxuIl19