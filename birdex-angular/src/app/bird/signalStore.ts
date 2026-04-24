import { computed, inject, Injectable, signal } from "@angular/core";
import { Bird } from "./bird";
import { lastValueFrom } from "rxjs";
import { HttpClient } from "@angular/common/http";
const url = "http://localhost:3000/birds"

@Injectable({ providedIn: 'root' })
export class BirdStore {
    private http = inject(HttpClient);

    // L'état est une simple "boîte" réactive
    private state = signal<{ birds: Bird[], loading: boolean }>({
        birds: [],
        loading: false
    });

    // On expose des versions "lecture seule"
    birds = computed(() => this.state().birds);
    loading = computed(() => this.state().loading);

    async loadAll() {
        this.state.update(s => ({ ...s, loading: true }));
        const birds = await lastValueFrom(this.http.get<Bird[]>(url));
        this.state.set({ birds, loading: false });
    }
}