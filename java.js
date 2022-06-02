function NavIconDropdownToggle() {
  var x = document.getElementById("navDivID");
  if (x.className === "navDiv") 
  {
      x.className += " dropdownEnabled";
  } 
  else 
  {
      x.className = "navDiv";
  }
}