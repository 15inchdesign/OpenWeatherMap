
/* This is central data store for whole app */
import { Action } from '@ngrx/store';

export const initialState = '';
export const SET_LOCATION = 'SET_LOCATION';
export const ADD_LOCATION = 'ADD_LOCATION';

export function locationReducer ( state = initialState, action: any  ){
    switch (action.type) {
        case SET_LOCATION:
         state = action.payload

         case ADD_LOCATION:
             state = action.payload
             
         return state;
         default:
             return state;

    }
}