# javascript-review-lab2

## Overview

This is a **Fortune Teller** program built using **JavaScript**. The program generates a personalized fortune based on the user's **name** and **age**. It can be run in the **console** or through a **simple web interface**.

## Features

- Generates a **fortune** based on the user's name and age.
- Uses **conditional statements** (`if` statements) to determine fortunes.
- Works with both **console input** and an **interactive web UI**.
- User-friendly **HTML interface** with a button to get a fortune instantly.

---

## How the Code Works

1. **JavaScript Function (`fortuneTeller`)**

- Takes two inputs: **name** and **age**.
- Generates fortunes based on:
- **Name length** (shorter, longer, or in between).
- **First letter of the name** (If it starts with 'R').
- **Presence of the letter 'i'** in the name.
- **Age category** (under 18, 18-30, or over 30).
- Returns a **customized fortune message**.

2. **User Input & Console Output**

- Prompts the user for their **name** and **age** using `prompt()`.
- Calls `fortuneTeller()` with the input values.
- Displays the fortune message in the **console**.

3. **Web UI**

- A **simple HTML page** with input fields and a button.
- When the user clicks **"Get Fortune"**, it:
- Reads the **name** and **age**.
- Calls `fortuneTeller()`.
- Displays the **fortune message** on the webpage.

---

## How to Run the Code

### **Option 1: Run in the Console**

1. Copy the JavaScript code from [`fortune-teller.js`](fortune-teller.js).
2. Open your **browser console**:

- **Windows:** Press `Ctrl + Shift + J` (Chrome) or `Ctrl + Shift + K` (Firefox).
- **Mac:** Press `Cmd + Option + J` (Chrome) or `Cmd + Option + K` (Firefox).

3. Paste the code and press `Enter`.
4. Enter your **name** and **age** when prompted.
5. Your **fortune** will be displayed in the console.

### **Option 2: Run the Web UI**

1. Download or copy the **HTML file** (`index.html`).
2. Open the file in a **web browser**.
3. Enter your **name** and **age** in the input fields.
4. Click **"Get Fortune"** to see your personalized fortune.
