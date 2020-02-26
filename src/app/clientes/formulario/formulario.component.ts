import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCLiente: FormGroup;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());


  constructor() { }

  ngOnInit(): void {
    this.createForm(new Cliente);
  }

  createForm(cliente: Cliente){
    this.formCLiente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNacimento),
      observacoes: new FormControl(cliente.observacoes),
      inativo: new FormControl(cliente.inativo),
    })
  }

  onSubmit(){
    console.log(this.formCLiente.value);

    this.formCLiente.reset(new Cliente);
  }

}
