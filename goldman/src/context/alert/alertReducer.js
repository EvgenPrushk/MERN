import { HIDE_ALERT, SHOW_ALERT } from "../types";

const hadlers = {
  [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
  [HIDE_ALERT]: (state) => ({ ...state, visible: false }),
  DEFAULT: (state) => state,
};

export const alertReducer = (state, action) => {
  const handle = hadlers[action.type] || hadlers.DEFAULT;
  return handle(state, action);
};
