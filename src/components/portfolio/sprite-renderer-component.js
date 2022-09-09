import Component from './component'
import TransformComponent from './transform-component'

class SpriteRendererComponent extends TransformComponent {
    constructor(name) {
        super(name)
    }

    begin() {

    }

    end() {

    }

    update(deltaTime) {

    }
    
    render() {
        return (
            <img src={super.getName()}></img>
            //<p key={super.getName()}>hello world {super.getName()}</p>
        )
    }
}

export default SpriteRendererComponent