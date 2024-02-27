// function Multiplication(){
//     let ul = document.getElementById("ul");
//     let num = document.getElementById("number").value;

//     //clear the existing list items
//     ul.innerHTML="";

//     for (let i = 1;i<=10; i++){
//         let result=num*i;
//         console.log(num + "×" + i + "=" + result);
//         //create a new list item for each result
//         let li = document.createElement("li");
//         li.innerHTML=num+"×"+i+"="+result;

//         //Append the list item to the ul
//         ul.appendChild(li);
//     }

//     //clear the input field
//     document.getElementById("number").value="";
    
// }


function Multiplication(){
    if(document.getElementById("number").value==''){
        alert("You pressed ok")
    }
    else{
      let ul=document.getElementById("ul");
      let num=document.getElementById("number").value;

    ul.innerHTML="";

    for (let i=1;i<=10;i++){
        let result=num*i;
        console.log(num+"×"+i+"="+result);
        let li=document.createElement("li");
        li.innerHTML=num+"×"+i+"="+result;
        ul.appendChild(li);
    }
    document.getElementById("number").value="";
 }
 }