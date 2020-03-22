"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./enchantjs.d.ts" />
class Loader {
    constructor() {
        this.ImageNum = 2;
        this.SoundNum = 1;
    }
    ImageLoader(game) {
        let B_Imgs = [];
        B_Imgs[0] = 0;
        for (let i = 1; i <= this.ImageNum; i++) {
            let B_Img = "./image/Img" + i + ".png";
            game.preload([B_Img]);
            B_Imgs[i] = B_Img;
        }
        return B_Imgs;
    }
    SoundLoader(game) {
        var M_Musics = [];
        M_Musics[0] = 0;
        for (let i = 1; i <= this.SoundNum; i++) {
            var M_Music = "./sound/Music" + i + ".mp3";
            game.preload([M_Music]);
            M_Musics[i] = M_Music;
        }
        return M_Musics;
    }
}
const loader = new Loader();
exports.default = loader;
//# sourceMappingURL=loader.js.map