import { Draggable } from "react-beautiful-dnd";
import { ADD_LIST, ADD_CARD, DRAG_HAPPENED } from "../actions/index";
const INITIAL_STATE = [
  {
    title: "Last Episode",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "static card text",
      },
      {
        id: `card-${1}`,
        text: "Another Card",
      },
    ],
  },
  {
    title: "This Episode",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "this episode card text",
      },
      {
        id: `card-${3}`,
        text: "Another this episode Card",
      },
    ],
  },
];
let listId = 2;
let cardId = 4;

const listsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`,
      };
      listId += 1;
      return [...state, newList];

    case ADD_CARD: {
      const newCard = {
        id: `card-${cardId}`,
        text: action.payload.text,
      };
      cardId += 1;
      const newState = state.map((list) => {
        if (list.id === action.payload.listId) {
          return { ...list, cards: [...list.cards, newCard] };
        } else {
          return list;
        }
      });
      return newState;
    }

    case DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const newState = [...state];
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        console.log(list);
        console.log(droppableIndexStart);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};

export default listsReducer;
