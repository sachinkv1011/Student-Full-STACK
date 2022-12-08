import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {
  constructor(private api:ApiService){}

  admno=""

  readValue=()=>{
    let data:any={
      "admno":this.admno
    }
    console.log(data)
    this.api.searchStudent(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("Not found")
          
        } else {
          this.stud=response;
          
        }
      }
    )
  }
  stud:any=[]

  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteStudent(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        if(generated.status=="success"){
        alert("Student deleted successfully")
        window.location.reload()
        }
        else{
          alert("something went wrong")

        }
      }
    )
  

}

}
