import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';

  nombre = 'Pablo Marchionno';
  textoPlaceholder = 'PlaceHolder Controlador';
  disabledInput = true;
  img1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tfatf-logo.svg/450px-Tfatf-logo.svg.png";
  img2 = "assets/img/rapido.jpg"; //"https://th.bing.com/th/id/R.9d4a8f7705c8b7d78e7a8806954d733f?rik=RXC5GpQUTXmY5A&pid=ImgRaw&r=0"
  textoEventBinding = "Binding";
  textoTwoDataBinding = '';

  constructor() {
    setInterval(() => {
      this.nombre = 'José';
      this.disabledInput = false;
      this.img1 = "assets/img/rapido.jpg";
    },
      3000
    )
  }

  getSuma(num1: number, num2: number) {
    return num1 + num2 ;
  }

  cambiarTexto(){
    this.textoEventBinding = "Texto Modificado desde el Controlador"
  }
}
