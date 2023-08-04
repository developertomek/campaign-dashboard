export interface ITransaction {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date: string;
  image: string;
  product: string;
  price: string;
  status: StatusType;
}

type StatusType = 'pending' | 'done' | 'rejected';
