import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/model/species';
import { MutantService } from 'src/app/services/mutant.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-mutant',
  templateUrl: './list-mutant.component.html',
  styleUrls: []
})
export class ListMutantComponent implements OnInit {

  speciess: Species [] = [];

  constructor(private router: Router, private service: MutantService) { 
    
  }
  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.service.getAll().subscribe((data) => this.speciess = data);
  }

  deleteSpecies(speciess: Species): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al ${speciess.species_condition} : ${speciess.name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.delete(speciess.id).subscribe(data => {
          this.speciess = this.speciess.filter(c => c !== speciess);
        });
        Swal.fire('Eliminado!', 'Se ha eliminado a la especie.', 'success');
      }
    });  
  }

  editSpecies(id: number, species: Species): void {

    localStorage.removeItem('editSpeciesId');
    localStorage.setItem('editSpeciesId', species.id.toString());

    //navegar a una ruta declarada
    this.router.navigate(['edit-mutant/' + id]);

  }

  agregarSpecies(): void {
    this.router.navigate(['add-mutant']);
  }

  getStats(): void {
    this.router.navigate(['stats']);
  }

  goBack(): void {
    this.router.navigate(['mutant-index']);
  }

}
