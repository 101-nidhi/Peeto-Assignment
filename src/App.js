import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/UserComponent';
import { USERS } from './shared/users';
import { Button} from 'react-bootstrap';
class App extends React.Component {
  
 constructor(props)
  {
    super(props);

    this.state={
      users : USERS,
      showMenu: false
    };
  }
  componentDidMount() {
    this.setState({});
  }
  visibleMenuList=()=>
{
  console.log(" Hello Its Nidhi here");
  this.setState({
    showMenu:true
  })
}
hideMenuList=()=>
{
  console.log("Hello Nidhi is not here");
  this.setState({
    showMenu:false
  })
}
  
  render()
  {
    const {showMenu}= this.state;
    console.log("HERE", showMenu);
     
  return (
    <div className="App">
      <Navbar dark color="dark" >
        <div className="container">
          <NavbarBrand ><b><i>Welcome to Foodies Club....  :-)</i></b></NavbarBrand>
        </div>
      </Navbar>
     <Button style={{backgroundColor: "red", marginTop:10,position:"center"}} onClick={this.visibleMenuList}>Show Menu List</Button>
     &nbsp;
     &nbsp;
     <Button style={{backgroundColor: "green", marginTop:10,position:"center"}} onClick={this.hideMenuList}>Hide Menu List</Button>
     { showMenu ? <Menu users={this.state.users}/> : null}
    </div>
  );
  }
}

export default App;
