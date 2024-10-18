// Task 1: Standardizing the name input
function standardizeName() {
    let name = document.getElementById("nameInput").value;
    if (!name) return alert("Please enter your name.");
    let standardizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    document.getElementById("nameResult").textContent = "Hello " + standardizedName;
}

// Task 2: Life in weeks
function lifeInWeeks() {
    const age = document.getElementById("ageInput").value;
    if (!age) return alert("Please enter your age.");
    const yearsLeft = 90 - age;
    const days = yearsLeft * 365;
    const weeks = yearsLeft * 52;
    const months = yearsLeft * 12;
    document.getElementById("lifeInWeeksResult").textContent = `You have ${days} days, ${weeks} weeks, and ${months} months left.`;
}

// Task 3: BMI Calculator
function calculateBMI() {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    if (!weight || !height) return alert("Please enter both weight and height.");
    const bmi = weight / (height * height);
    let message;
    if (bmi < 18.5) {
        message = `Your BMI is ${bmi.toFixed(1)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = `Your BMI is ${bmi.toFixed(1)}, so you have a normal weight.`;
    } else {
        message = `Your BMI is ${bmi.toFixed(1)}, so you are overweight.`;
    }
    document.getElementById("bmiResult").textContent = message;
}

// Task 4: Who's buying lunch?
function whoIsPaying() {
    const names = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];
    const randomIndex = Math.floor(Math.random() * names.length);
    const result = `${names[randomIndex]} is going to buy lunch today.`;
    document.getElementById("randomPersonResult").textContent = result;
}

// Task 5: Fibonacci Sequence Generator
function fibonacciGenerator() {
    const n = document.getElementById("fibonacciInput").value;
    if (!n) return alert("Please enter a number.");
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    document.getElementById("fibonacciResult").textContent = fibSequence.slice(0, n).join(", ");
}
