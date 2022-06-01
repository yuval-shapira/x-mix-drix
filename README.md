# X-Mix-Drix Game

This project was bootstrapped with [Create React App]

## Old known game...

    Choose a cell to place your move and click on it.
    Now the tern moved to the second player.

#### Port: http://localhost:3000

## npm start to play

## Technologies:

    React.useState()

## ./App.js

    main logic file

##  ./HelperFunc/WinCheck.mjs => Function winCheck
    Gets 2 paramenter:
        1. which player to check 
        2. Copy of table game current state
    
    Returns:
        An array with 3 cells numbers (that represent row/column/cross) - if player won
        false - if player didn't win
