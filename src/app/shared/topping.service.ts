import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {
  dbUrl=environment.apiUrl
  constructor(private http: HttpClient) { }

  postUser(data:any){
    return this.http.post<any>(this.dbUrl+"topping", data)
  }

  getUser(){
    return this.http.get<any>(this.dbUrl+"topping")

}
}
