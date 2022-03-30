import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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
                          <img src='EDIT ICON.svg' alt='edit icon'/>
                      </div>
                      <div>
                          <img src='MIDLINE.svg' alt='midline'/>
                      </div>
                      <div className='pl-3' >
                          <img src='DUSTBIN.svg' alt='dustbin' onClick={sweetalert}/>
                      </div>
                  </div>
  )
}

export default EditAndDelete
