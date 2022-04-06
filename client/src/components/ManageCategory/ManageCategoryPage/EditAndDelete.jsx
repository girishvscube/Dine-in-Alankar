import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import trash from "../../../Images/ManageMenu/DUSTBIN.svg"
import line from "../../../Images/ManageMenu/MIDLINE.svg"
import edit from "../../../Images/ManageMenu/EDIT ICON.svg"


const MySwal = withReactContent(Swal)

const EditAndDelete = () => {

    const sweetalert = () => {
        MySwal.fire({
          title: <strong className='sweetalert_title'>Are you sure?</strong>,
          text: "Are you sure to delete this 'category' ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText:'white',
          cancelButtonText:'Cancel',
          confirmButtonColor: 'orange',
          cancelButtonColor: 'white',
          confirmButtonText: 'Yes',
          cancelButtonClass: 'cancel_btn',
          confirmButtonClass: 'confirm_btn',
        })
        };

  return (
    <div className='flex felx-row p-3'>
                      <div className='pr-3'>
                          <img src={edit} alt='edit icon'/>
                      </div>
                      <div>
                          <img src={line} alt='midline'/>
                      </div>
                      <div className='pl-3' >
                          <img src={trash} alt='dustbin' onClick={sweetalert}/>
                      </div>
                  </div>
  )
}

export default EditAndDelete
