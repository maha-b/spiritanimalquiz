// background color changes for each html file
// button moves onto next page
// store input values
// turn string into an array
// select words at random
// query words to gipgy
// show gif on result page
// last button resets & goes back home


main()


function main() {

  // declaring variables/capturing elements
  // buttons
  let startBtn = document.querySelector("#start-btn");
  let activityBtn = document.querySelector("#to-invention");
  let inventionBtn = document.querySelector("#to-skincare");
  let skincareBtn = document.querySelector("#to-fact");
  let factBtn = document.querySelector("#to-result");
  let resultBtn = document.querySelector("#go-home-Btn");



  // arrays
  let storedString = null;
  let currentArray = [];
  let spiritAnimalValue;
  let i;
  let q;
  let spiritAnimalValue1, spiritAnimalValue2, spiritAnimalValue3;

  const key = "TVdJGl84dr2n0L2V83seHi5S9okriCp5";
  let url;
  let gifArray;




  // grabbing encapsulating div for each page
  let indexPg = document.querySelector(".index-pg");
  let activityPg = document.querySelector(".activity-pg");
  let inventionPg = document.querySelector(".invention-pg");
  let skincarePg = document.querySelector(".skincare-pg");
  let factPg = document.querySelector(".fact-pg");
  let resultPg = document.querySelector(".result-pg");



  // INDEX //
  startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    indexPg.classList.add("hide");
    activityPg.classList.remove("hide");

    // changing bg color
    document.querySelector(".phone-act").style.background = "#8186C1";
    document.querySelector(".cont-act").style.background = "#8186C1";




  });


  // ACTIVITY //
  activityBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // hiding and unhiding pages
    activityPg.classList.add("hide");
    inventionPg.classList.remove("hide");

    // changing bg color
    document.querySelector(".phone-inv").style.background = "#E46EAA";
    document.querySelector(".cont-inv").style.background = "#E46EAA";

    // grabbing value of selected radio dial
    if (document.getElementById("activityChoice1").checked) {
      storedString = document.getElementById("activityChoice1").value;
    } else if (document.getElementById("activityChoice2").checked) {
      storedString = document.getElementById("activityChoice2").value;
    } else if (document.getElementById("activityChoice3").checked) {
      storedString = document.getElementById("activityChoice3").value;
    } else {
      storedString = " ";
    }

    // changing form value into an array
    currentArray = storedString.split(" ");

  });


  // INVENTION //
  inventionBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // hiding and unhiding pages
    inventionPg.classList.add("hide");
    skincarePg.classList.remove("hide");

    // changing bg color
    document.querySelector(".phone-skc").style.background = "#E58555";
    document.querySelector(".cont-skc").style.background = "#E58555";

    // grabbing value of selected radio dial
    if (document.getElementById("inventionChoice1").checked) {
      storedString = document.getElementById("inventionChoice1").value;
    } else if (document.getElementById("inventionChoice2").checked) {
      storedString = document.getElementById("inventionChoice2").value;
    } else if (document.getElementById("inventionChoice3").checked) {
      storedString = document.getElementById("inventionChoice3").value;
    } else {
      storedString = " ";
    }

    // changing form value into an array + concatenating to previous array
    currentArray = currentArray.concat(storedString.split(" "));

  });


  // SKINCARE //
  skincareBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // hiding and unhiding pages
    skincarePg.classList.add("hide");
    factPg.classList.remove("hide");

    // changing bg color
    document.querySelector(".phone-fct").style.background = "#E26F80";
    document.querySelector(".cont-fct").style.background = "#E26F80";

    // grabbing value of selected radio dial
    if (document.getElementById("skincareChoice1").checked) {
      storedString = document.getElementById("skincareChoice1").value;
    } else if (document.getElementById("skincareChoice2").checked) {
      storedString = document.getElementById("skincareChoice2").value;
    } else if (document.getElementById("skincareChoice3").checked) {
      storedString = document.getElementById("skincareChoice3").value;
    } else {
      storedString = " ";
    }

    // changing form value into an array + concatenating to previous array
    currentArray = currentArray.concat(storedString.split(" "));


  });


  // FACT //
  factBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // hiding and unhiding pages
    factPg.classList.add("hide");
    resultPg.classList.remove("hide");

    // changing bg color
    document.querySelector(".phone-res").style.background = "#11B7D2";
    document.querySelector(".cont-res").style.background = "#11B7D2";

    // grabbing value of selected radio dial
    if (document.getElementById("factChoice1").checked) {
      storedString = document.getElementById("factChoice1").value;
    } else if (document.getElementById("factChoice2").checked) {
      storedString = document.getElementById("factChoice2").value;
    } else if (document.getElementById("factChoice3").checked) {
      storedString = document.getElementById("factChoice3").value;
    } else {
      storedString = " ";
    }

    // changing form value into an array + concatenating to previous array
    currentArray = currentArray.concat(storedString.split(" "));



    // 3 random words
    i = Math.floor(Math.random() * (currentArray.length - 1));
    spiritAnimalValue1 = currentArray[i];

    i = Math.floor(Math.random() * (currentArray.length - 1));
    spiritAnimalValue2 = currentArray[i];

    i = Math.floor(Math.random() * (currentArray.length - 1));
    spiritAnimalValue3 = currentArray[i];

    // q will be used to submit a search request to giphy
    q = spiritAnimalValue1.concat("+", spiritAnimalValue2, "+", spiritAnimalValue3);



    async function askForData() {

      //using fetch to make a request
      url = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${key}`
      const response = await fetch(url);
      const giphyData = await response.json();

      // if there are no values
      if (giphyData.pagination.total_count == 0) {

        url = `https://api.giphy.com/v1/gifs/search?q=someone+else's&api_key=${key}`
        const response = await fetch(url);
        const giphyData = await response.json();

        let gifArray = giphyData.data;

        // random result selector
        let j = Math.floor(Math.random() * (gifArray.length - 1));

        let gifUrl = gifArray[j].images.fixed_width.url;
        let img = document.createElement("img");
        img.src = gifUrl;

        document.querySelector("#get-result").appendChild(img);


        document.querySelector("#disclaimer").querySelector("span").innerText = "if we were unable to determine your spirit animal due to you possibly being an office plant, or similar.. we've displayed someone else's so you don't feel left out."

      } else {


        let gifArray = giphyData.data;

        // random result selector
        let j = Math.floor(Math.random() * (gifArray.length - 1));

        let gifUrl = gifArray[j].images.fixed_width.url;
        let img = document.createElement("img");
        img.src = gifUrl;

        document.querySelector("#get-result").appendChild(img);

      }
    }

    askForData();






  });


  // RESULT //
  resultBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // hiding and unhiding pages
    resultPg.classList.add("hide");
    indexPg.classList.remove("hide");




    // resetting stored values
    location.reload();



  });


}

