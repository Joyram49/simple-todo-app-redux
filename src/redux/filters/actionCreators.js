import { STATUS_CHANGE, COLOR_SELECT } from "./actionTypes";

export const statusChange = (status) => {
  return {
    type: STATUS_CHANGE,
    payload: {
      status,
    },
  };
};

export const colorSelect = (color, changeType) => {
  return {
    type: COLOR_SELECT,
    payload: {
      color,
      changeType,
    },
  };
};
