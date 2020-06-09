import store from "./store";
import { bugAdded, bugResolved } from "./actions";

store.subscribe(() => {
  console.log("Store Changed!", store.getState());
});

store.dispatch(bugAdded("This is the first bug!"));
store.dispatch(bugResolved(1));

console.log(store.getState());
