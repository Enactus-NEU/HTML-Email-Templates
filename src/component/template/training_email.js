import React from "react";

class TrainingEmail extends React.Component {
    render() {
        return(
          <div className="TrainingEmail">
            <table
              border={0}
              cellSpacing={0}
              cellPadding={0}
              style={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#eaeaea"
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{ padding: "0px 10px 50px 10px", minWidth: "700px" }}
                  >
                    <div style={{ height: "40px" }} />
                    <div
                      style={{
                        margin: "auto",
                        width: "650px",
                        backgroundColor: "#ffc222",
                        borderRadius: "30px 30px 30px 30px"
                      }}
                    >
                      <div style={{ height: "5px" }} />
                      <div
                        style={{
                          backgroundColor: "white",
                          borderRadius: "20px",
                          paddingBottom: "50px"
                        }}
                      >
                        <div style={{ height: "5px" }} />
                        <div
                          style={{
                            margin: "auto",
                            width: "640px",
                            height: "200px",
                            borderRadius: "20px",
                            backgroundImage:
                              'url("https://ci6.googleusercontent.com/proxy/6hM3W5qjyr7DbnKhA6ug8h5ziDWsz78fUOc-yU2P-u9fCRnVCSnT0MAc-3uHFfO1LQE=s0-d-e1-ft#https://i.imgur.com/O5WCblR.jpg")',
                            backgroundSize: "70%",
                            backgroundRepeat: "repeat",
                            backgroundPosition: "center",
                            border: "2px solid rgba(100,100,100,.08)"
                          }}
                        >
                        </div>
                        {/* this line */}
                        {this.props.children}
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        margin: "30px",
                        fontSize: "1.07rem",
                        fontFamily: "sans-serif",
                        color: "#555",
                        lineHeight: "2rem"
                      }}
                    >
                      Thông tin chi tiết vui lòng liên hệ
                      <br />
                      Email: hr.enactusneu2018
                      <br />
                      Hotline: (+84) 839 085 688 (Ms. Mai)
                    </div>
                    <font color="#888888"></font>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}

export default TrainingEmail;