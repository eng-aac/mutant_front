import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Species } from 'src/app/model/species';
import Swal from 'sweetalert2';
import { MutantService } from 'src/app/services/mutant.service';

@Component({
  selector: 'app-add-mutant',
  templateUrl: './add-mutant.component.html',
  styleUrls: []
})
export class AddMutantComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: MutantService, private rutaActiva: ActivatedRoute) {}

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      cadena_adn_0: ['', Validators.required],
      cadena_adn_1: ['', Validators.required],
      cadena_adn_2: ['', Validators.required],
      cadena_adn_3: ['', Validators.required],
      cadena_adn_4: ['', Validators.required],
      cadena_adn_5: ['', Validators.required],
      species_condition: [],
      cant_human: [],
      cant_mutant: [],
      mutant_percentage: [],
    });
  }

  onSubmit() {
    this.service.post(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-mutant']);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: `Especie, creada con éxito. Eres un ...`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }

  goBack(): void {
    this.router.navigate(['list-mutant']);
  }
}
