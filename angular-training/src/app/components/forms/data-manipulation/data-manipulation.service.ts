import { Injectable } from '@angular/core';

@Injectable()
export class DataManipulationService {
    public getUserInfo(): Promise<any> {
        let promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    nickname: 'davidB',
                    personalInfo: {
                        name: 'David',
                        email: 'someemail@gmail.com'
                    },
                    addresses: [
                        {
                            country: 'Belarus',
                            city: 'Mink',
                            addressLine: 'some address'
                        },
                        {
                            country: 'Canada',
                            city: 'Ottawa',
                            addressLine: 'some address 2'
                        }
                    ]
                })
            }, 2000);
        });

        return promise;
    }
}