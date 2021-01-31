import { Component, OnInit } from '@angular/core';
import { Species } from 'src/app/model/species';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MutantService } from 'src/app/services/mutant.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-mutant',
  templateUrl: './edit-mutant.component.html',
  styleUrls: []
})
export class EditMutantComponent implements OnInit {

  speciess: Species = {
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
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: MutantService, private rutaActiva: ActivatedRoute) {}

  ngOnInit() {

    const speciesId = localStorage.getItem('editSpeciesId');

    if (!speciesId) {
      alert('Acción inválida');
      this.router.navigate(['list-mutant']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      cadena_adn_0: ['', Validators.required],
      cadena_adn_1: ['', Validators.required],
      cadena_adn_2: ['', Validators.required],
      cadena_adn_3: ['', Validators.required],
      cadena_adn_4: ['', Validators.required],
      cadena_adn_5: ['', Validators.required],
      species_condition: [],
      dna: [],
      cant_human: [],
      cant_mutant: [],
      mutant_percentage: []
    });

    this.service.getOne(+speciesId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  getOne(id: number) {
    this.service.getOne(id).subscribe((data) => {
      this.speciess = data;
    })
  }

  onSubmit(id: number) {
    var lej = 0;
    this.rutaActiva.params.subscribe((data) => {
      if (data['id'] != "new") {
        this.getOne(data['id']);
        return lej = data.id;
      }
    })
    this.service.update(lej, this.editForm.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['list-mutant']);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: `Especie modificada con éxito. Ahora eres un ...`,
          showConfirmButton: false,
          timer: 1500
        });
        
      },
        error => {
          alert(error);
        });
  }

  goBack(): void {
    this.router.navigate(['list-mutant']);
  }

}
