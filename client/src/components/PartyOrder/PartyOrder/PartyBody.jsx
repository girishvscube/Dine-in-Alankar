import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom"
import PartyTable from './PartyTable';
import PartyList from './PartyList';
import PartyButtons from './PartyButtons';


const PartyBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
        <PartyList/>
        <hr className=" mt-3 mb-6 border-2 bord" />
        <PartyButtons/>
         <PartyTable/>
    </div>
  )
}

export default PartyBody
