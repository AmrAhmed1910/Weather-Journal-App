/* Global Variables */
const key = "d61c0bc1f4225fe1dd28db9c9aad3feb";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 + '.' + d.getDate() + '.' + d.getFullYear();


// Add functionality to button
const btn = document.getElementById("generate");
btn.addEventListener("click", listening);
// function for showing tempreture
async function listening() {
  const zipCode = document.getElementById("zip").value;
  const link = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${key}&units=metric`;
  const result = await fetch(link);
  const resultData = await result.json();
  const temp = await resultData.main;
  const feelings = document.getElementById("feelings").value;
  const response = await fetch('/setData', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      date: newDate,
      temp: temp,
      feelings: feelings,
    }),
  });
  const getDataRes = await fetch('/getData');
  const data = await getDataRes.json();
  console.log(data);
  console.log(temp);
  document.getElementById("date").innerHTML = `Date: ${data.date}`;
  document.getElementById("temp").innerHTML = `The temperature is ${data.temp.temp}°C`;
  document.getElementById("content").innerHTML = `You are feeling ${data.feelings}`;
}

