function fortuneTeller(name, age) {
  let fortune = "";

  // Fortune based on name length
  if (name.length > 7) {
    fortune += "You will marry late in life. ";
  } else if (name.length < 5) {
    fortune += "You will marry within a year. ";
  } else {
    fortune += "You will encounter a once-in-a-lifetime opportunity. ";
  }

  // Additional name-based fortunes
  if (name[0].toLowerCase() === "r") {
    fortune += "You will be rich. ";
  }
  if (name.toLowerCase().includes("i")) {
    fortune += "You will fall in love this week. ";
  }

  // Fortune based on age
  if (age < 18) {
    fortune += "You will become famous at a young age.";
  } else if (age >= 18 && age <= 30) {
    fortune += "An exciting adventure awaits you soon.";
  } else {
    fortune += "You will receive unexpected good news soon.";
  }

  return fortune;
}

// Prompt user for input
let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

// Ensure valid input
if (userName && !isNaN(userAge)) {
  console.log(fortuneTeller(userName, userAge));
} else {
  console.log("Please enter a valid name and age.");
}
