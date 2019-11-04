let currentNode;
let idcount=0;

// call for function start after window starts
window.addEventListener("load",start);

// initialise current parentNode
function start(){
  document.getElementById('byIdButton').addEventListener("click", byId);
  document.getElementById('insertButton').addEventListener("click",insert );
  document.getElementById('appendButton').addEventListener("click",appendNode );
  document.getElementById('replaceButton').addEventListener("click",replaceNode );
  document.getElementById('removeButton').addEventListener("click",remove );
  document.getElementById('parentButton').addEventListener("click", parent);

  currentNode=document.getElementById("bigheading");
}

// getting and highlighting the element by its id
function byId(){
  let id= document.getElementById("gbi").value;
  let target= document.getElementById(id); // deleting this
  if(target){
    switchTo(target);
  }
}

// insert before current node
function insert(){
  let node=document.getElementById("ins").value;
  let newNode=createNewNode(node);
  currentNode.parentNode.insertBefore(newNode,currentNode); // deleting currentNode
  switchTo(newNode);
}

//append as a child to current node
function appendNode(){
  let node=document.getElementById("append").value;
  let newNode=createNewNode(node);
  currentNode.appendChild(newNode);
  switchTo(newNode);
}

// replace the current selected node
function replaceNode(){
  let node=document.getElementById("replace").value;
  let newNode=createNewNode(node);
  currentNode.parentNode.replaceChild(newNode,currentNode); // deleting currentNode
  switchTo(newNode);
}

//remove the current node
function remove(){
  let oldNode=currentNode;
  switchTo(oldNode.parentNode);
  currentNode.removeChild(oldNode);
}

//get the parent of the currentNode
function parent(){
  let target=currentNode.parentNode;
  if(target!=document.body){
    switchTo(target);
  }
  else{
    alert("No Parent found");
  }
}

// helper function to create new nodes
function createNewNode(text){
  let newNode=document.createElement("p");
  idcount++;
  nodeId="new"+idcount;
  newNode.setAttribute("id",nodeId);
  text= "["+nodeId+"] "+text;
  let textNode=document.createTextNode(text);
  newNode.appendChild(textNode);
  return newNode;
}

// helper function for switching to new current node
function switchTo(newNode){
  currentNode.setAttribute("class","");
  currentNode=newNode;
  currentNode.setAttribute("class","highlighted");
  document.getElementById("gbi").value=currentNode.getAttribute("id");
}
© 2019 GitHub, Inc.
