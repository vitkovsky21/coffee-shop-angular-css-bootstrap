import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  toggleLoader: boolean = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.onLoad()
    }, 1500)
  }

  onLoad() {
    this.toggleLoader = true;
  }

}
