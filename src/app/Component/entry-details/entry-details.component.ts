import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServService } from 'src/app/serv.service';


@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit { options = ["Sam", "Varun", "Jasmine"];
filteredOptions;
formGroup : FormGroup;
constructor( private service:ServService, private fb : FormBuilder ){}
//hggprivate service : ServService, private fb : FormBuilder
public addmore: FormGroup;
formGroupnum : FormGroup;
totalCreditor: number = 0;
totalsDebit: number = 0;
sub: number ;
subscription: Subscription;
subscriptions: Subscription;
txtValue=null;
message =null ;


ngOnInit(){
  this.initForm();
   this.getNames();

  this.addmore = this.fb.group({
  
    itemRows: this.fb.array([this.initItemRows()])
  });
  this.subscription = this.formArr.valueChanges.subscribe(data => {
    this.totalCreditor = data.reduce( (a,b) => a + +b.Creditor , 0);
   

  });
  this.subscriptions = this.formArr.valueChanges.subscribe(data => {
    this.totalsDebit = data.reduce((c,d) => c + +d.Debit , 0)
  });
 
  
  
}

  
ngOnDestroy() {
  this.subscription.unsubscribe();
}
get formArr() {
  return this.addmore.get('itemRows') as FormArray;
}

initForm(){
  this.formGroup = this.fb.group({
    'Name' : [''],
    
  })
  this.formGroup.get('Name').valueChanges.subscribe(response => {
    console.log('data is ', response);
    this.filterData(response);
  });

}

filterData(enteredData){
  this.filteredOptions = this.options.filter(item => {
    return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
  })
}

getNames(){
  this.service.getData().subscribe(response => {
    this.options = response;
    this.filteredOptions = response;
  })
  
}






initItemRows() {
  return this.fb.group({
  // timeRange:[''],
  Debit:[''],
  Creditor:[''],  
  descripition:[''],
  Seller:[''],
  });
}
addNewRow() {
  this.formArr.push(this.initItemRows());
}

deleteRow(index: number) {
  if(confirm("Are you sure to delete Row")) {
    console.log("Implement delete functionality here");
  this.formArr.removeAt(index);
}}
onTextChange(value) {
  this.txtValue = value;

  if (this.txtValue != 0) {
    this.message = false;
  }
}
onTextChange2(message) {
  this.message = message;

  if (this.message != 0) {
    this.txtValue =false;
  }
}


}
