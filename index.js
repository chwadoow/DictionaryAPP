const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const not_found=document.getElementById('not_found')
const apiKey = '48d3b1d2-f6ec-41e4-81c8-ce914ebe2e72'
const audio= document.querySelector('audio')


search_btn.addEventListener('click',e=>{ 
    e.preventDefault()

    const word = input.value ;
    if(word===''){
        alert('Please type a word')
        return;
        
    }
    getTheData(word)
})

