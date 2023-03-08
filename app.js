const dice = document.querySelector(".dice");
const advice = document.querySelector(".content");
const id = document.getElementById("id");
let api_response = null;

dice.addEventListener("click", function () {
  $.ajax({
    url: "https://api.adviceslip.com/advice",
    dataType: "json",
    type: "get",
    success: function (response) {
      api_response = response.slip;
      id.innerHTML = api_response.id;
      advice.innerHTML = api_response.advice;
    },
  });
});
