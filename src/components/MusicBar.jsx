import React from "react";
import { useNavigate } from "react-router-dom";
import {
    VscDebugReverseContinue,
    VscDebugContinue
} from "react-icons/vsc";
import "./MusicBar.css";

export default function MusicBar({ prevPath, nextPath }) {
    const navigate = useNavigate();

    return (
        <div className="music-bar">

            {/* BOTÓN ANTERIOR */}
            <button
                className={`nav-button prev ${!prevPath ? "disabled" : ""}`}
                onClick={() => prevPath && navigate(prevPath)}
                disabled={!prevPath}
            >
                <VscDebugReverseContinue className="icon" />
            </button>

            {/* BOTÓN SIGUIENTE */}
            <button
                className={`nav-button next ${!nextPath ? "disabled" : ""}`}
                onClick={() => nextPath && navigate(nextPath)}
                disabled={!nextPath}
            >
                <VscDebugContinue className="icon" />
            </button>
        </div>
    );
}

