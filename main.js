const panels = document.querySelectorAll(".panel");

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phno");
const submit = document.querySelector(".submit_btn");
const form = document.querySelector(".info");
const p = document.querySelector(".info p");


panels.forEach((panel) =>{
    panel.addEventListener("click", () => {
        RemovedActive();
        panel.classList.add("active");
    })
})

function RemovedActive()
{
    panels.forEach((panel) =>{
        panel.classList.remove("active");
    })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (name.value === "" || email.value === "" || phone.value === "") {
    p.textContent = "Invalid";
    p.classList.add("error");

    name.value= '';
    email.value = '';
    phone.value = '';

    setTimeout(() => {
      p.textContent = "";
        p.classList.remove("error");
    }, 1000);
  } else {
    // If all fields filled, you could submit the data or show success message
    p.textContent = "Form submitted successfully!";
    p.classList.add("success");
    name.value= '';
    email.value = '';
    phone.value = '';

    setTimeout(() => {
        p.textContent= "";
        p.classList.remove("success");
    }, 1000)
  }
});
