import Actor from './actor'

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
        return new Actor
    }

    begin() {
        this.createActor("img/portfolio/dlc_main_land.png")

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
}

export default GameWorld