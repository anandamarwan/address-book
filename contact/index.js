// // Retrieve the object from local storage
// const storedObject = localStorage.getItem("address-book");

// // Check if the object exists in local storage
// if (storedObject) {
//   // Parse the stored JSON string into an object
//   const parsedObject = JSON.parse(storedObject);

//   // Now you can use the parsedObject
//   console.log(parsedObject);
// } else {
//   console.log("No object found in local storage with the specified key.");
// }

// const contactItems = storedObject.join("");
// parsedObject.innerHTML = contactItems;

// Function to display data by ID
function displayDataById(id) {
  // Retrieve the array from local storage
  var storedArray = localStorage.getItem("address-book");

  // Check if the array exists in local storage
  if (storedArray) {
    // Parse the stored JSON string into an array of objects
    var parsedArray = JSON.parse(storedArray);

    // Find the object with the specified ID
    var obj = parsedArray.find((item) => item.id === id);

    // Get the container element where you want to display the data
    var container = document.getElementById("data-container");

    // Clear the container
    container.innerHTML = "";

    if (obj) {
      var div = document.createElement("div");

      div.innerHTML =
        "Full Name: " +
        obj.fullName +
        "<br>" +
        "Email: " +
        obj.email +
        "<br>" +
        "Phone: " +
        obj.phone +
        "<br>" +
        "Age: " +
        obj.age;

      container.appendChild(div);
    } else {
      container.innerHTML = "No data found with the specified ID.";
    }
  } else {
    console.log("No array found in local storage with the specified key.");
  }
}

displayDataById(4);
