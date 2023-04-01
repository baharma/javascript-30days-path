let content =  document.getElementById('judul')

content.style.color = 'blue';


content.innerHTML = 'tai '


const p = document.getElementsByTagName('p')
// tibisa memberi nilai dari bentuk array 

for(let i = 0 ; i < p.length; i++){
    p[i].style.backgroundColor = 'blue'
}
