import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our menu</h2> <br></br>
      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((el, index) => (
            <li>
              <Pizza pizzaObj={el} key={index} />
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no pizzas now</p>
      )}
    </main>
  );
}

function Footer() {
  const openingHour = 8;
  const closingHour = 22;
  const currentTime = new Date().getHours();
  const isOpenNow = currentTime >= openingHour && currentTime <= closingHour;

  return (
    <footer className="footer">
      {isOpenNow && (
        <div className="order">
          <p>We are open till {closingHour}:00</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  const { name, ingredients, photoName, price, soldOut } = pizzaObj;
  // if (soldOut) return <p>Sold out</p>;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <span>{soldOut ? "SOLD OUT" : price}</span>
    </li>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
