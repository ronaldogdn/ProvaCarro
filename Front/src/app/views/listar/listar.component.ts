import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

import { CarroService } from 'src/app/services/carro.service';
import { Carro } from "../../models/Carro";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  carros!: MatTableDataSource<Carro>;
  ColunasTabelas: string[] = ['id', 'modelo', 'placa','criadoEm'];
  //ColunasTabelas: string[] = ['id', 'modelo', 'placa','criadoEm','apagar'];
  
  constructor(private service: CarroService,private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe((carro) => {
      this.carros = new MatTableDataSource<Carro>(carro);
    });
  }
  apagarCarro(id: string):void{
    this.service.apagarCarro(id).subscribe((carro) =>{
      this.carros = new MatTableDataSource<Carro>(carro);
    });
  }

}
