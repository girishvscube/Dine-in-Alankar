import React from 'react'
import "./style.scss";

const HeaderNav = () => {
  return (
    <div className='w-full header shadow-xl'>
        <div className='w-2/12 h-full  float-right'>
            <div className='w-10/12 ml-5 h-full  flex flex-row'>
                <div className='h-full w-1/3 flex items-center justify-center'>
                    <img src="people.png" className='self-center' alt='People icon'/>
                </div>
                <div className='h-full w-8/12 flex items-center pl-2 justify-center'>
                    <div className='w-full h-1/2 flex justify-center flex-col'>
                        <div className='font-sans font-semibold text-left text-lg'>Ramya</div>
                        <div className='font-sans font-xs text-left'>Super admin</div>
                    </div>
                </div>
                <div className='h-full w-2/12  flex items-center justify-center'>
                    <img src="Down_arrow.png" alt="Down_arrow"/>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default HeaderNav;
