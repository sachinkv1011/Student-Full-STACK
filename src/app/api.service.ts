import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchStudent=()=>{
    return this.http.get("http://localhost:8080/viewall")
  }
  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/add",data)
  }
  searchStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }
  deleteStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/delete",data)
  }
}
