import { Component, Injectable, signal } from '@angular/core';
import { Bird } from './bird/bird';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
const url = "http://localhost:3000/birds/"

@Injectable({
  providedIn: 'root'
})

export class ControleBirds {

  constructor(private http: HttpClient) { }
  private birds = signal<Bird[]>([]);

  addBird(bird: Bird): Observable<Bird> {
    return this.http.post<Bird>(url, bird)
  }

  getBirds(): Observable<Bird[]> {
    return this.http.get<Bird[]>(url).pipe(
      tap(bird => this.birds.set(bird)),
      catchError(error => {
        console.error('Erreur lors de getBird()', error);
        throw error;
      })
    );
  }
}

