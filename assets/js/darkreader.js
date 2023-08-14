document.getElementsByClassName("dark-mode-button")[0].onclick = function () {
  toggle_darkmode();
};

function toggle_darkmode() {
  let enabled = localStorage.getItem("dark-mode");

  if (enabled === null || enabled === "false") {
    enable();
  } else {
    disable();
  }
}

function enable() {
  DarkReader.setFetchMethod(window.fetch);
  DarkReader.enable();
  localStorage.setItem("dark-mode", "true");
  document.getElementById("icon-dark").className = "fa-solid fa-sun";
}

function disable() {
  DarkReader.disable();
  localStorage.setItem("dark-mode", "false");
  document.getElementById("icon-dark").className = "fa-solid fa-moon";
}

function darkmode() {
  let enabled = localStorage.getItem("dark-mode");

  if (enabled === null) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      enable();
    }
  } else if (enabled === "true") {
    enable();
  }
}

darkmode();
