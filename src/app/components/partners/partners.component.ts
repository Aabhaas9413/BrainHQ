import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partners: { name: string; img: string }[] = [
    { name: 'Library Network', img: '/assets/partners/library.png' },
    { name: 'Health Insurance Co.', img: '/assets/partners/insurance.png' },
    { name: 'Sports Organization', img: '/assets/partners/sports.png' },
    { name: 'Educational Institution', img: '/assets/partners/education.png' },
    { name: 'Military Program', img: '/assets/partners/military.png' }
  ];
}
