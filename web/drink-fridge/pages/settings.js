import "../src/app/style/globals.scss";
import PumpsSettings from "@/app/components/pumps-settings";

export default function Settings() {
    return (
        <main>
            <h1>Settings</h1>
            <p>Settings page is under construction.</p>
            <button onClick={() => window.location.href = '/'}>Back to Home</button>
        
            <PumpsSettings />
        </main>
    )
}