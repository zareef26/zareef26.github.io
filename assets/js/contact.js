const form = document.getElementById("my-form");

async function handleSubmit(event) {
	event.preventDefault();
	const status = document.getElementById("status");
	const data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: "application/json",
		},
	})
		.then((response) => {
			status.innerHTML = "Thanks for your submission! :D";
			form.reset();
		})
		.catch((error) => {
			status.innerHTML = "Oops! Submission failed :(";
		});
}
form.addEventListener("submit", handleSubmit);
