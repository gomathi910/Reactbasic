import React, { createContext, useState } from 'react'


export const ProviderContext = createContext
export const Provider = ({children}) => {
    const [UserData, setUserData] = useState({name:"",email:"",password:""});

  return (
<ProviderContext.Provider value = {{UserData,setUserData}}>
    {children}
</ProviderContext.Provider>
  )
}
