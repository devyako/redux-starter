import * as actions from "./actionTypes";

let count = 0;

export default function reducer(state = [], action) {
  if (action.type === actions.BUG_ADDED)
    return [
      ...state,
      {
        id: ++count,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else if (action.type === actions.BUG_RESOLVED)
    return state.map((bug) =>
      bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
    );

  return state;
}
