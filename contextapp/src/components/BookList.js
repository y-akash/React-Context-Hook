import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  // this can be done only in class component
  // it specify that which context we want to use so here we are using ThemeContext
  // the name of context must be contextType
  // How it works =>
  // first it find provider of context i.e. ThemeContext
  // and it gets the data provided by the provider
  // and it takes the data and attaches to context property of this component
  static contextType = ThemeContext;
  render() { 
    // and it takes the data and attaches to context property of current component
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return ( 
      <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
}
 
export default BookList;