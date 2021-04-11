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
        return(
            <div 
                className="Title" 
                style={{
                    padding: '0 70px', 
                    textAlign: 'center', 
                    margin: '30px 0 10px 0',
                    fontFamily: 'sans-serif', 
                    fontWeight: 'bold', 
                    fontSize: '1.25rem', 
                    lineHeight: '2rem', 
                    color: '#555',
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