import { useState } from 'react'
import '../css/componentcss/GameCanvasComponent.css'
import { GameplayComponent } from './gamecomponents/GameplayComponent';

export function GameCanvasComponent() {
    const [gameStart, setGameStart] =  useState(false);

    return (
        <>
        <div className="game-area-wrapper">
            <canvas className="game-canvas" width={960} height={540}>

                
            </canvas>
            
            {
                !gameStart ? (
                    <button 
                        className="play-button" 
                        onClick={() => setGameStart(prev => !prev)}
                    >
                        Play
                    </button>
                ) : <GameplayComponent />
            }
        </div>
        </>
    )
}