import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mutant-index',
  templateUrl: './mutant-index.component.html',
  styleUrls: []
})
export class MutantIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listMutant(): void {
    this.router.navigate(['list-mutant']);
  }

}
