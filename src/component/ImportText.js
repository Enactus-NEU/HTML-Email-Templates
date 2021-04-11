import React from "react";
import TextareaAutosize from "react-textarea-autosize";

class ImportText extends React.Component {
  render() {
    return (
      <div className="ImportText">
        <TextareaAutosize
          autoFocus
          onChange={this.props.onChangeValue}
          minRows={this.props.row}
          maxRows={25}
          value={this.props.value}
          id="TextareaAutosize"
        />
      </div>
    );
  }
}

export default ImportText;
