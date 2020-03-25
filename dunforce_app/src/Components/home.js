import React, { Component } from "react";
import axios from "axios";
import Organization from "./organization";
import logo from "./style/images.png";
import Popup from "reactjs-popup";
import { Button } from "semantic-ui-react";

class Home extends Component {
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  state = {
    data: [],
    showPopup: false,
    description: "",
    name: "",
    users: []
  };
  componentWillMount() {
    axios
      .get(`http://localhost:8000/api/dunforce/entreprises`)

      .then(res => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Popup
          contentStyle={{

            height: 400,
            width: 400
          }}


          trigger={<button> Trigger</button>} position="bottom center">
          <div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row"
              }}
            >
              <h3>Name : </h3> <input onChange={(text) => {
                this.setState({
                  description: text.target.value
                })
              }} placeholder="Name"></input>
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                flexDirection: "row"
              }}
            >
              <h3>Description </h3>  <textarea name="body"
                style={{
                  height: 100,
                  width: 300
                }}
                placeholder="description"
                onChange={(text) => {
                  this.setState({
                    description: text.target.value
                  })
                }} />
            </div>


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

              }}>Add</button> </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40
            }}>  <Button>Save</Button></div>

          </div>
        </Popup>
        {this.state.data.organizations &&
          this.state.data.organizations.map(org => {
            return (
              <div>
                <button
                  onClick={() => {
                    let newTab = this.state.data.organizations.filter(el => el.name != org.name)
                    let newData = this.state.data;
                    newData.organizations = newTab;

                    this.setState({
                      data: newData
                    })

                  }}
                  style={{
                    top: 10,
                    right: 20
                  }}
                >
                  <img
                    style={{
                      height: 20,
                      width: 20
                    }}
                    src={logo}
                    alt="Close"
                  />
                </button>
                <Organization
                  name={org.name}
                  desc={org.description}
                  users={org.users}
                  closePopup={this.togglePopup.bind(this)}
                />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Home;
