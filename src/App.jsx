import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function UserItem(props) {
  return <div className="user-item">{props.name}</div>;
}

function FooterItem(props) {
  return <div className="footer-item">{props.text}</div>;
}


function App() {
  return (
    <div className="app-container">
        <div className="header-row">
            <div className="header-spacer"></div>
            <div className="header-user-group">
              <UserItem name="Amaro Juno" />
              <UserItem name="Alonzo" />
            </div>
            <div className="header-spacer"></div>
        </div>

        <div className="main-content-row">
            <div className="primary-box"></div>
            <div className="sidebar-stack">
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
            </div>
        </div>


        <div className="footer-row">
            <div className="footer-wing"></div>
            <FooterItem text="C-PEITEL3" />
            <FooterItem text="IT3A" />
            <div className="footer-wing"></div>
        </div>
    </div>
  )
}

export default App