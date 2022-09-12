import Actor from './actor'
import InputComponent from './input-component'
import RendererComponent from './renderer-component'
import SpriteRendererComponent from './sprite-renderer-component'
import TextureRendererComponent from './texture-renderer-components'
import FolderRendererComponent from './folder-renderer.component'
import SpriteAnimation from './sprite-animation'
import Character from './character'
import Viewport from './viewport'

class GameWorld {
    constructor() {
        this.actors = {}
        this.viewport = new Viewport()
    }

    getViewport() {
        return this.viewport
    }

    getActor(name) {
        return this.actors[name]
    }

    createActor(name) {
        const newActor = new Actor(name)
        this.actors[name] = newActor
        return newActor
    }

    addActor(newActor) {
        this.actors[newActor.getName()] = newActor
    }

    begin() {
        {
            const water_muliply = this.createActor("water_muliply")
            const trc = new TextureRendererComponent("img/portfolio/dlc_water_multiply.png")
            trc.setScale(0.8)
            water_muliply.addComponent(trc)
        }

        {
            const underwaterLand = this.createActor("underwater_land")
            const trc = new TextureRendererComponent("img/portfolio/dlc_underwater_land.png")
            trc.setPosition({ x: -5, y: 325 })
            trc.setScale(0.8)
            underwaterLand.addComponent(trc)
        }

        {
            const mainLand = this.createActor("main_land")
            const trc = new TextureRendererComponent("img/portfolio/dlc_main_land.png")
            trc.setScale(0.8)
            mainLand.addComponent(trc)
        }

        {
            const backery = this.createActor("backery")
            const trc = new FolderRendererComponent("backery", {
                images: [
                    { path: 'img/portfolio/Bakery/dlc_world_icon_saltbaker_boil_0001.png', size: { width: 286, height: 398 } },
                    { path: 'img/portfolio/Bakery/dlc_world_icon_saltbaker_boil_0002.png', size: { width: 286, height: 399 } },
                    { path: 'img/portfolio/Bakery/dlc_world_icon_saltbaker_boil_0003.png', size: { width: 285, height: 399 } }
                ],
                interval: 0.1
            })
            trc.setPosition({ x: 695, y: 260 })
            trc.setScale(0.8)
            backery.addComponent(trc)
        }

        {
            const boat = this.createActor("boat")
            const trc = new FolderRendererComponent("boat", {
                images: [
                    { path: 'img/portfolio/Boat/boatman_boat_icon_0001a.png', size: { width: 233, height: 148 } },
                    { path: 'img/portfolio/Boat/boatman_boat_icon_0001b.png', size: { width: 232, height: 148 } },
                    { path: 'img/portfolio/Boat/boatman_boat_icon_0001c.png', size: { width: 232, height: 147 } }
                ],
                interval: 0.1
            })
            trc.setPosition({ x: -100, y: 1250 })
            trc.setScale(0.8)
            boat.addComponent(trc)
        }

        {
            const boatRipples = this.createActor("boat_ripples")
            const trc = new FolderRendererComponent("boat_ripples", {
                images: [
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0001.png', size: { width: 225, height: 67 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0002.png', size: { width: 229, height: 65 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0003.png', size: { width: 234, height: 65 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0004.png', size: { width: 238, height: 66 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0005.png', size: { width: 235, height: 75 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0006.png', size: { width: 235, height: 80 } },
                ],
                interval: 0.1
            })
            trc.setPosition({ x: -100, y: 1325 })
            trc.setScale(0.8)
            boatRipples.addComponent(trc)
        }

        {
            const cartBoil = this.createActor("cart_boil")
            const trc = new FolderRendererComponent("cart_boil", {
                images: [
                    { path: 'img/portfolio/Cart/dlc_world_icon_cart_boil_0001.png', size: { width: 176, height: 179 } },
                    { path: 'img/portfolio/Cart/dlc_world_icon_cart_boil_0002.png', size: { width: 178, height: 179 } },
                    { path: 'img/portfolio/Cart/dlc_world_icon_cart_boil_0003.png', size: { width: 177, height: 179 } },
                ],
                interval: 0.1
            })
            trc.setPosition({ x: 1070, y: 410 })
            trc.setScale(0.8)
            cartBoil.addComponent(trc)
        }

        {
            const cartBoil = this.createActor("cart_boil")
            const trc = new FolderRendererComponent("cart_boil", {
                images: [
                    { path: 'img/portfolio/Cowgirl/dlc_world_icon_cowgirl_boil_0001.png', size: { width: 169, height: 224 } },
                    { path: 'img/portfolio/Cowgirl/dlc_world_icon_cowgirl_boil_0002.png', size: { width: 169, height: 225 } },
                    { path: 'img/portfolio/Cowgirl/dlc_world_icon_cowgirl_boil_0003.png', size: { width: 169, height: 226 } },
                ],
                interval: 0.1
            })
            trc.setPosition({ x: 1040, y: 1390 })
            trc.setScale(0.8)
            cartBoil.addComponent(trc)
        }

        {
            const cuphead = new Character("cuphead")
            this.addActor(cuphead)
        }

        {
            const mainTop = this.createActor("main_top")
            const trc = new TextureRendererComponent("img/portfolio/dlc_main_top.png")
            trc.setScale(0.8)
            mainTop.addComponent(trc)
        }

        for (const name in this.actors) {
            const actor = this.actors[name]
            actor.begin()
        }
    }

    end() {
        for (const name in this.actors) {
            const actor = this.actors[name]
            actor.end()
        }
    }

    update(deltaTime) {
        for (const name in this.actors) {
            const actor = this.actors[name]
            actor.update(deltaTime)
        }

        const player = this.getActor("cuphead")
        if (player !== undefined) {
            const component = player.getComponent("img/portfolio/WorldMapCharacter/WorldMapCuphead.png")
            if (component !== undefined) {
                const playerPos = component.getPosition()
                this.viewport.setCenter(playerPos)
            }
        }
    }

    render(canvasRef) {
        this.viewport.setSize({ width: canvasRef.current.offsetWidth, height: canvasRef.current.offsetHeight })

        var ctx = canvasRef.current.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        for (const name in this.actors) {
            const actor = this.actors[name]
            const components = actor.getComponents()
            for (const name in components) {
                const component = components[name]
                if (component instanceof RendererComponent === false) {
                    continue
                }

                component.render(canvasRef.current, this.viewport)
            }
        }
    }

    onKeyDown(key) {
        for (const name in this.actors) {
            const actor = this.actors[name]
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
        for (const name in this.actors) {
            const actor = this.actors[name]
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
        for (const name in this.actors) {
            const actor = this.actors[name]
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