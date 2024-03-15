const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    // find second child element of form, which contains the user input:
    inputValue = event.target.children[1].value;
  });

  // fetch request
  fetch("http://localhost:3000/movies/${input.value}")
    .then((response) => response.json())
    .then((data) => {
      // display title and summary of movie id input by user
      const title = document.querySelector("section#movieDetails h4");
      title.innerHTML = data.title;
      const summary = document.querySelector("section#movieDetails p");
      summary.innerHTML = data.summary;
    });
};

document.addEventListener("DOMContentLoaded", init);
