import { ADD_CARD } from "./index";
export const addCard = (listId, text) => {
  return {
    type: ADD_CARD,
    payload: { listId, text },
  };
};
