import * as React from 'react';
import '../../scripts/query.min.js';
import '../../scripts/bootstrap.min.js';

function Toolbar() {
  return (
    <div className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Trucos Truck
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">Inicio</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Toolbar;
