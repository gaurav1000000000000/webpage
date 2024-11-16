document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });
        const result = await response.json();

        document.querySelectorAll(".text-danger").forEach(el => el.textContent = "");

        if (result.status === "error") {
            for (const [key, message] of Object.entries(result.errors)) {
                document.getElementById(`${key}Error`).textContent = message;
            }
        } else {
            const successAlert = document.getElementById("formSuccess");
            successAlert.classList.remove("d-none");
            successAlert.textContent = result.message;
            form.reset();
            setTimeout(() => successAlert.classList.add("d-none"), 5000);
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    }
});
