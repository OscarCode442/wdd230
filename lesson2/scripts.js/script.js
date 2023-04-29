const options = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', options)


const date = new Date(document.lastModified);
const lastModifiedDate = date.toLocaleDateString();
const lastModifiedTime = date.toLocaleTimeString();
document.getElementById('date').textContent = lastModifiedDate
document.getElementById("time").textContent = lastModifiedTime