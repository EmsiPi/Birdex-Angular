import { NgForm, FormsModule } from '@angular/forms';
import { Bird, CreateBird } from '../bird/bird';
import { ControleBirds } from '../controle-birds';
import { Component, EventEmitter, inject, Input, input, model, Output } from '@angular/core';

@Component({
  selector: 'app-up-formulaire',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-update.html'
})
export class FormUpdate {

  private birdService = inject(ControleBirds);
  birdAEditer = input<Bird>();
  @Output() saveSuccess = new EventEmitter<Bird>();

  private selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log("Fichier sélectionné :", file.name);
    }
  }

  async onSubmit(form: NgForm) {
    const currentBird = this.birdAEditer();

    if (form.valid && currentBird) {
      const formData = new FormData();
      formData.append('name', form.value.name);
      formData.append('location', form.value.location);
      formData.append('date', form.value.date);

      if (this.selectedFile) {
        formData.append('image', this.selectedFile, this.selectedFile.name);
      }

      // Attendre que le service finisse la mise à jour
      await this.birdService.updateBird(formData, currentBird._id);

      // Une fois fini, on émet le succès. 
      // Idéalement, récupère l'oiseau mis à jour depuis le signal du service
      const birdUpdated = this.birdService.birds().find(b => b._id === currentBird._id);
      this.saveSuccess.emit(birdUpdated);
    }
  }


}