import "./createneworder.scss";
import search from "../../Images/ActiveOrder/Search_fill.png";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "../Button";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import { useState, useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export const ActiveOrderAddItems = () => {
  const [categories, setCategories] = useState([]);
  const [specficData, setSpecficData] = useState([]);
  const [select, setSelect] = useState("");
  const [menu, setMenu] = useState([]);

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

  const i = cart.map((item) => {
    return {
      menu_id: item.id,
      quantity: item.quantity,
    };
  });
  // console.log(i);

  

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
        // console.log("Error in getting categories Data", error);
      });
  };

  //get Categories wise data
    
      console.log("sekect data", select);

  const CategoryData = () => {
    axios
      .get(`${BASE_URL}/admin/menus?page=1`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Specfic Category Data :", res.data.data);
        setMenu(res.data.data);
      })
      .then((err) => {
        // console.log("Error in Specfic Category Data :", err);
      });
  };

  const specficCategoryData = () => {
    axios
      .get(`${BASE_URL}/category-data?id=${select}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Specfic Category Data :", res.data.data[0].menus);
        setSpecficData(res.data.data[0].menus);
      })
      .then((err) => {
        console.log("Error in Specfic Category Data :", err);
      });
  };

  console.log("specific data by selecting", specficData);

 

  useEffect(() => {
    CategoryData();
    getCategory();
    specficCategoryData();
  }, [select]);

  const handleClick = () => {
    const customerDetail = JSON.parse(localStorage.getItem("customerDetails"));
    //localStorage.removeItem("customerDetails");

    const postdata = {
      ...customerDetail,
      items: i,
      instructions: instructions,
    };
    console.log("merging data", postdata);
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

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  console.log("selected data", select);

  const AddItem = (id) => {
    // console.log(id);
    const menu = specficData.filter((item) => {
      return item.id === id;
    });

    const existInCart = cart.find((x) => x.id === id);
    console.log("existInCart:", existInCart);

    if (existInCart) {
      existInCart.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...menu[0], quantity: 1 }]);
    }
  };

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
    const i = cart.indexOf(product);

    const exist = cart.find((x) => x.id === product.id);

    if (exist.quantity === 1) {
      cart.splice(i, 1);
    }

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  

 
  return (
    <div className="addItemsContainer  h-[59vh] overflow-y-scroll">
      <div className="pl-11 pr-16">
        <div className="searchGrid bg-search rounded-xl">
          <input
            className="h-16  bg-search rounded-xl outline-none pl-7 placeholder:text-darkyellow placeholder:font-semibold"
            type="text"
            placeholder="Search"
          />
          <img className=" relative top-3" src={search} alt="search" />
        </div>

        <div className="w-2/5 flex flex-col gap-2 float-right mt-6">
          <p className=" font-semibold text-lg">Category</p>
         
          <Select value={select}
            onChange={handleSelect}  className="w-full rounded-lg  text-xl font-semibold text-orange bg-white border-2 border-button_border pl-4 outline-none">

            {categories.map((e, index) => (
              <MenuItem style={{color:"##F0912C"}} key={index + 1} value={e.id}>
                {e.name}
              </MenuItem>
            ))}
         
          </Select>
         
        
        </div>
        <div className=" clear-both"></div>

        <div className="relative bottom-8    ">
          <h2 className=" text-[26px] font-bold text-darkyellow mb-7">
            All Orders
          </h2>
          <div className="bg-white p-4 rounded-lg w-full h-96 overflow-y-scroll">
            <Table >
              <Thead className="sticky top-0 border-b-1 border-button_border mb-1 z-4 bg-white head ">
                <Tr className="">
                  <Th className="">Item Name</Th>
                  <Th className="">Stock Left</Th>
                  <Th className="pl-4">Price</Th>
                  <Th className=" ">Quantity</Th>
                </Tr>
              </Thead>
              
              {specficData.length>0 ? 
               specficData.map((item,index)=>(
                 <Tbody className="">
                 <Tr key={index + 1} className="row border-b-1 border-button_border font-sans">
                   <Td className="pt-9 pl-12 pb-9">{item.name}</Td>
                   <Td className="">
                     <p className="font-sans pl-10 text-sm">
                       {item.availability_count}
                     </p>
                   </Td>
                   <Td className="pl-8 ">{item.price}</Td>
                   <Td>
                     <div className="flex pl-16 gap-2">
                       <button onClick={() => AddItem(item.id)}>
                         Add Item
                       </button>
                     </div>
                   </Td>
                 </Tr>
               </Tbody>
              ))
              :
              
                menu.map((item, index)=>(
                  <Tbody className="">
                  <Tr key={index + 1} className="row border-b-2  font-sans">
                    <Td className="pt-9 pl-12 pb-9">{item.name}</Td>
                    <Td className="">
                      <p className="font-sans pl-10 text-sm">
                        {item.availability_count}
                      </p>
                    </Td>
                    <Td className=" pl-8 ">{item.price}</Td>
                    <Td>
                      <div className="flex pl-16 gap-2">
                        <button onClick={() => AddItem(item.id)}>
                          Add Item
                        </button>
                      </div>
                    </Td>
                  </Tr>
                </Tbody>
                ))
              }
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
              <div className={` flex gap-2 justify-between`}>
                <p className="w-28">{item.name}</p>
                <p>×{item.quantity}</p>

                <p>₹{item.quantity * item.price}</p>
                {/* <p>{item.quantity}</p> */}

                <RemoveIcon
                  className="cursor-pointer bg-darkyellow text-white"
                  fontSize="small"
                  onClick={() => decreaseQuantity(item, item.index)}
                />
                <p>{item.quantity}</p>

                <AddIcon
                  className="cursor-pointer bg-darkyellow text-white"
                  fontSize="small"
                  onClick={() => increaseQuantity(item)}
                />
              </div>
            );
          })}
        </div>

        <p>Special Instructions</p>
        {/* <p className="w-full h-28 bg-search">para</p> */}
        <input
          type="text"
          className="w-full h-28 bg-search"
          onChange={handleInstructions}
        />

        {/* <button
          className="w-1/12 h-16 font-semibold text-xl text-white orangeBackground absolute bottom-14 right-[20%]"
          onClick={handleClick}
        >
          Create
        </button> */}
        <Button text="Create" className="absolute bottom-14 w-1/12 right-[14%]"/>
      </div>
    </div>
  );
};
