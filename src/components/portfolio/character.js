import Actor from './actor'
import SpriteRendererComponent from './sprite-renderer-component'
import SpriteAnimation from './sprite-animation'
import InputComponent from './input-component'

class Character extends Actor {
    constructor(name) {
        super(name)
        this.actors = null
        this.direction = {x: 0, y: 0}
        this.prevDirection = {x: 0, y:0}
    }

    setActors(actors) {
        this.actors = actors
    }

    begin() {
        const src = new SpriteRendererComponent("img/portfolio/WorldMapCharacter/WorldMapCuphead.png")
        src.setScale(0.8)
        const topIdleAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 0,
            endIdx: 3,
            interval: 0.1,
        })
        const topRightIdleAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 16,
            endIdx: 19,
            interval: 0.1,
        })
        const rightIdleAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 32,
            endIdx: 35,
            interval: 0.1,
        })
        const bottomRightIdleAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 64,
            endIdx: 67,
            interval: 0.1,
        })
        const bottomIdleAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 80,
            endIdx: 88,
            interval: 0.1,
        })

        const topWalkAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 4,
            endIdx: 15,
            interval: 0.1,
        })
        const topRightWalkAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 20,
            endIdx: 30,
            interval: 0.1
        })
        const rightWalkAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 52,
            endIdx: 61,
            interval: 0.1
        })
        const bottomRightWalkAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 68,
            endIdx: 79,
            interval: 0.1
        })
        const bottomWalkAnimation = new SpriteAnimation({
            width: 1649,
            height: 904,
            numX: 16,
            numY: 8,
            startIdx: 96,
            endIdx: 108,
            interval: 0.1
        })

        src.addAnimation("topIdle", topIdleAnimation)
        src.addAnimation("topRightIdle", topRightIdleAnimation)
        src.addAnimation("rightIdle", rightIdleAnimation)
        src.addAnimation("bottomRightIdle", bottomRightIdleAnimation)
        src.addAnimation("bottomIdle", bottomIdleAnimation)

        src.addAnimation("topWalk", topWalkAnimation)
        src.addAnimation("topRightWalk", topRightWalkAnimation)
        src.addAnimation("rightWalk", rightWalkAnimation)
        src.addAnimation("bottomRightWalk", bottomRightWalkAnimation)
        src.addAnimation("bottomWalk", bottomWalkAnimation)
        src.changeAnimation("bottomIdle")

        src.setPosition({x: 350, y : 1050})
        //src.setPosition({x: 1550, y : 550})
        super.addComponent(src)

        const ic = new InputComponent("player-input")
        super.addComponent(ic)
        super.begin()
    }

    end() {
        super.end()
    }

    update(deltaTime) {
        const ic = super.getComponent("player-input")
        const src = super.getComponent("img/portfolio/WorldMapCharacter/WorldMapCuphead.png")
        const speed = 5
        
        this.prevDirection = this.direction
        this.direction = {x: 0, y: 0}

        if (ic.isKeyPress('ArrowUp')) {
            this.direction.y -= 1
        }
        if (ic.isKeyPress('ArrowLeft')) {
            this.direction.x -= 1
            src.setFlip(true)
        }
        if (ic.isKeyPress('ArrowDown')) {
            this.direction.y += 1
        }
        if (ic.isKeyPress('ArrowRight')) {
            this.direction.x += 1
            src.setFlip(false)
        }

        if (this.direction.x !== 0 &&
            this.direction.y !== 0)
        {
            this.direction.x = this.direction.x * 0.7
            this.direction.y = this.direction.y * 0.7
        }

        if (this.direction.x === 0 && this.direction.y === -1) {
            src.changeAnimation("topWalk")
        }
        else if ((this.direction.x > 0 || this.direction.x < 0) && this.direction.y < 0) {
            src.changeAnimation("topRightWalk")
        }
        else if ((this.direction.x > 0 || this.direction.x < 0) && this.direction.y === 0) {
             src.changeAnimation("rightWalk")
        }
        else if ((this.direction.x > 0 || this.direction.x < 0) && this.direction.y > 0) {
            src.changeAnimation("bottomRightWalk")
        }
        else if (this.direction.x === 0 && this.direction.y > 0) {
            src.changeAnimation("bottomWalk")
        }
        else {
            if (this.prevDirection.x === 0 && this.prevDirection.y < 0) {
                src.changeAnimation("topIdle")
            }
            else if ((this.prevDirection.x > 0 || this.prevDirection.x < 0) && this.prevDirection.y < 0) {
                src.changeAnimation("topRightIdle")
            }
            else if ((this.prevDirection.x > 0 || this.prevDirection.x < 0) && this.prevDirection.y === 0) {
                 src.changeAnimation("rightIdle")
            }
            else if ((this.prevDirection.x > 0 || this.prevDirection.x < 0) && this.prevDirection.y > 0) {
                src.changeAnimation("bottomRightIdle")
            }
            else if (this.prevDirection.x === 0 && this.prevDirection.y > 0) {
                src.changeAnimation("bottomIdle")
            }   
        }
        
        const curPos = src.getPosition()
        let newPos = { x: curPos.x + this.direction.x * speed, y: curPos.y + this.direction.y * speed }
        src.setPosition(newPos)

        super.update(deltaTime)
    }
}

export default Character