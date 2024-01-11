function successCopy(clickedDiv) {
  // Get the first and second SVG elements within the clicked div
  var firstSvg = clickedDiv.querySelector("svg:first-child");
  var secondSvg = clickedDiv.querySelector("svg:nth-child(2)");
  // Toggle visibility by swapping display values
  firstSvg.style.display = "none";
  secondSvg.style.display = "block";
  setTimeout(() => {
    firstSvg.style.display = "block";
    secondSvg.style.display = "none";
  }, 2000);
}

var clipboard = new ClipboardJS(".clipboard-container");
clipboard.on("success", function (e) {
  successCopy(e.trigger);
});

var paragraph = document.getElementById("dtyg");
paragraph.innerHTML = paragraph.innerHTML.split("").reverse().join("");
