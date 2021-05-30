import React from "react"
import "../style.css"

import Editor from 'react-medium-editor';

import List from "./List"
import Image from "./Image"

class Para extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    onDragStart = (e, index) => {
        this.draggedItem = this.props.value[index];
        e.dataTransfer.effectAllowed = "move";
    };
    onDragOver = index => {
        const draggedOverItem = this.props.value[index];
    
        // if the item is dragged over itself, ignore
        if (this.draggedItem === draggedOverItem) {
          return;
        }
    
        // filter out the currently dragged item
        let value = this.props.value.filter(item => item !== this.draggedItem);
    
        // add the dragged item after the dragged over item
        value.splice(index, 0, this.draggedItem);
    
        this.props.dragAndDropChild(value)
    };
    onDragEnd = () => {
        this.draggedItem = null;
      };
    handleDelete(index) {
        const updatedItem = this.props.value;
        updatedItem.splice(index, 1)
        this.props.dragAndDropChild(updatedItem)
    }
    handleChangeFormatText(text, medium, index) {
        const updatedItems = this.props.value;
        const updatedItem = this.props.value[index]
        this.props.dragAndDropChild([...updatedItems.slice(0, index), { data: text, type: updatedItem.type }, ...updatedItems.slice(index + 1)]);
    }
    render() {
        const color = this.props.color ? this.props.color : "#555"
        return(
            <div className="Para">{
                <ul style={{padding: "0px", listStyle: "none"}}>
                {
                    this.props.value.map((item, index) => {
                        return (
                            <li key={index} style={{padding: 0, margin: 0}} onDragOver={() => this.onDragOver(index)}>
                                <div 
                                    className="TextValue"
                                    style={{
                                        padding: '16px 40px 13px 40px', 
                                        fontSize: '1.07rem', 
                                        fontFamily: 'sans-serif', 
                                        color: color, 
                                        lineHeight: '1.4rem', 
                                        textAlign: 'justify',
                                        whiteSpace: "pre-line"
                                    }}
                                    draggable
                                    onDragStart={e => this.onDragStart(e, index)}
                                    onDragEnd={this.onDragEnd}
                                    >
                                        {item.type === "Text" && <Editor 
                                                                    options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor'] }}} 
                                                                    text={item.data} 
                                                                    onChange={(text, medium) => {this.handleChangeFormatText(text, medium, index)}}
                                                                />}
                                        {item.type === "List" && <List items={this.props.value} handleChangeFormat={this.props.dragAndDropChild} index={index} value={item.data} /> }
                                        {item.type === "Image" && <Image value={item.data} /> }
                                    <div onClick={() => {this.handleDelete(index)}} className="DeleteButton">🗑</div>
                                </div>
                            </li>
                        )
                    })
                }
                </ul>
            }</div>
        )
    }
}

export default Para;