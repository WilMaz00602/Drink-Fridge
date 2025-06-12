import "../style/pumps-settings.scss";
import ingredientsData from "@/app/components/ingredients.json";


export default function PumpsSettings() {

    const pumps = [
        { id: 1, name: 'Pump 1', reservoir_contents: "Whiskey" },
        { id: 2, name: 'Pump 2', reservoir_contents: "Vodka" },
        { id: 3, name: 'Pump 3', reservoir_contents: "Rum" },
        { id: 4, name: 'Pump 4', reservoir_contents: "Gin" },
        { id: 5, name: 'Pump 5', reservoir_contents: "Tequila" },
        { id: 6, name: 'Pump 6', reservoir_contents: "Lime Juice" },
        { id: 7, name: 'Pump 7', reservoir_contents: "Simple Syrup" },
        { id: 8, name: 'Pump 8', reservoir_contents: "Grenadine" },
        { id: 9, name: 'Pump 9', reservoir_contents: "Orange Juice" }
    ]

    const ingredients = Array.isArray(ingredientsData)
    ? ingredientsData
    : Array.isArray(ingredientsData.default)
        ? ingredientsData.default
        : [];
    const ingredientNames = ingredients.map(i => i.name);

    return (
        <div id="pumps-settings-container">
            {pumps.map(pump => (
                <div key={pump.id} className="pump-item">
                    <h3>{pump.name}</h3>
                    <input
                        type="text"
                        list="ingredient-list"
                        defaultValue={pump.reservoir_contents}
                        autoComplete="on"
                        pattern={ingredientNames.map(name => name.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|')}
                    />
                </div>
            ))}
            <datalist id="ingredient-list">
                {ingredientNames.map(name => (
                    <option key={name} value={name} />
                ))}
            </datalist>
        </div>
    )
}