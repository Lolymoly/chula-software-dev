document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".register-form");

	form.addEventListener("submit", function (event) {
		// Prevent the form from submitting
		event.preventDefault();

		// Reset previous error messages
		const errorMessages = document.querySelectorAll(".error-message");
		errorMessages.forEach(function (errorMessage) {
			errorMessage.remove();
		});

		let isValid = true;

		// Validate companyName, personName, phoneNumber
		const requiredFields = ["companyName", "personName", "phoneNumber"];
		requiredFields.forEach(function (fieldName) {
			const input = form.querySelector(`#${fieldName}`);
			if (!input.value.trim()) {
				displayErrorMessage(input, "กรุณากรอกข้อมูล");
				isValid = false;
			}
		});

		// Validate booth_size
		const boothSizeSelect = form.querySelector("#booth_size");
		if (boothSizeSelect.value === "") {
			displayErrorMessage(boothSizeSelect, "กรุณาเลือกขนาดบูธ");
			isValid = false;
		}

		// Validate numChairs
		const numChairsInput = form.querySelector("#numChairs");
		const numChairsValue = parseInt(numChairsInput.value);
		if (isNaN(numChairsValue) || numChairsValue < 1 || numChairsValue > 10) {
			displayErrorMessage(
				numChairsInput,
				"กรุณากรอกจำนวนเก้าอี้ที่ถูกต้อง (1-10)"
			);
			isValid = false;
		}

		if (isValid) {
			// If all validations pass, you can submit the form here
			form.submit();
			alert("ส่งข้อมูลสำเร็จ");
		}
	});

	function displayErrorMessage(input, message) {
		const errorMessage = document.createElement("div");
		errorMessage.className = "error-message";
		errorMessage.textContent = message;
		input.parentNode.appendChild(errorMessage);
		console.log(message);
	}
});
