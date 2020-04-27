import { Component } from '@angular/core';

import { ControlWidget } from '../../widget';

@Component({
	selector: 'sf-select-widget',
	template: `<div class="widget form-group">
	<label [attr.for]="id" class="horizontal control-label">
		{{ schema.title }}
	</label>

	<span *ngIf="schema.description" class="formHelp">
		{{schema.description}}
	</span>

	<select *ngIf="schema.type!='array'" [formControl]="control" [attr.name]="name" [attr.id]="id" [disabled]="schema.readOnly" [disableControl]="schema.readOnly" class="form-control">
		<ng-container *ngIf="schema.oneOf; else use_enum">
			<option *ngFor="let option of schema.oneOf" [ngValue]="option.enum[0]" >{{option.description}}</option>
		</ng-container>
		<ng-template #use_enum>
			<option *ngFor="let option of schema.enum" [ngValue]="option" >{{option}}</option>
		</ng-template>
	</select>

	<select *ngIf="schema.type==='array'" multiple [formControl]="control" [attr.name]="name" [attr.id]="id" [disabled]="schema.readOnly" [disableControl]="schema.readOnly" class="form-control">
    <option *ngFor="let option of schema.items.oneOf" [ngValue]="option.enum[0]" [disabled]="option.readOnly">{{option.description}}</option>
	</select>

	<input *ngIf="schema.readOnly" [attr.name]="name" type="hidden" [formControl]="control">
</div>`
})
export class SelectWidget extends ControlWidget {}
