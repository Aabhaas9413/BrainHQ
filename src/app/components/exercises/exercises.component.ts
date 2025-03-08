import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.scss'
})
export class ExercisesComponent {
  exercises = [
    { name: 'Eye for Detail', description: 'Improve visual focus.', img: 'assets/img/try_efd.png', link: 'https://secure.brainhq.com/l/try-eye-for-detail' },
    { name: 'Hawkeye', description: 'Enhance spatial memory.', img: 'assets/img/try_he.png', link: 'https://secure.brainhq.com/l/try-hawk-eye' },
    { name: 'Visual Sweeps', description: 'Train peripheral vision.', img: 'assets/img/try_vs.png', link: 'https://secure.brainhq.com/l/try-visual-sweeps' },
    { name: 'Target Tracker', description: 'Boost attention skills.', img: 'assets/img/try_tt.png', link: 'https://secure.brainhq.com/l/try-target-tracker' },
  ];
}
