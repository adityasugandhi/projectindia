import React from 'react';

import ReactDOM from 'react-dom';


class App extends React.Component {
  render() {
    return (
      <div className='title'>
        <h1>Tallahassee for Indians</h1>
        <div className='sub-title'>
        <p>A place where you connect to you community, make new friends and join the events vice versa .</p>
        </div>
        
      </div>
    );
  }

}


ReactDOM.render(<App />, document.getElementById('root'));