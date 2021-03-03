import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const TrelloActionButton = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [cardText, setCardText] = useState("");

  const closeForm = () => {
    setFormOpen(!formOpen);
    setCardText("");
  };
  const handleAdd = () => {
    console.log("hi");
    if (props.list) {
      console.log("hey");
      props.addList(cardText);
      closeForm();
    } else {
      props.addCard(props.listId, cardText);
      closeForm();
    }
  };

  const renderButton = () => {
    const buttonText = props.list ? "Add another list" : "Add another card";
    const buttonTextOpacity = props.list ? 1 : 0.5;
    const buttonTextColor = props.list ? "white" : "inherit";
    const buttonTextBackground = props.list ? "rgba(0,0,0,.15)" : "inherit";
    return (
      <div
        onClick={() => setFormOpen(!formOpen)}
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          borderRadius: 3,
          height: 36,
          width: 272,
          paddingLeft: 10,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  const renderForm = () => {
    const placeholder = props.list
      ? "Enter a title ..."
      : "Enter a title for this card ...";
    const buttonTitle = props.list ? "Add list" : "Add card";

    return (
      <ClickAwayListener onClickAway={closeForm}>
        <div>
          <Card
            style={{
              minHeight: 85,
              minWidth: 272,
              padding: "6px 8px 2px",
            }}
          >
            <Textarea
              placeholder={placeholder}
              autoFocus
              value={cardText}
              onChange={(e) => setCardText(e.target.value)}
              style={{
                resize: "none",
                width: "100%",
                outline: "none",
                border: "none",
              }}
            />
          </Card>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              style={{ color: "white", backgroundColor: "#5aac44" }}
              type="submit"
              onClick={() => {
                handleAdd(props.listId, cardText);
              }}
            >
              {buttonTitle}
            </Button>
            <Icon
              onClick={closeForm}
              style={{ marginLeft: 8, cursor: "pointer" }}
            >
              close
            </Icon>
          </div>
        </div>
      </ClickAwayListener>
    );
  };
  console.log(props);
  return <div>{formOpen ? renderForm() : renderButton()}</div>;
};

export default connect(null, { addList, addCard })(TrelloActionButton);
