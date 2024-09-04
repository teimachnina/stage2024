import React from 'react';
import './Banner.css';
import HeaderImg from "../assets/home.png";

export function Banner() {
    return (
        <div className="banner-container">
            <div className="text-content">
                <h1 className="greeting">
                    {'Hello there!'} <span className="wrap">Students</span>
                </h1>
            </div>
        </div>
    );
}