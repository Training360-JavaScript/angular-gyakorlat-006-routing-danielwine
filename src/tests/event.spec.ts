import { Event } from '../app/model/event';
import { Location } from '../app/model/location';

describe('Event', () => {
  it('should create an instance', () => {
    expect(new Event()).toBeTruthy();
  });

  /*
  `@var name {string}`,
  `@var date {string}`,
  `@var time {string}`,
  `@var location {Location}`
  */

  it('event.name should be created', () => {
    const event = new Event();
    expect(event.name).toBeDefined();
    expect(typeof event.name).toEqual('string');
  });

  it('event.date should be created', () => {
    const event = new Event();
    expect(event.date).toBeDefined();
    expect(typeof event.date).toEqual('string');
  });

  it('event.time should be created', () => {
    const event = new Event();
    expect(event.time).toBeDefined();
    expect(typeof event.time).toEqual('string');
  });

  it('event.location should be created', () => {
    const event = new Event();
    expect(event.location).toBeDefined();
    expect(event.location instanceof Location).toBeTruthy();
  });

});
