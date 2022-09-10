import React, { useRef, useState, useEffect, useCallback } from 'react'
import GameEngineConfig from './game-engine-config.json'
import GameWorld from './game-world'

const GameEngine = () => {
    const [gameWorld, setGameWorld] = useState(null)
    const canvasRef = useRef()

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
    
        const handleResize = e => {
          ctx.canvas.height = window.innerHeight;
          ctx.canvas.width = window.innerWidth;
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        
        if (canvasRef !== undefined &&
            canvasRef.current !== undefined)
        {
            canvasRef.current.focus()
        }
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    useEffect(() => {
        const newGameWorld = new GameWorld()
        newGameWorld.begin()
        setGameWorld(newGameWorld)

        return () => {
            newGameWorld.end()
        }
    }, [])

    useEffect(() => {
        const secondsToMilliseconds = 1000
        const id = setInterval(tick, GameEngineConfig.updateInterval * secondsToMilliseconds)

        return () => {
            clearInterval(id)
        }
    }, [gameWorld])

    useEffect(() => {
        if (canvasRef !== undefined && canvasRef.current !== undefined) {
            var ctx = canvasRef.current.getContext("2d");
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }

    }, [canvasRef])

    const tick = useCallback(() => {
        if (gameWorld === null) {
            return
        }

        if (canvasRef === undefined ||
            canvasRef.current === undefined) {
            return
        }

        const deltaTime = GameEngineConfig.updateInterval
        gameWorld.update(deltaTime)
        gameWorld.render(canvasRef)

    }, [gameWorld, canvasRef.current])

    const onKeyDown = useCallback((e) => {
        if (gameWorld === null) {
            return
        }

        gameWorld.onKeyDown(e.key)
    }, [gameWorld])

    const onKeyPress = useCallback((e) => {
        if (gameWorld === null) {
            return
        }

        gameWorld.onKeyPress(e.key)
    }, [gameWorld])

    const onKeyUp = useCallback((e) => {
        if (gameWorld === null) {
            return
        }
        gameWorld.onKeyUp(e.key)
    }, [gameWorld])

    return (
        <>
            <canvas
                tabIndex={0}
                ref={canvasRef}
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    width: '100%'
                }}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
                onKeyPress={onKeyPress}
            />
        </>

    )
}

export default GameEngine;