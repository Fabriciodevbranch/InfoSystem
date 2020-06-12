import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {VeiculosService} from './veiculos.service'
import {Veiculo} from './veiculos'


@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})


export class VeiculosComponent implements OnInit {

  displayedColumns: string[] = ['placa', 'chassi', 'renavam', 'marca', 'modelo','ano', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>();

  selectedVeiculo: Veiculo = new Veiculo();
  loading = false;


  constructor(public veiculosService: VeiculosService) { }

  ngOnInit() {
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    const data = await this.veiculosService.getVeiculos();
    console.log(data);
   
    this.dataSource.data = data;
    this.loading = false;
  }

  async updateVeiculo() {
    if(this.selectedVeiculo.id != undefined){
      await this.veiculosService.updateVeiculo(this.selectedVeiculo);
      await this.refresh();
    } else {
      await this.veiculosService.createVeiculo(this.selectedVeiculo);
      await this.refresh();
    }
    this.selectedVeiculo = new Veiculo();
    await this.refresh();
  }
  editVeiculo(veiculo: Veiculo)
  {
    this.selectedVeiculo = veiculo; 
  }
  clearVeiculo() {
    this.selectedVeiculo = new Veiculo();
  }

  async deleteVeiculo(veiculo:Veiculo){
    this.loading = true;
    if(confirm('Tem certeza que deseja deletar veículo ${veiculo.placa}? Essa operação não pode ser desfeita.')){
      this.veiculosService.deleteVeiculo(veiculo.id);
    }
    await this.refresh();
  }

}
