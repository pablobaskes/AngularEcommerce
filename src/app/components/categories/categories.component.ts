import { Component, OnInit } from '@angular/core';
import { Filter, FilterService } from "../../services/filter.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  price : string
  color : string
  region : string
  type : string
  constructor(private filterService: FilterService) { 
    this.price = ''
    this.color = ''
    this.region = ''
    this.type = ''
  }

  ngOnInit(): void {
  }
  onOptionChange() {
    const filter = {
      price: this.price,
      color: this.color,
      type: this.type,
      region: this.region
    };
    
    this.filterService.updateFilter(filter);
  }
}
