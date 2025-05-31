"use client";
import Image from "next/image";
import styles from "./page.module.css";


import drink_map from "./drink_map.json";

export default function Home() {

  const handleDrinkClick = (id) => {
    // Handle the drink click here
    console.log("Drink ID clicked:", id);
    fetch(`http://10.0.0.14:8081/request-drink?id=${id}`)
    .then(response => response.text())
    .then(data => {
      console.log("Server response:", data);
      // Optionally, show a message to the user here
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  return (
    <div className={styles.page}>
      {drink_map.map((drink) => (
        <button key={drink.id} onClick={() => handleDrinkClick(drink.id)}>
          <img
            src={'/drinkimages/' + drink.thumbnail}
            alt={drink.name}
            width={100}
            height={100}
            className={styles.drinkImage} />
          <span>{drink.name}</span>
        </button>
      ))}
    </div>
  );
}
