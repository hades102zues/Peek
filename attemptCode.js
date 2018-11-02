
		 //gets the stories for each id
		 .then(()=>{
		 	idList.map((id)=>{

		 		//convert id to a string
		 		const idString = id.toString();
		 		//create the url
		 		const url = `item/${idString}/.json`;

		 		//get the story for the url
		 		axios.get(url)
			 		.then((response)=>{
			 			//save the story object inside the stories array
			 			stories.push(response.data);
			 		})
			 		.catch((error)=>console.log(error));

		 		;


		 		return id;

		 	});
		 })
		 //for each id we will pull the corresponding data
	 idList.map((id)=>{
	 	console.log('hel');
	 	const idString=id.toString();
	 	const url = `item/${idString}/.json`;
	 	
	 	return id;
	 	//axios.get('')
	 });


	<p>
				  	 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
				  	 sed do eiusmod tempor incididunt ut labore et dolore magna 
				  	 aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
				  	 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
	</p>