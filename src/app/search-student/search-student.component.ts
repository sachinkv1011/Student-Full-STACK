import { Component } from '@angular/core';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

  admno=""

  readValue=()=>{
    let data:any={
      "admno":this.admno
    }
    console.log(data)
  }
  stud:any=[]
}
