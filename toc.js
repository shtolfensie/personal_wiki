const baseRepoURL =
  "https://api.github.com/repos/shtolfensie/personal_wiki/contents";

function getRepoContsPromise(url) {
  const request = new Request(url);
  return fetch(request).then(res => res.json());
}

async function buildTOC() {
  let conts = await getRepoContsPromise(baseRepoURL);
  console.log(conts);
  let tree = [];
  // have to use a for loop. any loop with a callback is really messy with async - some can't be used at all
  for (let i = 0; i < conts.length; i++) {
    const el = conts[i];
    if (isDir(el)) {
      let res = await getDirConts(el);
      console.log(res);
      tree.push(res);
    } else {
      tree.push(createTreeObject(el));
    }
  }
  console.log(tree);
}

function isDir(file) {
  return file.type === "dir" ? true : false;
}

async function getDirConts({ name, url, git_url }) {
  let conts = await getRepoContsPromise(url);
  console.log(conts);

  let treeBranch = { name, git_url, url, type: "dir", conts: [] };
  for (let i = 0; i < conts.length; i++) {
    const el = conts[i];
    if (isDir(el)) {
      let res = await getDirConts(el);
      console.log(res);
      treeBranch.conts.push(res);
    } else {
      treeBranch.conts.push(createTreeObject(el));
    }
  }
  console.log(treeBranch);

  return treeBranch;
}

function createTreeObject({ name, download_url, type }) {
  return { name, download_url, type };
}

buildTOC();
