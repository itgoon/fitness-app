import { AddressItem } from './address';

export type UserTableFilterValue = string | string[] | Date | null;

export type UserTableFilters = {
  name: string;
  service: string[];
  status: string;
  startDate: Date | null;
  endDate: Date | null;
  text?: string;
  translate?: string;
  value?: string;
};

// ----------------------------------------------------------------------

export type UserItem = {
  id: string;
  title: string;
  price: number;
  total: number;
  service: string;
  quantity: number;
  description: string;
};

export type User = {
  id: string;
  sent: number;
  dueDate: Date;
  taxes: number;
  status: string;
  subTotal: number;
  createDate: Date;
  discount: number;
  shipping: number;
  totalAmount: number;
  userNumber: string;
  items: UserItem[];
  userTo: AddressItem;
  userFrom: AddressItem;
};
