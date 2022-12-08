const imgDOM = document.querySelectorAll(`img`);
const paragraphDOM = document.getElementsByTagName("p");
const setInlineStyle = Array.from(imgDOM).forEach((value) => (value.style.display += "none")); // CSS doesn't work in Dom-elents
const passFunction = Array.from(paragraphDOM).forEach((value) => value.addEventListener("click", toggle));

function toggle(event) {
  const textTarget = event.target.textContent.toLowerCase();

  for (let element of imgDOM) {
    let parameters = element.currentSrc.split("/").pop().slice(0, -4).toLowerCase().match(textTarget);
    console.log(parameters);
    parameters && element.style.display === "none" ? element.style.display = "block" : element.style.display = "none";
  }
}