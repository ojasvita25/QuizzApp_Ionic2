import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { ProfilePage } from '../profile-page/profile-page';
import { LoginPage } from '../login/login';
import { Data } from '../../providers/data';
import { FormBuilder, Validators } from '@angular/forms';
export function getRootNav(nav: NavController) : NavController {
    let root = nav;
    while(root.parent != null){
        root = root.parent;
    }
    return root;
}
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
books:any[]; 
show_ans:any;
Result : any;
ScoreValue :any;
public Form;

  constructor(public nav: NavController,public authData: AuthService,public data: Data,private formBuilder: FormBuilder) {
this.Form = this.formBuilder.group({
      "options":["",Validators.required]

});

this.books = [
{
question: "Question 1?",
option : [
{
answer:true,
isSelected: false,
subOption:"1.1 option A",
},
{
answer:true,
isSelected: false,
subOption:"1.2 option B",
},
{
answer:false,
isSelected: false,
subOption:"1.3 option C",
},
{
answer:true,
isSelected: false,
subOption:"1.4 option D",
}
]
},
{
question : "Question 2?",
option : [{
answer:true,
isSelected: false,
subOption:"2.1 option A",
},
{
answer:false,
isSelected: false,
subOption:"2.2 option B",
},
{
answer:false,
isSelected: false,
subOption:"2.3 option C",
},
{
answer:false,
isSelected: false,
subOption:"2.4 option D",
}]
},
{
question : "Question 3?",
option : [{
answer:true,
isSelected: false,
subOption:"3.1 option A",
},
{
answer:false,
isSelected: false,
subOption:"3.2 option B",
},
{
answer:false,
isSelected: false,
subOption:"3.3 option C",
},
{
answer:false,
isSelected: false,
subOption:"3.4 option D",
}]
}


];
  }

 logOut(){
  this.authData.logoutUser().then(() => {
    let rootNav = getRootNav(this.nav);
rootNav.setRoot(LoginPage);
  });
}

ForCheckboxChange(g: any,e){
g.isSelected = e.target.checked;
  }

submit(){
  this.show_ans=true;
var score_num=0;
var i,j=0;
this.Result=null;
outerloop:
for(j=0;j<this.books.length;j++){
   for(i=0;i<this.books[j].option.length;i++){
        if(( this.books[j].option[i].answer==true && this.books[j].option[i].isSelected==true) ||(this.books[j].option[i].answer==false && this.books[j].option[i].isSelected==false)){
            continue outerloop;
        }
    
    this.Result="Incorrect";

}}
if( this.Result!="Incorrect" || this.Result==null)
this.Result="Correct";


/*CHECK!!*/
if(this.Result=="Correct"){
  score_num=score_num+1;
}
this.ScoreValue=score_num; 

}
reset(){
  this.Form.reset();
   this.show_ans=false;
   for(var j=0;j<this.books.length;j++){
   for(var i=0;i<this.books[j].option.length;i++){
  this.books[j].option[i].isSelected = false;
  }}
}

}
