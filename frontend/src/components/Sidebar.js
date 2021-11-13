import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import Filter from "./Filter"

const Sidebar = () => {
  return (
    <div
      style={{ display: 'flex', height: '55vh', overflow: 'scroll initial',backgroundColor:"#AEAEFC" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            GuitarShop
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/cart" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-shopping-cart">cart</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-info-circle">
                About
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar> 
      <Image alt="" src="/store1.jpg"   />
      <Image alt="" src="/store.jpg"   />
      <Image alt="" src="/store2.jpg"  />
      
    </div>
  );
};

export default Sidebar;