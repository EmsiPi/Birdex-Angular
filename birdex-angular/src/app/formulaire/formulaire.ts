import { NgForm, FormsModule } from '@angular/forms';
import { CreateBird } from '../bird/bird';
import { ControleBirds } from '../controle-birds';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulaire.html',
  styleUrls: ['./formulaire.css']
})
export class Formulaire {
  private birdService = inject(ControleBirds);
  private selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log("Fichier sélectionné :", file.name);
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // On utilise FormData pour emballer le texte ET le fichier
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('location', form.value.location);
      formData.append('date', form.value.date);
      // Le fichier à la fin
      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }
      this.birdService.addBird(formData);

      form.reset();
      this.selectedFile = null;
    } else {
      console.log("Le formulaire est invalide (champs manquants)")
    }
  }
}
