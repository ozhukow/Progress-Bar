import React from 'react';
import './PlusButton.css';

const PlusButton = ({ bgColors , borderColor, fillColor, boxShadow }) => {
    return (
        <div className="svg-wrapper">
            <div
                className="rect-bg"
                style={{
                    background: `linear-gradient(180deg, ${bgColors[0]} 0%, ${bgColors[1]} 100%)`,
                    boxShadow: boxShadow
                }}
            >
                <div
                    className="rect-border"
                    style={{
                        border: `2px solid ${borderColor}`
                    }}
                >
                    <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_10933_28540)">
                            <g style={{ mixBlendMode: 'screen' }} opacity="0.5">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.70463 11.0874L7.12107 11.0874L7.12107 16.5038L10.5293 16.5038L11.0879 15.9452H7.67969V10.5288L2.26325 10.5288L2.26325 7.12054L1.70464 7.67915L1.70463 11.0874ZM7.67969 7.12054L7.67969 1.7041L7.12107 2.26272L7.12107 7.11347L7.68676 7.11347L7.67969 7.12054ZM11.0809 10.5217L11.0809 11.0874L15.9316 11.0874L16.4902 10.5288H11.0738L11.0809 10.5217Z"
                                    fill="#D2F4FF"
                                />
                            </g>
                            <path
                                style={{ mixBlendMode: 'multiply' }}
                                opacity="0.75"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.27029 7.11349L2.27029 10.5217L7.68673 10.5217L7.67966 15.9311H11.0879L11.0808 10.5217L16.4973 10.5217L16.4973 7.11349L11.0879 7.12056L11.0879 1.70413H7.67966L7.67966 7.12056L2.27029 7.11349Z"
                                fill={fillColor}
                            />
                            <g style={{ mixBlendMode: 'multiply' }} opacity="0.5">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.2957 11.3066L10.2957 15.9311L11.0877 15.9311L11.0877 10.5147L10.3028 11.2996L10.2957 11.3066ZM7.67943 7.12056L2.26299 7.12056L2.26299 7.91252L6.88747 7.91252L7.67236 7.12763L7.67943 7.12056ZM10.3028 2.48901L10.3028 7.90544L15.7192 7.90544L15.7192 10.5217L16.5112 10.5217L16.5112 8.68326L16.5112 7.11348L14.9414 7.11349L11.0948 7.11348L11.0877 3.2739L11.0877 1.70412L9.5179 1.70412L7.67943 1.70412L7.67943 2.49608L10.2957 2.49608L10.3028 2.48901Z"
                                    fill="#260E18"
                                />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_10933_28540">
                                <rect
                                    width="12.47"
                                    height="13.27"
                                    fill="white"
                                    transform="translate(9.38379) rotate(45)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PlusButton;
