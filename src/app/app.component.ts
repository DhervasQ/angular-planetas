import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'planetas';
  public posicionTesoro = { x: 0, y: 0 };
  public puntos: number = 0;
  public intentos: number = 0;
  public seleccionada: number = 99999;
  public planetas = [0];
  public accion: string='Tapado';
  public primerSeleccionado:number=99999;
  public colocarTesoro(rows: any) {
    this.posicionTesoro.x = Math.floor(Math.random() * rows);
  }
  public setMessage(message: any): void {
    this.seleccionada = message.message.elemento.id;
      
    if(this.primerSeleccionado===99999){
      this.accion ='Ok';

    
  }else if(this.primerSeleccionado===this.seleccionada){
       this.accion ='Check'
  }
    // }else{
    //   this.accion ='Tapado'
    // }
    this.intentos++;
 
  }

  public cardArray = [
    {
        id: 1,
        name: 'earth',
        img:'../assets/img/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: '../assets/img/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: '../assets/img/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: '../assets/img/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: '../assets/img/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: '../assets/img/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: '../assets/img/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: '../assets/img/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: '../assets/img/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: '../assets/img/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: '../assets/img/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: '../assets/img/uranus.svg'
    }
]
  ngOnInit(): void {
    this.colocarTesoro(this.cardArray);
    
  }
}
