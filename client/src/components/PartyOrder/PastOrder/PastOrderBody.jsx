import React from 'react'
import PastOrderButton from './PastOrderButton';
import PastOrderList from './PastOrderList'
import PastOrderTable from './PastOrderTable';
import "./style.scss";

const PastOrderBody = () => {
  return (
    <div className="h-[88vh] pt-6 pl-12 mt-2 pr-8 bg-darkwhite overflow-y-scroll">
    <PastOrderList/>
    <hr className=" mt-3 mb-6 border-2 bord" />
    <PastOrderButton/>
    <PastOrderTable/>
</div>
  )
}

export default PastOrderBody
