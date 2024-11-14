import React, {useState} from "react";
import "./ProgressBar.css";
import PlusButton from "./PlusButton.jsx";
import energyImage from "/EnergyImage.svg";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleIncreaseProgress = () => {
        setProgress((prev) => (prev + 10 <= 100 ? prev + 10 : 100));
    };

    const handleDecreaseProgress = () => {
        setProgress((prev) => (prev - 10 <= 100 ? prev - 10 : 100));
    };

    const handleResetProgress = () => {
        setProgress(0);
    };

    const stars = [
        {id: 1, className: "star1", position: {top: "25%", left: "5%"}, size: 5, image: "/Shine.svg"},
        {id: 2, className: "star2", position: {bottom: "15%", right: "10%"}, size: 15, image: "/StarShining.svg"},
    ];



    const progressFill = ["#CE70FF", "#9A3BFF"];
    const gradientStartColor  = "#F4ABFF";
    const gradientEndColor = "#D693FF";
    const borderGradient = ["#06213B", "#413880"];
    const energyImageBackground =["#0C2442", "#3B377D"];



    return (
        <div className="ProgressPage">
            <div className="bar">
                <div className="energy-image" style={{
                    background: `linear-gradient(180deg, ${energyImageBackground[0]} 0%, ${energyImageBackground[1]} 100%)`,
                }}>
                    <img src={energyImage} alt="Energy Icon"/>
                    {stars.map((star) => (
                        <div
                            key={star.id}
                            className={`star ${star.className}`}
                            style={{
                                ...star.position,
                                width: `${star.size}px`,
                                height: `${star.size}px`,
                                backgroundImage: `url(${star.image})`,
                            }}
                        ></div>
                    ))}
                </div>

                <div className="progress-bar-wrapper"    style={{
                    background: `linear-gradient(180deg, ${borderGradient[0]} 0%, ${borderGradient[1]} 100%)`,
                }}>

                    <div className="progress-bar" style={{
                        background: `linear-gradient(180deg, ${borderGradient[0]} 0%, ${borderGradient[1]} 100%)`,
                    }}>

                        <div
                            className="progress-fill"
                            style={{
                                width: `${progress}%`,
                                background: `linear-gradient(180deg, ${progressFill[0]} 0%, ${progressFill[1]} 100%)`,
                            }}
                        ></div>
                        <div
                            className="mountain"
                            style={{
                                width: `${progress}%`,
                            }}
                        >
                            <svg
                                width="227"
                                height="20"
                                viewBox="0 0 207 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="fixedGradient" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor={gradientStartColor}/>
                                        <stop offset="100%" stopColor={gradientEndColor}/>
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0 10.343C0.246956 15.7361 3.43032 20 7.32073 20H199.662C203.715 20 207 15.374 207 9.66651H206.997C206.997 5.92663 205.589 2.65365 203.478 0.838496L198.255 8.19438L194.581 3.02049L190.447 8.84231L185.701 2.15817L179.808 10.4574L176.364 5.60743L172.92 10.4574L167.179 2.37256L164.652 5.9314L161.056 0.867079L155.467 8.73749L151.871 3.67318L149.496 7.01763L145.593 1.51977L137.785 12.5155L132.426 4.96904L128.674 10.2525L122.321 1.30538L115.968 10.2525L111.604 4.10672L105.328 12.9443L97.2128 1.51977L90.095 11.5436L86.3433 6.26013L81.9049 12.5107L73.7891 1.08147L65.0611 13.3683L58.6301 4.31158L54.7262 9.80943L47.7606 0L38.6503 12.8299L35.2065 7.97999L33.0617 11.0005L27.243 2.8061L20.6597 12.0772L16.678 6.46975L11.3972 13.9066L4.43168 4.09719L0 10.3383V10.343Z"
                                    fill="url(#fixedGradient)"
                                />
                            </svg>
                        </div>
                    </div>

                </div>


                <PlusButton
                    bgColors={["#8FC843", "#C7DC55"]}
                    borderColor="#D5FFB4"
                    fillColor="#260E18"
                    boxShadow="0px 4px 0px #461A8B, 0px 7px 31.8px #D15ACC"
                />
            </div>

            <div className="controls">
                <button onClick={handleIncreaseProgress}>Increase Progress</button>
                <button onClick={handleResetProgress}>Reset Progress</button>
                <button onClick={handleDecreaseProgress}>Decrease Progress</button>
            </div>
        </div>
    );
};

export default ProgressBar;




