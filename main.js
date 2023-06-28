document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", (e) => {
    const form = e.currentTarget
    form.classList.add("-has-checked")
    e.preventDefault()

    if (!form.checkValidity()) {
      return
    }

    location.href = form.action
  })
})
