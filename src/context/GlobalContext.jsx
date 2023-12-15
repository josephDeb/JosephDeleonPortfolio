/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const defaultVal = {}
export const AppContext = createContext(defaultVal)


const GlobalContext = ({children}) => {
    const [isOn, setIsOn] = useState(false)

    const values = {
        setIsOn,
        isOn
    }
  return (
    <AppContext.Provider value={values}>
    {children}
  </AppContext.Provider>
  )
}

export default GlobalContext