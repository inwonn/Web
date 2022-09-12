class FolderTextureAnimation {
    constructor(folderAnimInfo) {
        this.images = folderAnimInfo.images
        this.interval = folderAnimInfo.interval
        this.isLoaded = false
        this.loadedImageCount = 0
        this.curIdx = 0
        this.elapsedTime = 0
        this.ImageElements = []
        this.loop = folderAnimInfo.loop,
        this.pingPong = folderAnimInfo.pingPong
        this.reverse = false
        this.finish = false

        for (const image of this.images) {
            const newImage = new Image()
            newImage.onload = () => {
                this.loadedImageCount++
                this.isLoaded = this.loadedImageCount === this.images.length
            };
            newImage.src = image.path
            this.ImageElements.push(newImage)
        }
    }

    getCurImage() {
        return this.ImageElements[this.curIdx]
    }

    getCurImageInfo() {
        return this.images[this.curIdx]
    }

    update(deltaTime) {
        if (this.finish === true) {
            return
        }

        this.elapsedTime += deltaTime
        while (this.elapsedTime > this.interval) {
            this.elapsedTime -= this.interval

            if (this.pingPong === true) {
                if (this.curIdx === this.images.length - 1) {
                    this.reverse = true
                }
                else if (this.curIdx === 0) {
                    this.reverse = false
                }

                this.curIdx = this.reverse ? this.curIdx - 1 : this.curIdx + 1
                this.finish = this.reverse && this.curIdx === 0 && this.loop === false
            }
            else {
                this.curIdx++
                if (this.curIdx > this.images.length - 1) {
                    this.curIdx = this.curIdx - this.images.length
                }
                this.finish = this.curIdx === this.images.length - 1 && this.loop === false
            }
        }

        if (this.finish === true &&
            this.onAnimationFinished !== undefined) {
            this.onAnimationFinished()
        }
    }
}

export default FolderTextureAnimation