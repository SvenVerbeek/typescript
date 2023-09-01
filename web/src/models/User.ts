import axios, { AxiosResponse } from "axios";

interface UserProps {
  name?: string; 
  age?: number;
  id?: number
}

// Type alias for event
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(event: string, callback: Callback): void {
    const handlers = this.events[event] || [];
    handlers.push(callback);
    this.events[event] = handlers;
  }

  trigger(event: string): void {
    const handlers = this.events[event];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then(
      (response: AxiosResponse): void => {
      this.set(response.data);
      }
    );
  }

  save(): void {
    const id = this.get('id');

    if (id){
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}