import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
})

export class Home {

  aboutText = `
  Keshav Smruti Pratishthan's unique education, inspired by the ancient 'Gurukul' system,
  focuses on building determined, physically fit citizens with strong character, beyond just
  academic memory. This scientific blend of education and culture led to the establishment of
  Vivekanand Pratishthan in 1987.
  `;

  inspirationText = `
  Dr. Avinash Ramchandra Aacharya embodied the very essence of human determination and innovation.
  His leadership, courage, and dedication continue to inspire generations.
  `;

  values = [
    { title: 'Man-Making Education', text: 'Education is an effective medium of man-making and character building.' },
    { title: 'Continuous Learning', text: 'Adapting modern teaching methods and lifelong learning.' },
    { title: 'Responsibility and Accountability', text: 'Fulfilling personal, social and national duties.' },
    { title: 'Qualitative Education', text: 'Achieving excellence through continuous study.' },
    { title: 'Nationalism and Patriotism', text: 'Serving the motherland with mind, body, and life.' },
    { title: 'Social Sensitivity', text: 'Providing education for all sections of society.' },
    { title: 'Striving for Excellence', text: 'Insisting on quality in all activities.' },
    { title: 'Team Work', text: 'Respecting others and working together for society.' }
  ];

  objectives = [
    {
      title: 'Creating a Nurturing Environment',
      text: 'A safe and supportive space where children can dream and grow.'
    },
    {
      title: 'Comprehensive Educational Programs',
      text: 'Academic, moral, social, and physical development.'
    },
    {
      title: 'Instilling Values',
      text: 'Empathy, compassion, and responsibility.'
    },
    {
      title: 'Cultural Appreciation',
      text: 'Respect for history, traditions, and diversity.'
    },
    {
      title: 'Enriched Curriculum',
      text: 'Local and global perspectives preparing students for the future.'
    }
  ];
}
