const tocContainer = document.getElementById("tocContainer");

// let treeArr = [];

const insertHTML = tArr => {
  let treeHTML = tArr
    .map(
      branchObj => `<div><a href="${branchObj.url}">${branchObj.name}</a></div>`
    )
    .join("");
  console.log(treeHTML);
  tocContainer.insertAdjacentHTML("afterbegin", treeHTML);
};

buildTOC().then(insertHTML);
