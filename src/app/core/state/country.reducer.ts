import { CountryI } from '../models/country.interface';
import { createReducer, on } from '@ngrx/store';
import { addCountry, removeCountry } from './country.actions';

export const initialEntry: CountryI[] = [];

export const countryReducer = createReducer(
    initialEntry,

);

