import TransformComponent from "./transform-component";

class RendererComponent extends TransformComponent {
    constructor(name) {
        super(name)
        this.flip = false
        this.scale = 1
    }

    render(canvas, viewport) {

    }

    setFlip(f) {
        this.flip = f
    }

    getFlip() {
        return this.flip
    }

    setScale(scale) {
        this.scale = scale
    }

    getScale() {
        return this.scale
    }
}

export default RendererComponent