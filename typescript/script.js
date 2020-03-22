"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./enchantjs.d.ts" />
const loader_1 = require("./loader");
const parts_1 = require("./parts");
enchant();
window.onload = function () {
    const game = new Game(400, 600);
    game.fps = 30;
    const pImgs = loader_1.default.ImageLoader(game);
    const pMscs = loader_1.default.SoundLoader(game);
    // let score = 0; 
    // score >=0;
    // score >= 0;
    game.onload = function () {
        const setScene = function (sceneNum) {
            const scene = new Scene();
            scene.backgroundColor = "black";
            try {
                game.popScene();
            }
            catch (e) {
                console.log("it is initial Scene");
            }
            game.pushScene(scene);
            switch (sceneNum) {
                case 0: {
                    {
                        let score = 0; // 一つ目のスコア
                        const label = parts_1.default.Label("");
                        scene.addChild(label);
                        const showLabel = function () {
                            label.text = "”しーちゃん”HungerPoint:" + score;
                            if (score >= 60) {
                                label.text = "HungerPoint:" + score + "※ハラヘリ！※";
                            }
                            if (score >= 100) {
                                label.text = "HungerPoint:" + score + "※※暴走中！※※";
                            }
                        };
                        showLabel();
                        const back = new Sprite(200, 120);
                        back.image = game.assets[pImgs[1]];
                        back.moveTo(10, 40);
                        back.time = 0;
                        scene.addChild(back);
                        // ボタン作成１
                        const btn = parts_1.default.Button("おやつをあげる");
                        btn.moveTo(10, 180);
                        scene.addChild(btn);
                        btn.ontouchend = function () {
                            if (score > 0 && score < 100) {
                                game.assets[pMscs[1]].clone().play(); //音を鳴らす
                                score -= 40; // グローバル変数のスコアを40減らす
                                this.tl.moveBy(0, -100, 40, enchant.Easing.BOUNCE_EASEOUT)
                                    .moveBy(0, 100, 40);
                                //   showLabel(); // スコアを反映
                                // MEMO: テキストバウンドモジュールを使用する例
                                const label = parts_1.default.TextBound("-40", this.x, this.y, 32, "orange", 60);
                                scene.addChild(label);
                                if (score < 0) {
                                    score = 0;
                                }
                            }
                            showLabel(); // スコアを反映
                            // if(score<100){
                            //     setScene(0);
                            // }
                        };
                        {
                            // ボタン作成２
                            const btn2 = parts_1.default.Button("シーチキンをあげる");
                            btn2.moveTo(10, 230);
                            scene.addChild(btn2);
                            btn2.ontouchend = function () {
                                if (score > 0 && score < 100) {
                                    game.assets[pMscs[1]].clone().play(); //音を鳴らす
                                    //   score-=40; // グローバル変数のスコアを40減らす
                                    this.tl.moveBy(0, -150, 40, enchant.Easing.BOUNCE_EASEOUT)
                                        .moveBy(0, 150, 40
                                    //   showLabel(); // スコアを反映
                                    // MEMO: テキストバウンドモジュールを使用する例
                                    //   const label = parts.TextBound("-40", this.x, this.y, 32, "orange", 60);
                                    , scene.addChild(label));
                                    //   if(score<0){
                                    score = 0;
                                    //   }
                                }
                                showLabel(); // スコアを反映
                                // if(score<100){
                                //     setScene(0);
                                // }
                            };
                        }
                        {
                            // ボタン作成３
                            const btn3 = parts_1.default.Button("遊ぶ");
                            btn3.moveTo(200, 180);
                            scene.addChild(btn3);
                            btn3.ontouchend = function () {
                                if (score < 100) {
                                    back.onenterframe = function () {
                                        let isLoop = true; // falseにすると止まる
                                        back.onenterframe = function () {
                                            if (!isLoop)
                                                return; // isLoopがtrueでないなら終了
                                            // ここに本文
                                        };
                                        this.tl.moveBy(100, -50, 20, enchant.Easing.BOUNCE_EASEOUT)
                                            .moveBy(-100, 50, 20);
                                    };
                                    game.assets[pMscs[1]].clone().play(); //音を鳴らす
                                    score += 10; // グローバル変数のスコアを10増やす
                                    // showLabel(); // スコアを反映
                                    // MEMO: テキストバウンドモジュールを使用する例
                                    const label = parts_1.default.TextBound("+10", this.x, this.y, 32, "blue", 60);
                                    scene.addChild(label);
                                    // var text = new Text("Hello,World!");
                                    // console.log('hello world');
                                    // var printIn=function(str){
                                    //     document.write(str);
                                    //     document.write("ハラヘリ!");
                                    //     document.body.style.backgroundColor="#ccffcc";
                                    // };
                                    //     // alert("ハラヘリ");
                                    //     // function error(mes){
                                    //     //     alert("Error:エラーが発生しました。\nメッセージ:\n" + mes);
                                    if (score >= 100) {
                                        score = 100;
                                        back.onenterframe = function () {
                                            this.time++;
                                            this.x += Math.sin(this.time / 0.5) * 8;
                                            this.y += Math.cos(this.time / 0.5) * 8;
                                        };
                                    }
                                    showLabel(); // スコアを反映
                                }
                            };
                        }
                    }
                    {
                        let score = 0; // 二つ目のスコア
                        const label = parts_1.default.Label("");
                        label.moveTo(0, 330); //一つ目の表示と位置をずらす
                        scene.addChild(label);
                        const showLabel = function () {
                            label.text = "”キャンちゃん”HungerPoint:" + score;
                            if (score >= 60) {
                                label.text = "HungerPoint:" + score + "※ハラヘリ！※";
                            }
                            if (score >= 100) {
                                label.text = "HungerPoint:" + score + "※※暴走中！※※";
                            }
                        };
                        showLabel();
                        const back = new Sprite(160, 120);
                        back.image = game.assets[pImgs[2]];
                        back.moveTo(10, 370);
                        back.time = 0;
                        scene.addChild(back);
                        // ボタン作成１
                        const btn = parts_1.default.Button("おやつをあげる");
                        btn.moveTo(10, 500);
                        scene.addChild(btn);
                        btn.ontouchend = function () {
                            if (score > 0 && score < 100) {
                                game.assets[pMscs[1]].clone().play(); //音を鳴らす
                                score -= 40; // グローバル変数のスコアを40減らす
                                this.tl.moveBy(0, -100, 40, enchant.Easing.BOUNCE_EASEOUT)
                                    .moveBy(0, 100, 40);
                                //   showLabel(); // スコアを反映
                                // MEMO: テキストバウンドモジュールを使用する例
                                const label2 = parts_1.default.TextBound("-40", this.x, this.y, 32, "orange", 60);
                                scene.addChild(label2);
                                if (score < 0) {
                                    score = 0;
                                }
                            }
                            showLabel(); // スコアを反映
                        };
                        {
                            // ボタン作成２
                            const btn2 = parts_1.default.Button("シーチキンをあげる");
                            btn2.moveTo(10, 550);
                            scene.addChild(btn2);
                            btn2.ontouchend = function () {
                                if (score > 0 && score < 100) {
                                    game.assets[pMscs[1]].clone().play(); //音を鳴らす
                                    //   score-=40; // グローバル変数のスコアを40減らす
                                    this.tl.moveBy(0, -150, 40, enchant.Easing.BOUNCE_EASEOUT)
                                        .moveBy(0, 150, 40
                                    //   showLabel(); // スコアを反映
                                    // MEMO: テキストバウンドモジュールを使用する例
                                    //   const label = parts.TextBound("-40", this.x, this.y, 32, "orange", 60);
                                    , scene.addChild(label));
                                    //   if(score<0){
                                    score = 0;
                                    //   }
                                }
                                showLabel(); // スコアを反映
                                // if(score<100){
                                //     setScene(0);
                                // }
                            };
                        }
                        {
                            // ボタン作成３
                            const btn3 = parts_1.default.Button("遊ぶ");
                            btn3.moveTo(200, 500);
                            scene.addChild(btn3);
                            btn3.ontouchend = function () {
                                if (score < 100) {
                                    back.onenterframe = function () {
                                        let isLoop = true; // falseにすると止まる
                                        back.onenterframe = function () {
                                            if (!isLoop)
                                                return; // isLoopがtrueでないなら終了
                                            // ここに本文
                                        };
                                        this.tl.moveBy(100, -50, 20, enchant.Easing.BOUNCE_EASEOUT)
                                            .moveBy(-100, 50, 20);
                                    };
                                    game.assets[pMscs[1]].clone().play(); //音を鳴らす
                                    score += 10 * 2; // グローバル変数のスコアを10*2増やす
                                    // showLabel(); // スコアを反映
                                    // MEMO: テキストバウンドモジュールを使用する例
                                    const label = parts_1.default.TextBound("+20", this.x, this.y, 32, "blue", 60);
                                    scene.addChild(label);
                                    // var text = new Text("Hello,World!");
                                    // console.log('hello world');
                                    // var printIn=function(str){
                                    //     document.write(str);
                                    //     document.write("ハラヘリ!");
                                    //     document.body.style.backgroundColor="#ccffcc";
                                    // };
                                    //     // alert("ハラヘリ");
                                    //     // function error(mes){
                                    //     //     alert("Error:エラーが発生しました。\nメッセージ:\n" + mes);
                                    if (score >= 100) {
                                        score = 100;
                                        back.onenterframe = function () {
                                            this.time++;
                                            this.x += Math.sin(this.time / 0.5) * 8;
                                            this.y += Math.cos(this.time / 0.5) * 8;
                                        };
                                    }
                                    showLabel(); // スコアを反映
                                }
                            };
                            // break;
                        }
                    }
                }
                case 1: {
                    //     const btn = parts.Button("もう一度遊ぶ");
                    //     btn.moveTo(100, 200);
                    //     scene.addChild(btn);
                    //     btn.ontouchend = function () {
                    //         setScene(0);
                    // }
                    // break;
                }
            }
        };
        setScene(0);
    };
    game.start();
};
//# sourceMappingURL=script.js.map