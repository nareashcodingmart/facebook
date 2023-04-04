import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hometopnav from '../../components/Hometopnav/Hometopnav'
import Homecontent from '../Homecontent/Homecontent';
import Watchpage from '../Watchpages/Watchpage';
import "./Home.css";
import Marketpage from '../Marketpage/Marketpage';
import Groupspage from "../Groupspages/Groupspage"
import Gamespage from "../Gamespage/Gamepage"
const Home = (props) => {

  return (
    <div>
      <Hometopnav />

      <div className='body'>
        <Routes>
          <Route path='/' element={<Homecontent />} />
          <Route path="/watch" element={<Watchpage />} />
          <Route path="/marketplace" element={<Marketpage />} />
          <Route path="/groups" element={<Groupspage />} />
          <Route path="/gaming" element={<Gamespage />} />

        </Routes>

        <button onClick={props.changedisplay}>logout</button>
      </div>
    </div>

  )
}

export default Home
