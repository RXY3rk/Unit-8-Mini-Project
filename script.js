let Comedy = ["https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg"];
let action = ["https://whsatimagehosting.glitch.me/uploaded/c89d8e2e912042e43c278c7eff24435f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/d0ee69b99156627ee05c4d91d91b7178.jpg"];

$(".submit-button").click(function() {
    let genreInput = $(".get-suggestions").val();
    $(".shows").empty();
    //Write code for Task Two below this line1
    if (genreInput === "action") {
        for (let picture of action) {
            $(".shows").append("<img src=" + picture + ">");
        }
    } else if (genreInput === "comedy") {
        for (let picture of Comedy) {
            $(".shows").append("<img src=" + picture + ">");
        }
    }
});

$(".suggestion-button").click(function() {
    let suggestion = $(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
    //Write code for Task Three below this line!
    action.push(suggestion);
    console.log(action);
    Comedy.push(suggestion);
    console.log (
        Comedy);
});