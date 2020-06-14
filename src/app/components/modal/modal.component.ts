import { Component, OnInit, ElementRef } from '@angular/core';

declare const $;

@Component({
  selector: 'modal',
  template: `
  <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <ng-content></ng-content>
          </div>
      </div>
  </div>
  `,
  styles: []
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  hide(){
    $(this.divModal).modal('hide');
  }

  show() {
    $(this.divModal).modal('show');
  }

  private get divModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

}
