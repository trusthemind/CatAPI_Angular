import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatAPIService {

  constructor(private http: HttpClient) {

  }
  takeCatInfo(page: any)
  {
    return this.http.get(`https://api.thecatapi.com/v1/breeds?limit=12&page=${page}`)
  }
  takeCatImages()
  {
    return this.http.get("https://api.thecatapi.com/v1/images/search?limit=12&api_key=live_89O6tEXoHn4dbVXiSzEG3AUp6rN7tsINP2WhDZw63ZI3KyT8qnU9sd0VPtVPWokx")
  }
}
