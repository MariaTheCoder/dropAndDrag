// Select the item element
const item = document.querySelector(".item");

//Select the elements with the class box
const boxes = document.querySelectorAll(".box");

// Attach the dragstart event handler
item.addEventListener("dragstart", dragStart);

// Handle the dragstart
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}
