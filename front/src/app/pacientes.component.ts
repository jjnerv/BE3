import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Paciente }         from './interface/Paciente';
import { PacienteService }   from './services/pacientes.service';

@Component({
    selector: 'my-pacientes',
    template: `
        <h2>Pacientes</h2>
        <p>Hello World</p>    
    `,
    styles: [`
        h2{
            background-color: blue;
            color: white;
        };
        p {
        margin: 20px;
        padding: 5px;
        };
    `]
})

export class PacientesComponent implements OnInit {
    pacientes: Paciente[];
    selectedPaciente: Paciente;
    
    constructor(
       private pacienteService: PacienteService,
        private router: Router
    ) { }  

    ngOnInit(): void {
        this.getPacientes();
    }

    getPacientes(): void { 
        this.pacienteService
            .getPacientes()
            .then(paciente => this.pacientes = paciente);
    }

    onSelectPaciente(paciente: Paciente): void {
        this.selectedPaciente = paciente;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPaciente.id]);
    }


 
}

