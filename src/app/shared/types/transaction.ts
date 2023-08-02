export interface ITransaction {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  image: string;
  product: string;
  price: string;
  status: StatusType;
}

type StatusType = 'pending' | 'done' | 'rejected';
