import {
	Component,
	EventEmitter,
	Input,
	NgZone,
	Output
} from "@angular/core";

import {TinyMCEValueAccessor} from "./tinymcevalueaccessor";

import {CORE_DIRECTIVES} from "@angular/common";

import "tinymce/tinymce";
import "tinymce/themes/modern/theme";
require("style!css!tinymce/skins/lightgray/skin.min.css");
require("style!css!tinymce/skins/lightgray/content.min.css");

declare var tinymce;

@Component({
	selector: "tinymce",
	template: require("./tinymce.component.html"),
})
export class TinyMCE {

	private editor: any = null;
	private initialValue: string = "";
	@Input() id: string;
	@Output() contentChange = new EventEmitter();
	@Output() blur = new EventEmitter();
	@Output() focus = new EventEmitter();
	constructor(private zone: NgZone) { }

	// TinyMCE triggers an error if the DOM elements it created are
	// inexistent which is the case if this component if located in
	// a structural block (*ngIf/*ngFor).
	// We indicate the editor has already been removed from DOM
	// so that destroy doesn"t call "remove" and we remove the editor
	// from tinymce.
	ngOnDestroy() {
		this.editor.removed = true;
		this.editor.destroy();
		tinymce.remove(this.editor);
		this.editor = null;
	}

	ngAfterViewInit() {

		tinymce.init({
			selector: "#" + this.id,
			skin: false,
			setup: (editor) => {
				for (let event of ["change", "keyup", "cut", "paste"]) {
					editor.on(event, () => {
						this.emitContentChange();
					});
				}
				editor.on("blur", () => {
					this.zone.run(() => {
						this.blur.emit(true); return true;
					});
				});
				editor.on("focus", () => {
					this.zone.run(() => {
						this.focus.emit(true);
					});

				});
				this.editor = editor;
			}
		});
	}

	private emitContentChange() {
		let event = {value: this.editor.getContent()};
		this.zone.run(() => {
			this.contentChange.emit(event);
		});
	}

	setContent(content: string) {
		this.initialValue = content;
		if (this.editor) {
			this.editor.setContent(content);
		}
	}
}
