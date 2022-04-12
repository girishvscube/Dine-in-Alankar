import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom";
import { Button } from '../../Button';


const Button_1 = () => {
  return (
    <div className="  flex justify-between">
    <div className="flex justify-between">
      <Link to="/menu/setting/discount/create-coupon">
        <Button>Create New Coupon</Button>
      </Link>
      
    </div>
   
  </div>
  )
}

export default Button_1
