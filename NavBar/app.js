// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links"); //Within the click event listener, this line toggles the presence of the class "show-links" on the links element. If the class is already present, it is removed; if it's not present, it is added. This class is assumed to have associated CSS styles that control the visibility of the links.
});

function toggleDropdown(dropdownId) {
    
    var dropdown = document.getElementById(dropdownId);  //This code of line basically retrieves the dropdown element from the HTML document by identifying the correct id. The reference is stored in the variable  dropdown
   if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
}

/*This code of line basically toggles the visibility of a dropdown by explicitly checking the current value of the display CSS property and then setting its value accordingly.
If (dropdown.style.display === "block"): This condition checks if the current value of the display CSS property for the dropdown is equal to the string "block". In CSS, the value 'block' typically represents a visible element.
If the condition is true (meaning the dropdown is currently visible), the code inside the block is executed then it sets the display property to "none", effectively hiding the dropdown.
If the condition is false (meaning the dropdown is currently not visible), the code inside the else block is executed then it sets the display property to "block", making the dropdown visible.
*/