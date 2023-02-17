const benefitcontainer = document.querySelector(".benefit");


function setDisplay(one, price) {

    benefitcontainer.style.display = "block";

    document.querySelector("#one").textContent = one;
    document.querySelector("#price").textContent = price;
}

function free() {

    let price = "Free";
    let one = "Free water supply";

    setDisplay(one, price);

}


function bronze() {
    let one = "Bronze level gives you access to all of the member luncheons each month";
    let price = "$50.00/month";

    setDisplay(one, price);


}

function silver() {
    let one = "All of bronze benefits, Silver level gives you access to all of the member luncheons each month and free food at the lunch";
    let price = "$75/month";

    setDisplay(one, price);



}

function gold() {
    let one = "All of Silver benefits, Gold level gives you access to all of the member luncheons each month and you don't have present at the lunch.";
    let price = "$100.00/month";

    setDisplay(one, price);

}



document.querySelector("#free").addEventListener("click", free);
document.querySelector("#bronze").addEventListener("click", bronze);
document.querySelector("#silver").addEventListener("click", silver);
document.querySelector("#gold").addEventListener("click", gold);

// submission time

const dt = new Date();
let day = dt.getDate();
let month = dt.getMonth() + 1;
let years = dt.getFullYear();
let hour = dt.getHours();
let minutes = dt.getMinutes();
let sec = dt.getSeconds();
day = (day <= 9) ? '0' + day : day;
month = (month <= 9) ? '0' + month : month;

document.querySelector("#time").value = `${day}.${month}.${years}..${hour}.${minutes}.${sec}`;
