import Component from './component'
import SpriteRendererComponent from './sprite-renderer-component'

export default class Actor {
    constructor(name) {
        this.components = [ new SpriteRendererComponent(name) ]
        this.name = name
    }

    getSpriteRenderComponent() {
        return this.components[0]
    }

    begin() {
        for (const component of this.components) {
            component.begin()
        }
    }

    end() {
        for (const component of this.components) {
            component.end()
        }
    }

    update(deltaTime) {
        for (const component of this.components) {
            component.update(deltaTime)
        }
    }
}