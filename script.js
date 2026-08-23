//your JS code here. If required.
const enterBtn = document.getElementById("enterBtn");
    const status = document.getElementById("status");

    enterBtn.addEventListener("click", function () {
      status.outerHTML = "<h1 id=\"status\">Entered Metaverse</h1>";
    });