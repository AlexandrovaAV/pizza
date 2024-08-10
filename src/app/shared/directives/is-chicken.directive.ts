import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>, // templateRef - будет содержать содержимое нашего <ng-template></ng-template>
    private viewContainer: ViewContainerRef // viewContainer - будет ссылаться на весь ng-template элемент
  ) { }

  // вариант с set
  /*@Input()
  set isChicken (description: string) {
    if (description.toLowerCase().includes('кур')) {
      this.viewContainer.createEmbeddedView(this.templateRef); // WTF??????
    } else {
      this.viewContainer.clear();
    }
  }*/

  // вариант без set
  @Input()
  isChicken: string = '';


  ngOnInit() {
    if (this.isChicken.toLowerCase().includes('кур')) {
      this.viewContainer.createEmbeddedView(this.templateRef); // WTF??????
    } else {
      this.viewContainer.clear();
    }
  }

}
