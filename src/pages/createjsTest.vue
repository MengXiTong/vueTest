<template>
  <div style="overflow:auto;">
    <canvas id="canvas" width="1336" height="768" style="background-color:#FFFFFF;margin-top:20px;"></canvas>
  </div>
</template>

<script>
var lib = {},
  images = {},
  ss = {},
  canvas;

import { create } from '../lib/bg-dynamic';
import createjs from 'createjs-cmd';

export default {
  data() {
    return {};
  },
  mounted() {
    create(lib, images, createjs, ss);
    canvas = document.getElementById('canvas');
    images = images || {};
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener('fileload', this.handleFileLoad);
    loader.addEventListener('complete', this.handleComplete);
    loader.loadManifest(lib.properties.manifest);
  },
  methods: {
    handleFileLoad(evt) {
      if (evt.item.type == 'image') {
        images[evt.item.id] = evt.result;
      }
    },
    handleComplete(evt) {
      var exportRoot = new lib.无标题1();
      var stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      stage.update();
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener('tick', stage);
    }
  }
};
</script>

