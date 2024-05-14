// Retrieve the array from local storage
var storedArray = localStorage.getItem("address-book");

// Check if the array exists in local storage
if (storedArray) {
  // Parse the stored JSON string into an array of objects
  var parsedArray = JSON.parse(storedArray);

  // Now you can use the parsedArray
  console.log(parsedArray);

  // Accessing individual objects in the array
  parsedArray.forEach(function (obj) {
    console.log("Full Name " + ":", obj.fullName);
    console.log("Email " + ":", obj.email);
    console.log("Phone " + ":", obj.phone);
    console.log("Age " + ":", obj.age);
  });
} else {
  console.log("No array found in local storage with the specified key.");
}
