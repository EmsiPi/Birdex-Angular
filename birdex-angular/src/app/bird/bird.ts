
import { Router } from '@angular/router';

export class Bird {

    name: String;
    date: String;
    location: String;

    constructor(date: String, location: String, name: String) {
        this.name = name;
        this.location = location;
        this.date = date;
    }

    getName(): String {
        return this.name;
    }

    getLieu(): String {
        return this.location;
    }

    getDate(): String {
        return this.date;
    }
}