
class SpriteAnimation {
    constructor(props)
    {
        this.width = props.width
        this.height = props.height
        this.numX = props.numX
        this.numY = props.numY
        this.startIdx = props.startIdx
        this.endIdx = props.endIdx
        this.interval = props.interval

        this.offsetWidth = this.width / this.numX
        this.offsetHeight = this.height / this.numY
        this.curIdx = this.startIdx
        this.elapsedTime = 0
        this.pingPong = props.pingPong
        this.reverse = false
    }

    getRect() {
        const x = (this.curIdx % this.numX) * this.offsetWidth
        const y = Math.floor(this.curIdx / this.numX) * this.offsetHeight

        return { left : x, top: y, width: this.offsetWidth, height: this.offsetHeight }
    }

    update(deltaTime) {
        this.elapsedTime += deltaTime
        while (this.elapsedTime > this.interval) {
            this.elapsedTime -= this.interval

            if (this.pingPong === true) {
                if (this.curIdx === this.endIdx) {
                    this.reverse = true
                }
                else if (this.curIdx === this.startIdx) {
                    this.reverse = false
                }

                this.curIdx = this.reverse ? this.curIdx - 1 : this.curIdx + 1
            }
            else {
                this.curIdx++
            }
        }

        if (this.curIdx > this.endIdx) {
            this.curIdx = this.startIdx + (this.curIdx - this.endIdx) - 1
        }
    }
}

export default SpriteAnimation