 /*=============================================
                   Aos-Slider
  =============================================*/

AOS.init();

  /*=============================================
                   Dark & Light
  =============================================*/
  
var icon = document.getElementById("icon");

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");

if (localData == "light") {
  document.body.classList.remove("dark_theme");
}

else if (localData == "dark") {
  document.body.classList.add("dark_theme")
}

icon.onclick = function() {
  document.body.classList.toggle("dark_theme");

  if (document.body.classList.contains("dark_theme")) {
    localStorage.setItem("theme", "dark");
  }
  else {
    localStorage.setItem("theme", "light");
  }
}



