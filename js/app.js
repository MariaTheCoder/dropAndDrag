// Seleect the item element
const item = document.querySelector(".item");

// Attach the dragstart event handler
item.addEventListener("dragstart", dragStart);

// Handle the dragstart
function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}
