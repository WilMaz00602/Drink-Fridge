"use client";
import Image from "next/image";
import "./style/drink-selection.scss";


import drink_map from "./drink_map.json";

export default function Home() {

    const handleDrinkClick = (id) => {
        // Handle the drink click here
        console.log("Drink ID clicked:", id);
        fetch(`http://10.0.0.14:8081/request-drink?id=${id}`)
        .then(response => response.text())
        .then(data => {
            console.log("Server response:", data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <main>
            <div className="drink-selection">
                {drink_map.map((drink) => (
                    <button key={drink.id} onClick={() => handleDrinkClick(drink.id)} className="drink-selection-button">
                        <img
                            src={'/drinkimages/' + drink.thumbnail}
                            alt={drink.name}
                            width={100}
                            height={100} />
                        <span>{drink.name}</span>
                    </button>
                ))}
            </div>
            <button className="settings-button" onClick={() => window.location.href = '/settings'}>
                <img
                    src="/settings-icon.svg"
                    alt="Settings"
                />
            </button>
        </main>
    );
}
