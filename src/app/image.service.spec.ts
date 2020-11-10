import { TestBed } from '@angular/core/testing';

import { ImageService, imagesDetails } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

<<<<<<< HEAD
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

=======
  it('debe crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  describe('getImages', () => {
    it('debe retornar todas las imagenes', () => {
      let imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('debe retornar la imagen con id si existe', () => {
      let imagene = service.getImage(1);
      expect(imagene.brand).toEqual('perro');
    });

    it('debe retornar indefinido si se busca una imagen con id que NO existe', () => {
      let imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });
  });
>>>>>>> cdbc6f94f7499c80e1c305e3d67ba486e28dd821
});
