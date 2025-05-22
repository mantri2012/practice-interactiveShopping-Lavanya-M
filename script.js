const addButton = document.getElementById("add-button");
const input = document.getElementById("item-input");
const list = document.getElementById("shopping-list");

addButton.addEventListener("click", function () {
  let itemText = input.value.trim(); // here getting the trimmed value of the input field

  if (itemText === "") {
    alert("Please enter an item."); // Validating the use input
    return;
  }

  const listItem = document.createElement("li"); // Create a new list item
  listItem.textContent = itemText + " "; 
  alert(`${itemText} added to your shopping list.`); // Alert the user that the item has been added

  // Remove Button
  const removeButton = document.createElement("button"); // Create the remove button
  removeButton.textContent = "Remove"; // Set the text of the remove button
  removeButton.addEventListener("click", function(){ // Add an event listener to the remove button
    listItem.remove(); // Remove the list item when the button is clicked
    alert(`${itemText} removed from the list.`); // Alert the user that the item has been removed
  });

  // Edit Button
  const editButton = document.createElement("button"); // Create the edit button
  editButton.textContent = "Edit"; // Set the text of the edit button
  editButton.addEventListener("click", function () { // Add an event listener to the edit button
    listItem.innerHTML = `<input type="text" value="${itemText}" />
      <button class="save-button">Save</button>`; // Create an input field with the current item text and a save button

    const inputField = listItem.querySelector("input"); // Get the input field inside the list item
    const saveButton = listItem.querySelector(".save-button"); // Get the save button
    
    saveButton.addEventListener("click", function() { // Add an event listener to the save button
      const newValue = inputField.value.trim();
      if (newValue === "") return;

      listItem.textContent = newValue + " "; // Update the list item text with the new value
      alert(`${itemText} updated to ${newValue}.`); // Alert the user that the item has been updated
      // Recreating the remove and edit buttons after editing
      listItem.appendChild(removeButton);
      listItem.appendChild(editButton);
      itemText = newValue;
    });
  });

  listItem.appendChild(removeButton); // Append the remove button to the list item
  listItem.appendChild(editButton); // Append the buttons to the list item
  list.appendChild(listItem); // Append the new list item to the shopping list
  // Clear the input field after adding the item
  input.value = "";   
});