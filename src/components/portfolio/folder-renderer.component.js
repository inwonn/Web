import RendererComponent from "./renderer-component"

class FolderRendererComponent extends RendererComponent {
    constructor(name, folderAnimInfo) {
        super(name)

        console.log(`folderAnimInfo ${folderAnimInfo}`)

        this.images = folderAnimInfo.images
        this.interval = folderAnimInfo.interval

        this.isLoaded = false
        this.loadedImageCount = 0
        this.curIdx = 0
        this.elapsedTime = 0
        this.ImageElements = []        
    }

    begin() {
        for (const image of this.images) {
            const newImage = new Image()
            newImage.onload = () => {
                this.loadedImageCount++
                this.isLoaded = this.loadedImageCount === this.images.length
            };
            newImage.src = image.path
            this.ImageElements.push(newImage)
        }
    }

    end() {

    }

    update(deltaTime) {
        this.elapsedTime += deltaTime
        while (this.elapsedTime > this.interval) {
            this.elapsedTime -= this.interval
            this.curIdx++
        }

        if (this.curIdx > this.images.length - 1) {
            this.curIdx = this.curIdx - this.images.length
        }
    }

    render(canvas, viewport) {
        if (this.isLoaded === false) {  
             return
        }

        const ctx = canvas.getContext("2d")
        const pos = super.getPosition()
        const scale = super.getScale()
        const flip = this.getFlip()
        const flipValue = flip ? -1 : 1
        const viewportStartLocation = viewport.getStartLocation()
        const curImage = this.ImageElements[this.curIdx]
        const curImageInfo = this.images[this.curIdx]
        
        let posY = pos.y - viewportStartLocation.y
        let posX = flip ? pos.x + rect['width'] * scale : pos.x
        posX = posX - viewportStartLocation.x

        ctx.save()
        ctx.setTransform(flipValue, 0, 0, 1, posX, posY)
        ctx.drawImage(curImage, 0, 0, curImageInfo.size.width, curImageInfo.size.height, 0, 0, curImageInfo.size.width * scale, curImageInfo.size.height * scale)
        ctx.restore()
    }
}

export default FolderRendererComponent