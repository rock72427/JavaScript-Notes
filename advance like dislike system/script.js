const posts = [
  {
    id: 1,
    imagePath:
      "https://assets.promptbase.com/DALLE_IMAGES%2F9HpjD1rAiJgNRloMOcH6ykUs03l2%2Fresized%2F1675943356441_1000x1000.webp?alt=media&token=45dbb5e0-b448-41e7-9242-8cd52aa524f9",
  },
  {
    id: 2,
    imagePath:
      "https://assets.promptbase.com/DALLE_IMAGES%2F9HpjD1rAiJgNRloMOcH6ykUs03l2%2Fresized%2F1675943356528_1000x1000.webp?alt=media&token=5337a024-8cdd-4663-8f89-6022a03d13a8",
  },
  {
    id: 3,
    imagePath:
      "https://assets.promptbase.com/DALLE_IMAGES%2F9HpjD1rAiJgNRloMOcH6ykUs03l2%2Fresized%2F1675943356413_1000x1000.webp?alt=media&token=eb49378c-dfe9-43a0-861c-5490ae539694",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("postsContainer");
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postsContainer.appendChild(postElement);
  });
});

function createPostElement(post) {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  const image = document.createElement("img");
  image.src = post.imagePath;
  imageContainer.appendChild(image);

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";

  const likeBtn = document.createElement("button");
  likeBtn.className = "btn";
  likeBtn.innerHTML =
    '<i class="fa fa-thumbs-up"></i> <span id="likeCount-' +
    post.id +
    '">0</span>';
  likeBtn.addEventListener("click", () => like(post.id));

  const dislikeBtn = document.createElement("button");
  dislikeBtn.className = "btn";
  dislikeBtn.innerHTML =
    '<i class="fa fa-thumbs-down"></i> <span id="dislikeCount-' +
    post.id +
    '">0</span>';
  dislikeBtn.addEventListener("click", () => dislike(post.id));

  buttonsDiv.appendChild(likeBtn);
  buttonsDiv.appendChild(dislikeBtn);

  const totalDiv = document.createElement("div");
  totalDiv.className = "total";
  totalDiv.innerHTML = 'Total: <span id="totalCount-' + post.id + '">0</span>';

  postDiv.appendChild(imageContainer);
  postDiv.appendChild(buttonsDiv);
  postDiv.appendChild(totalDiv);

  return postDiv;
}

const likeCounts = {};
const dislikeCounts = {};

function like(postId) {
  if (!likeCounts[postId]) likeCounts[postId] = 0;
  if (!dislikeCounts[postId]) dislikeCounts[postId] = 0;

  likeCounts[postId]++;
  if (dislikeCounts[postId] > 0) {
    dislikeCounts[postId]--;
  }
  updateCounts(postId);
}

function dislike(postId) {
  if (!likeCounts[postId]) likeCounts[postId] = 0;
  if (!dislikeCounts[postId]) dislikeCounts[postId] = 0;

  dislikeCounts[postId]++;
  if (likeCounts[postId] > 0) {
    likeCounts[postId]--;
  }
  updateCounts(postId);
}

function updateCounts(postId) {
  document.getElementById("likeCount-" + postId).innerText = likeCounts[postId];
  document.getElementById("dislikeCount-" + postId).innerText =
    dislikeCounts[postId];
  document.getElementById("totalCount-" + postId).innerText =
    likeCounts[postId] + dislikeCounts[postId];
}
