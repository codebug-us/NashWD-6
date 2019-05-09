$(document).ready(function(){
  // Your javascript goes here
  var rocket = {
  	color: "white",
  	maker: "SpaceX",
  	model: "Dragon",
  	engine: "Merlin",
  	hasGas: true,
  	hasTires: false
  };

  var shoesInStock = {
  	nike: 100,
  	adidas: 48, 
  	puma: 208,
  	toms: 81, 
  	prada: 4, 
  	gucci: 2077
  };

  var vanderbilt = {
  	founded: 1873, 
  	location: "Nashville", 
  	acceptanceRate: 11,
  	undergradEnrollment: 6844,
  	endowment: 6400000000,
  	chancellor: "Nicholas Zeppos",
  	bestStudentEver: "McArthur Gill"
  };

  var patriots = {
  	headCoach: "bill_belichick",
  	location: "new_england",
  	owner: "robert_kraft",
  	quarterback: "tom_brady",
  	runningBack: "sony_michel",
  	backupQB: "jarrett_stidham"
  };

  var barb = {
	  name: "Barbara Smith",
	  age: 32,
	  gender: 'female',
	  interests: ['music', 'skiing', 'Peloton'],
	  greeting: function() {
	    alert('Hi! I\'m ' + this.name + '.');
	  }
	};
	  
});
