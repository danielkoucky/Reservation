document.addEventListener("DOMContentLoaded", function () {
  const reservationform = document.querySelector("#reservation_form");
  const popup = document.querySelector(".popup");
  const modifybtn = document.getElementById("modify_btn");
  const confirmreservation = document.getElementById("confirm_reservation");
  // Function to update the confirmation section with stored data
  function updateConfirmationSection() {
    const storedData = JSON.parse(localStorage.getItem("reservationData"));

    // Check if there's stored data
    if (storedData) {
      // Update the content of confirmation section with stored data
      document.querySelector(".reserve_username").textContent =
        storedData.username;
      document.querySelector(
        ".confirmation_data ul li:nth-child(1)"
      ).textContent = "Your Phone Number : " + storedData.phoneNumber;
      document.querySelector(
        ".confirmation_data ul li:nth-child(2)"
      ).textContent = "Number of guests : " + storedData.quantity;
      document.querySelector(
        ".confirmation_data ul li:nth-child(3)"
      ).textContent = "Date : " + storedData.date;
      document.querySelector(
        ".confirmation_data ul li:nth-child(4)"
      ).textContent = "Time : " + storedData.time;
      document.querySelector(
        ".confirmation_data ul li:nth-child(5)"
      ).textContent = "Message : " + storedData.message;
    }
  }

  // Update the confirmation section when the page loads
  updateConfirmationSection();

  reservationform.addEventListener("submit", (e) => {
    e.preventDefault();

    // Retrieve form data
    const reserveusername = document.querySelector("#user_name").value;
    const reservenumber = document.querySelector("#user_phone_number").value;
    const customer_quantity =
      document.querySelector("#customer_quantity").value;
    const reservationdate = document.querySelector("#date").value;
    const reservationtime = document.querySelector("#time-reservation").value;
    const reservationmsg = document.querySelector("#reservation_msg").value;

    // Create an object to store the form data
    const formData = {
      username: reserveusername,
      phoneNumber: reservenumber,
      quantity: customer_quantity,
      date: reservationdate,
      time: reservationtime,
      message: reservationmsg,
    };

    // Convert the form data object to JSON
    const formDataJSON = JSON.stringify(formData);

    // Store the form data in local storage
    localStorage.setItem("reservationData", formDataJSON);

    // Update the confirmation section with the stored data
    updateConfirmationSection();

    // Optionally, you can also clear the form fields after storing the data
    reservationform.reset();

    // Show the popup
    popup.classList.remove("hidden");
  });

  modifybtn.addEventListener("click", () => {
    popup.classList.add("hidden");
    localStorage.removeItem("reservationData");
    updateConfirmationSection();
  });
  confirmreservation.addEventListener("click", () => {
    document.querySelector(".confirm_message").textContent =
      "Your Reservation has been booked";
    setTimeout(function () {
      popup.classList.add("hidden");
    }, 3000);
  });
});
