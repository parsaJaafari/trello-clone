import React from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions/index";

const App = (props) => {
  const renderLists = () => {
    const { lists } = props;
    return lists.map((list) => {
      return (
        <TrelloList
          key={list.id}
          listId={list.id}
          title={list.title}
          cards={list.cards}
        />
      );
    });
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    console.log(result);
    props.sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    );
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h1>HELLO Trello</h1>
        <div style={styles.listsContainer}>
          {renderLists()}
          <TrelloActionButton list={true} />
        </div>
      </div>
    </DragDropContext>
  );
};
const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};
const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  },
};

export default connect(mapStateToProps, { sort })(App);
