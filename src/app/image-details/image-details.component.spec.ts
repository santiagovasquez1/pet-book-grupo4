import { ImageService } from './../image.service';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { provideRoutes, ActivatedRoute } from '@angular/router';
import { ImageDetailComponent } from './image-details.component';


describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;

  let testBedService: ImageService;
  let testRoute: ActivatedRoute;

  const activatedRouteMock = {
    snapshot: {
      params: {
        id: 1
      }
    }
  };

  let service: ImageService;

  beforeEach(() => {

    service = new ImageService();
    service.getImages();

    TestBed.configureTestingModule({
      declarations: [ImageDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteMock
        },
        {
          provide: ImageService,
          useValue: service
        }
      ]
    });

    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;

    testBedService = TestBed.inject(ImageService);
    testRoute = TestBed.inject(ActivatedRoute);

    fixture.detectChanges();
  });

  it('Debe crear el componente de #imageDetails con exito', () => {
    expect(component).toBeTruthy();
  });

  it('Debe comprobar que si se este inyectando el servicio', () => {
    inject([ImageService], (injectService: ImageService) => {
      expect(injectService).toBe(testBedService);
    });
  });

  it('Debe comprobarse que al inicializar el componente no devuelva un valor nulo en imagen', () => {
    component.ngOnInit();
    expect(component.image).not.toBeNull();
  });

});
