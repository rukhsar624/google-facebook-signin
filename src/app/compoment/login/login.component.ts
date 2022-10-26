 import { SocialUser } from '@abacritt/angularx-social-login';
 import { Component, OnInit } from '@angular/core';
 import { SocialAuthService,GoogleLoginProvider } from "@abacritt/angularx-social-login";
 @Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
 })
 export class LoginComponent implements OnInit {
     user!:SocialUser;
   constructor(private authService:SocialAuthService) { }

   ngOnInit(): void
    {
     this.authService.authState.subscribe((user)=>{
          this.user =user;
     })
   }

   singWithGoogle():void{
   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data=>{
    console.log(data);

   })
   console.log("hello");

 }
 signOut():any{
   this.authService.signOut();
 }
 }

