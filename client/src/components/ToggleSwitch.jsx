import React from 'react'

const ToggleSwitch = () => {
  return (
    <div>
      <div className="h-6 w-12  m-auto flex justify-center  items-center">
                    <label htmlFor="toggle_switch">
                      <input
                        type="checkbox"
                        id="toggle_switch"
                        className="cursor-pointer h-6 w-12 rounded-full appearance-none border-2 border-orange defaultChecked: transition duration-200 relative "
                      />
                    </label>
                  </div>
    </div>
  )
}

export default ToggleSwitch
