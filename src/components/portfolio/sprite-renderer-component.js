import Component from './component'
import RendererComponent from './renderer-component'

class SpriteRendererComponent extends RendererComponent {
    constructor(name) {
        super(name)

        this.isLoaded = false
        this.curImage = null
        this.animations = {}
        this.curAnimation = null
        this.scale = 1
        this.flip = false
    }

    setFlip(f) {
        this.flip = f
    }

    setScale(scale) {
        this.scale = scale
    }

    addAnimation(name, animation) {
        this.animations[name] = animation
    }

    changeAnimation(name) {
        this.curAnimation = this.animations[name]
    }

    begin() {
        this.curImage = new Image()
        this.curImage.onload = () => {
            this.isLoaded = true
        };
        this.curImage.src = this.getName()
    }

    end() {

    }

    update(deltaTime) {
        if (this.curAnimation === null) {
            return
        }

        this.curAnimation.update(deltaTime)
    }

    render(canvas) {
        if (this.isLoaded === false) {  
             return
        }

        if (this.curAnimation === null) {
            return
        }

        const rect = this.curAnimation.getRect()
        const ctx = canvas.getContext("2d")
        const pos = super.getPosition()
        const flipValue = this.flip ? -1 : 1

        ctx.save();
        ctx.setTransform(flipValue, 0, 0, 1, this.flip ? pos.x + rect['width'] * this.scale : pos.x, pos.y);
        ctx.drawImage(this.curImage, rect['left'], rect['top'], rect['width'], rect['height'], 0, 0, rect['width'] * this.scale, rect['height'] * this.scale);
        ctx.restore();
    }
}

export default SpriteRendererComponent