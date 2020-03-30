import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class SimpleValidationService {
    private serverEmails: string[];

    constructor() {
        // Emails for check
        this.serverEmails = ['some@gmail.com'];
    }

    public validateUniqueEmail(userEmail: string): Observable<ValidationErrors> {
        // Server request emulation 
        return new Observable<ValidationErrors>(observer => {
            const email = this.serverEmails.find(serEmail => serEmail === userEmail );

            // If exist, return error
            if (email) {
                observer.next({
                    emailExist: true
                });
            } 
            // If email doesn't exist, return null
            else {
                observer.next(null);
            }

            observer.complete();
        }).delay(1000);
    }
};