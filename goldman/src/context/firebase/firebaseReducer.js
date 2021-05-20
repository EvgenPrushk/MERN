import { ADD_NOTE, FETCH_NOTES, SHOW_LOADER, REMOVE_NOTE } from "../types";

const hadlers = {
  [SHOW_LOADER]: (state) => ({ ...state, loading: true }),
  [ADD_NOTE]: (state, { payload }) => ({
    ...state,
    notes: [...state.notes, payload],
  }),
  [FETCH_NOTES]: (state, { payload }) => ({ ...state, notes: payload }),
  [REMOVE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload),
  }),
  DEFAULT: (state) => state,
};

export const FirebaseReducer = (state, action) => {
  const handle = hadlers[action.type] || hadlers.DEFAULT;
  return handle(state, action);
};
