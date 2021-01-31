import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { Species } from 'src/app/model/species';
import { MutantService } from 'src/app/services/mutant.service';

import { ChartOptions, ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: []
})
export class StatsComponent implements OnInit {

  speciess: Species [] = [];

  speciesss: Species = {
    id: 0,
    name: '',
    cadena_adn_0: '',
    cadena_adn_1: '',
    cadena_adn_2: '',
    cadena_adn_3: '',
    cadena_adn_4: '',
    cadena_adn_5: '',
    species_condition: '',
    dna: [],
    cant_human: 0,
    cant_mutant: 0,
    mutant_percentage: 0
  }

  species: Species;

  constructor(private router: Router, private service: MutantService) { 
    
  }
  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.service.getAll().subscribe((data) => this.speciess = data);
  }

  public doughnutChartLabels: Label[] = ['Mutants', 'Humans'];
  public doughnutChartData: MultiDataSet = [[0,0]];
  public doughnutChartType: ChartType = 'doughnut';


  getOneMH(id: number) {
    this.service.getOne(id).subscribe((data) => {
      this.speciesss = data;
    })
    this.doughnutChartData = [[this.speciesss.cant_mutant, this.speciesss.cant_human]];
  }


  agregarSpecies(): void {
    this.router.navigate(['add-mutant']);
  }

  goBack(): void {
    this.router.navigate(['list-mutant']);
  }

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
}
