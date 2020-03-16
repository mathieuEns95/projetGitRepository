import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidat-space',
  templateUrl: './candidat-space.component.html',
  styleUrls: ['./candidat-space.component.css']
})
export class CandidatSpaceComponent implements OnInit {
  private envoiFichierService: any;

  constructor() { }
  fichierAEnvoyer: File = null;

  ngOnInit() {
  }
  envoiFichier(fichiers: FileList) {
    this.fichierAEnvoyer = fichiers.item(0);
  }

  envoiFichierParLeService() {
    this.envoiFichierService.postFile(this.fichierAEnvoyer).subscribe(resultat => {
    }, erreur => {
      console.log('Erreur lors de l\'envoi du fichier : ', erreur);
    });
  }
}
