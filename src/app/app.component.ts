import {Component} from '@angular/core';
import {CatAPIService} from "./cat-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatAPI';
  cat_array_img: any = [];
  cat_array_info:any = [];
  index = null;
  constructor(private cat: CatAPIService) {
  // this.getCatInfo(0)
  }

  showMore(value: any)
  {
    this.index = value;
  }

  getCatImage() {
    this.cat.takeCatImages().subscribe(cats => {
      console.log(cats);
      this.cat_array_img = cats;
    })
  }

  getCatInfo(page: any) {
    this.cat.takeCatInfo(page).subscribe(cat_text => {
      console.log(cat_text);
      this.cat_array_info = cat_text;
    })
  }
}

