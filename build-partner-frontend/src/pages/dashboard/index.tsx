import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../../components/Header';

function Dashboard() {
    return (
      <div >
        <Header tabValue="dashboard" />
        <p>HAHA FROM DASHBOARD</p>
      </div>
    );
}

export default Dashboard;