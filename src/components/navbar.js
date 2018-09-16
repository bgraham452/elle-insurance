import React from 'react';
import{Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import '../styles/navbar.css';
export class NavBar extends React.Component {


render(){
  return(
    <div className="nav-container">
<Navbar collapseOnSelect>
<Navbar.Toggle />
<Navbar.Collapse>
  <Nav>
 <NavItem className="nav-home" eventKey={1} href="/index">
    Home
    </NavItem>
    <NavItem className="nav-item" eventKey={2} href="/about-elle">
      All About Elle
    </NavItem>
    
    <NavDropdown eventKey={3} title="Scenarios & Advice" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1} href="/find-your-scenario">View All</MenuItem>
      <MenuItem eventKey={3.2} href="/supplemental-benefits">Supplemental Benefits</MenuItem>
      <MenuItem eventKey={3.3} href="/spousal-death">Spousal Death</MenuItem>
      <MenuItem eventKey={3.4} href="/life-insurance-for-new-parents">Life Insurance - New Parents</MenuItem>
      <MenuItem eventKey={3.5} href="/life-insurance-for-parents-with-a-2nd-child">Life Insurance - Parents w/ a 2nd child</MenuItem>
      <MenuItem eventKey={3.6} href="/retirement-plan-for-divorced-parents">Retirement for Divorced Parents</MenuItem>
      <MenuItem eventKey={3.7} href="/taking-care-of-aging-parents-and-self">Taking Care of Aging Parents</MenuItem>
      <MenuItem eventKey={3.8} href="/lack-of-automobile-coverage-after-accident">Post-Accident Automobile Coverage</MenuItem>
      <MenuItem eventKey={3.9} href="/lack-of-health-insurance">Lack of Health Insurance</MenuItem>
      <MenuItem eventKey={3.10} href="/renters-insurance">Renter's Insurance</MenuItem>
    </NavDropdown>
    <NavItem className="nav-item" eventKey={4} href="/contact">
    Contact
    </NavItem>
  </Nav>
  </Navbar.Collapse>
</Navbar>  
</div>
  );

}
}

export default NavBar;