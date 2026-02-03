import { Component } from '@angular/core';
import { ALBUMS } from '../gallery-data';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
 albums = ALBUMS;
}
