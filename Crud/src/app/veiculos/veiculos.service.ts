import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Veiculo} from './veiculos';
import { stringify } from 'querystring';

const baseUrl = 'http://localhost:4201';
@Injectable({
  providedIn: 'root'
})

export class VeiculosService {

  constructor(private http: HttpClient) { }
  
  private async request(method: string, url: string, data?: any){
    console.log('request' + JSON,stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',

     
    });
    console.log(result);
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }
  
  getVeiculos() {
    
    return this.request('get', `${baseUrl}/veiculos`);
    
  }

  getVeiculo(id: string) {
    return this.request('get', `${baseUrl}/veiculos/${id}`);
  }

  createVeiculo(Veiculo: Veiculo) {
    console.log('createVeiculo ' + JSON.stringify(Veiculo));
    return this.request('post', `${baseUrl}/veiculos`, Veiculo);
  }

  updateVeiculo(Veiculo: Veiculo) {
    console.log('updateVeiculo ' + JSON.stringify(Veiculo));
    return this.request('post', `${baseUrl}/veiculos/${Veiculo.id}`, Veiculo);
  }

  deleteVeiculo(id: string) {
    return this.request('delete', `${baseUrl}/veiculos/${id}`);
  }
}
