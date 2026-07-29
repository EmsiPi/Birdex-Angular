import { Component, computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Bird, CreateBird, BirdEspeces } from './bird/bird';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EspeceBirdex } from './espece-birdex/espece-birdex';

@Injectable({
  providedIn: 'root'
})

export class ControleBirds {

  private http = inject(HttpClient);
  private readonly url = "http://localhost:3000/birds";

  private _birds = signal<Bird[]>([]);
  private _birdex = signal<BirdEspeces[]>([]);
  private _loading = signal<boolean>(false);

  //computed pour permettre de lire le signal dans d'autres composants 
  //mais obligation de passer par les méthodes de la classe pour modifier sa valeur
  readonly birds = computed(() => this._birds());
  readonly birdex = computed(() => this._birdex());
  readonly loading = computed(() => this._loading());

  async initAll() {
    this._loading.set(true);
    try {
      const data = await lastValueFrom(this.http.get<Bird[]>(this.url));
      this._birds.set(data);
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      this._loading.set(false);
    }
  }

  async initBirdex() {
    this._loading.set(true);
    try {
      const data = await lastValueFrom(
        this.http.get<BirdEspeces[]>(`${this.url}/birdex`)
      );
      this._birdex.set(data.sort((a, b) => a.name.localeCompare(b.name)));
    } catch (error) {
      console.error('Erreur chargement birdex', error);
    } finally {
      this._loading.set(false);
    }
  }

  image(espece: String): String[] {
    return this._birds()
      .filter(bird => bird.name === espece && !!bird.urlImage)
      .map(bird => bird.urlImage!);
  }

  async deleteBird(id: String) {
    try {
      await lastValueFrom(this.http.delete(`${this.url}/${id}`));
      // On met à jour la liste localement sans recharger toute l'API
      this._birds.update(birds => birds.filter(b => b._id !== id));
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  }

  async addBird(birdData: FormData) {
    try {
      const newBird = await lastValueFrom(this.http.post<Bird>(this.url, birdData));
      // Mise à jour immédiate de la liste pour que ListBird se rafraîchisse
      this._birds.update(birds => [...birds, newBird]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout', error);
    }
  }

  async updateBird(updatedData: FormData, id: String) {
    try {
      const birdFromServer = await lastValueFrom(
        this.http.patch<Bird>(`${this.url}/${id}`, updatedData)
      );

      // On met à jour le Signal pour que l'écran change
      this._birds.update(birds =>
        birds.map(bird => bird._id === id ? birdFromServer : bird));

    } catch (error) {
      console.error('Erreur lors de la mise à jour', error);
    }
  }

}
