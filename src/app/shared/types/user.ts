export interface IUser {
  avatar: string;
  name: string;
  balance: string;
  reach: OverviewType;
  avg_cost_per_view: OverviewType;
  impressions: OverviewType;
  spent: OverviewType;
}

export type UserNavType = Pick<IUser, 'avatar' | 'name' | 'balance'>;

export type OverviewType = {
  value: string;
  percentage: string;
  trend: string;
  historical: { [key: number]: number }[];
};

export type OverviewSelectHandle = { data: OverviewType; title: string };
