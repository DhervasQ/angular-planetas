

import { Component,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() public elementos!: any;
  @Input() public tesoro!: any;
  @Input() public seleccionada!: any;
  @Output() public emitMessage = new EventEmitter<any>();
  @Input() public accion!: any;
  public setMessage(message: any): void {
    this.emitMessage.emit({message});
  }
}
