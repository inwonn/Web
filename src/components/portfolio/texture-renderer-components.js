import RendererComponent from './renderer-component'

class TextureRendererComponent extends RendererComponent {
    constructor(name) {
        super(name)

        this.isLoaded = false
        this.curImage = null
        this.scale = 1
    }

    setScale(scale) {
        this.scale = scale
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

    render(canvas) {
        if (this.isLoaded === false) {  
             return
        }

        const ctx = canvas.getContext("2d");
        ctx.drawImage(this.curImage, 0, 0, this.curImage.width, this.curImage.height, 0, 0, this.curImage.width * this.scale, this.curImage.height * this.scale);
    }
}

export default TextureRendererComponent