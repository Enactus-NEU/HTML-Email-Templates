import React from "react"
import "../style.css"

import Editor from "react-medium-editor"

class Title extends React.Component {
    constructor(props) {
        super(props)
    }
    handleChange(text, medium) {
        this.props.getNewTitle(text)
    }
    render() {
        const color = this.props.color ? this.props.color : "#555"
        const fontSize = this.props.fontSize ? this.props.fontSize : "1.2rem"
        const margin = this.props.margin ? this.props.margin : "45px 0 25px 0"
        console.log(color, fontSize)
        return(
            <div 
                className="Title" 
                style={{
                    padding: '0 15px', 
                    textAlign: 'center', 
                    margin: margin,
                    fontFamily: 'sans-serif', 
                    fontWeight: 'bold', 
                    fontSize: fontSize, 
                    lineHeight: '2rem', 
                    color: color,
                    whiteSpace: "pre-line"
                }}><Editor 
                        text={this.props.value} 
                        options={{ toolbar: { buttons: [ 'bold', 'italic', 'underline'] } }}
                        onChange={(text, medium) => this.handleChange(text, medium)}
                    />
            </div>
        )
    }
}

export default Title;