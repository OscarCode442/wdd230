const options = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', options)

// shows the last time the code was modified
const date = new Date(document.lastModified);
// const lastModifiedDate = date.toLocaleDateString();
const lastModifiedDate = now.getDayName();
// const lastModifiedTime = date.toLocaleTimeString();
const lastModifiedTime = now.getMonthName();
document.getElementById('date').textContent = lastModifiedDate
document.getElementById("time").textContent = lastModifiedTime

// var day = now.getDayName();
// var month = now.getMonthName();

