import axios from "axios";
import React, { useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import "./style.scss";


const PPayment = () => {
  const postdata = JSON.parse(localStorage.getItem("partypostdata"));
  console.log(postdata, "postdata");

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");

  const [PartyCart, setPartyCart] = useState(postdata.items);

  const [value, setValue] = useState(1);
  const [data, setData] = useState();

  var a = PartyCart.map((item) => {
    return item.price * item.quantity;
  });
  var s = 0;
  a.map(function (x) {
    s += x;
  });
  console.log(s, "s");

  // const Increment = (el) => {
  //   setData(
  //     data.map((e) => {
  //       if (e.id === el.id) {
  //       }
  //     })
  //   );
  // };

  const Increment = (el) => {
    // setData(
    //   data1.map((e) => {
    //     if (e.id === el) {
    //      console.log(el.id)
    //     }
    //   })
    // );

    data1.map((e) => {
      if (e.id === el) {
        e.quantity = e.quantity + 1;
      }
    });
  };
  console.log("data", data);

  const Decrement = (id) => {
    setValue(value - 1);
  };

  const data1 = [
    {
      id: 1,
      name: "Idly",
      stock: 50,
      price: 50,
      quantity: 1,
      status: false,
    },
    {
      id: 2,
      name: "Dosa",
      stock: 40,
      price: 30,
      quantity: 1,
      status: false,
    },
    {
      id: 3,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status: false,
    },
    {
      id: 4,
      name: "Puri",
      stock: 20,
      price: 40,
      quantity: 1,
      status: false,
    },
  ];

  const obj = {
    name: "Ganguly",
    phone: "8762331996",
    email: "test@scube.me",
    order_type: 2,
    total_persons: "3",
    instructions: "good",
    table_id: 2,
    items: [
      {
        menu_id: 1,
        quantity: 2,
      },
      {
        menu_id: 1,
        quantity: 3,
      },
    ],
  };

  const i = PartyCart.map((item) => {
    return {
      menu_id: item.id,
      quantity: item.quantity,
    };
  });

  const handleClick = () => {
    postdata.items = i;
    console.log(postdata, "postdata");

    axios
      .post(`${BASE_URL}/admin/orders`, postdata, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const increaseQuantity = (product) => {
    const exist = PartyCart.find((x) => x.id === product.id);

    if (exist) {
      setPartyCart(
        PartyCart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setPartyCart([...PartyCart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const exist = PartyCart.find((x) => x.id === product.id);
    if (exist.quantity > 1) {
      if (exist) {
        setPartyCart(
          PartyCart.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
          )
        );
      } else {
        setPartyCart([...PartyCart, { ...product, quantity: 1 }]);
      }
    }
  };

  return (
    <div className="h-[88vh]  pr-8 bg-darkwhite overflow-y-scroll">
      <div className="h-[55vh]gap-4 flex flex-row">
        <div className=" w-2/3  mr-6 flex flex-col">
          <div className="flex h-14  flex-row">
            <Text className="w-96 mt-0.5" />
            <Button text="Remove" className="pl-14 pr-14 ml-10"></Button>
          </div>

          <div className="w-full h-4/6 mt-4 p-4 rounded-lg"></div>
        </div>
        <div className="h-[67vh] w-1/3  items_box rounded-lg  mb-4 flex flex-col">
          <div className="h-full w-full   p-3 flex flex-col  ">
            <p className="text-orange font-sans text-lg mb-2 font-semibold">
              Items Selected:
            </p>
            {PartyCart.map((item) => {
              return (
                <div className="w-full h-7  flex  flex-row justify-between">
                  <div className="w-1/6 h-full flex mt-2 mb-2 flex-col  justify-between">
                    <p className="font-sans text-base">{item.name}</p>
                  </div>
                  <div className="w-1/6 h-full mt-2 mb-2  flex flex-col  justify-between">
                    <p className="font-sans text-base">x {item.quantity}</p>
                  </div>
                  <div className="w-1/6  flex mt-2 mb-1 flex-col  justify-between">
                    <p className="font-sans text-base">
                      &#8377; {item.price * item.quantity}
                    </p>
                  </div>
                  <div className=" flex gap-2 ml-24 pt-1 flex-row">
                    <button
                      className="bg-orange  pl-2 pr-2 rounded-sm  text-white font-sans font-semibold "
                      onClick={() => {
                        decreaseQuantity(item);
                      }}
                    >
                      -
                    </button>
                    <p className="">{item.quantity}</p>
                    <button
                      className="bg-orange   pl-1.5 rounded-sm  pr-1.5 text-white font-sans font-semibold "
                      onClick={() => {
                        increaseQuantity(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
            <hr className=" mt-6 mb-4 border-2 bord" />
            <div className="flex flex-row mt-2 justify-between">
              <p className="font-semibold font-sans text-base">Subtotal</p>
              <p> &#8377; {s}</p>
            </div>
            <div className="flex mt-4 flex-row justify-between">
              <p>GST &#64; 5 &#37;</p>
              <p> &#8377; {s * (5 / 100)}</p>
            </div>
            <hr className=" mt-3 mb-3 border-2 bord" />
            <div className="flex flex-row justify-between">
              <p className="text-base font-sans font-semibold">Total Bill :</p>
              <p>&#8377;{s + s * (5 / 100)}</p>
            </div>
          </div>
          <div className="mb-8  flex justify-center items-center">
            <Button
              text="Create & send invoice"
              className="pl-14 pr-14"
              onClick={handleClick}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPayment;
