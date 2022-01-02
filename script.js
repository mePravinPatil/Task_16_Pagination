let pageSize = 10;
let currentPage = 1;

buttons = document.querySelector(".buttons");
buttons.innerHTML = `
     <button class="btn" onclick="prevPage()">Previous</button>
          <button id="button1" class="btn" onclick="showPage(1)">1</button>
          <button id=button2 class="btn"  onclick="showPage(2)">2</button>
          <button id=button3 class="btn"  onclick="showPage(3)">3</button>
          <button id=button4 class="btn"  onclick="showPage(4)">4</button>
          <button id=button5 class="btn"  onclick="showPage(5)">5</button>
          <button id=button6 class="btn"  onclick="showPage(6)">6</button>
          <button id=button7 class="btn"  onclick="showPage(7)">7</button>
          <button id=button8 class="btn"  onclick="showPage(8)">8</button>
          <button id=button9 class="btn"  onclick="showPage(9)">9</button>
          <button id=button10 class="btn"  onclick="showPage(10)">10</button>
          <button  class="btn"  onclick="nextPage()" >Next</button>`;
let users = fetch(
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
)
  .then((res) => res.json())
  .then((result) => {
    users = result;
    console.log(users);
    showPage(1);
  });

function hideColor(n) {
  document.getElementById("button" + n).classList.remove("active");
}

function nextPage() {
  hideColor(currentPage);
  if (currentPage < 10) {
    showPage(currentPage + 1);
  }
}
function prevPage() {
  hideColor(currentPage);
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}
function showPage(n) {
  hideColor(currentPage);
  currentPage = n;

  document.getElementById("button" + currentPage).classList.add("active");
  let i = currentPage - 1;
  let j = i * pageSize;
  let k = j + pageSize;

  let mainContainer = document.querySelector(".Container");
  mainContainer.innerHTML = " ";

  for (i = j; i < k; i++) {
    mainContainer.innerHTML += `<div class="subCard">
                    <div class=image><img src="https://media.gettyimages.com/vectors/human-face-avatar-icon-profile-for-social-network-man-vector-vector-id1227618801"></div>
                    <div class="id"> ${users[i].id}</div>
                    <div class="name"> ${users[i].name} </div>
                    <div class="email"> ${users[i].email} </div>
                </div>`;
  }
}
