// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format( now );

// select the elements to manipulate (output to)
const revDate = document.getElementById("revDate");
const datefield = document.querySelector(".date");

// long, medium, short options

datefield.innerHTML = `<em>${fulldate}</em>`;
revDate.textContent = `${ document.lastModified }`;



// declare variables
const d = new Date();
const year = d.getDay();




//Copyright Year

document.querySelector('#copyrightyear').textContent = d.getFullYear()