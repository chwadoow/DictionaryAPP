# Dictionary application

This is my README.md file for my dictionary application. Created from a weeks learning of javascript. I have put my knowledge of DOM manipulation, eventlisteners, and fetching data from an API.
## LANGUAGES USED:
CSS HTML and JAVASCRIPT


## motivation;
Being my first project after learning Javascript for the last one month. I decided to take on craeting a dictionary application where one can find meaning of words without using the physical dictionary. Saving some time when stuck with a word whose meaning you do not know meanings to.

## BUILD STATUS:
I am yet to sort any bugs or error but the web application runs smoothly.

## FRAMEWORKS USED:
None

## INSTALLATION
The source code for the project is precent in this repository.

## API REFERENCE:
Merriam-Webster Dictionary API.

## HOW TO USE :
Open the HTML using the browser and land on the user interface of the dictionary application.
The input section will autofocus,add a word and press the click button to search out the meaning of the word from an API and using Dom manipulation display the meaning of the word.
English words only.

##CODE

>HTML

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dictionary</title>
    <link rel="stylesheet" href="./main.css">
    
</head>
<body>
    <div class="wrapper">
        <div class="content">
            <h2>English Dictionary</h2>
            <div class="form">
                <div class="input">
                    <input type="text" id="input" placeholder="Type a word" autofocus>
                    <button id="search_btn">Search</button>
                </div>
            </div>
            <div class="data-section">
                <div id="not_found">
                 
                </div>
            <div> <button id='liker'>clickMeToLike</button></div>
            </div>
            
        </div>
        <div class="qtquote" >
            <h3>Advice of the day.</h3>
            <h4 class="quote"></h4>
        </div>

    </div>
  
        


    
 <script src="./index.js"></script>
</body>
</html>


```

>javascript

```javascript
const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const not_found=document.getElementById('not_found')
const apiKey = '48d3b1d2-f6ec-41e4-81c8-ce914ebe2e72'
const audio= document.querySelector('audio')
const theHearts = document.getElementById("liker")

const FULL_HEART = '♥'
const quote= document.querySelector('.quote')



search_btn.addEventListener('click',e=>{ 
    e.preventDefault()//prevent page reload

    const word = input.value ;
    if(word===''){
        alert('Please type a word')
        return;
        
    }
    getTheData(word) //function that fetches data from dictionary API.
})


function getTheData(word){
    fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`)//fetch keyword used to make a request to API
        .then(res=>res.json())//.this keyword gets the response from server
                              // the .json converts the response from json format


        .then(res=>{ 
   
            if(!res.length){
                not_found.innerText='no results'
            return;
         }
            
            let definition =res[0].shortdef[0]         
            not_found.innerText=definition
            //above is how the translated json respose is displayed using DOM manipulation 
            
 })}


theHearts.addEventListener('click',function likerFunc(e){
    e.preventDefault
    const newLike = document.createElement('li')
    newLike.innerText=FULL_HEART
    theHearts.appendChild(newLike)
    e.reset()
    //liker event listener 

}
    
);
document.addEventListener('DOMContentLoaded',function (){
    fetch("https://type.fit/api/quotes")
    .then( res=> res.json() )
    .then(res=>{
        quote.innerText=res[1].text
        //this my second request from another API that manipulates the DOM to display on screen
        
       

}
        
)}     )
;


```




