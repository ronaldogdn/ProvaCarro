import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from "@angular/material/snack-bar";
import { CarroService } from 'src/app/services/carro.service';
import { Carro } from '../../models/Carro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  colunasCarro = ["modelo", "placa","ano"];


  nomeModelo!: string;
  placa!: string;
  ano!: number;
  carros = new MatTableDataSource<Carro>();

  constructor(private service: CarroService,private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  cadastrar(): void {

    let carro = new Carro();
    carro.modelo = this.nomeModelo;
    carro.placa = this.placa;
    carro.ano = this.ano;

    this.service.cadastrar(carro).subscribe(ciclo => {
      this.snack.open("Carro cadastrado", "Carro", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      }) ;
      this.router.navigate([""]);
    });
  }
}
