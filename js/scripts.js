$(document).ready(function () {
  $("form#cartoon-dating").submit(function (event) {
    event.preventDefault();
    const eraInput = $("select#era").val();
    const animationInput = $("select#animation").val();
    const mediaPreferenceInput = $("select#game-tv-movie").val();
    const firstLetterInput = $("input#starting-letter").val();

    //console.log("era input: " + eraInput);

    if (eraInput) {
      if (eraInput === "30s to 70s" && animationInput === "Hand Drawn" && mediaPreferenceInput === "TV Shows") {
        $("#card-results").show();
        $("#cartoon-result-name").text("Bugs Bunny");
        $("#cartoon-headshot").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png")
      }
    }

    if (eraInput) {
      if (eraInput === "2000s" && animationInput === "Computer Generated" && mediaPreferenceInput === "Movies") {
        $("#card-results").show();
        $("#cartoon-result-name").text("Nemo");
        $("#cartoon-headshot").attr("src", "https://nypost.com/wp-content/uploads/sites/2/2021/06/finding-nemo-1-copy.jpg")
      }
    }

    event.preventDefault();
  })

})

//Bugs Bunny, Little Mermaid, Sonic, Simba, Nemo