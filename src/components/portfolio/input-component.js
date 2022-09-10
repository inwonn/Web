import { ConstructionRounded } from '@mui/icons-material'
import Component from './component'

class InputComponent extends Component {
    constructor(name) {
        super(name)

        this.keyStates = {}
    }

    isKeyDown(key) {
        if (this.keyStates[key] === undefined) {
            return false
        }

        return this.keyStates[key]["down"]
    }

    isKeyUp(key) {
        if (this.keyStates[key] === undefined) {
            return false
        }

        return this.keyStates[key]["up"]
    }

    isKeyPress(key) {
        if (this.keyStates[key] === undefined) {
            return false
        }

        return this.keyStates[key]["press"]
    }

    update(deltaTime) {
        for (const key in this.keyStates) {
            this.keyStates[key]["down"] = false
        }
    }

    onKeyDown(key) {
        if (this.keyStates[key] === undefined) {
            this.keyStates[key] = { down: false, up: false, press: false}
        }
        this.keyStates[key]["down"] = true
        this.keyStates[key]['up'] = false
    }

    onKeyPress(key) {
        if (this.keyStates[key] === undefined) {
            this.keyStates[key] = { down: false, up: false, press: false}
        }
        this.keyStates[key]['press'] = true
        this.keyStates[key]['up'] = false
    }

    onKeyUp(key) {
        if (this.keyStates[key] === undefined) {
            this.keyStates[key] = { down: false, up: false, press: false}
        }
        this.keyStates[key]['up'] = true
        this.keyStates[key]['down'] = false
        this.keyStates[key]['press'] = false
    }
}

export default InputComponent