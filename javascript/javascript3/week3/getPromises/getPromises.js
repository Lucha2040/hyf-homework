function getGitHub(userName) {
  fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
    .then((response) => response.json())
    .then((data) => renderData(data));
}

function renderData(data) {
  const myDiv = document.getElementById("myDiv");
  const ul = document.createElement("ul");
  data.items.forEach((item) => {
    const list1 = document.createElement("li");
    list1.innerHTML = item.owner.login;
    ul.appendChild(list1);
    const list2 = document.createElement("li");
    list2.innerHTML = item.html_url;
    ul.appendChild(list2);
    const list3 = document.createElement("li");
    list3.innerHTML = item.full_name;
    ul.appendChild(list3);
  });
  myDiv.appendChild(ul);
}

Promise.all([
  getGitHub("Mekdes1"),
  getGitHub("mag-da-lenka"),
  getGitHub("SwathiSankararaman"),
]);
