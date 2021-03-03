import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";
const TrelloList = (props) => {
  const renderCards = () => {
    return props.cards.map((card, index) => {
      return (
        <TrelloCard key={card.id} id={card.id} index={index} text={card.text} />
      );
    });
  };

  return (
    <Droppable droppableId={`${props.listId}`}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{props.title}</h4>
          {renderCards()}
          <TrelloActionButton listId={props.listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    width: "300px",
    borderRadius: 3,
    padding: 8,
    marginRight: 8,
    height: "100%",
  },
};

export default TrelloList;
