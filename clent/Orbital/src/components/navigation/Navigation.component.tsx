import type React from "react";
import { Nav, Navbar } from "react-bootstrap";
import Avatar from "../avatar/Avatar.component";
import "./Navigation.style.css";
import type { NavigationData } from "./Navigation.type";

const Navigation: React.FC<NavigationData> = ({ sidebarItems, avatar, icons }) => {
  return (
    <>
      <Navbar className="p-3 navbar-sm" >
        <Navbar.Brand>WorkBase</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav navigation-bar" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
              sidebarItems.map((item, index) => {
                return (
                  <Nav.Link href={item.route} key={index}>{item.name}</Nav.Link>
                )
              })
            }
          </Nav>
          <Nav>
            {icons && icons.map((iconItem, index) => {
              return (
                <img key={index} src={iconItem.icon as string}
                  alt={iconItem.name} className="nav-icon mx-2 my-2 icon" 
                  onClick={iconItem.action} />
              )
            })}
            <Avatar avatar={avatar} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation