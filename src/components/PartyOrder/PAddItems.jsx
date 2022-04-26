import "./createneworder.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { useState, useEffect } from "react";

const PAddItems = () => {
  const [categories, setCategories] = useState([]);
  const [specficData, setSpecficData] = useState([]);
  const [select, setSelect] = useState("");

  const [instructions, setInstructions] = useState("");

  const handleInstructions = (e) => {
    console.log(e.target.value);
    setInstructions(e.target.value);
  };

  var obj = [
    {
      name: "Rawa Idly",
      qty: 1,
      price: 60,
    },
    {
      name: "Rawa Idly",
      qty: 1,
      price: 60,
    },
    {
      name: "Rawa Idly",
      qty: 1,
      price: 60,
    },
  ];
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("alankartoken");

  const [cart, setCart] = useState([]);

  console.log("cccart", cart);

  useEffect(() => {
    getCategory();
    specficCategoryData();
  }, []);

  // specficData.map(function (e) {
  //   e.status = false;
  //   e.quantity = 0;
  // });
  //get All Categories
  const getCategory = () => {
    axios
      .get(`${BASE_URL}/admin/categories`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data.data.data);
        setCategories(res.data.data.data);
      })
      .then((error) => {
        console.log("Error in getting categories Data", error);
      });
  };

  //get Categories wise data

  const specficCategoryData = () => {
    axios
      .get(`${BASE_URL}/admin/menus?page=1`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Specfic Category Data :", res.data.data);
        setSpecficData(res.data.data);
      })
      .then((err) => {
        console.log("Error in Specfic Category Data :", err);
      });
  };

  const handleClick = () => {
    const customerDetail = JSON.parse(localStorage.getItem("partyOrderData"));
    //localStorage.removeItem("customerDetails");
    const postdata = {
      ...customerDetail,
      items: cart,
      instructions: instructions,
      email: "admin@scube.me",
    };
    //console.log("merging data", postdata);
    localStorage.setItem("partypostdata", JSON.stringify(postdata));
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  console.log(specficData);

  // const handleClickAdd = (el) => {
  //   setSpecficData(
  //     specficData.map((item) => {
  //       if (item.id === el.id) {
  //         item.quantity = item.quantity + 1;
  //       }
  //       return el;
  //     })
  //   );
  // };

  // const handleClickRemove = (el) => {
  //   setSpecficData(
  //     specficData.map((e) => {
  //       if (e.id === el.id && e.quantity > 1) {
  //         return {
  //           ...e,
  //           quantity: e.quantity - 1,
  //         };
  //       }
  //       return e;
  //     })
  //   );
  // };

  //console.log(specficData);

  // Mine

  const AddItem = (id) => {
    console.log(id);
    const menu = specficData.filter((item) => {
      return item.id === id;
    });
    // console.log(menu);
    const newCart = [...cart, menu[0]];
    const c = newCart.map((item) => {
      return {
        ...item,
        quantity: 1,
      };
    });
    // console.log(c);
    setCart(c);
  };

  // const [quantity, setQuantity] = useState(1);

  // const onAdd = (product) => {
  //   const exist = cart.find((x) => x.id === product.id);
  //   console.log(exist, "selected");
  //   if (exist) {
  //     setCart(
  //       cart.map((x) => (x.id === product.id ? { ...exist, quantity: 1 } : x))
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };

  const increaseQuantity = (product) => {
    const exist = cart.find((x) => x.id === product.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.quantity > 1) {
      if (exist) {
        setCart(
          cart.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    }
  };

  return (
    <div className="addItemsContainer  h-[59vh] overflow-y-scroll">
      <div className=" pr-16">
        <div className="searchGrid bg-search">
          <input
            className="h-16 bg-search rounded-xl outline-none pl-7 placeholder:text-darkyellow placeholder:font-semibold"
            type="text"
            placeholder="Search"
          />
          <img className=" relative top-3" src={search} alt="search" />
        </div>

        <div className="w-2/5 flex flex-col gap-2 float-right mt-6">
          <p className=" font-semibold text-lg">Category</p>
          <select
            className="w-full py-3 text-xl font-semibold text-darkyellow bg-white rounded-[10px] border-2 border-darkyellow pl-4"
            value={select}
            onChange={handleSelect}
          >
            {categories.map((e, index) => (
              <option key={index + 1} value={e.name}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <div className=" clear-both"></div>

        <div className="relative bottom-8    ">
          <h2 className=" text-[26px] font-bold text-darkyellow mb-7">
            All Orders
          </h2>
          <div className="bg-white w-full h-96 overflow-y-scroll">
            <Table>
              <Thead className="sticky top-0 border-b-2 mb-1 z-20 bg-white head ">
                <Tr className="">
                  <Th className="">Item Name</Th>
                  <Th className="">Stock Left</Th>
                  <Th className="">Price</Th>
                  <Th className=" ">Quantity</Th>
                </Tr>
              </Thead>
              {specficData.map((item, index) => (
                <Tbody>
                  <Tr key={index + 1} className="row border-b-2 font-sans">
                    <Td className="pt-9 pb-9">{item.name}</Td>

                    <Td className="text-left pl-12">
                      <p className="font-sans text-sm">
                        {item.availability_count}
                      </p>
                    </Td>
                    <Td className="pl-12 text-left ">{item.price}</Td>
                    <Td>
                      <div className="flex gap-2">
                        <button onClick={() => AddItem(item.id)}>
                          Add Item
                        </button>

                        {/* <RemoveIcon
                          className=" bg-darkyellow text-white"
                          fontSize="small"
                          onClick={() => {
                            handleClickRemove(e);
                          }}
                        /> */}

                        {/* <p className="text-sm">{e.quantity}</p> */}

                        {/* <AddIcon
                          onClick={() => {
                            handleClickAdd(e);
                          }}
                          className=" bg-darkyellow text-white"
                          fontSize="small"
                        /> */}
                      </div>
                    </Td>
                  </Tr>
                </Tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>

      <div>
        <p className=" text-2xl font-semibold text-darkyellow">
          Items Selected
        </p>

        <div>
          {cart.map((item) => {
            return (
              <div className="flex gap-2 justify-between">
                <p className="w-28">{item.name}</p>
                <p>×{item.quantity}</p>

                <p>₹{item.quantity * item.price}</p>
                {/* <p>{item.quantity}</p> */}

                <RemoveIcon
                  className=" bg-darkyellow text-white"
                  fontSize="small"
                  onClick={() => decreaseQuantity(item)}
                />
                <p>{item.quantity}</p>
                <AddIcon
                  className=" bg-darkyellow text-white"
                  fontSize="small"
                  onClick={() => increaseQuantity(item)}
                />
              </div>
            );
          })}
        </div>
        {/* <div>
          {obj.map((e, index) => (
            <div key={index + 1} className="flex gap-4">
              <p>{e.name}</p>
              <p>{e.qty}</p>
              <p>{e.price}</p>
            </div>
          ))}
        </div> */}
        <p>Special Instructions</p>
        {/* <p className="w-full h-28 bg-search">para</p> */}
        <input
          type="text"
          className="w-full h-28 bg-search"
          onChange={handleInstructions}
        />
        <button
          className="w-1/12 h-16 font-semibold text-xl text-white orangeBackground absolute bottom-14 right-[20%]"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PAddItems;
/*
Table className="relative">
          <Thead className="sticky top-0 border-b-2 mb-1 z-20 bg-white head ">
            <Tr className=" text-left text-lg ">
              <Th className="font-sans pb-2">S. No.</Th>
              <Th className="font-sans pl-10 pb-2">Item Name</Th>
              <Th className="font-sans pl-12 pb-2">Price</Th>
              <Th className="font-sans pb-2 pl-12">Category</Th>
              <Th className="font-sans pl-12 pb-2">Today's Stock</Th>
              <Th className="font-sans pb-2 pl-6">Availability</Th>
              <Th className="font-sans pb-2 pl-6">Action</Th>
            </Tr>
          </Thead>
          {data.map((data, i) => {
            return (
              <Tbody>
                <Tr className="row border-b-2 font-sans">
                  <Td key={i} className="pt-9 pb-9">
                    {number++}.
                  </Td>
                  <Td key={i} className=" text-left pl-12 ">
                    <img
                      src={data.image}
                      className="h-12 w-12"
                      alt="item image"
                    />
                    {data.name} &#40;{data.availability_count}&#41;
                  </Td>
                  <Td key={i} className="text-left pl-12">
                    <p className="font-sans text-sm">
                      &#8377; {data.dinein_price} &#40; Dine - In &#41;
                    </p>
                    <p className="font-sans text-sm">
                      &#8377; {data.takeaway_price} &#40; Take Away &#41;
                    </p>
                  </Td>
                  <Td key={i} className="pl-12 text-left ">
                    {data.category.name}
                  </Td>
                  <Td key={i} className="  pl-12 ">
                    <div className="flex flex-row update">
                      <input
                        onClick={handleClick}
                        type="number"
                        className="w-14 h-9 rounded pl-1 pr-1 outline-none border-2 border-button_border"
                      />
                      {value ? (
                        <div>
                          <button className="adding ml-3 text-xs text-white font-semibold pl-1.5 pr-1.5 pt-2.5 pb-2.5">
                            Update
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button className="add ml-3 text-xs text-white font-semibold pl-2 pr-2 pt-2.5 pb-2.5">
                            Update
                          </button>
                        </div>
                      )}
                    </div>
                  </Td>
                  <Td key={i} className="pr-24 ">
                    <ToggleSwitch />
                  </Td>
                  <Td className=" flex justify-center pr-12 pt-6 ">
                    <EditAndDelete />
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
*/
