const textArea1 = document.getElementById('mytextarea1');
const textArea2 = document.getElementById('mytextarea2');
const btn = document.getElementById('btn');
const scramDisplay = document.getElementById('scram_display');
const clearBtn = document.getElementById('clearBtn');

function scrambleWord(word) {
   
    return word.split('').sort(() => 0.5 - Math.random()).join('');
}

btn.addEventListener("click", function() {

    event.preventDefault();

    const txtArea1 = textArea1.value;
    const txtArea2 = textArea2.value.split(/\s+/);

    let result = txtArea1;

    txtArea2.forEach(word => {
        const scrambledWord = scrambleWord(word);
        result = result.replace(new RegExp(word, 'g'), '*****');
    });
    
    scramDisplay.textContent = result;
});

clearBtn.addEventListener("click", function() {
    scramDisplay.textContent = ''; 
});

