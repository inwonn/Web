import Component from './component'

export default class Actor {
    constructor(name) {
        this.name = name
        this.components = {}
    }

    getName() {
        return this.name
    }

    getComponent(name) {
        if (this.components.hasOwnProperty(name) === false) {
            return null
        }

        return this.components[name]
    }

    getComponents() {
        return this.components
    }

    addComponent(component) {
        const key = component.getName()
        this.components[key] = component
    }

    removeComponent(name) {
        delete this.components[name]
    }

    begin() {
        for (const name in this.components) {
            this.components[name].begin()
        }
    }

    end() {
        for (const name in this.components) {
            this.components[name].end()
        }
    }

    update(deltaTime) {
        for (const name in this.components) {
            this.components[name].update(deltaTime)
        }
    }
}