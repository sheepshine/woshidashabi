import { Injectable, HttpException } from '@nestjs/common';
import { User } from "./user.dto";

@Injectable()
export class AppService {
  private users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Alice Caeiro" },
    { id: 3, name: "Who Knows" },
    { id: 4, name: "嘿嘿嘿" },
    { id: 5, name: "hahahahaha" },
  ]
  getAllUser() {
    return Promise.resolve(this.users)
  }
  getUser(id: number) {
    const user = this.users.find((user) => user.id === id)
    if (!user) {
      throw new HttpException("User not found", 404)
    }
    return Promise.resolve(user)
  }
  addUser(user: User) {
    this.users.push(user)
    return Promise.resolve()
  } 
}
