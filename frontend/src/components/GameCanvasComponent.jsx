import '../css/componentcss/GameCanvasComponent.css'

export function GameCanvasComponent() {
    return (
        <>
        <div className="game-area-wrapper">
            <canvas className="game-canvas" width={960} height={540}/>
        </div>
        </>
    )
}