import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Hometopnav from '../../components/Hometopnav/Hometopnav'
import Homecontent from '../Homecontent/Homecontent';
import Watchpage from '../Watchpages/Watchpage';
import "./Home.css";
import Marketpage from '../Marketpage/Marketpage';
import Groupspage from "../Groupspages/Groupspage"
import Gamespage from "../Gamespage/Gamepage"
import Profilepage from '../Profilepage/Profilepage';
const Home = () => {
  return (
    <div>
      <Hometopnav />

      <div className='body'>
        <Routes>
          <Route path='/' element={<Homecontent />} />
          <Route path="/watch" element={<Watchpage />} />
          <Route path="/watch/:id" element={<Watchpage/>}/>
          <Route path="/marketplace" element={<Marketpage />} />
          <Route path="/groups" element={<Groupspage />} />
          <Route path="/gaming" element={<Gamespage />} />
          <Route path="/profile" element={<Profilepage/>}/>
          <Route path="/profile/:id" element={<Profilepage/>}/>
        </Routes>
      </div>
    </div>

  )
}

export default Home
