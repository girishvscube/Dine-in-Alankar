import React from 'react'

const Switch = () => {
  return (
    <div>
    <div className="h-6 w-12 flex">
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

export default Switch
