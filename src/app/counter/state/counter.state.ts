export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0,
};

// .........................................................................
// This is first page to instalize the variable and having an interface to call this on app.module.ts to store the variable
// from this intialize file --> go to counter.action.ts for create actions
