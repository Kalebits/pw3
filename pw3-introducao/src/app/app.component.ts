import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-introducao';
  logo ="favicon.ico";

  public nome = 'Ana';
  public sobrenome = 'Baptista';
  public idade = '06'

  nomeCompleto(){
    return this.nome + " " + this.sobrenome;
  }


}
