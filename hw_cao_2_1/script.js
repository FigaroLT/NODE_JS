//______________________VAR1____________________________________

// const getCars = await fetch("http://localhost:5000");
// const showCars = await getCars.json();

// const carsList = document.querySelector("#carsList");

// showCars.forEach((car) => {
//   const carEl = document.createElement("li");
//   carEl.innerText = car;
//   carsList.append(carEl);
// });

// ________________________VAR 2 ________________________________

const populateList = async (cars) => {
  const users = await getCars();

  const listElement = document.createElement("ul");

  users.forEach((car) => {
    const liEl = document.createElement("li");
    liEl.textContent = car;
    listElement.append(liEl);
  });

  document.body.append(listElement);
};

const getCars = async () => {
  try {
    const response = await fetch("http://localhost:5000");
    const cars = await response.json();

    return cars;
  } catch (error) {
    console.error(error);
  }
};

populateList();
