import { Card, Icon, Image, Button } from "semantic-ui-react";
import React, { Component } from "react";
import Popup from "reactjs-popup";


class Organization extends Component {
  state = {
    showPopup: false,
    description: this.props.desc || "Description",
    name: this.props.name || "Name",
    users: this.props.users || [],
    newUser: ""
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <div
              style={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <h3>Name : </h3>
              <Card.Header>{this.props.name}</Card.Header>
            </div>
            <h3>Description :</h3>
            <Card.Description>{this.props.desc} </Card.Description>
            <Card.Content extra>
              Users :
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {this.props.users.map(user => {
                  return <a> {user.name}</a>;
                })}
                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <button
                    onClick={() => {
                      this.setState({ showPopup: true });
                    }}
                  >
                    Delete
                  </button>
                  <Popup
                    contentStyle={{
                      height: 500,
                      width: 500
                    }}
                    trigger={<button> Update</button>}
                    position="right center"
                  >
                    <div
                      style={{
                        top: 20
                      }}
                    >
                      <div

                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <h4>Name</h4>
                        <input onChange={(text) => {
                          this.setState({
                            name: text.target.value
                          })
                        }} value={this.state.name}></input>
                      </div>
                      <div

                        style={{
                          display: "flex",
                          flexDirection: "row"
                        }}
                      >
                        <h4>Description :  </h4>
                        <textarea name="body"
                          style={{
                            height: 100,
                            width: 300
                          }}
                          value={this.state.description}
                          onChange={(text) => {
                            this.setState({
                              description: text.target.value
                            })
                          }} />
                      </div>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                      }}>
                        <h3>Users :</h3>
                        {this.state.users.map(user => {
                          return (
                            <div style={{
                              display: 'flex',
                              flexDirection: 'row'
                            }}>  <a> {user.name}</a>
                              <button onClick={() => {
                                this.setState({
                                  users: this.state.users.filter(res =>
                                    res.name !== user.name)
                                })
                              }} > Delete</button>
                            </div>

                          );


                        })}
                      </div>
                      <div style={{
                        marginTop: 30,
                        display: "flex",
                        flexDirection: "row"
                      }}>
                        <h3>Add User : </h3> <input onChange={(text) => {
                          this.setState({
                            newUser: text.target.value
                          })
                        }} placeholder='Add user'></input> <button onClick={() => {
                          console.log(this.state.newUser)
                          this.state.users.push({ name: this.state.newUser })
                          let newTab = this.state.users
                          this.setState({
                            users: newTab
                          })

                        }}>Add</button>

                      </div>

                    </div>
                    <div style={{
                      marginTop: 50
                    }}>
                      <Button >Save</Button>
                    </div>
                  </Popup>
                </div>
              </div>

            </Card.Content>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Organization;
