import React from "react";

import ImportSection from "./component/ImportSection";
import EditedEmail from "./component/edited_email";

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/beagle.css');

import "./style.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textValue: [],
    };
    this.getTextValue = this.getTextValue.bind(this);
    this.dragAndDrop = this.dragAndDrop.bind(this);
    this.formatTitle = this.formatTitle.bind(this);
  }

  componentWillMount() {
    if (!localStorage.getItem('title')) {
      // title
      localStorage.setItem('title', "");
      const title = localStorage.getItem('title');
      this.setState({title: title})
    }
    this.setState({title: localStorage.getItem('title')})
    if (!localStorage.getItem('textValue')) {
      // textValue
      localStorage.setItem('textValue', JSON.stringify([]));
      const textValue = localStorage.getItem('textValue');
      this.setState({textValue: JSON.parse(textValue)})
    }
    this.setState({textValue: JSON.parse(localStorage.getItem('textValue'))})
  }

  getTextValue(value) {
    let { textValue } = this.state;

    if (value.type === "List" || value.type === "Image" || value.type === "Text") {
      textValue.push(value)
      this.setState({ textValue: textValue });
      localStorage.setItem('textValue', JSON.stringify(textValue));
    }

    if (value.type === "Title") {
      this.setState({ title: value.data })
      localStorage.setItem('title', value.data);
    }
  }
  dragAndDrop(newValue) {
    this.setState({ textValue: newValue })
    localStorage.setItem('textValue', JSON.stringify(newValue));
  }
  formatTitle(newTitle) {
    localStorage.setItem('title', newTitle);
  }



  render() {
    return (
      <div className="App">
        <ImportSection importValue={this.getTextValue} />
        <EditedEmail 
          text={{ data: this.state.textValue, type: "TextValue"}} 
          title={{ data:this.state.title, type: "Title" }} 
          dragAndDrop={(newValue) => this.dragAndDrop(newValue)}
          formatTitle={(newTitle) => this.formatTitle(newTitle)}
        />
      </div>
    );
  }
}

export default App;
