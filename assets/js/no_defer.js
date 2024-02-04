// add bootstrap classes to tables
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("table").forEach(function (table) {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      table.classList.add("table-dark");
    } else {
      table.classList.remove("table-dark");
    }
    if (table.parentElement.classList.contains("news") || table.parentElement.classList.contains("card") || table.parentElement.tagName == "CODE") {
      this.setAttribute("data-toggle", "table");
      this.classList.add("table-hover");
    }
  })
});

