import { Component, computed, inject, Injectable, signal } from '@angular/core';
import { Bird, CreateBird } from './bird/bird';
import { lastValueFrom, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ControleBirds {
  private http = inject(HttpClient);
  private readonly url = "http://localhost:3000/birds";

  private _birds = signal<Bird[]>([]);
  private _loading = signal<boolean>(false);

  //computed pour permettre de lire le signal dans d'autres composants 
  //mais obligation de passer par les méthodes de la classe pour modifier sa valeur
  readonly birds = computed(() => this._birds());
  readonly loading = computed(() => this._loading());

  // Charger les oiseaux
  async getAll() {
    this._loading.set(true);
    try {
      // On convertit l'observable en promesse pour un code plus lisible (async/await)
      const data = await lastValueFrom(this.http.get<Bird[]>(this.url));
      this._birds.set(data);
    } catch (error) {
      console.error('Erreur chargement:', error);
    } finally {
      this._loading.set(false);
    }
  }

  // Supprimer un oiseau
  async deleteBird(id: String) {
    try {
      await lastValueFrom(this.http.delete(`${this.url}/${id}`));
      // On met à jour la liste localement sans recharger toute l'API
      this._birds.update(birds => birds.filter(b => b._id !== id));
    } catch (error) {
      console.error('Erreur suppression:', error);
    }
  }

  async addBird(bird: CreateBird) {
    try {
      const newBird = await lastValueFrom(this.http.post<Bird>(this.url, bird));
      // Mise à jour immédiate de la liste pour que ListBird se rafraîchisse
      this._birds.update(current => [...current, newBird]);
    } catch (error) {
      console.error('Erreur lors de l\'ajout', error);
    }
  }

  async updateBird(updatedData: CreateBird, id: String) {
    try {
      const birdFromServer = await lastValueFrom(
        this.http.patch<Bird>(`${this.url}/${id}`, updatedData)
      );

      // 2. On met à jour le Signal pour que l'écran change
      this._birds.update(allBirds =>
        allBirds.map(bird => bird._id === id ? birdFromServer : bird));

    } catch (error) {
      console.error('Erreur lors de la mise à jour', error);
    }
  }

}
