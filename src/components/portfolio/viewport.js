
class Viewport {
    constructor() {
        this.center = { x: 0, y: 0 }
        this.size = { width: 0, height: 0 }
        this.startLocation = { x: 0, y: 0 }
    }

    getSize() {
        return this.size
    }

    getCenter() {
        return this.center
    }

    getStartLocation() {
        return this.startLocation
    }

    setSize(size) {
        this.size = size
        this.updateStartLocation()
    }

    setCenter(center) {
        this.center = center
        this.updateStartLocation()
    }

    updateStartLocation() {
        this.startLocation.x = this.center.x - this.size.width * 0.5
        this.startLocation.y = this.center.y - this.size.height * 0.5
    }
}

export default Viewport