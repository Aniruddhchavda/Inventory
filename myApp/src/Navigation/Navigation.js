import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,Button} from 'react-bootstrap';

let url='http://localhost:53535/api/';


export class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state = {
          isCertificationOn: this.props.isCertificationOn
        };
      }

    render(){
        return(
            <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
                
            <Navbar.Brand href="/">
                 <img
                 alt=""
                 src="assets/ttus.png"
                width="400"
                height="50"
             />
            </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
               
                {this.state.isCertificationOn &&
                <NavLink className="d-inline p-2 bg-dark text-white" to="/certification">
                    Certification
                </NavLink>
                }
                <NavLink className="d-inline p-2 bg-dark text-white" to="/inventory">
                    Inventory
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/surplus">
                    Surplus
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/scan">
                    Scan
                </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}