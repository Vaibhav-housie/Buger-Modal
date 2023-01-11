import React, { useState } from 'react'
import Image from 'next/image'
import ModalDialog from '../components/ModalDialog'
import menu from '../public/menu.png'
import {elastic as Menu} from 'react-burger-menu'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
    var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      right: '0px'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  const [show,setShow]=useState(false)
  const handlestart=()=>{
    setShow(true)
  }
  return (
    <div style={{height:"80vh"}}>
      <Menu styles={styles}>
        <a id="home" href="/">Home</a>
        <a id="about"  href="/about">About</a>
        <a id="contact"  href="/contact">Contact</a>
        <a id="Settings" href="">Settings</a>
      </Menu>
    </div>
  )
}
export default App