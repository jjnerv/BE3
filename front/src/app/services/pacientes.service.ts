import { Injectable }   from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Paciente } from '../interface/Paciente';

@Injectable()
export class PacienteService {
    private headers = new Headers({'Content-type': 'application/json'});
    private PacientesUrl = 'api/paciente'; // URL to web api

    constructor(private http: Http) { }

    getPacientes(): Promise<Paciente[]> {
        return this.http.get(this.PacientesUrl)
        .toPromise()
        .then(response => response.json().data as Paciente[])
        .catch(this.handleError);
    }

    getPaciente(id: number): Promise<Paciente> {
        const url = `${this.PacientesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    create(data: string): Promise<Paciente> {
        return this.http
            .post(this.PacientesUrl, JSON.stringify(data), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Paciente)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
