import { FilterimagesPipe } from './../filterimages.pipe';
import { ImageService } from './../image.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './image-gallery.component';


describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let service: ImageService;
  let testBedService: ImageService;

  beforeEach(() => {

    service = new ImageService();
    service.getImages();

    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [
        {
          provide: ImageService,
          useValue: service
        }
      ]
    });

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;

    testBedService = TestBed.inject(ImageService);

    fixture.detectChanges();
  });

  it('Debe crear el componente de galeria de imagenes con exito', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar todos los animales del servicio al invocar ngOnChanges', () => {
    component.ngOnChanges();
    expect(component.allImages.length).toBe(5);
  });
});
