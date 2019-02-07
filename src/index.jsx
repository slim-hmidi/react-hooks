import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/hello'

const App = () => {
    return(
      <Main />
    )
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));