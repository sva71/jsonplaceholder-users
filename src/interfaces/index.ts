export interface Company {
  bs: string
  catchPhrase: string
  name: string
}

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  city: string
  geo: Geo
  street: string
  suite: string
  zipcode: string
}

export interface User {
  id: number
  address: Address
  company: Company
  email: string
  name: string
  phone: string
  username: string
  website: string
}
