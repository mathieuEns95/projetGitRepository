import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthLoginInfo} from '../auth/login-info';
import {UserService} from '../services/user.service';
import {AuthService} from '../auth/auth.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-candidat-space',
  templateUrl: './candidat-space.component.html',
  styleUrls: ['./candidat-space.component.css']
})
export class CandidatSpaceComponent implements OnInit {
  private envoiFichierService: any;
  private Status = Status;
  form: any = {};
  file: File;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  info: any;
  fichierAEnvoyer: File = null;
  candidateSatut = Status.NEW;

  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;

  constructor(private token: TokenStorageService , private userservice: UserService,
              private authService: AuthService) {
  }

  firstname: any;
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.authService.fetchUser().subscribe(userDetails => {
      this.token.saveUser(userDetails);
    });
    console.log(this.token.getUser());
  }


  logout() {
    this.token.signOut();
   }


  envoiFichier(formData) {
     this.userservice.sendMailCSV(formData);
     this.userservice.pushFileToStorage(this.file);
  }

  envoiFichierParLeService() {
    this.envoiFichierService.postFile(this.fichierAEnvoyer).subscribe(resultat => {
    }, erreur => {
      console.log('Erreur lors de l\'envoi du fichier : ', erreur);
    });
  }
 /** upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.userservice.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          alert('File Successfully Uploaded');
        }
        this.selectedFiles = undefined;
      }
    );
  }**/
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }



}
enum Status {
  NEW = 'New Candidat',
  CV = 'Send CV'
}
