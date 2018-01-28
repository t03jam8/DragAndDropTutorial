import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemTypes } from "./Constants.js";
import { DragSource } from "react-dnd";

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return (
      <span
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: "55px",
          marginBottom: "11px",
          fontWeight: "bold",
          cursor: "move"
        }}
      >
        ♘
      </span>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
