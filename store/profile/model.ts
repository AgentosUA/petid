export type SearchParams = {
  type: 'all' | 'dog' | 'cat' | 'other',
  gender: 'all' | 'he' | 'she',
  status: 'all' | 'founded' | 'escaped',
  city: 'all' | string,
  date: 'all' | Date | string
}

export type AuthData = {
  token: string;
  expiresIn: number;
}