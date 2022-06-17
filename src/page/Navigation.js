import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faHistory } from "@fortawesome/free-solid-svg-icons";






const tabs = [{
    route: "/search",
    icon: faSearch,
    label: "Search"
    },{
    route: "/",
    icon: faHome,
    label: "Home",
  },
  {
    route: "/history",
    icon: faHistory,
    label: "History",
  },
];

const Navigation = (props) => {
  return (
    <div>
      {/* Bottom Tab Navigator*/}

      <nav
        className="navbar fixed-bottom navbar-light bottom-tab-nav "
        role="navigation"
      >
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="iconcontainer">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};
export default Navigation;
