
import { Router } from '@angular/router';

export interface Bird {

    name: String;
    date: String;
    location: String;
    urlImage: String | undefined;
    _id: String;
}

export interface CreateBird {
    name: string;
    date: string;
    location: string;
    urlImage: String | undefined;
}