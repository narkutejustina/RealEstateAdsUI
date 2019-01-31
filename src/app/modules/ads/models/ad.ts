import { Price } from './price';

export interface Ad {
    id: number;
    title: string;
    description: string;
    price: Price;
    city: string;
    country: string;
}


