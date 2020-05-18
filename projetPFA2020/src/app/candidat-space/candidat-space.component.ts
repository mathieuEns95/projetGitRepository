import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {AuthLoginInfo} from '../auth/login-info';
import {UserService} from '../services/user.service';
import {AuthService} from '../auth/auth.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-candidat-space',
  templateUrl: './candidat-space.component.html',
  styleUrls: ['./candidat-space.component.css']
})
export class CandidatSpaceComponent implements OnInit {
  constructor(private token: TokenStorageService , private userservice: UserService,
              private authService: AuthService,
              private fb: FormBuilder,
              private toastr: ToastrService
              ) {
  }
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
  private readonly IsSaved = 'Yes';
  title = 'File-Upload-Save';
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  selectedFile = null;
  changeImage = false;
  object = {};
  private fileName;
  @Input() init = 10;
  public counter = 0;

  text = 'Envoyer';
   classe = 'form-group1 btn btn-primary mr-4 ml-1';
  public formGroup = this.fb.group({
    file: [null, ]
  });
  firstname: any;
  show = true;
  meHide: boolean;

  startCoundDown() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountown();
    }
  }
  private doCountown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.procesCountDown();
    }, 1000);
  }

  private procesCountDown() {
    this.counter = this.counter;
    if (this.counter == 0) {
      this.toastr.success('thank you', 'candidature create successfully');
      this.candidateSatut = Status.CV;
    } else {
      this.candidateSatut = this.Status.NEW;
      this.doCountown();
    }
  }
  ngOnInit() {
    if ( localStorage.getItem(this.IsSaved) == 'yes') {
      this.text = 'Modifier';
      this.classe = 'form-group1 btn btn-warning mr-4 ml-1';
      this.candidateSatut = Status.CV;
    }
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    this.authService.fetchUser().subscribe(userDetails => {
      this.object = userDetails;
      this.token.saveUser(userDetails);
    });

  }


  logout() {
    this.token.signOut();
    localStorage.removeItem(this.IsSaved);
   }
  public onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      this.fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.formGroup.patchValue({
          file: reader.result
        });
      };
    } else { ( File == null ); }
  }

  envoiFichier() {
      const filetest = this.formGroup.get('file').value;
      console.warn(filetest);
      if ( filetest != null) {
      this.userservice.sendMailCSV(event);
      this.userservice.pushFileToStorage(this.file);
      this.text = 'Modifier';
      this.classe = 'form-group1 btn btn-warning mr-4 ml-1';
      localStorage.setItem(this.IsSaved, 'yes');
      this.startCoundDown();
    }

  }

  envoiFichierParLeService() {
    this.envoiFichierService.postFile(this.fichierAEnvoyer).subscribe(resultat => {

    }, erreur => {
      console.log('Erreur lors de l\'envoi du fichier : ', erreur);
    });
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  startTest() {
    this.show = false;
    this.meHide = true;
  }
}
enum Status {
  NEW = 'New Candidat',
  CV = 'CV Sent',
  CLASS = 'CV Classification'
}
