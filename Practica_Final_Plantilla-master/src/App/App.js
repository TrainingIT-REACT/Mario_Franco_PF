import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Css
import './App.css';

//Components
import Home from "./home"
import AlbumList from "./albumList"
import SongList from "./songsList"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }

super(props);

    // Bind de los métodos
    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser,
    }
  }
  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }
  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
           
              <div className="App container">
                <p>
                  <div className="row justify-content-between">
                  <div className="col-12">
                      <ul className="nav justify-content-center">
                        <li classNamenav-link="nav-item"><NavLink className="nav-link" exact activeClassName="active" to="/">Inicio</NavLink></li>
                          {' '}
                        <li classNamenav-link="nav-item"><NavLink className="nav-link" activeClassName="active" to="/albums">Albums</NavLink></li>
                        <li classNamenav-link="nav-item"><NavLink className="nav-link" activeClassName="active" to="/reproductor">Reproductor</NavLink></li>
                      
                      </ul>
                    
                  </div>
                </div>
                </p>
                <hr />
                <Route path="/" exact component={Home} />
                <Route path="/albums" component={AlbumList} />
               <Route path="/reproductor" component={SongList} />
   
                
              </div>
           
        </Router>
      </div>
    );
  }
}
export default App;
