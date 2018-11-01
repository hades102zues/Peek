/*simply wraps some passed children with the site's header*/

import React from 'react';


/*Components*/
import Header from '../../components/Header/Header';

const layout = (props) => (
	<> 
		 <Header />
		 {props.children}
	</>
);

export default layout;

