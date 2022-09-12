import RendererComponent from "./renderer-component"
import FolderTextureAnimation from "./folder-texture-animation";

class FolderTextureRendererComponent extends RendererComponent {
    constructor(name) {
        super(name)

        this.animations = {};
        this.curAnim = null
    }

    addAnimation(name, animation) {
        this.animations[name] = animation
    }

    changeAnimation(name) {
        this.curAnim = this.animations[name]
    }

    begin() {
    }

    end() {
    }

    update(deltaTime) {
        if (this.curAnim === null || this.curAnim.isLoaded === false)
        {
            return
        }

        this.curAnim.update(deltaTime)
    }

    render(canvas, viewport) {
        if (this.curAnim === null || this.curAnim.isLoaded === false)
        {
            return
        }

        const ctx = canvas.getContext("2d")
        const pos = super.getPosition()
        const scale = super.getScale()
        const flip = this.getFlip()
        const flipValue = flip ? -1 : 1
        const viewportStartLocation = viewport.getStartLocation()
        const curImage = this.curAnim.getCurImage()
        const curImageInfo = this.curAnim.getCurImageInfo()
        
        let posY = pos.y - viewportStartLocation.y
        let posX = flip ? pos.x + curImage.width * scale : pos.x
        posX = posX - viewportStartLocation.x

        ctx.save()
        ctx.setTransform(flipValue, 0, 0, 1, posX, posY)
        ctx.drawImage(curImage, 0, 0, curImageInfo.size.width, curImageInfo.size.height, 0, 0, curImageInfo.size.width * scale, curImageInfo.size.height * scale)
        ctx.restore()
    }
}

export default FolderTextureRendererComponent