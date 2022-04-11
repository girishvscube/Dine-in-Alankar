import React, {useState} from 'react'
import "./style.scss"

const PPaymentForm = () => {

    const [value, setValue] = useState(1);
    const [data,setData] = useState()

    const Increment =(el)=>{
        setData(
            data.map((e) => {
                if(e.id === el.id){

                }
            })
        )
    }

    const Decrement=(id)=>{
        setValue(value-1);
    }
    
  const data1 = [
    {
        id:1,
        name: "Idly",
      stock: 50,
      price: 50,
      quantity: 1,
      status:false
    },
    {
        id:2,
      name: "Dosa",
      stock: 40,
      price: 30,
      quantity: 1,
      status:false
    },
    {
        id:3,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status:false
    },
    {
        id:4,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status:false
    },
  ];

  return (
    <div className="h-[55vh] mt-10 gap-4 flex flex-row">
      <div className=" w-2/3  mr-6 flex flex-col">
        <div className='flex flex-row'>
            <input type="text" className='text-orange pt-3 text-base w-2/4 pb-3 pl-2 outline-none bg-search rounded-md focus:ring-2 ring-button_border'/>
            <button className='pt-5 pb-5 pl-16 pr-16 ml-10 font-sans font-semibold text-white text-lg add'>Remove</button>
        </div>
       
        <div className="w-full h-4/6 mt-4 p-4 rounded-lg"></div>
      </div>
      <div className="h-[67vh] w-1/3  items_box rounded-lg  mb-4 flex flex-col">
        <div className="h-full w-full   p-3 flex flex-col  ">
          <p className="text-orange font-sans text-lg mb-2 font-semibold">Items Selected:</p>
          {data1.map((item) => {
            return (
              <div className="w-full h-7  flex  flex-row justify-between">
                <div className="w-1/6 h-full flex mt-2 mb-2 flex-col justify-between">
                  <p className="font-sans text-base">{item.name}</p>
                </div>
                <div className="w-1/6 h-full mt-2 mb-2  flex flex-col  justify-between">
                  <p className="font-sans text-base">
                    x {value}
                  </p>
                </div>
                <div className="w-1/6  flex mt-2 mb-1 flex-col  justify-between">
                  <p className="font-sans text-base">
                    &#8377; {item.price * value}
                  </p>
                </div>
                <div className=" flex gap-2 ml-24 pt-2 flex-row">
                  <button className="bg-orange  pl-2 pr-2 rounded-sm  text-white font-sans font-semibold " onClick={() => {Decrement(item.id)}}>
                    -
                  </button>
                  <p className="">{value}</p>
                  <button className="bg-orange   pl-1.5 rounded-sm  pr-1.5 text-white font-sans font-semibold "
                  onClick={()=>{
                      Increment(item.id)
                  }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
          <hr className=" mt-6 mb-4 border-2 bord" />
          <div className='flex flex-row mt-2 justify-between'>
              <p className='font-semibold font-sans text-base'>Subtotal</p>
              <p>  &#8377; 120</p>
          </div>
          <div className='flex mt-4 flex-row justify-between'>
              <p>GST &#64; 5 &#37;</p>
              <p>  &#8377; 20</p>
          </div>
          <hr className=" mt-3 mb-3 border-2 bord" />
          <div className='flex flex-row justify-between'>
              <p className='text-base font-sans font-semibold'>Total Bill :</p>
              <p>&#8377; 300</p>
          </div>
        </div>
        <div className="mb-8  flex justify-center items-center">
          <button className="font-sans add text-white pl-16 rounded-lg border-orange pr-16 pt-5 pb-5 font-semibold text-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default PPaymentForm
