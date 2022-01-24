# CoffeMachine
An application used for testing purposes.

## About
Javascript project that desribes coffe machine and it´s functionalities. Also tests were performed to validate and verify the product. 

## Task description
### In Croatian language
Stroj za kavu mora imati varijable kao što su: količina kave, količina vode, status
stroja – definirana svojstva za kavu i vodu moraju biti numeričkog tipa, dok status stroja
mora biti Boolean tipa. Stroj za kavu mora imati metode za paljenje i gašenje stroja. Svaka
od navedenih metoda za paljenje i gašenje mora vratiti status Boolean tipa. Ako je stroj
upaljen i ponovo ga se pali, metoda mora vratiti poruku da je stroj već upaljen. Također ako je
stroj ugašen, i pokušava ga se ponovno ugasiti – potrebno je vratiti poruku da je stroj već
ugašen. Osim metode za paljenje i gašenje, potrebno je definirati metodu koja nadopunjuje
količinu kave i vode. Predani argumenti navedenoj metodi moraju biti numeričkog tipa –
ako je nadopuna uspješna, metoda mora vratiti status 200. Ako predani argumenti nisu
numeričkog tipa, metoda mora vratiti grešku s definiranom porukom. Za kraj potrebno je
definirati metodu za pravljenje kave. Sve dok ima više od 5g kave i 15ml vode stroj može
praviti kavu. Ako stroj ima manje od navedenih količina, mora vratiti poruku da je potrebno
nadopuniti definirane količine i ne smije omogućiti pravljenje nove kave.

1. Unutar CodeSandbox-a potrebno je kreirati zad1.js i zalijepiti napisani
programski kod.
2. Unutar direktorija test/ potrebno je kreirati zad1.test.js i pokriti testnim
slučajevima navedene funkcionalnosti koje su napisane u navedenom tekstu.
3. Potrebno je analizirati programski kod i popraviti moguće greške u
programskom kodu koje se otkriju unutar testnih slučajeva (unit testovi).
4. Nakon pokrivenih testnih slučajeva potrebno je odraditi strukturno testiranje.
Svi parametri strukturnog testiranja moraju biti pokriveni s 100%.

## Features
The javascript project lets you:

- Turn on coffe machine
- Turn off coffe machine
- Refill water and coffe
- make coffe
 
## Tech-stack
The project seeks to use recommended practices and libraries in testing.
- mocha -> a test frame that executes written test functions that simulate
executing the defined program code in a specific order and recording the results
performed test
- chai -> a framework containing a library of ready-made assertions used
combined with Mocha. Provides functions and methods by which a particular test output can be compared with the expected value
- sinon -> Standalone and test framework agnostic JavaScript test spies, stubs and mocks. Used for testing console logs in this project
- nyc -> istanbul/nyc is a code coverage tool which works well with mocha, they are simple and easy tools that make testing easy

## Screenshots
![image](https://user-images.githubusercontent.com/75457058/150850048-897f552a-ab78-4da4-8141-434f4994c9e8.png)
![image](https://user-images.githubusercontent.com/75457058/150850062-ae1c0df1-e0ea-4f20-9e4c-4ea2ef0ed320.png)
![image](https://user-images.githubusercontent.com/75457058/150850079-43f88ba0-220d-4ee3-932e-a43547abe6fa.png)
![image](https://user-images.githubusercontent.com/75457058/150850087-5aa20e4f-3f54-4718-b03b-4260ffc60867.png)

## Setup
1. Clone the repository
```
https://github.com/kovaccc/CoffeMachine.git
```
2. Install missing libraries and packages in Terminal
- nyc -> npm i nyc --save-dev
- mocha -> npm install mocha
- sinon -> npm install sinon
- chai -> npm install chai
3. Add this line to package.json -> scripts:    
"test": "nyc mocha"
4. Run with -> npm test

