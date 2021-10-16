export interface DatabaseServiceInterface {
  startDatabase: () => void
  closeDatabase: () => void
}

export interface UserModel {
  id: number
  name: string
  role: string
  status: boolean
}

export interface UserRepositoryInterface {
  findOne: (username: string) => UserModel | undefined
  findAll: () => UserModel[]
}

export interface GetUserRepositoryInterface {
  findOne: (username: string) => UserModel | undefined
}

export interface GetAllUsersRepositoryInterface {
  findAll: () => UserModel[]
}

export interface FindOption {
  id?: number,
  name?: string,
  role?: string,
  active?: boolean
}