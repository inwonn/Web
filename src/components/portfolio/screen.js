import React, { useEffect, useRef } from 'react'

const Screen = (props) => {
    const canvasRef = useRef()

    useEffect(() => {
        
    }, [])

    return (
        <canvas ref={canvasRef}>
        </canvas>
    )
}

export default Screen