import { CategoriasPipe } from './categorias.pipe';
import { Vino } from "../models/vino";
import { VinoService } from "../services/vino.service";
import { Filter, FilterService } from "../services/filter.service";
import { HttpClient } from "@angular/common/http";

describe('CategoriasPipe', () => {
  it('create an instance', () => {
    
    const filterService = new FilterService();
    const pipe = new CategoriasPipe();

    expect(pipe).toBeTruthy();
  });
});
