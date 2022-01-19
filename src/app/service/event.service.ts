import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {
        name: 'Mission start',
        date: '2022.02.01',
        time: '08:00',
        location: {
          country: 'Hungary',
          city: 'Budapest',
          address: 'Jókai u. 12'
        }
      },
      {
        name: 'Mission end',
        date: '2022.02.10',
        time: '17:00',
        location: {
          country: 'Hungary',
          city: 'Sopron',
          address: 'Fő tér 2.'
        }
      },
      {
        name: 'Mission evaluation',
        date: '2022.02.18',
        time: '08:00',
        location: {
          country: 'Hungary',
          city: 'Győr',
          address: 'Petőfi tér 4.'
        }
      },
    ]
  }
}
