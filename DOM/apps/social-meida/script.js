let likeCount = 0;
let dislikeCount = 0;

function like() {
  likeCount++;
  // if (dislikeCount > 0) {
  //   dislikeCount--;
  // }
  updateCounts();
}

function dislike() {
  dislikeCount++;
  // if (likeCount > 0) {
  //   likeCount--;
  // }
  updateCounts();
}

function updateCounts() {
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("dislikeCount").innerText = dislikeCount;
  document.getElementById("totalCount").innerText = likeCount + dislikeCount;
}
