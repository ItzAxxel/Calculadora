import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Calculadora';
  n1!: number;
  n2!: number;
  result!: number;
  
  constructor() {
    this.n1 = 0;
    this.n2 = 0;
  }

  ngOnInit(): void {
    console.log(this.n1);
  }

  sumar() {
    this.result = this.n1 + this.n2;
  }
  restar() {
    this.result = this.n1 - this.n2;
  }
  multiplicar() {
    this.result = this.n1 * this.n2;
  }
  dividir() {
    this.result = this.n1 / this.n2;
  }

  borrar() {
    this.n1 = 0;
    this.n2 = 0;
  }
}
