const url = "https://covid19.mathdro.id/api";
export async function getData(country) {
  let tempUrl = url;

  if (country) {
    tempUrl = `${url}/countries/${country}`;
  }
  try {
    const response = await fetch(tempUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export async function getCountries() {
  try {
    const response = await fetch(`${url}/countries`);
    const cList = response.json();

    return cList;
  } catch (error) {
    return error;
  }
}
