export interface IClient {
  id: number;
  name?: string | null;
  age?: string | null;
}

export type NewClient = Omit<IClient, 'id'> & { id: null };
