import React, { useState, useEffect, useCallback } from 'react'
import Box from '@mui/material/Box'
import GameEngineConfig from './game-engine-config.json'
import GameWorld from './game-world'

const GameEngine = () => {
    const [gameWorld, setGameWorld] = useState(null)

    useEffect(() => {
        const newGameWorld = new GameWorld()
        setGameWorld(newGameWorld)
        newGameWorld.begin()

        const secondsToMilliseconds = 1000
        const id = setInterval(update, GameEngineConfig.updateInterval * secondsToMilliseconds)

        return () => {
            clearInterval(id)
            newGameWorld.end()
        }
    }, [])

    const update = useCallback(() => {
        if (gameWorld === null) {
            return
        }

        const deltaTime = GameEngineConfig.updateInterval
        gameWorld.update(deltaTime)
    }, [])

    const onKeyDown = useCallback((e) => {
    }, [])

    const onKeyPress = useCallback((e) => {
    }, [])

    const onKeyUp = useCallback((e) => {
    }, [])

    return (
        <>
            <Box
                tabIndex="0"
                onKeyDown={onKeyDown}
                onKeyPress={onKeyPress}
                onKeyUp={onKeyUp}
                sx={{
                    width: '100%',
                    height: '100%',
                }
                }>
                {
                    gameWorld && gameWorld.getActors().map(actor => actor.getSpriteRenderComponent().render())
                }
            </Box>
        </>
    )
}

export default GameEngine;