const btn = document.querySelector("#btn");

btn.addEventListener("click",handleClick);

const div = document.querySelector(".container");
const table = document.querySelector("#table");


function handleClick(){

    fetch(`https://p-9x7e.onrender.com/products/products`)
    .then(response => response.json())  //.then bcz untill promise gets resolved it will wait then it will give back the response
    .then(res => {
        console.log(res.data);

        for (let index = 0; index < res.data.length; index++) {
             const para = document.createElement('p');


             const tr = document.createElement("tr");
             const td1 = document.createElement("td");
             const td2 = document.createElement("td");
             const td3 = document.createElement("td");
             
            td1.innerText = res.data[index]._id;
            td2.innerText = res.data[index].pName;
            td3.innerText = res.data[index].pPrice;

            tr.append(td1, td2, td3);
            table.append(tr);

          

            
        }
    });
}
