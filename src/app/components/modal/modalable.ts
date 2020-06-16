import { ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from './modal.component';

export class Modalable {
   
    @ViewChild(ModalComponent, { static: false })
    modalComponent: ModalComponent;
    
    hide() {
        this.modalComponent.hide();
    }

    show() {
        this.modalComponent.show();
    }
}