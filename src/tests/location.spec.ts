import { Location } from '../app/model/location';

describe('Location', () => {
  it('should create an instance', () => {
    expect(new Location()).toBeTruthy();
  });

  /*
  `@var address {string}`,
  `@var city {string}`,
  `@var country {string}`
  */

  it('location.address should be created', () => {
    const location = new Location();
    expect(location.address).toBeDefined();
  });

  it('location.city should be created', () => {
    const location = new Location();
    expect(location.city).toBeDefined();
  });

  it('location.country should be created', () => {
    const location = new Location();
    expect(location.country).toBeDefined();
  });
});
