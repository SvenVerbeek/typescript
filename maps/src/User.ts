import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `
      <div>
      <h1>The user's name is ${this.name}</h1>
      <h3>The user is located at lat: ${this.location.lat} and lng: ${this.location.lng}</h3>
      </div>
      `
  }
}