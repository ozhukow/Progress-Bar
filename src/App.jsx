import React from "react";
import ProgressBar from "./modules/ProgressBar.jsx";

function App() {
    return (
        <div>
            <h1>Customizable Progress Bar</h1>
            <ProgressBar
                energyImageSrc="/EnergyImageGreen.svg"
                energyImageBackground={["#0C2442", "#3B377D"]}
                borderGradient={["#06213B", "#413880"]}
                progressFillGradient={["#CE70FF", "#9A3BFF"]}
                mountainGradient={["#F4ABFF", "#D693FF"]}
                starsConfig={[
                    { id: 1, className: "star1", position: { top: "20%", left: "10%" }, size: 8, image: "/Star1.svg" },
                    { id: 2, className: "star2", position: { bottom: "10%", right: "5%" }, size: 12, image: "/Star2.svg" },
                ]}
                bgColors={["#8FC843", "#C7DC55"]}
                borderColor="#D5FFB4"
                fillColor="#260E18"
                boxShadow="0px 4px 0px #461A8B, 0px 7px 31.8px #D15ACC"
            />
        </div>
    );
}

export default App;
