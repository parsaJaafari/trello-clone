import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = (props) => {
  return (
    <Draggable draggableId={`${props.id}`} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <CardContent>
              <Typography gutterBottom>{props.text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};
const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TrelloCard;
