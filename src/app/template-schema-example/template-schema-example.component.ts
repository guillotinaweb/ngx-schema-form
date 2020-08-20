import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-schema-example',
  templateUrl: './template-schema-example.component.html',
  styleUrls: ['./template-schema-example.component.css']
})
export class TemplateSchemaExampleComponent implements OnInit {

  model: any = {};
  /**
   * Using a separate variable for showing the model prevents from: 
   * `Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value:` 
   */
  value;

  constructor() { }

  onClick(message: string) {
    alert(message);
  }

  ngOnInit() {
  }

  setValue(value) {
    if (undefined === this.value) {
      /**
       * If the first time the variable is set, then setting timeout will prevents error: 
       * `Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value:` 
       */
      setTimeout(() => {
        this.value = value;
      }, 0);
      return
    }
    this.value = value;
  }

}
