import { Injectable } from '@angular/core';
import { createAction, props, Action } from '@ngrx/store';
import { CountryI } from '../models/country.interface';

export const addCountry = '[COUNTRY] Add';
export const removeCountry = '[COUNTRY] Remove';

// export class AddCountry implements Action{
//     readonly type = AddCountry;

//     constructor(public payload: CountryI){}
// }
