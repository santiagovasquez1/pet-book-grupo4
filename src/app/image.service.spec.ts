import { TestBed } from '@angular/core/testing';

import { ImageService, imagesDetails } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('debe crear el servicio', () => {
    expect(service).toBeTruthy();
  });

  // tslint:disable-next-line: quotemark
  describe("#getImages", () => {
    it('debe asignar 5 imágenes #allImages cuando se llame el método', () => {
      service.getImages();
      expect(service.allImages.length).toBe(5);
    });
  });


  describe('#getImage', () => {
    it('debe retornar la imagen 1 cuando se llame el metodo con id=1', () => {

      const resp = service.getImage(1);
      expect(resp.id).toBe(1);
      expect(resp.brand).toBe('perro');
      expect(resp.url).toBe('assets/images/perro1.jpg');
    });
  });

  describe('#getImage', () => {
    it('debe retornar indefenido cuando se llame el método con 20', () => {
      const resp = service.getImage(20);
      expect(resp).toBeUndefined();
    });

  });

});
