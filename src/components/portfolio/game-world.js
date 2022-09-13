import Actor from './actor'
import InputComponent from './input-component'
import RendererComponent from './renderer-component'
import SpriteRendererComponent from './sprite-renderer-component'
import TextureRendererComponent from './texture-renderer-components'
import FolderTextureRendererComponent from './folder-texture-renderer-component'
import FolderTextureAnimation from './folder-texture-animation'
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
            trc.setPosition({ x: -400, y:0 })
            trc.setScale(1)
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
            const waterline = this.createActor("waterline")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WaterLine/dlc_waterline_waterline_temp_A.png', size: { width: 2048, height: 978 } },
                    { path: 'img/portfolio/WaterLine/dlc_waterline_waterline_temp_B.png', size: { width: 2048, height: 978 } },
                    { path: 'img/portfolio/WaterLine/dlc_waterline_waterline_temp_C.png', size: { width: 2048, height: 978 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("waterline")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 0, y: 350 })
            trc.setScale(1.45)
            waterline.addComponent(trc)
        }

        {
            const mainLand = this.createActor("main_land")
            const trc = new TextureRendererComponent("img/portfolio/dlc_main_land.png")
            trc.setScale(0.8)
            mainLand.addComponent(trc)
        }

        {
            const backery = this.createActor("backery")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Bakery/dlc_world_icon_saltbaker_boil_0001.png', size: { width: 286, height: 398 } },
                    { path: 'img/portfolio/Bakery/dlc_world_icon_saltbaker_boil_0002.png', size: { width: 286, height: 399 } },
                    { path: 'img/portfolio/Bakery/dlc_world_icon_saltbaker_boil_0003.png', size: { width: 285, height: 399 } }
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("backery")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 695, y: 260 })
            trc.setScale(0.8)
            backery.addComponent(trc)
        }

        {
            const boat = this.createActor("boat")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Boat/boatman_boat_icon_0001a.png', size: { width: 233, height: 148 } },
                    { path: 'img/portfolio/Boat/boatman_boat_icon_0001b.png', size: { width: 232, height: 148 } },
                    { path: 'img/portfolio/Boat/boatman_boat_icon_0001c.png', size: { width: 232, height: 147 } }
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("boat")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: -100, y: 1250 })
            trc.setScale(0.8)
            boat.addComponent(trc)

            const idleAnimRipples = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0001.png', size: { width: 225, height: 67 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0002.png', size: { width: 229, height: 65 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0003.png', size: { width: 234, height: 65 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0004.png', size: { width: 238, height: 66 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0005.png', size: { width: 235, height: 75 } },
                    { path: 'img/portfolio/BoatmanRipples/boatman_boat_ripples_0006.png', size: { width: 235, height: 80 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trcRipples = new FolderTextureRendererComponent("boat_ripples")
            trcRipples.addAnimation("idle", idleAnimRipples)
            trcRipples.changeAnimation("idle")
            trcRipples.setPosition({ x: -100, y: 1325 })
            trcRipples.setScale(0.8)
            boat.addComponent(trcRipples)
        }

        {
            const cartBoil = this.createActor("cart_boil")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Cart/dlc_world_icon_cart_boil_0001.png', size: { width: 176, height: 179 } },
                    { path: 'img/portfolio/Cart/dlc_world_icon_cart_boil_0002.png', size: { width: 178, height: 179 } },
                    { path: 'img/portfolio/Cart/dlc_world_icon_cart_boil_0003.png', size: { width: 177, height: 179 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("cart_boil")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1070, y: 410 })
            trc.setScale(0.8)
            cartBoil.addComponent(trc)
        }

        {
            const cowgirl = this.createActor("cowgirl")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Cowgirl/dlc_world_icon_cowgirl_boil_0001.png', size: { width: 169, height: 224 } },
                    { path: 'img/portfolio/Cowgirl/dlc_world_icon_cowgirl_boil_0002.png', size: { width: 169, height: 225 } },
                    { path: 'img/portfolio/Cowgirl/dlc_world_icon_cowgirl_boil_0003.png', size: { width: 169, height: 226 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("cowgirl")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1040, y: 1390 })
            trc.setScale(0.8)
            cowgirl.addComponent(trc)
        }

        {
            const ghost = this.createActor("ghost")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Ghost/ghost_detective_0001.png', size: { width: 114, height: 98 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0002.png', size: { width: 114, height: 97 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0003.png', size: { width: 114, height: 98 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0004.png', size: { width: 116, height: 98 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0005.png', size: { width: 119, height: 93 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0006.png', size: { width: 119, height: 93 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0007.png', size: { width: 118, height: 94 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0008.png', size: { width: 117, height: 94 } },
                    { path: 'img/portfolio/Ghost/ghost_detective_0009.png', size: { width: 118, height: 94 } },
                ],
                interval: 0.1,
                pingPong: true,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("ghost")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 2105, y: 883 })
            trc.setScale(0.8)
            ghost.addComponent(trc)

            const idleAnimHand = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/GhostHand/ghost_detective_hand_0001.png', size: { width: 32, height: 40 } },
                    { path: 'img/portfolio/GhostHand/ghost_detective_hand_0002.png', size: { width: 31, height: 40 } },
                    { path: 'img/portfolio/GhostHand/ghost_detective_hand_0003.png', size: { width: 31, height: 38 } },
                    { path: 'img/portfolio/GhostHand/ghost_detective_hand_0004.png', size: { width: 32, height: 39 } },
                    { path: 'img/portfolio/GhostHand/ghost_detective_hand_0005.png', size: { width: 31, height: 39 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trcHand = new FolderTextureRendererComponent("ghostHand")
            trcHand.addAnimation("idle", idleAnimHand)
            trcHand.changeAnimation("idle")
            trcHand.setPosition({ x: 2110, y: 890 })
            trcHand.setScale(0.8)
            ghost.addComponent(trcHand)
        }

        {
            const omm = this.createActor("omm")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Omm/dlc_world_icon_omm_boil_0001.png', size: { width: 363, height: 301 } },
                    { path: 'img/portfolio/Omm/dlc_world_icon_omm_boil_0002.png', size: { width: 363, height: 301 } },
                    { path: 'img/portfolio/Omm/dlc_world_icon_omm_boil_0003.png', size: { width: 363, height: 301 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("omm")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1862, y: 195 })
            trc.setScale(0.8)
            omm.addComponent(trc)
        }

        {
            const rumrunners = this.createActor("rumrunners")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/rumrunners/dlc_world_icon_rumrunners_boil_0001.png', size: { width: 180, height: 179 } },
                    { path: 'img/portfolio/rumrunners/dlc_world_icon_rumrunners_boil_0002.png', size: { width: 180, height: 179 } },
                    { path: 'img/portfolio/rumrunners/dlc_world_icon_rumrunners_boil_0003.png', size: { width: 180, height: 179 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("rumrunners")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 850, y: 1030 })
            trc.setScale(0.8)
            rumrunners.addComponent(trc)
        }

        {
            const shop = this.createActor("shop")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Shop/dlc_world_icon_shop_a_boil_0001.png', size: { width: 223, height: 259 } },
                    { path: 'img/portfolio/Shop/dlc_world_icon_shop_a_boil_0002.png', size: { width: 223, height: 259 } },
                    { path: 'img/portfolio/Shop/dlc_world_icon_shop_a_boil_0003.png', size: { width: 223, height: 259 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("shop")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1300, y: 300 })
            trc.setScale(0.8)
            shop.addComponent(trc)
        }

        {
            const shovel = this.createActor("shovel")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Shovel/shovel_idle_a_0001.png', size: { width: 100, height: 100 } },
                    { path: 'img/portfolio/Shovel/shovel_idle_a_0002.png', size: { width: 100, height: 100 } },
                    { path: 'img/portfolio/Shovel/shovel_idle_a_0003.png', size: { width: 100, height: 100 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("shovel")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1505, y: 270 })
            trc.setScale(0.8)
            shovel.addComponent(trc)
        }

        {
            const snow = this.createActor("snow")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Snow/dlc_world_icon_snow_boil_0001.png', size: { width: 350, height: 335 } },
                    { path: 'img/portfolio/Snow/dlc_world_icon_snow_boil_0002.png', size: { width: 350, height: 335 } },
                    { path: 'img/portfolio/Snow/dlc_world_icon_snow_boil_0003.png', size: { width: 350, height: 335 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("snow")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 2475, y: 380 })
            trc.setScale(0.8)
            snow.addComponent(trc)
        }

        {
            const waterFall = this.createActor("waterFall")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/Waterfall/waterfall_01.png', size: { width: 102, height: 155 } },
                    { path: 'img/portfolio/Waterfall/waterfall_02.png', size: { width: 102, height: 155 } },
                    { path: 'img/portfolio/Waterfall/waterfall_03.png', size: { width: 102, height: 155 } },
                    { path: 'img/portfolio/Waterfall/waterfall_04.png', size: { width: 102, height: 155 } },
                    { path: 'img/portfolio/Waterfall/waterfall_05.png', size: { width: 102, height: 155 } },
                    { path: 'img/portfolio/Waterfall/waterfall_06.png', size: { width: 102, height: 155 } },
                ],
                interval: 0.1,
                loop: true
            })
            const trc = new FolderTextureRendererComponent("waterFall")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1428, y: 690 })
            trc.setScale(1.5)

            const idleAnimEffect = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WaterfallBase/waterfall_base_02.png', size: { width: 100, height: 60 } },
                    { path: 'img/portfolio/WaterfallBase/waterfall_base_03.png', size: { width: 100, height: 60 } },
                    { path: 'img/portfolio/WaterfallBase/waterfall_base_04.png', size: { width: 100, height: 60 } },
                    { path: 'img/portfolio/WaterfallBase/waterfall_base_05.png', size: { width: 100, height: 60 } },
                    { path: 'img/portfolio/WaterfallBase/waterfall_base_06.png', size: { width: 100, height: 60 } },
                ],
                interval: 0.2,
                loop: true
            })
            const trcEffect = new FolderTextureRendererComponent("waterFallEffect")
            trcEffect.addAnimation("idle", idleAnimEffect)
            trcEffect.changeAnimation("idle")
            trcEffect.setPosition({ x: 1460, y: 890 })
            trcEffect.setScale(1.2)
            waterFall.addComponent(trc)
            waterFall.addComponent(trcEffect)
        }

        {
            const boatman = this.createActor("boatman")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanIdle/boatman_0001.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanIdle/boatman_0002.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanIdle/boatman_0003.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanIdle/boatman_0004.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanIdle/boatman_0005.png', size: { width: 125, height: 165 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const talkStartAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0006.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0007.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0008.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0009.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0010.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0011.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0012a.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0012b.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkStart/boatman_0012c.png', size: { width: 125, height: 165 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const talkEndAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkEnd/boatman_0013.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkEnd/boatman_0014.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkEnd/boatman_0015.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCBoatman/BoatmanTalkEnd/boatman_0016.png', size: { width: 125, height: 165 } }
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("boat")
            trc.addAnimation("idle", idleAnim)
            trc.addAnimation("talkStart", talkStartAnim)
            trc.addAnimation("talkEnd", talkEndAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 240, y: 1000 })
            trc.setScale(0.8)
            boatman.addComponent(trc)
        }

        {
            const lantern = this.createActor("lantern")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0001.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0002.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0003.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0004.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0005.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0006.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0007.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0008.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCLantern/lantern_npc_idle_a_0009.png', size: { width: 125, height: 165 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("boat")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1592, y: 245 })
            trc.setScale(0.8)
            lantern.addComponent(trc)
        }

        {
            const newscat = this.createActor("newscat")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0001.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0002.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0003.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0004.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0005.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0006.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0007.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0009.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0010.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0011.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0012.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0013.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0014.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0015.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0016.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0017.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0018.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0019.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0020.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0021.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0022.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0023.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0024.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0025.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0026.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0027.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0028.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0029.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0030.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0031.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0032.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0033.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCNewsCat/newsie_cat_0034.png', size: { width: 125, height: 165 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("newscat")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1270, y: 600 })
            trc.setScale(0.8)
            newscat.addComponent(trc)
        }

        {
            const pickaxe = this.createActor("pickaxe")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0001.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0002.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0003.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0004.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0005.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0006.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0007.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCPickaxe/pickaxe_npc_idle_0009.png', size: { width: 125, height: 165 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("pickaxe")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1660, y: 270 })
            trc.setScale(0.8)
            pickaxe.addComponent(trc)
        }

        {
            const canyonStairs = this.createActor("canyon_stairs")
            const trc = new TextureRendererComponent("img/portfolio/dlc_canyon_stairs.png")
            trc.setPosition({ x: 1230, y: 1180 })
            trc.setScale(0.8)
            canyonStairs.addComponent(trc)

            const trcBack = new TextureRendererComponent("img/portfolio/dlc_canyon_stairs_back.png")
            trcBack.setPosition({ x: 1165, y: 1155 })
            trcBack.setScale(0.8)
            canyonStairs.addComponent(trcBack)
        }

        {
            const backeryNeighbor = this.createActor("backeryNeighbor")
            const trc = new TextureRendererComponent("img/portfolio/bakery_neighbor.png")
            trc.setPosition({ x: 662, y: 437 })
            trc.setScale(0.8)
            backeryNeighbor.addComponent(trc)
        }

        {
            const iceStairs = this.createActor("iceStairs")
            const trcShadow = new TextureRendererComponent("img/portfolio/dlc_ice_stairs_shadow.png")
            trcShadow.setPosition({ x: 2115, y: 620 })
            trcShadow.setScale(0.8)
            iceStairs.addComponent(trcShadow)

            const trc = new TextureRendererComponent("img/portfolio/dlc_ice_stairs.png")
            trc.setPosition({ x: 2090, y: 507 })
            trc.setScale(0.8)
            iceStairs.addComponent(trc)
        }

        {
            const stoneBridge = this.createActor("stoneBridge")
            const trcShadow = new TextureRendererComponent("img/portfolio/dlc_stepping_stone_bridge_shadow.png")
            trcShadow.setPosition({ x: 2378, y: 875 })
            trcShadow.setScale(0.8)
            stoneBridge.addComponent(trcShadow)

            const trcWaterline = new TextureRendererComponent("img/portfolio/dlc_stepping_stone_bridge_waterline_temp.png")
            trcWaterline.setPosition({ x: 2378, y: 875 })
            trcWaterline.setScale(0.8)
            stoneBridge.addComponent(trcWaterline)


            const trc = new TextureRendererComponent("img/portfolio/dlc_stepping_stone_bridge_bottom.png")
            trc.setPosition({ x: 2220, y: 825 })
            trc.setScale(0.8)
            stoneBridge.addComponent(trc)
        }

        {
            const woodBridge = this.createActor("woodBridge")
            const trcShadow = new TextureRendererComponent("img/portfolio/dlc_wood_bridge_shadow.png")
            trcShadow.setPosition({ x: 1625, y: 1190 })
            trcShadow.setScale(0.8)
            woodBridge.addComponent(trcShadow)


            const trc = new TextureRendererComponent("img/portfolio/dlc_wood_bridge.png")
            trc.setPosition({ x: 1625, y: 1190 })
            trc.setScale(0.8)
            woodBridge.addComponent(trc)
        }

        {
            const snowBack = this.createActor("snowBack")
            const trcB = new TextureRendererComponent("img/portfolio/snowbank_b.png")
            trcB.setPosition({ x: 2590, y: 568 })
            trcB.setScale(0.8)
            snowBack.addComponent(trcB)


            const trcC = new TextureRendererComponent("img/portfolio/snowbank_c.png")
            trcC.setPosition({ x: 2430, y: 558 })
            trcC.setScale(0.8)
            snowBack.addComponent(trcC)
        }

        {
            const ommTrees = this.createActor("ommTrees")
            const trcA = new TextureRendererComponent("img/portfolio/omm_trees.png")
            trcA.setPosition({ x: 1865, y: 298 })
            trcA.setScale(0.8)
            ommTrees.addComponent(trcA)

            const trcB = new TextureRendererComponent("img/portfolio/omm_trees_B.png")
            trcB.setPosition({ x: 2020, y: 378 })
            trcB.setScale(0.8)
            ommTrees.addComponent(trcB)
        }

        {
            const cuphead = new Character("cuphead")
            this.addActor(cuphead)
        }
        {
            const cactusGirl = this.createActor("cactusGirl")
            const idleAnim = new FolderTextureAnimation({
                images: [
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0001.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0002.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0003.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0004.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0005.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0006.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0007.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0008.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0009.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0010.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0011.png', size: { width: 125, height: 165 } },
                    { path: 'img/portfolio/WorldMapCharacter/NPCCactus/cactus_girl_0012.png', size: { width: 125, height: 165 } },
                ],
                interval: 0.1,
                loop: true,
                pingPong: true
            })
            const trc = new FolderTextureRendererComponent("cactusGirl")
            trc.addAnimation("idle", idleAnim)
            trc.changeAnimation("idle")
            trc.setPosition({ x: 1425, y: 1395 })
            trc.setScale(0.8)
            cactusGirl.addComponent(trc)
        }

        {
            const picknicTable = this.createActor("picknicTable")
            const trc = new TextureRendererComponent("img/portfolio/picnic_table.png")
            trc.setPosition({ x: 1792, y: 505 })
            trc.setScale(0.8)
            picknicTable.addComponent(trc)
        }

        {
            const snowBackB = this.createActor("snowBackB")
            const trc = new TextureRendererComponent("img/portfolio/snowbank_a.png")
            trc.setPosition({ x: 2510, y: 760 })
            trc.setScale(0.8)
            snowBackB.addComponent(trc)
        }

        {
            const graves = this.createActor("graves")
            const trcGravesBack = new TextureRendererComponent("img/portfolio/graves_back.png")
            trcGravesBack.setPosition({ x: 1820, y: 850 })
            trcGravesBack.setScale(0.8)
            graves.addComponent(trcGravesBack)

            const trcGravesMiddle = new TextureRendererComponent("img/portfolio/graves_middle.png")
            trcGravesMiddle.setPosition({ x: 1803, y: 923 })
            trcGravesMiddle.setScale(0.8)
            graves.addComponent(trcGravesMiddle)

            const trcGravesFront = new TextureRendererComponent("img/portfolio/graves_front.png")
            trcGravesFront.setPosition({ x: 1815, y: 985 })
            trcGravesFront.setScale(0.8)
            graves.addComponent(trcGravesFront)
        }

        {
            const lightHouse = this.createActor("lightHouse")
            const trc = new TextureRendererComponent("img/portfolio/LightHouse.png")
            trc.setPosition({ x: 2442, y: 920 })
            trc.setScale(0.8)
            lightHouse.addComponent(trc)
        }

        {
            const hangar = this.createActor("hangar")
            const trc = new TextureRendererComponent("img/portfolio/hangar_18.png")
            trc.setPosition({ x: 2310, y: 1060 })
            trc.setScale(0.8)
            hangar.addComponent(trc)
        }

        {
            const iceStairsFront = this.createActor("iceStairsFront")
            const trc = new TextureRendererComponent("img/portfolio/dlc_ice_stairs_front.png")
            trc.setPosition({ x: 2115, y: 565 })
            trc.setScale(0.8)
            iceStairsFront.addComponent(trc)
        }

        {
            const entranceStairs = this.createActor("entranceStairs")
            const trc = new TextureRendererComponent("img/portfolio/dlc_entrance_stairs_top.png")
            trc.setPosition({ x: 535, y: 890 })
            trc.setScale(0.8)
            entranceStairs.addComponent(trc)
        }

        {
            const mainTop = this.createActor("main_top")
            const trc = new TextureRendererComponent("img/portfolio/dlc_main_top.png")
            trc.setPosition({x:11, y:0})
            trc.setScale(0.8)
            mainTop.addComponent(trc)
        }

        // {
        //     const ropeLadder = this.createActor("lopeLadder")
        //     const trc = new FolderTextureRendererComponent("ropeLadder")
        //     const openAnim = new FolderTextureAnimation({
        //         images: [
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0001.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0002.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0003.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0004.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0005.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0006.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0007.png', size: { width: 157, height: 818 } }
        //         ],
        //         interval: 0.05,
        //         loop: false
        //     })

        //     const idleAnim = new FolderTextureAnimation({
        //         images: [
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0008.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0009.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0010.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0011.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0012.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0013.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0014.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0015.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0016.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0017.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0018.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0019.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0020.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0021.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0022.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0023.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0024.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0025.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0026.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0027.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/Ladder/dlc_map_rope_ladder_0028.png', size: { width: 157, height: 818 } },
        //         ],
        //         interval: 0.05,
        //         loop: true,
        //         pingPong: true
        //     })

        //     const closeAnim = new FolderTextureAnimation({
        //         images: [
        //             { path: 'img/portfolio/LadderClose/dlc_map_rope_ladder_0047.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderClose/dlc_map_rope_ladder_0048.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderClose/dlc_map_rope_ladder_0049.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderClose/dlc_map_rope_ladder_0050.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderClose/dlc_map_rope_ladder_0051.png', size: { width: 157, height: 818 } },
        //         ],
        //         interval: 0.1,
        //         loop: false,
        //     })

        //     trc.addAnimation("open", openAnim)
        //     trc.addAnimation("idle", idleAnim)
        //     trc.addAnimation("close", closeAnim)
        //     trc.changeAnimation("open")
        //     trc.setPosition({ x: 1350, y: 800 })
        //     trc.setScale(0.8)

        //     const trcRopeLadderShadow = new FolderTextureRendererComponent("ropeLadderShadow")
        //     const idleAnimRopeLadderShadow = new FolderTextureAnimation({
        //         images: [
        //             { path: 'img/portfolio/LadderShadow/dlc_map_rope_ladder_shadow_0001.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderShadow/dlc_map_rope_ladder_shadow_0001.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderShadow/dlc_map_rope_ladder_shadow_0001.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderShadow/dlc_map_rope_ladder_shadow_0001.png', size: { width: 157, height: 818 } },
        //             { path: 'img/portfolio/LadderShadow/dlc_map_rope_ladder_shadow_0001.png', size: { width: 157, height: 818 } },
        //         ],
        //         interval: 0.1,
        //         loop: false,
        //     })

        //     ropeLadder.addComponent(trc)
        // }

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
}

export default GameWorld