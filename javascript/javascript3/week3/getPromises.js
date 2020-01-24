
function getGitHub(userName) {
  fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
  .then(response => response.json())
  .then(data => renderData(data)) 
}

const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
const ul3 = document.createElement("ul");

//Function for render the data could be optimized.
function renderData(data) {
    data.items.map(items => {
    const myDiv = document.getElementById("myDiv");
    const list1 = document.createElement("li");
    myDiv.appendChild(ul1);
    ul1.appendChild(list1);
    list1.innerHTML = items.owner.login;
  });
  data.items.map(items => {  
    const myDiv = document.getElementById("myDiv");
    const list2 = document.createElement("li");
    myDiv.appendChild(ul2);
    ul2.appendChild(list2);
    list2.innerHTML = items.html_url;
  });
  data.items.map(items => {
    const myDiv = document.getElementById("myDiv");
    const list3 = document.createElement("li");
    myDiv.appendChild(ul3);
    ul3.appendChild(list3);
    list3.innerHTML = items.full_name;
  })
};


// Select 3 classmates github username that you want to show repositories for:
const promises = [getGitHub('Mekdes1'), getGitHub('mag-da-lenka'), getGitHub("SwathiSankararaman")]


//Missing: Promise.all[]