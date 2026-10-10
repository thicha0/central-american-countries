export default function CentralAmericaSVG(onCountrySelected) {
  const emit = (country) => onCountrySelected(country);

  function showCountry(event) {
    event.target.classList.add("selectedCountry");
    let svg = document.getElementById("map");
    svg.classList.add("minimap");
    let paths = Array.from(document.getElementsByClassName("landxx"));
    paths.forEach((path) => {
      path.classList.add("unhoverable");
    });
    emit(event.target.id);
  }

  function backToMap(event) {
    let id = event.target.id
    if (id === "map" || id === "back") {
      let svg = document.getElementById("map");
      svg.classList.remove("minimap");
      let paths = Array.from(document.getElementsByClassName("landxx"));
      paths.forEach((path) => {
        path.classList.remove("unhoverable");
        path.classList.remove("selectedCountry");
      });
      emit(null);
    }
  }

  document.getElementById("map").addEventListener("click", backToMap);
  document.getElementById("back").addEventListener("click", backToMap);
  Array.from(document.getElementsByClassName("landxx")).forEach((path) => {
    path.addEventListener("click", showCountry);
  });
}
