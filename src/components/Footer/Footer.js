import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="bg-background-tertiary text-copy-primary flex flex-row sm:flex-col sm:text-center sm:justify-around justify-between bg-gray-800 h-32">
            <div className="container flex flex-col justify-center ml-12 sm:ml-0">
                <p className="text-gray-100 text-sm sm:text-xs mb-1">
                    Powered by MealDB
                </p>
                <p className="text-gray-500 text-lg sm:text-sm">
                    Proudly built with React ⚛
                </p>
            </div>
            <div className="container flex flex-col justify-center mr-12 sm:text-center text-right text-gray-500 text-lg">
                <p className="text-sm sm:text-xs text-white mb-1">
                    <FontAwesomeIcon icon={faCode} size="1x" /> by{" "}
                    Niharika Sahu <FontAwesomeIcon icon={faHeart} size="1x" />
                </p>
                
            </div>
        </div>
    );
}

export default Footer;
