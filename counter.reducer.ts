import { createReducer,on }  from "@ngrx/store";
import { decrement, increment } from "./counter.action";

export const initialValue = 0;
export const CounterReducer = createReducer(
    initialValue,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1)
);

// create interface to store data in store
export interface AppStore {
    count: number;
}