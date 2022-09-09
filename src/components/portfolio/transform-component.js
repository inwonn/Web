import Component from './component'

class TransformComponent extends Component {
    constructor(name) {
        super(name)
        this.x = 0
        this.y = 0
    }

    setPosition(pos) {
        this.x = pos.x
        this.y = pos.y
    }

    getPosition() {
        return { x: this.x, y: this.y }
    }
}

export default TransformComponent