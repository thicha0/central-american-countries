import CentralAmericaSVG from "../components/CentralAmericaSVG.js";
import ExpandComponent from "../components/Expand.js";
import * as dataFiles from "../data/index.js";

export default function CentralAmericaMap(root) {
  let title = null
  let items = null
  let flag = ''
  let countrySelected = null

  function render() {
    if (title) {
      const countryTitle = document.createElement('div');
      countryTitle.id = 'countryTitle';
      const img = document.createElement('img');
      img.src = flag;
      img.alt = 'Flag of ' + title;
      const h1 = document.createElement('h1');
      h1.textContent = title;
      countryTitle.append(img, h1);

      root.replaceChildren(countryTitle, ExpandComponent({ items, width: '90vw', height: '80vh' }));
    } else {
      const h1 = document.createElement('h1');
      h1.style.display = 'none';
      h1.textContent = 'Map';
      root.replaceChildren(h1);
    }
  }

  function showCountry(country) {
    if (!country) {
      title = null
      flag = ''
      items = null
      render()
      return
    }
    try {
      const data = dataFiles[country];
      if (!data) {
        throw new Error(`No data found for ${country}.`)
      }
      title = data.countryName
      flag = "https://flagsapi.com/" + data.countryCode.toUpperCase() + "/flat/64.png"
      items = data.data
    } catch(e) {
      console.error(e);
      title = null
      flag = ''
      items = null
    };
    countrySelected = country;
    render()
  }

  CentralAmericaSVG(showCountry);
  render();
}
