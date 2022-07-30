// Select the item element
const item = document.querySelector(".item");

//Select the elements with the class box
const boxes = document.querySelectorAll(".box");

// Attach the dragstart event handler
item.addEventListener("dragstart", dragStart);

// Attach the dragenter, dragover, dragleave and drop event handlers to each box element
boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

// Handle the dragstart
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}
