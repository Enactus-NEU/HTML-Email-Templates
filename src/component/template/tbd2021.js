import React from 'react'

class Tbd2021 extends React.Component {
    render() {
        return(
            <div className="Tbd2021">
                <table border={0} cellSpacing={0} cellPadding={0} style={{width: '100%', maxHeight: '760px', backgroundColor: '#FFF6D8'}}>
                    <tbody>
                        <tr>
                        <td style={{
                                padding: '10px 20px 50px 20px', 
                                minWidth: '700px',
                                backgroundImage: 'url("https://i.imgur.com/Svixcjg.png")',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <div style={{height: '10px'}} />   
                            <div style={{
                                width: '800px', 
                                margin: 'auto', 
                                backgroundImage: 'url("https://i.imgur.com/N0Kcwza.png?4")', 
                                backgroundSize: '20%', 
                                backgroundRepeat: 'no-repeat', 
                                boxSizing: 'border-box', 
                                backgroundPosition: '0 0'
                                }}>
                            <div style={{height: '40px'}} />
                            <div style={{
                                backgroundColor: '#579AD8', 
                                borderRadius: '20px', 
                                width: '659px', 
                                margin: 'auto'
                                }}>
                                <div style={{height: '5px'}} />
                                <div style={{
                                    width: '649px',
                                    margin: 'auto', 
                                    padding: '4px 0px 4px 0px', 
                                    borderRadius: '20px 20px 10px 10px', 
                                    backgroundColor: 'white'
                                    }}>
                                <div style={{
                                    margin: 'auto', 
                                    width: '640px', 
                                    height: '178px', 
                                    borderRadius: '20px 20px 10px 10px', 
                                    backgroundImage: 'url("https://media.giphy.com/media/imS81fKCnLYnv4XTzF/giphy.gif")', 
                                    backgroundSize: 'cover', 
                                    backgroundRepeat: 'repeat', 
                                    backgroundPosition: 'center', 
                                    border: '2px solid rgba(100, 100, 100, 0.08)'
                                    }} />
                                <div className="Title" style={{
                                    padding: '0px', 
                                    textAlign: 'center', 
                                    margin: '15px 0 10px 0', 
                                    fontFamily: 'sans-serif', 
                                    fontWeight: 'bold', 
                                    fontSize: '1.2rem', 
                                    lineHeight: '2rem', 
                                    color: '#4F7484', 
                                    whiteSpace: 'pre-line'
                                    }}>{this.props.children[0]}</div>
                                </div>
                                <div style={{height: '5px'}} />
                                <div style={{
                                    width: '649px', 
                                    margin: 'auto', 
                                    padding: '20px 0px 50px 0px', 
                                    borderRadius: '10px', 
                                    backgroundColor: 'white'
                                    }}>
                                <div className="Main" style={{
                                    padding: '16px 0px 13px 0px', 
                                    fontSize: '1.07rem', 
                                    fontFamily: 'sans-serif', 
                                    color: '#4D577A',
                                    lineHeight: '1.4rem', 
                                    textAlign: 'justify', 
                                    whiteSpace: 'pre-line'
                                    }}>{this.props.children[1]}
                                </div>
                                </div>
                                <div style={{height: '5px'}} />
                                <div style={{
                                    width: '649px', 
                                    margin: 'auto', 
                                    padding: '20px 0px 20px 0px', 
                                    borderRadius: '10px 10px 20px 20px', 
                                    backgroundColor: 'white'
                                    }}>
                                <div style={{
                                    textAlign: 'center',
                                    fontSize: '1.07rem', 
                                    fontFamily: 'sans-serif', 
                                    color: '#69749A', 
                                    lineHeight: '2rem'
                                    }}>
                                    <b>Thông tin chi tiết vui lòng liên hệ</b>
                                    <br />
                                    Email: hr.enactusneu2018
                                    <br />
                                    Hotline: (+84) 839 085 688 (Ms. Mai)
                                </div>
                                </div>
                                <div style={{height: '5px'}} />
                            </div>
                            </div>
                            <font color="#888888" />
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tbd2021