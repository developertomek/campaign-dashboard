export interface IUser {
  avatar: string;
  name: string;
  balance: string;
  reach: {
    value: string;
    percentage: string;
    trend: string;
    historical: { [key: string]: string }[];
  };
  avg_cost_per_view: {
    value: string;
    percentage: string;
    trend: string;
    historical: { [key: string]: string }[];
  };
  impressions: {
    value: string;
    percentage: string;
    trend: string;
    historical: { [key: string]: string }[];
  };
  spent: {
    value: string;
    percentage: string;
    trend: string;
    historical: { [key: string]: string }[];
  };
}

export type UserNavType = Pick<IUser, 'avatar' | 'name' | 'balance'>;
