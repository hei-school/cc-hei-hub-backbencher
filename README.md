[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wTBA-Etm)


README

Error handling in an array

This project demonstrates error handling in an array. The array can contain numbers from 1 to 10.

Features

The array can be loaded from a JSON file.
Duplicate numbers are not added to the array.
The number 666 is not added to the array.
Numbers that are not of type integer or that are not between 1 and 10 are not added to the array.
Installation

npm install
Usage

node main.js
Examples

# Enter a valid number
Enter a number from 1 to 10: 5
Array [1, 2, 3, 4, 5]

# Enter an invalid number
Enter a number from 1 to 10: 11
Error 400: Invalid number

# Enter a duplicate number
Enter a number from 1 to 10: 1
Error 100: Duplicate number

# Enter the number 666
Enter a number from 1 to 10: 666
Error 400: Sensitive number
