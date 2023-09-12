
export interface User {
  firstname: string,
  middle_name: string,
  surname: string,
  lastname: string,
  birth: Date,
  country: string,
  gender: string,
  status: string
}

export interface UserResponse extends User {
  id: number
}