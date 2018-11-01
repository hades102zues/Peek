import React from 'react';


const navigationItem = (props) =>(
	<li 
	  style={{
	  	display: 'inline-block',
	    fontSize:'20px',
	    fontWeight: 'bold'
	  }}
	>
	  {props.children}
	 </li>
);

export default navigationItem;