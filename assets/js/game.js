// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 100;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames);
console.log(enemyNames.length)
for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
}

// fight function
var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //while (enemyHealth > 0) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        }
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;

        }

        // if player choses to fight, fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                playerMoney = playerMoney + 20;

                break;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove players's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

    }
}
for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert('Welcome to Robot Gladiators! Round' + (i + 1))
    }

    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter


    enemyHealth = 50;

    fight(enemyNames[i]);
}










