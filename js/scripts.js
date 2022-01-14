$(document).ready(function () {
  $("form#cartoon-dating").submit(function (event) {
    event.preventDefault();
    const eraInput = $("select#era").val();
    const animationInput = $("select#animation").val();
    const mediaPreferenceInput = $("select#game-tv-movie").val();
    const firstLetterInput = $("input#starting-letter").val();

    $("#card-results").hide();


    if (eraInput === "30s to 70s" && animationInput === "Hand Drawn" && mediaPreferenceInput === "TV Shows") {
      //$("#card-results").show();
      $("#cartoon-result-name").text("Bugs Bunny");
      $("#cartoon-headshot").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png")
    } else if (eraInput === "2000s" && animationInput === "Computer Generated" && mediaPreferenceInput === "Movies") {
      //$("#card-results").show();
      $("#cartoon-result-name").text("Nemo");
      $("#cartoon-headshot").attr("src", "https://nypost.com/wp-content/uploads/sites/2/2021/06/finding-nemo-1-copy.jpg")
    } else if (eraInput === "80s to 90s" && animationInput === "Hand Drawn" && mediaPreferenceInput === "Movies") {
      //$("#card-results").show();
      $("#cartoon-result-name").text("Little Mermaid");
      $("#cartoon-headshot").attr("src", "https://www.gannett-cdn.com/presto/2019/07/03/USAT/7ee50b2a-6acb-4924-a98b-b1d3045691c4-AP_Film-The_Little_Mermaid-Anniversary.JPG")
    } else if (eraInput === "2000s" && animationInput === "Computer Generated" && mediaPreferenceInput === "Video Games") {
      //$("#card-results").show();
      $("#cartoon-result-name").text("Sonic");
      $("#cartoon-headshot").attr("src", "https://m.media-amazon.com/images/M/MV5BNDdkMWNlY2YtOTE5Yy00NTFhLTgxOTItYjgxYWM5NTQyZWIzXkEyXkFqcGdeQXVyODUxMTE5NjU@._V1_.jpg")
    } else if (eraInput === "2000s" && animationInput === "Computer Generated" && mediaPreferenceInput === "Movies") {
      //$("#card-results").show();
      $("#cartoon-result-name").text("Simba");
      $("#cartoon-headshot").attr("src", "https://static01.nyt.com/images/2019/07/21/arts/23lionking1/merlin_154880472_6647f53b-1be2-43cd-87e0-ce26ebf1d4ed-superJumbo.jpg")
    } else {
      $("#cartoon-result-name").text("no match for you!");
      $("#cartoon-headshot").attr("src", "")
    }
    $("#card-results").show();
    event.preventDefault();
  })

})

//Bugs Bunny, Little Mermaid, Sonic, Simba, Nemo