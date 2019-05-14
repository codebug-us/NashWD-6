$(document).ready(function(){
  // Your javascript goes here
  ///////////////////////////////////
  //////////// Rockets! /////////////
  ///////////////////////////////////
  var rocket = {
  	color: "white",
  	maker: "SpaceX",
  	model: "Dragon",
  	engine: "Merlin",
  	hasGas: true,
  	hasTires: false
  };

  var rocketKeys = Object.keys(rocket);
  for(var i=0;i<rocketKeys.length;i++){
    console.log(rocket[rocketKeys[i]]);
  }



////////////////////////////////////

/////////////////////////////////////
////////// Shoes in Stock! /////////
///////////////////////////////////
  var shoesInStock = {
  	nike: 100,
  	adidas: 48, 
  	puma: 208,
  	toms: 81, 
  	prada: 4, 
  	gucci: 2077
  };
  var shoeKeys = Object.keys(shoesInStock);
  for(var i=0;i<shoeKeys.length;i++){
    console.log("We have "+ shoesInStock[shoeKeys[i]]+" "+shoeKeys[i]+ " shoes in stock!");
  }
  var shoeCount=0;
  for(i=0;i<shoeKeys.length;i++){
    shoeCount=shoeCount+shoesInStock[shoeKeys[i]];
  }
  console.log(shoeCount);



  //////////////////////////////////////

  /////////////////////////////////////
  //////////////// Vandy /////////////
  ///////////////////////////////////
  var vanderbilt = {
  	founded: 1873, 
  	location: "Nashville", 
  	acceptanceRate: 11,
  	undergradEnrollment: 6844,
  	endowment: 6400000000,
  	chancellor: "Nicholas Zeppos",
  	bestStudentEver: "McArthur Gill"
  };

  //change nums to strings
  var vandyKeys=Object.keys(vanderbilt);
  for(i=0;i<vandyKeys.length;i++){
    if(true!=isNaN(vanderbilt[vandyKeys[i]])){
      //convert to num
      // vanderbilt[vandyKeys[i]]=parseInt(vanderbilt[vandyKeys[i]]);
       vanderbilt[vandyKeys[i]]=vanderbilt[vandyKeys[i]].toString();
    }
  }
  console.log(vanderbilt.founded);
  console.log(vanderbilt.location);
  console.log(vanderbilt.endowment);





  //////////////////////////////////////


  /////////////////////////////////////
  //////////////// Pats //////////////
  ///////////////////////////////////
  var patriots = {
  	headCoach: "bill_belichick",
  	location: "new_england",
  	owner: "robert_kraft",
  	quarterback: "tom_brady",
  	runningBack: "sony_michel",
  	backupQB: "jarrett_stidham"
  };
  var patriotKeys=Object.keys(patriots);
  var firstPart;
  var secondPart;
  for(i=0;i<patriotKeys.length;i++){
    firstPart=patriots[patriotKeys[i]].substring(0,(patriots[patriotKeys[i]].indexOf("_")));
    secondPart=patriots[patriotKeys[i]].substring(patriots[patriotKeys[i]].indexOf("_")+1);
    firstPart=(firstPart.charAt(0).toUpperCase())+(firstPart.substring(1));
    secondPart=(secondPart.charAt(0).toUpperCase())+(secondPart.substring(1));
    console.log("The "+ patriotKeys[i]+ " is "+firstPart+" "+secondPart);
  }





  //////////////////////////////////////

  /////////////////////////////////////
  //////////////// Barb //////////////
  ///////////////////////////////////
  var barb = {
	  name: "Barbara Smith",
	  age: 32,
	  gender: 'female',
	  interests: ['music', 'skiing', 'Peloton'],
	  greeting: function() {
	    alert('Hi! I\'m ' + this.name + '.');
	  },
    bio:function(){
      console.log("Hi, I'm "+this.name+" and I'm "+this.age+ " years old.");
      console.log(this.name+"\'s favorite things to do on the weekend are: "+ this.interests.join(", "));
    }
	};

  barb.bio();
  barb.age=32.5;
  barb.name="Allison";
  barb.bio();

  //////////////////////////////////////
	  
});
