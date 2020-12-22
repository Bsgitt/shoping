async function getData() {
  try {
    let url = await fetch("https://fakestoreapi.com/products");
    let response = await url.json();
    return response;
  } catch (err) {
    console.log(err);
  }
}
export default getData;
