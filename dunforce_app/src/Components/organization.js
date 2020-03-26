import { Card, Icon, Image, Button } from "semantic-ui-react";
import React, { Component } from "react";
import Popup from "reactjs-popup";
import axios from "axios";

class Organization extends Component {
  state = {
    showPopup: false,
    description: this.props.desc || "Description",
    name: this.props.name || "Name",
    users: this.props.users || [],
    newUser: {},
    index: 0,
    password: "",
    role: '',
  };
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  getIndex(tab, el) {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i].name == el) return i;
    }
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
            <Card.Content extra >
              <h4 style={{
                marginTop: 40
              }}> Users :</h4>
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
                        flexDirection: 'column',
                        marginTop: 50
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
                        <h3>Add User : </h3>
                        <div style={{
                          display: 'flex',
                          flexDirection: "column"
                        }}>  <input onChange={(text) => {
                          this.setState({
                            username: text.target.value
                          })
                        }} placeholder='Username'></input>
                          <input onChange={(text) => {
                            this.setState({
                              role: text.target.value
                            })
                          }} placeholder='Role'></input>
                          <input onChange={(text) => {
                            this.setState({
                              password: text.target.value
                            })
                          }} placeholder='password'></input>


                        </div>

                        <button onClick={() => {
                          this.state.users.push({
                            name: this.state.username,
                            role: this.state.role.includes(',') ? this.state.role.split(',') : [this.state.role],
                            password: this.state.password
                          })
                          let newTab = this.state.users
                          this.setState({
                            users: newTab
                          })
                          console.log(this.state.users)


                        }}>Add</button>

                      </div>

                    </div>
                    <div style={{
                      marginTop: 50
                    }}>
                      <Button onClick={() => {

                        axios.put(`http://localhost:8000/api/dunforce/entreprises/update`, {
                          "name": this.state.name,
                          "description": this.state.description,
                          "users": this.state.users,
                          "index": this.getIndex(this.props.data.organizations, this.props.name)
                        },

                          {
                            headers: {
                              'Content-Type': 'application/x-www-form-urlencoded',
                              'Accept': 'application/json'




                            }
                          }).then((res) => {
                            refreshPage();
                            alert("Modification saved !")
                          })
                      }}  >Save</Button>
                    </div>
                  </Popup>
                </div>
              </div>

            </Card.Content>
          </Card.Content>
        </Card>
      </div >
    );
  }
}
function refreshPage() {
  window.location.reload();
}
export default Organization;
