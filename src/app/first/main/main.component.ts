import { Component, OnInit,  Inject } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router' 
import { Auth } from '../../domain/auth'
@Component({
  selector: 'login',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(@Inject('auth')private service,private router:Router) {
   
   }
    
  ngOnInit() {
  }
  username= "";
  password= "";
  auth:Auth;
  onSubmit(formvalue){
    console.log("gggggg");
    console.dir(formvalue);
    this.service.loginWithCredentials(formvalue.login.username,formvalue.login.password)
    .then(auth => {
      let redirectUrl = (auth.redirectUrl === null)? '/homepage': auth.redirectUrl;
    
      if(!auth.hasError){
        this.router.navigate([redirectUrl]);
        localStorage.removeItem('redirectUrl');
        location.reload();
      } else {
        this.auth = Object.assign({}, auth);
      }
    });
  }
}
