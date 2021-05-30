import React from "react";
import "../style.css";

import Para from "./Para"
import Title from "./Title"

//template
import TrainingEmail from "./template/training_email"
import Tbd2021 from "./template/tbd2021"

class EditedEmail extends React.Component {
  constructor() {
    super();
    this.state = {
      template: "training",
      export: null
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleExport = this.handleExport.bind(this);
  }
  handleSelectChange(e) {
    this.setState({
      template: e.target.value
    });
  }
  handleExport() {
    const elTable = document.querySelector('table');
    let range, sel;
    // Ensure that range and selection are supported by the browsers
    if (document.createRange && window.getSelection) {

      range = document.createRange();
      sel = window.getSelection();
      // unselect any element in the page
      sel.removeAllRanges();

      try {
        range.selectNodeContents(elTable);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(elTable);
        sel.addRange(range);
      }

      document.execCommand('copy');
      sel.removeAllRanges();

      alert('Copied!')
    }
  }
  render() {
    return (
      <div className="EditedEmail">
        <select
          name="templates"
          id="templates"
          onChange={this.handleSelectChange}
        >
          <option value="training">Chương trình Đào tạo</option>
          <option value="tbd2021">Teambuilding 2021</option>
        </select>
        <div className="ExportButton" onClick={this.handleExport}>
            Copy
        </div>
        <div className="wrapEditedEmail">
          {this.state.template === "training" && (
            <TrainingEmail>
              {this.props.title.type === "Title" && this.props.title.data && <Title getNewTitle={this.props.formatTitle} value={this.props.title.data} /> }
              {this.props.text.type === "TextValue" && <Para value={this.props.text.data} dragAndDropChild={this.props.dragAndDrop} /> }
            </TrainingEmail>
          )}
          {this.state.template === "tbd2021" && (
            <Tbd2021>
              {this.props.title.type === "Title" && this.props.title.data && <Title margin="0" fontSize="1.05rem" color="#4F7484" type={this.props.title.type} getNewTitle={this.props.formatTitle} value={this.props.title.data} /> }
              {this.props.text.type === "TextValue" && <Para color="#4D577A" type={this.props.title.type} value={this.props.text.data} dragAndDropChild={this.props.dragAndDrop} />}
            </Tbd2021>
          )}
        </div>
      </div>
    );
  }
}

export default EditedEmail;
