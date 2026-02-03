import { Component } from '@angular/core';
import { ALBUMS, Album } from '../gallery-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './album.html',
  styleUrl: './album.css',
})
export class AlbumComponent {
  album?: Album;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.album = ALBUMS.find(a => a.slug === slug);
    }
  }

}
