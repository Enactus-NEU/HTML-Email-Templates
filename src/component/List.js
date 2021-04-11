import React from "react"
import "../style.css"

import Editor from "react-medium-editor"

class List extends React.Component {
    handleChangeFormatList(text, medium, index) {
        const updatedItems = this.props.items;
        const updatedItem = this.props.items[index]
        this.props.handleChangeFormat([...updatedItems.slice(0, index), { data: text, type: updatedItem.type }, ...updatedItems.slice(index + 1)]);
    }
    render() {
        return(
            <div className="List">
                <ul style={{listStyleType: "disc"}}>
                    <li>
                        <Editor 
                            options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor'] } }} 
                            text={this.props.value} 
                            onChange={(text, medium) => {this.handleChangeFormatList(text, medium, this.props.index)}}
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

export default List;