/* Demonstration playground for Tutorial 4 */

console.log("playground.js is running");


/* Activity 2: Football Trophy */

// Activity 2, Rule 1

function average(values) {
    //TODO Implement this function
    var total = 0;
    var count = 0;
    for (let num of values) {
        total += num;
        count += 1;
    }
    return total / count;
}


function determineRule1Winner() {
    //TODO Write your code for determining the winner of the two teams and updating the page here
    const masked_owls_scores = [72,63,99,105];
    const quolls_scores = [44,89,92,111];
    var masked_owls_average = average(masked_owls_scores);
    var quolls_average = average(quolls_scores);
    var message;

    if (quolls_average > masked_owls_average) {
        message = "Quolls win!"
    }
    else if (quolls_average < masked_owls_average) {
        message = "Masked owls win!"
    }
    else {
        message = "It's a draw!"
    }
    document.getElementById("activity2-highest-avg").innerHTML = message;
}


// Activity 2, Rule 2

function wins(scores1, scores2) {
    //TODO Implement this function

    var s1_greater = 0;
    var index = 0;

    for (let num of scores1) {

        if(num > scores2[index]) {
            s1_greater += 1;
        }
        index += 1;
    }

    return s1_greater;
}

function determineRule2Winner() {
    //TODO Write your code for determining the winner of the two teams under the new conditions and updating the page here
    var masked_owls_wins = 0;
    var quolls_wins = 0;
    var message;

    const masked_owls_scores = [86,45,54,73,124];
    const quolls_scores = [78,61,56,77,101];

    wins(masked_owls_scores, quolls_scores);

    if (wins(masked_owls_scores, quolls_scores) > masked_owls_scores.length / 2) {
        message = "Masked owls win!"
    }
    else if (wins(masked_owls_scores, quolls_scores) < masked_owls_scores.length / 2) {
        message = "Quolls win!"
    }
    else {
        message = "It's a draw!"
    }
    document.getElementById("activity2-most-wins").innerHTML = message;
}

//TODO Call the top-level functions determineRule1Winner and determinRule2Winner when they're ready

determineRule1Winner();
determineRule2Winner();


/* Activity 3: Tax */


let clients = { //TODO Record client incomes here
    "Max": 24601,
    "Ash": 55100,
    "Bailey": 147800
};

//TODO Write your other functions for Activity 3 here

function calculateTax(income) {
    if (income < 45000) {
        // console.log("Income below 45k");
        return income * 0.1;
    }
    else if (45000 < income && income < 90000) {
        // console.log("Income between 45k and 90k");
        return income * 0.15;
    }
    else if (90000 < income && income < 130000) {
        // console.log("Income between 90k and 130k");
        return income * 0.21;
    }
    else {
        // console.log("Income above 130k");
        return income * 0.27;
    }
}

function determineTaxes(clients) {
    var tax;
    var name;
    var income;
    var after_tax;

    for(const person in clients) {
        name = `${person}`;
        income = `${clients[person]}`;
        tax = calculateTax(income);
        after_tax = income - tax;

        console.log(`Given ${name}'s income of $${income.toFixed(2)}, they pay $${tax.toFixed(2)} in tax, so their after tax income is $${after_tax.toFixed(2)}.`)
    }
}

determineTaxes(clients);


/* Activity 4: Arbitrary HTML */

//TODO Write your function for Activity 4 here



// And call that function here
