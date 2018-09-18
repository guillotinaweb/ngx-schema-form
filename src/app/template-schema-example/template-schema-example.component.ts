import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-schema-example',
  templateUrl: './template-schema-example.component.html',
  styleUrls: ['./template-schema-example.component.css']
})
export class TemplateSchemaExampleComponent implements OnInit {

  model: any = {};

  constructor() { }

  onClick(message: string) {
    alert(message);
  }

  ngOnInit() {
  }

}
