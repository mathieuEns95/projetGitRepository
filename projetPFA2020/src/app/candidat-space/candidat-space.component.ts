import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthLoginInfo} from '../auth/login-info';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-candidat-space',
  templateUrl: './candidat-space.component.html',
  styleUrls: ['./candidat-space.component.css']
})
export class CandidatSpaceComponent implements OnInit {
  private envoiFichierService: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  info: any;
  fichierAEnvoyer: File = null;

  constructor(private token: TokenStorageService , private userservice: UserService) {

  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }


  logout() {
    this.token.signOut();
   }


  envoiFichier(formData) {
     this.userservice.sendMailCSV(formData);
  }

  envoiFichierParLeService() {
    this.envoiFichierService.postFile(this.fichierAEnvoyer).subscribe(resultat => {
    }, erreur => {
      console.log('Erreur lors de l\'envoi du fichier : ', erreur);
    });
  }

}

