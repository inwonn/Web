import RendererComponent from './renderer-component'
import Viewport from './viewport'

class TextureRendererComponent extends RendererComponent {
    constructor(name) {
        super(name)

        this.isLoaded = false
        this.curImage = null
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

    }

    render(canvas, viewport) {
        if (this.isLoaded === false) {  
             return
        }

        const ctx = canvas.getContext("2d");
        const pos = super.getPosition()
        const scale = super.getScale()
        const flip = this.getFlip()
        const flipValue = flip ? -1 : 1
        const viewportStartLocation = viewport.getStartLocation()
        
        let posY = pos.y - viewportStartLocation.y
        let posX = flip ? pos.x + rect['width'] * scale : pos.x
        posX = posX - viewportStartLocation.x

        ctx.save()
        ctx.setTransform(flipValue, 0, 0, 1, posX, posY)
        ctx.drawImage(this.curImage, 0, 0, this.curImage.width, this.curImage.height, 0, 0, this.curImage.width * this.scale, this.curImage.height * this.scale)
        ctx.restore()
    }
}

export default TextureRendererComponent