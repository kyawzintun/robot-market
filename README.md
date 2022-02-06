# Robot Market

This is an e-commerce site for you to buy robots.

## Author's Contact Details

- Name: Kyaw Zin Tun
- Email: cukyawzintun@gmail.com
- Linkedin: [@kyawzintun](https://www.linkedin.com/in/kyawzintun/)

## Features

- products should display in a grid.
- each robot should show image, name, price, stock, created date, material, and button to add to cart
  - created date should display in `DD-MM-YYYY` format
  - when robot is out of stock add to cart button should be disabled
  - price should be displayed in Thai Baht formatted, `฿5,300.00`
- user can filter by a robot's material type.
- user can add up to 5 different robots to cart, but they can select as much as they want in the same type until it runs
  out of stock.
  - if user try to add more that 5 different robots then it should show an alert
- cart should display on the right side of the screen.
  - cart should contain list of selected robots, total amount and total price
  - user can increase or decrease the number of robots inside of cart section
  - total amount should be the total number of selected robots
  - total price should be in Thai Baht formatted, `฿5,300.00`

## Technologies used

This project was created using the following technologies.

#### Frontend

- React JS
- Redux Toolkit (for managing and centralizing application state)
- RTK Query (for making api calls)
- React-router-dom (To handle routing)
- Tailwind CSS (for User Interface)
- React-toastify (To display success/error notifications)

#### Server

- Express

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the server on the other terminal)

In the first terminal

```
$ cd frontend
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```

In the second terminal

```
$ cd server
$ npm install (to install server-side dependencies)
& npm start (to start the server)
```
