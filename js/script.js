function newItem() {
   // add new list item
   let li = $('<li></li>');
   let list = $('#list');
   let inputValue = $('#input').val();
   if (inputValue === '') {
    alert("You must write something!");
   } else {
    li.append(inputValue);
    list.append(li); 
   }

// Toggle crossing out an item from the list of items
li.on("dblclick", function() {
    li.toggleClass("strike");
  });

// Adding the delete button "X":
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

//Adding CLASS DELETE (DISPLAY: NONE) from the css
crossOutButton.on("click", function() {
    li.addClass("delete")
});

//Reorder items
$('#list').sortable();

}



