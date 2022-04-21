import React,{useState} from 'react'
import "./style.scss";


const Plus = () => {

    const [serviceList, setServiceList] = useState([{ service: "" }]);

    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...serviceList];
      list[index][name] = value;
      setServiceList(list);
    };
  
    const handleServiceRemove = (index) => {
      const list = [...serviceList];
      list.splice(index, 1);
      setServiceList(list);
    };
  
    const handleServiceAdd = () => {
      setServiceList([...serviceList, { service: "" }]);
    };

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
      
        {serviceList.map((singleService, index) => (
            
          <div key={index} className=" ">
              <p className='text-sm font-sans font-semibold mb-1'>Enter Sub - Category Name</p>
            <div className='flex flex-row'>
            <div className="first-division">
                
                <input
                  name="service"
                  type="text"
                  id="service"
                  className='bg-search h-12'
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  required
                />
                {serviceList.length - 1 === index && serviceList.length < 3 && (
                  <button
                    type="button"
                    onClick={handleServiceAdd}
                    className="bg-search rounded-lg"
                  >
                    <span className='text-orange font-bold text-3xl'>+</span>
                  </button>
                )}
              </div>
              <div className="second-division">
                {serviceList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleServiceRemove(index)}
                    className="add h-12 pl-4 pr-4"
                  >
                    <span className='font-sans font-semibold text-white text-sm '>Remove</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </form>
  )
}

export default Plus
