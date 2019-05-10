# Looping through Objects

Just like we loop through arrays and access each value individually, we can do the same with objects!

We're going to look at our object below: 
```
  var car = {
  	color: "blue",
  	make: "Honda",
  	model: "Civic",
  	miles: 84000,
  	hasGas: true,
  	hasTires: false
  };
```

Let's use the built-in JavaScript object method `Object.keys()` to retrieve an array of `keys` in our `car` object. `console.log` this value. 
```
	var keys = Object.keys(car);
		=> ["color", "make", "model", "miles", "hasGas", "hasTires"]
```

We're going to use the return value of `Object.keys(car)` to loop through our object and `console.log` each key with it's associated value. 

```
	for (var i=0; i<keys.length; i++){ 
		console.log("The car's " + keys[i] + " property is: " + car[keys[i]]);
	}
```


## Exercises

### Rockets!

1. Create a variable called `rocketKeys` and save all of our `rocket` object's keys. 
1. Loop through the array of `rocketKeys` and `console.log` all the values in our object (ex: You should be printing: `"white", "SpaceX", ...`). 


### Shoes In Stock!

1. Create a variable called `shoeKeys` and save all of our `shoesInStock` object's keys. 
1. Loop through the array of `shoeKeys` and `console.log` "We have {value} {brand} shoes in stock!" for each key-value pair. Example: "We have 100 Nike shoes in stock!". 
1. Loop through the array of `shoeKeys` and calculate the total number of shoes you have in stock. *Hint* You may need a variable to store the total count.`console.log` the total number of shoes in stock.


### Vandy 
1. Loop through the array of `vandyKeys` and change each value that is a `number` in our `vanderbilt` object to a string. For instance, when you run `console.log(vanderbilt.founded)` should print `"1873"`, not `1873`. 


### Pats

1. Loop through your `patriots` object and print out a more-readable version of our object. You should print the following: 
```
The headCoach is Bill Belichick
The location is New England
The owner is Robert Kraft
The quarterback is Tom Brady
The runningBack is Sony Michel
The backupQB is Jarrett Stidham

```
*Notice* The property names do not need to be changed, but make sure you have the proper capitalization for each person's name! 


### Barb!

1. Add a property that is a function called `bio` to our gal `barb`. It should `console.log` "Hi, I'm {name} and I'm {age} years old!"
	**Note** Your bio should be dynamic, so if our gal Barb decides to change her name to Amanda or next year when she turns 33, you shouldn't have to update her `bio` function. It should just work! 
1. Invoke `barb.bio()`
1. Below your `barb.bio()`, use object assignment to change barb's name to "Allison" and change her age to 32.5.
1. Invoke `barb.bio()`. Did your new `console.log` change properly with barb's information?
1. Next let's `console.log` "Barb's favorite things to do on the weekend are: {interests[0]}, {interests[1]}, ...". Your code should be able to handle adding/removing interests from her list of interests. **Hint** you may want to make use of the javascript `join()` function!














