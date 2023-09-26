import { Component, OnInit } from '@angular/core';
import { VinoService } from "../../services/vino.service";

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(public vinoService: VinoService) {

  }

  ngOnInit(): void {
  }

}
