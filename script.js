let container=document.createElement("div");
 container.setAttribute("class","container");

let navbar=document.createElement("nav");
navbar.setAttribute("class","navbar navbar-dark bg-info");

let head=document.createElement("h1");
head.innerHTML="DICTINORY";

let division=document.createElement("div");
division.setAttribute("class","example")

let inputTag=document.createElement("input");
inputTag.setAttribute("type","text");
inputTag.setAttribute("placeholder","Search");
inputTag.setAttribute("id","txt");

let buttontag=document.createElement("button");
buttontag.setAttribute("type","search");
buttontag.setAttribute("id","sear");

let itag=document.createElement("i");
itag.setAttribute("class","fa fa-search");
buttontag.append(itag);

let ptag=document.createElement("p");
ptag.setAttribute("class","message");
ptag.innerHTML="Once search please Refresh the page because using promise";

let division1=document.createElement("div");
division1.setAttribute("class","result");

navbar.append(head);
container.append(navbar);
division.append(inputTag,buttontag);
container.append(division);
container.append(ptag);
container.append(division1);
document.body.append(container);


let dictinory=new Promise((resolve, reject) => {
    let dictinoryinput=document.getElementById("sear");
    dictinoryinput.addEventListener('click',()=>{
        console.log(dictinoryinput);
         console.log(txt.value);
    let request=new XMLHttpRequest();
    request.open(`GET`,`https://api.dictionaryapi.dev/api/v2/entries/en/${txt.value}`);
    request.send();
    request.onload=function(){
        if(request.status==200){
            let data=JSON.parse(request.response);
            resolve(data);
        }else{
            reject("Enter the correct word");
        }
    }
 })
})
dictinory.then((res)=>{console.log(res)
    console.log(res[0].meanings[0].definitions[0].definition);
    console.log(res[0].meanings[0].synonyms[0]);
    division1.innerHTML=`<p><b>Definition : ${res[0].meanings[0].definitions[0].definition}</b></p><br>
                         <p><b>Synonymus : ${res[0].meanings[0].synonyms[0]}</b></p>`
}).catch((err)=>{console.log(err)
    division1.innerHTML=`<p><b>This is Error : Enter the correct word</b></p>`
})
