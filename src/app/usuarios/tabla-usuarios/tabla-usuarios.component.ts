import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  Users:any;
  Domicilio:any;

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.http.get("http://127.0.0.1:8000/index").subscribe(
      resultado =>{
        this.Users = resultado;
      },
    )
  }
}