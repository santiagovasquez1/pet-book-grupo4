import { FilterimagesPipe } from './filterimages.pipe';
import { ImageService } from './image.service';

describe('FilterimagesPipe', () => {

  let filter: FilterimagesPipe;
  let service: ImageService;
  let animales: any[];

  beforeAll(() => {
    service = new ImageService();
    service.getImages();
    animales = service.allImages;
  });

  beforeEach(() => {
    filter = new FilterimagesPipe();
  });

  it('Debe crear el servicio del pipe y el servicio', () => {
    expect(filter).toBeTruthy();
    expect(service).toBeTruthy();
  });

  it('Debe retornar una colleccion igual a la de animales del servicio', () => {
    const resp = filter.transform(animales, 'all');
    expect(resp).toEqual(animales);
  });

  it('Debe retornar todos los animales del tipo #perro', () => {
    const resp = filter.transform(animales, "perro") as any[];
    expect(resp.length).toBe(3);
  });

  it('Debe retornar todos los animales del tipo #gato', () => {
    const resp = filter.transform(animales, "gato") as any[];
    expect(resp.length).toBe(2);
  });

  it('Debe retornar 0 animales al pasar un parametro que no existe', () => {
    const resp = filter.transform(animales, "conejo") as any[];
    expect(resp.length).toBe(0);
  });

});
