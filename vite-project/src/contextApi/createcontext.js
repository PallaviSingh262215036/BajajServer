import React from 'react'

// Create the context with a defualt value (theme:'light')
const createcontext= React.createContext({
 theme:'light',
 toggleTheme: ()=>{}
});
export default createcontext;
