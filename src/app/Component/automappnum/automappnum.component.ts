import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServService } from '../../serv.service';

@Component({
  selector: 'app-automappnum',
  templateUrl: './automappnum.component.html',
  styleUrls: ['./automappnum.component.css']
})
export class AutomappnumComponent implements OnInit {
  options = [];
  filteredOptions;
  formGroup : FormGroup;
  constructor(private service : ServService, private fb : FormBuilder){}

  ngOnInit(): void {  
    this.initForm();
    
    this.getNums();
  }
  initForm(){
    this.formGroup = this.fb.group({
      'Num' : [''],
      
    })
    this.formGroup.get('Num').valueChanges.subscribe(response => {
      console.log('data is ', response);
      this.filterData(response);
    });
    
  }

  filterData(enteredData){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }
  getNums(){
    this.service.getNumData().subscribe(response => {
      this.options = response;
      this.filteredOptions = response;
    })

  }
  
}
