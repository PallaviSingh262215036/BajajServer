import React , {useState} from 'react';
import createcontext from './createcontext';

function ContextProvider({children}){
    const[theme,setTheme]=useState('light');

    const toggleTheme=()=>{
      setTheme((prevTheme) =>(prevTheme === 'light'? 'dark' : 'light'))
    };
    return(
        <ContextProvider.provider value={{theme, toggleTheme}}>
            {children}
        </ContextProvider.provider>
    );
}
export default ContextProvider;