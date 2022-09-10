import Actor from './actor'
import InputComponent from './input-component'
import RendererComponent from './renderer-component'
import SpriteRendererComponent from './sprite-renderer-component'
import TextureRendererComponent from './texture-renderer-components'
import SpriteAnimation from './sprite-animation'
import Character from './character'

class GameWorld {
    constructor() {
        this.actors = []
    }

    getActors() {
        return this.actors
    }

    createActor(name) {
        const newActor = new Actor(name)
        this.actors = [...this.actors, newActor]
        return newActor
    }

    addActor(newActor) {
        this.actors = [...this.actors, newActor]
    }

    begin() {
        {
            // main
            // const mainLand = this.createActor("main_land")
            // const trc = new TextureRendererComponent("img/portfolio/dlc_main_land.png")
            // trc.setScale(0.8)
            // mainLand.addComponent(trc)
        }

        {
            const cuphead = new Character("cuphead")
            this.addActor(cuphead)
        }

        for (const actor of this.actors) {
            actor.begin()
        }
    }

    end() {
        for (const actor of this.actors) {
            actor.end()
        }
    }

    update(deltaTime) {
        for (const actor of this.actors) {
            actor.update(deltaTime)
        }
    }

    render(canvasRef) {

        var ctx = canvasRef.current.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (const actor of this.actors) {
            const components = actor.getComponents()
            for (const name in components) {
                const component = components[name]
                if (component instanceof RendererComponent === false) {
                    continue
                }

                component.render(canvasRef.current)
            }
        }
    }

    onKeyDown(key) {
        for (const actor of this.actors) {
            const components = actor.getComponents()
            for (const name in components) {
                const component = components[name]
                if (component instanceof InputComponent === false) {
                     continue
                }

                component.onKeyDown(key)
            }
        }
    }

    onKeyUp(key) {
        for (const actor of this.actors) {
            const components = actor.getComponents()
            for (const name in components) {
                const component = components[name]
                if (component instanceof InputComponent === false) {
                    continue
                }

                component.onKeyUp(key)
            }
        }
    }

    onKeyPress(key) {
        for (const actor of this.actors) {
            const components = actor.getComponents()
            for (const name in components) {
                const component = components[name]
                if (component instanceof InputComponent === false) {
                    continue
                }

                component.onKeyPress(key)
            }
        }
    }
}

export default GameWorld