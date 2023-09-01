import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>The company's name is ${this.name}</h1>
    <h3>It is located at lat: ${this.location.lat} and lng: ${this.location.lng}</h3>
    </br>
    <h3>${this.catchPhrase}</h3>
    </div>
    `
  }
}