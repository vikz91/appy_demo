export interface IPagedResponse<T> {
  total: number;
  data: T[];
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
}
