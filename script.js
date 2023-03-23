const items = document.querySelectorAll(".item");
for (const [i, el] of Object.entries(items)) {
	el.addEventListener("click", function () {
		const item = items[i];
		item.classList.contains("open")
			? item.classList.remove("open")
			: item.classList.add("open");
	});
}
