function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementsByClassName('target')[0]
}

function deepestChild() {
  node = document.getElementById('grand-node')
  while (node.children.length > 0) {
    node = node.children[0]
  }
  return node
}

function increaseRankBy(n) {
  var rankedLists
  var listChildren
  rankedLists = document.getElementsByClassName('ranked-list')
  for (let x = 0; x < rankedLists.length; x++) {
    listChildren = rankedLists[x].children
    for (let x = 0; x < listChildren.length; x++) {
      debugger
      listChildren[x].innerHTML = (parseInt(listChildren[x].innerHTML) + n).toString()
    }
  }
}
