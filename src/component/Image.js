import React from "react"
import "../style.css"

class Image extends React.Component {
    render() {
        return(
            <div 
                className="Image" 
                style={{
                    backgroundImage: `url(${this.props.value})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                    width: "570px",
                    borderRadius: "20px",
                }}
            />
        )
    }
}

export default Image;