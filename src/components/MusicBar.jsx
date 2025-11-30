import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    VscDebugReverseContinue,
    VscDebugContinue,
    VscDebugStart,
    VscDebugPause
} from "react-icons/vsc";
import "./MusicBar.css";

export default function MusicBar({ prevPath, nextPath }) {
    const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

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

            {/* PLAY / PAUSE */}
            <button className="control-button" onClick={togglePlayPause}>
                {isPlaying
                    ? <VscDebugPause className="icon" />
                    : <VscDebugStart className="icon" />}
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
