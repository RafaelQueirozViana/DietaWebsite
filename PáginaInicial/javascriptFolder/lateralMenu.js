const navButton = document.querySelectorAll(".nav-content");

navButton.forEach(paragraph => {
    paragraph.addEventListener("click", () => {
    
      navButton.forEach(p => p.classList.remove("selected"));
  
    
      paragraph.classList.add("selected");
    });
  });