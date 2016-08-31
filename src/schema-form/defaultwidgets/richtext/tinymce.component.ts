import {
	AfterViewInit,
	Component,
	EventEmitter,
	Input,
	NgZone,
	OnChanges,
	OnDestroy,
	Output
} from "@angular/core";

declare var tinymce;
import "tinymce/tinymce";
import "tinymce/themes/modern/theme";

@Component({
	selector: "tinymce",
	template: require("./tinymce.component.html"),
})
export class TinyMCEComponent implements OnChanges, AfterViewInit, OnDestroy {

	@Input() readonly: boolean = false;
	@Input() id: string;
	@Input() options: any = {plugins: "code"};
	@Input() baseURL: string = "/node_modules/tinymce";
	@Output() contentChange = new EventEmitter();
	@Output() blur = new EventEmitter();
	@Output() focus = new EventEmitter();

	private editor: any = null;
	private initialValue: string = "";

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
		tinymce.baseURL = this.baseURL;
		let options: any = {
			selector: "#" + this.id,
			plugins: this.options.plugins,
			readonly: this.readonly ? 1 : 0,
			setup: (editor) => { this.editor = editor; }
		};

		if (this.readonly) {
			options.toolbar = options.menubar = false;
		}

		tinymce.init(options);
		this.bindEditor();
	}

	private bindEditor() {
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
		// Hacks to avoid exceptions if the editor is destroyed
		// before it is thoroughly initialized 
		if (!this.editor.selection) {
			this.editor.selection = {destroy: () => {} };
			this.editor.selection.dom = { };
		}

		if (!this.editor.dom) {
			this.editor.dom = {destroy: () => {}};
		}

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
