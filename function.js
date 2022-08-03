function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let image = document.querySelector(".modito");
    if (element.className==="dark-mode") {
      image.src="sunny.svg"
    } else {
      image.src="moon.svg"
    }
  }

