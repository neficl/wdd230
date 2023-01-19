const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.textContent = "☑️ Dark Mode"

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#000";
		modeButton.textContent = "❎ Dark Mode ON";
	} else {
		main.style.background = "#4682b4";
		main.style.color = "#000";
		modeButton.textContent = "☑️ Dark Mode";
	}
});
