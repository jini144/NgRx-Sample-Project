import { createAction } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

// .........................................................................
// Here is increament , decrement, reset variable are unique variables

// From this file we go to counter.reducer.ts
