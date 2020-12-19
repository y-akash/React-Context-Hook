import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    // the below state which we want to provide to different component
    state = {
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }
    render() { 
        // when we create context, we have also want to create provider
        // provider is a tag, that surrounds whatever component we want to use that context
        // so here we return jsx which contain ThemeContext provider tag
        // that tag is provided by context itselt i.e. ThemeContext
        // in provider tag, we have to specify value property
        // this value property is going to take data 
        // that data is going to provide to the different components which are wrapped 
        return (            
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;