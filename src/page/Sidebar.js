import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* Add more links for other sections as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
