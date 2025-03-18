import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-competence',
  imports: [CommonModule],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.scss'
})
export class CompetenceComponent {

  constructor(private dataService: DataService) { }
  competences: any[] = [];
  ngOnInit(): void {
    this.dataService.getCompetences().subscribe(data => {
      this.competences = data.competences;
    });
  }
}
