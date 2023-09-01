import { User } from "./models/User";

const user = new User({ name: 'Piet' });
//user.set({name: 'new', age: 20});

user.save();
