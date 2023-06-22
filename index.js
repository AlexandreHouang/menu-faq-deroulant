let accordionToggle = document.querySelectorAll(".accordion-toggle");

for (let i = 0; i < accordionToggle.length; i++) {
	accordionToggle[i].addEventListener("click", () => {
		let article = accordionToggle[i].nextElementSibling;
		article.classList.toggle("faq-article-hidden");
	});
}
