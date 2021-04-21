

let wordArray = [];
document.addEventListener("DOMContentLoaded", function(event)
{
  document.getElementById("page2").style.display = "none";
  document.getElementById("changeBtn").style.visibility = "hidden";
  document.getElementById("startBtn").addEventListener("click", startButton, false);
  document.getElementById("changeBtn").addEventListener("click", newPage, false);
})

function startButton()
{
  document.getElementById("startBtn").style.visibility = "hidden";
  let listOne = document.getElementById("firstList");
  for(let i = 0; i < 3; i++)
  {
    wordArray.push(prompt("Enter a word"));
    let newLi = document.createElement("li");
    listOne.appendChild(document.createTextNode(wordArray[i]));
    listOne.appendChild(newLi);
  }
  document.getElementById("changeBtn").style.visibility = "visible";

}

function newPage ()
{
  document.getElementById("page1").style.visibility = "none";
  document.getElementById("page2").style.visibility = "block";
  let newWordArray = wordArray.map(function(oneWord) {
    return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneword.length - 1) + oneWord.charAt(0);
  })
  let listTwo = document.getElementById("secondList");
  newWordArray.forEach(function(element)
  {
    let newNewLi = document.createElement("li");
    newNewLi.appendChild(document.createTextNode(element));
    listTwo.appendChild(newNewLi);
  });
}