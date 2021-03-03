import { Draggable } from "react-beautiful-dnd";
import { ADD_LIST, DRAG_HAPPENED } from "./index";
export const addList = (title) => {
  console.log(title);
  return {
    type: ADD_LIST,
    payload: title,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
