import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailComponent implements OnInit {

  public image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = Number.parseInt(this.route.snapshot.params['id']);
    this.image = this.imageService.getImage(id);
  }
}
