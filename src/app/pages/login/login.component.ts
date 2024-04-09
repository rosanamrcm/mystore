import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public errorMessage: string = '';
  public user: User = {name: '', surname: '', email:'', password: '', id: null}
  public users: User[] = [];

  public passwordType: string = "password";
  public passwordShown: boolean = false;
  public pathIcon: string = 'assets/icons/closed-eye.png';
  

  constructor (
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  public signUp(data:object):void {
    console.warn(data)
    this.userService.userSignUp(data).subscribe((result) => {
      alert('Cadastro realizado com sucesso') 
    });
  }

  
  public login(): void {
    this.userService.getUser().subscribe((users) => {
      console.log("objeto: ", this.user)
      this.users = users;

      let userFromJsonServer = this.users.find((el) => el.email == this.user.email && el.password == this.user.password)
      
      if (
        !!userFromJsonServer
      ) {
        console.log("Entrou no if")
        localStorage.setItem('user', JSON.stringify(userFromJsonServer));
        this.router.navigate(['/profile']);
      } else {
        console.log("Entrou no else")
        this.errorMessage = 'Email or password invalid!';
        }
    })
  }

  public togglePassword(): void {
    this.passwordShown = !this.passwordShown;
      if(this.passwordShown) {
        this.passwordType = 'text';
        this.pathIcon = '../assets/icons/eye.png';
      } else {
        this.passwordType = 'password';
        this.pathIcon = '../assets/icons/closed-eye.png';
      }
  }

  public send(): void {
    alert('Digite seu e-mail cadastrado');
    prompt('');
    alert('Enviamos um link para o seu e-mail');
  }
  
} 


