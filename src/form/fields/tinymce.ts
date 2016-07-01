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
	@Input() readonly: boolean = false;
	@Input() id: string;
	@Output() contentChange = new EventEmitter();
	@Output() blur = new EventEmitter();
	@Output() focus = new EventEmitter();
	constructor(private zone: NgZone) { }

	ngAfterViewInit() {
		this.createEditor();
	}

	ngOnChanges(changes) {
		if (this.editor && changes["readonly"]) {
			this.removeEditor();
			this.createEditor();
		}
	}

	// TinyMCE triggers an error if the DOM elements it created are
	// inexistent which is the case if this component if located in
	// a structural block (*ngIf/*ngFor).
	// We indicate the editor has already been removed from DOM
	// so that destroy doesn"t call "remove" and we remove the editor
	// from tinymce.
	ngOnDestroy() {
		this.editor.removed = true;
		this.removeEditor();
	}

	private createEditor() {
		tinymce.baseURL = "/node_modules/tinymce";
		let options: any = {
			selector: "#" + this.id,
			skin: false,
			plugins: "code",
			readonly: this.readonly ? 1 : 0,
			setup: (editor) => { this.editor = editor; }
		};

		if (this.readonly) {
			options.toolbar = options.menubar = false;
		}

		tinymce.init(options);

		this.editor.on("change keyup cut paste undo redo", () => {
			this.emitContentChange();
		});

		this.editor.on("blur", () => {
			this.zone.run(() => { this.blur.emit(true); return true; });
		});

		this.editor.on("focus", () => {
			this.zone.run(() => { this.focus.emit(true); });
		});
	}

	removeEditor() {
		this.editor.destroy();
		tinymce.remove(this.editor);
		this.editor = null;
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
