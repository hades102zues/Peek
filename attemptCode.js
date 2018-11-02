
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
		 