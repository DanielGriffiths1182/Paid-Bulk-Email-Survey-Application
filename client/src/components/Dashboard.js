import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <p>Hello</p>
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" exact to='/surveys/new'>
          <i className="material-icons">control_point</i>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;
