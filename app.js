const btn = document.getElementById('btn');
const thoughtText = document.getElementById('thought')
btn.addEventListener('click', () => {

    let category = 'happiness';

    fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
        method: 'GET',
        headers: {
            'X-Api-Key': '8PFTsWcK7bgCVewE07ZACQ==Rvz6fb0JG8g2SeAn',
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(result => {
            // console.log(result);
            thoughtText.innerHTML = result[0].quote
            console.log(result);
        })
        


})
