import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images$: Object;

  constructor(private data: DataService) { 

  }

  ngOnInit() {
    this.data.getPhotos().subscribe(
      data => this.images$ = data
    )
  }

}
