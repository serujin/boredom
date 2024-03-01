import { User, UserData } from './model'

export type UserPort = {
  create: (userData: UserData) => User
  getAll: () => UserData[]
}
