// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//push excercise

var nameArray = [];
nameArray.push("Andrew");
nameArray.push("Tram");
  console.log(nameArray);
  //return nameArray;

genericNumberArray.push(6, 7, 8, 9, 10);

//pop excercises

popResult = colors.pop(3);

//reverse excercises

scrambledWords.reverse();
phoneNumber.reverse();

//shift excercises

nextOrder = orderQueue.shift();

//sort excercises

mixedNums.sort();
mixedWords.sort();

// splice excercises

notFruit = fruitCollection.splice(1, 3);
gemBox.splice(5, 2);
gemBox.splice(6, 4);

upToTen.splice(2, 0, 3, 4, 5, 6, 7, 8);

brownOnly.splice(0, 6, "brown", "brown", "brown", "brown");

//unshift exercises

orderedValuesNewLength = orderedValues.unshift(1, 2, 3);

//concat excercies

randomThingsArray = genericNumberArray.concat(colors);
newOrderArr = [{takeOut: "beef pho"}, {takeOut: "chicken salad"}];

var updatedOrders = orderQueue.concat(newOrderArr);



//join excercies

sentence = scrambledWords.join(" ");
myFruits = fruitCollection.join(" + ");

//slice excercies

favoriteFriends = friends.slice(1, 3);
owesMoney = friends.slice(3, 6);

//toString excercises

monthNameString = monthNames.toString();

//indexOf excercises

favoriteColor = colors.indexOf("Red");

favoriteEvenNumber = mixedNums.indexOf(76);

//lastIdexOf excercises

lastNine = bulkNumbers.lastIndexOf(9);

lastFive = bulkNumbers.lastIndexOf(5);