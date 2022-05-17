//Task 1 - Task 3

console.log("It's Kanye time...");

async function getQuote(event) {
    let response = await fetch('https://api.kanye.rest/');
    let data = await response.json();
    console.log(data);
    let h1 = document.querySelector('h1');
    h1.innerText = data.quote;
    function getString () {
    
        let list = document.createElement('li');
        list.innerText = data.quote;
        ol.appendChild(list);
        
    }    
    getString()
}

// getQuote()

//Task 2

let button = document.querySelector("#new-quote-button");
let ol = document.querySelector('#kanye-quote-history');

button.addEventListener("click", getQuote);

/*Task 3 Plan:
 Create a function that takes a string
- Create a new list item with a string from the function 
- Add the new list to <ol></ol> with id #kanye-quote-history
- Call this function within getQuote function 
- Store quotes in #kanye-quote-history */

/*function getString () {
    
    let list = document.createElement('li');
    list.innerText = data.quote;
    ol.appendChild(list);
    
}*/
    



