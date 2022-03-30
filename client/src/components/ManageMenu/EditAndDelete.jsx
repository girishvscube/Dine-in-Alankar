import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../style.scss';

const MySwal = withReactContent(Swal)

const EditAndDelete = () => {

    const sweetalert = () => {
      MySwal.fire({
        title: 'Are you sure?',
        text: "Are you sure to delete this 'menu'?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText:'white',
        confirmButtonColor: 'orange',
        cancelButtonColor: 'green',
        confirmButtonText: 'Yes'
      })
      };

  return (
    <div>
       <div className="flex w-11/12  h-10     ">
                    <div className="w-6/12 h-full  ">
                      <img src="EDIT ICON.svg" className='mt-1' alt="edit icon" />
                    </div>
                    <div className="h-full">
                      <img src="MIDLINE.svg" alt="midline" className='ml-3 mr-3' />
                    </div>
                    <div className="w-5/12 h-full  ">
                      <img
                        src="DUSTBIN.svg"
                        onClick={sweetalert}
                        alt="trash icon"
                        className='mt-1'
                      />
                    </div>
                  </div>
    </div>
  )
}

export default EditAndDelete
