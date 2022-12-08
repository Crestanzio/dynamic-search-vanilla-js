const select = document.getElementsByTagName("select");
const img = document.getElementsByTagName("img");
const option = document.getElementsByTagName("option");
const passFunction = Array.from(select).forEach((item) => item.addEventListener("click", removeInputValue));

function filterSelection() {
  let inputDOM = document.getElementsByTagName("input")[0];
  let search = inputDOM.value.toLowerCase().trim();
  let selectArray = Array.from(select).map((item) => (search !== '') ? item.value = item[0].value : item.value)

  for (let element of img) {
    let parameters = element.attributes[0].value.toLowerCase().split(" ");
    let option = selectArray.some(value => parameters.includes(value));
    let searchBar = parameters.some(value => search === '' ? search = null : value.match(search));
    (option || searchBar) ? element.style.setProperty('display', 'inline') : element.style.setProperty('display', 'none');
  }
}

function removeInputValue(event) {
  let inputDOM = document.getElementsByTagName("input")[0];
    (event) ? inputDOM.value = '' : null;
}

// Get Navigation Timing entries:
const [entry] = performance.getEntriesByType("navigation");
  console.table(entry.toJSON());
  // Get Resource Timing entries
const resourceListEntries = performance.getEntriesByType("resource");
  console.log(resourceListEntries);
  // Measuring DNS lookup time
const dnsTime = entry.domainLookupEnd - entry.domainLookupStart;
console.log(dnsTime);