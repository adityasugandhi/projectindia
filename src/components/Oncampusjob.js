import React, { Component } from 'react';

const Oncampusjobs = (props) => {
  
  // Initializing state using props should be done in a single object
  const initialState = {
    name: props.name,
    description: props.description,
    location: props.location,
    payrange: props.payrange
  };

  // Use the 'useState' hook to manage state in a functional component
  const [state, setState] = React.useState(initialState);

  // Render your component JSX here, using 'state' to access the values

  return (
    <div>
      <h2>{state.name}</h2>
      <p>{state.description}</p>
      <h3>{state.location}</h3>
      <h3>{state.payrange}</h3>
    </div>
  );
}

export default Oncampusjobs;
