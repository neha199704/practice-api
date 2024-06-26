console.log("hello");
let ulList = document.getElementById("ulList");

const url = "https://jsonplaceholder.typicode.com/photos";
const products = async () => {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    showData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function showData(data) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    // console.log(data[i]);

    let div = document.createElement("div");
    div.classList = "div";
    let h2 = document.createElement("h2");
    let link = document.createElement("a");
    let img = document.createElement("img");

    h2.innerText = element.title;
    link.href = element.url;
    link.target = "_blank";
    img.src = element.thumbnailUrl;

    div.appendChild(h2);
    link.appendChild(img);
    div.appendChild(link);
    ulList.appendChild(div);
  }
}

products();
