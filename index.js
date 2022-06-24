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



