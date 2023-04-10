import { Component,Input ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() public elemento!: any;
  @Input() public tesoro!: any;
  @Input() public seleccionada!: number;
  @Input() public accion!: any;
  @Output() public emitMessage = new EventEmitter<any>();
  clickSelect(elemento: any) {
      this.emitMessage.emit({elemento});
  }

}
