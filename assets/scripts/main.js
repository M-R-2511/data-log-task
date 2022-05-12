const apiBaseUrl = "https://fakerapi.it/api/v1/";
const loaders = document.querySelectorAll(".loader");
const personsCards = document.querySelector(".persons__cards");
const booksCards = document.querySelector(".books__cards");
const companiesCards = document.querySelector(".companies__cards");
const darkModeButton = document.querySelector(".dark-mode");

// ============= Get Data from API =============
async function getData(apiEndpoint, cards) {
  const fetchData = await fetch(`${apiBaseUrl}${apiEndpoint}`);
  fetchData
    .json()
    .then(({ data }) => {
      showData(data, cards);
    })
    .catch((error) => {
      console.log(error);
      loaders.forEach((loader) => {
        loader.classList.remove("loader--hide");
      });
    })
    .finally(() => {
      loaders.forEach((loader) => {
        loader.classList.add("loader--hide");
      });
    });
}
getData("persons", personsCards);
getData("books", booksCards);
getData("companies", companiesCards);

// Show Data in Cards
function showData(data, cards) {
  data.forEach((card) => {
    switch (cards) {
      case personsCards:
        cards.innerHTML += `
      <div data-aos="flip-left" class="card">
          <div style="background-image:url(${card.image})" class="card__image"></div>
          <div class="card__info">
              <h2 class="card__title"><span>Name</span>: ${card.firstname} ${card.lastname}</h2>
              <h4 class="card__email"><span>Email</span>: ${card.email}</h4>
              <p><span>birthday:</span> ${card.birthday}</p>
              <p><span>Phone:</span> ${card.phone}</p>
              <p><span>website:</span> <a href="${card.website}" target="_blank" class="card__link">${card.website}</a></p>
          </div>
      </div>
      `;
        break;
      case booksCards:
        cards.innerHTML += `
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-center" class="card">
            <div style="background-image:url(${card.image})" class="card__image"></div>
            <div class="card__info">
                <h2 class="card__title"><span>title</span>: ${card.title}</h2>
                <h4 class="card__email"><span>author</span>: ${card.author}</h4>
                <p><span>published:</span> ${card.published}</p>
                <p><span>description:</span> ${card.description}</p>
            </div>
        </div>
        `;
        break;
      case companiesCards:
        cards.innerHTML += `
        <div data-aos="fade-down" class="card">
            <div style="background-image:url(${card.image})" class="card__image"></div>
            <div class="card__info">
                <h2 class="card__title"><span>Company</span>: ${card.name}</h2>
                <h4 class="card__email"><span>Email</span>: ${card.email}</h4>
                <p><span>country:</span> ${card.country}</p>
                <p><span>Phone:</span> ${card.phone}</p>
                <p><span>website:</span> <a href="${card.website}" target="_blank" class="card__link">${card.website}</a></p>
            </div>
        </div>
        `;
        break;
      default:
        cards.innerHTML += `
          no data
          `;
        break;
    }
  });
}

// ============= Dark Mode =============
darkModeButton.addEventListener("click", () => {
  const nav__container = document.querySelector(".nav__container");
  const card = document.querySelectorAll(".card");
  const inputs = document.querySelectorAll("input");

  document.body.classList.toggle("dark-mode");
  nav__container.classList.toggle("dark-mode");
  card.forEach((card) => {
    card.classList.toggle("dark-mode");
  });
  inputs.forEach((input) => {
    input.classList.toggle("dark-mode");
  });
});

// ============= Handle form submit =============
function handleFormSubmit(event) {
  event.preventDefault();
}

// ============= Search Data =============
function searchData(input) {
  // Select Search Input
  let cardsSearch;
  switch (input.placeholder) {
    case "Search by name":
      cardsSearch = document.querySelectorAll(".persons__cards .card");
      break;
    case "Search by title":
      cardsSearch = document.querySelectorAll(".books__cards .card");
      break;
    default:
      cardsSearch = document.querySelectorAll(".companies__cards .card");
      break;
  }

  // Search Data
  const searchValue = input.value.toLowerCase();

  cardsSearch.forEach((card) => {
    const cardTitle = card
      .querySelector(".card__title")
      .innerText.toLowerCase();
    const cardInfo = card.querySelector(".card__info").innerText.toLowerCase();
    if (cardTitle.includes(searchValue)) {
      card.style.display = "grid";
    } else {
      card.style.display = "none";
    }
  });
}

// ============= Choose section =============
const listItems = document.querySelectorAll(".sections__list--item");
var persons = document.getElementById("persons");
var books = document.getElementById("books");
var companies = document.getElementById("companies");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    AOS.refresh();
    listItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    // Show section based on list item
    if (item.innerText === "PERSONS") {
      persons.style.display = "grid";
      books.style.display = companies.style.display = "none";
    } else if (item.innerText === "BOOKS") {
      books.style.display = "grid";
      persons.style.display = companies.style.display = "none";
    } else if (item.innerText === "COMPANIES") {
      persons.style.display = books.style.display = "none";
      companies.style.display = "grid";
    } else {
      persons.style.display =
        books.style.display =
        companies.style.display =
          "grid";
    }
  });
});

// ============= Fix AOS problem when change Sections =============
var scrollStarted = 0;
window.addEventListener("scroll", function () {
  scrollStarted <= 10 ? scrollStarted++ : AOS.refresh();
});
