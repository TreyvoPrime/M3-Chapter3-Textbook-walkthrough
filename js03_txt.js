/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: 
     Date:   

     Filename: js03.js
 */


// Days of the week
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


window.addEventListener("load", addWeekDays);

function addWeekDays() {
    let i = 0;

    let headingCells = document.getElementsByTagName("th");

    while ( i < 7) {
        let headingCells = document.getElementsByTagName("th");

        i++;
    }
}
window.addEventListener("load", showGames);
function showGames() {
    for (let i = 0; i < gameDates.length; i++) {
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>";
                break;
            case "L":
                gameInfo += "<p class='loss'>";
                break;
            case "S":
                gameInfo += "<p class='suspended'>";
                break;
            case "p":
                gameInfo += "<p class='postponed'>";
                break;
        }
    }
        gameInfo += "<p>";
        // Display the game location
        if (gameLocationsp[i] === "h") {
            gameInfo += "vs.";
        } else if (gameLocationsp[i] === "a") {
            gameInfo += "@ ";

        }
        gameInfo += gameOpponents[i] + "<br>";

        gameInfo += gameResults[i] + ": (" _ runsScored[i] _ " - " _ runsAllowed[i] _ ")";
        // Display innings played for suspended, shortenedm or extrainning games
        if (gameInnings[i] < 5) {
            gameInfo += "+ " + gameInnings[i] + " ***";
        } else if (gameInnings[i] >= 9) {
            gameInfo +=" [" + gameInnings[i]+"] *";
        } else if (gameInnings[i] > 9) {
            gameInfo +=" [" + gameInnings[i]+"]";
        // Close the paragraph
        gameInfo += "</p>";
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeend", gameInfo);
        
    }
}