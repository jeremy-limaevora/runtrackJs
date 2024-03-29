// document.getElementById('button').addEventListener('click', async function() {
//     fetch("./expression.txt",
//     {
//         mode:'no-cors'
//     })
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('expression.txt').textContent = data;
//         })
//         .catch(error => console.error('Erreur:', error));
// });

document.getElementById('button').addEventListener('click', async function() {
    let result = await fetch("./expression.txt",
    {
        // mode:'no-cors'
    })
    let response = await result.text()
    console.log(response,'toto')
})
