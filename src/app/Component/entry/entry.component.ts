import { Component, Input,OnInit } from '@angular/core';
import { FormBuilder, Validators  , FormGroup } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { EntryServService } from '../../Service/entry-serv.service';
import { Entry } from '../entry';



@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
@Input() totalCreditor: number;
@Input() totalsDebit: number;
   sub:number;
  dataSaved = false;  
  entryForm: any;  
    
  massage = null;
  FileName:string;
  FilePath:string;
 // public addmore: FormGroup;
 selected = 'EntryDay';

  constructor(private formbulider: FormBuilder, private EntryServ:EntryServService) { }



  ngOnInit(): void {  
    
    this.entryForm = this.formbulider.group({  
      NumSystem: ['', [Validators.required]],  
      NameShort: ['', [Validators.required]],  
      NumDocument: ['', [Validators.required]],  
      Date: ['', [Validators.required]],  
      description: ['', [Validators.required]],  
      Type : ['', [Validators.required]], 
      Uploadfile: ['', [Validators.required]],  
    });  
   
  }

  onFormSubmit() { 
    console.log (this.entryForm.value);
    
    this.dataSaved = false;  
    this.sub=this.totalCreditor-this.totalsDebit;
    const entry= this.entryForm.value;  
   if(this.sub==0)
   {   
        this.CreateEntry(entry );  
   }
   else{
     alert("ssasd");
   }
    //this.entryForm.reset();  
  } 

  CreateEntry(entry:Entry){ 
     
    this.EntryServ.createEntry(entry).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.entryForm.reset();  
        }  
      );  
      
  }   
 
  
  resetForm() {  
    this.entryForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  
  uploadFile(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.EntryServ.UploadFile(formData).subscribe((data:any)=>{
      this.FileName=data.toString();
      this.FilePath=this.EntryServ.FileUrl+this.FileName;
    })
  }

}
