export type SettingsType = {
  id: string;
  name: string;
  value: boolean | string;
  options: string[] | null;
  type: 'default' | 'pro';
};
