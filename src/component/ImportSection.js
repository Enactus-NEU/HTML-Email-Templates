import React, { Component } from "react";
import ImportText from "./ImportText";

import Validate from "../Validate"

class ImportSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      type: "Text"
    };

    this.handleImport = this.handleImport.bind(this);

    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }
  handleChangeValue(e) {
    this.setState({ value: e.target.value });
  }
  handleSelectChange(e) {
    this.setState({ type: e.target.value });
  }
  handleImport() {
    if (this.state.value) {
      const dataValidate = Validate(this.state.value)
      this.props.importValue({ data: dataValidate, type: this.state.type });
      this.setState({value: ""})
    }
  }

  render() {
    return (
      <div className="ImportSection">
        <div className="ButtonGroup">
          <select name="type" id="type" onChange={this.handleSelectChange}>
            <option value="Text">Text</option>
            <option value="Title">Title</option>
            <option value="List">List</option>
            <option value="Image">Image</option>
            <option value="Video">Video</option>
          </select>
          <div className="ImportButton" onClick={this.handleImport}>
            Import
          </div>
        </div>
        {
          (this.state.type === "Text" || this.state.type === "List")  && <ImportText row={20} value={this.state.value} onChangeValue={this.handleChangeValue} />
        }
        {
          this.state.type === "Title" && <ImportText row={5} value={this.state.value} onChangeValue={this.handleChangeValue} />
        }
        {
         this.state.type === "Image"  && <ImportText row={1} value={this.state.value} onChangeValue={this.handleChangeValue} /> 
        }
      </div>
    );
  }
}

export default ImportSection;
