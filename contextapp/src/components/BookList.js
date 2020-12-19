import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  render() { 
    // we can also access the context with the help of consumer
    // This approach can also be use in functional component
    // the benefit of this approach is we can consume multiple context in one component
    // so we use <ThemeContext.Consumer>
    // and inside that we provide function which take context as argument.
    // and also we return tha jsx in that function
    <ThemeContext.Consumer> { (context)=>{
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
    }}</ThemeContext.Consumer>
  }
}
 
export default BookList;