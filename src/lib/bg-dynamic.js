export function create(lib, img, cjs, ss) {
  
  var p; // shortcut to reference prototypes
  
  // library properties:
  lib.properties = {
    width: 1336,
    height: 768,
    fps: 24,
    color: "#FFFFFF",
    manifest: [
      { src: require('@/assets/bg1.jpg'), id:"bg"}
    ]
  };
  
  
  
  // symbols:
  
  
  
  (lib.bg = function() {
    this.initialize(img.bg);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);
  
  
  (lib.元件6 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // 图层 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#5A7CE9").s().p("AhDBEQgdgdAAgnQAAgnAdgcQAcgdAnAAQAnAAAdAdQAdAcAAAnQAAAngdAdQgdAdgnAAQgnAAgcgdg");
    this.shape.setTransform(765.3,296.9);
  
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#5A7CE9").s().p("AgpArQgSgTAAgYQAAgYASgSQARgRAYAAQAZAAARARQASASAAAYQAAAYgSATQgRARgZAAQgYAAgRgRg");
    this.shape_1.setTransform(460.7,6.1);
  
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#5A7CE9").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
    this.shape_2.setTransform(7.9,464.2);
  
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#5A7CE9").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");
    this.shape_3.setTransform(298.7,763.5);
  
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#5A7CE9").s().p("AhEBEQgcgcAAgoQAAgnAcgcQAdgdAnAAQAoAAAcAdQAdAcAAAnQAAAogdAcQgcAdgoAAQgnAAgdgdg");
    this.shape_4.setTransform(694.2,626.7);
  
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#5A7CE9").s().p("AhDBEQgdgcAAgoQAAgnAdgdQAcgcAnAAQAoAAAcAcQAdAdAAAnQAAAogdAcQgcAdgoAAQgnAAgcgdg");
    this.shape_5.setTransform(121.6,106);
  
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#5A7CE9").s().p("AXWWzQgEgCgBgFQh8oJkFnTQkGnRl7l8QmWmVnykMQn1kNowhwIgGgEQgEgFAAgGQABgFAFgDQAEgDAFABQIzBxH4EOQH2EPGYGYQF/F+EHHUQEHHWB8IMQABAFgDAEQgCAFgFABIgDAAQgEAAgDgCg");
    this.shape_6.setTransform(615.2,152);
  
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#5A7CE9").s().p("A+3KIIgGgEQgEgEABgHQABgFAFgDQAEgDAFABQPaDrPCkQQO/kQLNrLQClilCOi1QAEgEAFgBQAFAAAEADQAEADABAFQAAAFgDAEQiRC5ilCkQltFtm8D+QmvD5neCCQnXCBnrAIIhEABQnIAAm7hpg");
    this.shape_7.setTransform(496,699.9);
  
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#5A7CE9").s().p("An8bKIgDgHQhWnJAYnUQAZnUCEm7QCJnHDxmYQD3mjFcleQAEgDAFAAQAGAAADADQAEAEAAAFQAAAFgEAEQqjKlkaOSQkaOQCxOvQABAFgDAEQgCAEgGABIgCAAQgEAAgFgDg");
    this.shape_8.setTransform(58,285.8);
  
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f().s("#7285C1").p("AiLhCIDNDOIBNkag");
    this.shape_9.setTransform(760,494.2);
  
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#5A7CE9").s().p("AiNhAIEbhMIhNEZg");
    this.shape_10.setTransform(760.2,494.1);
  
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f().s("#7285C1").p("ACPiOIkaBMIDODOg");
    this.shape_11.setTransform(126.4,668.6);
  
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#5A7CE9").s().p("AiMhBIEZhMIhLEbg");
    this.shape_12.setTransform(126.5,668.5);
  
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f().s("#7285C1").p("ABCCMIBNkaIkaBMg");
    this.shape_13.setTransform(287.7,15.4);
  
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#5A7CE9").s().p("AiMhAIEZhNIhMEbg");
    this.shape_14.setTransform(287.9,15.3);
  
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#5A7CE9").s().p("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");
    this.shape_15.setTransform(388.5,386.8);
  
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0,0,775.4,775.3);
  
  
  (lib.元件2 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // 图层 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#007CD2").s().p("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");
    this.shape.setTransform(785.8,785.9);
  
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#0096FF").s().p("EgA1A6NIh6gDIg8gEIg9gFQgzgChHgJIh7gQQkagsjPg+QgygNhHgYIh4goIg8gXIg8gXIh2gzQjrhojfiLQjeiKjLiqIhkhXIgxgtIgwguIgwguIgugwIgugxQgcgcgRgVQimi4ijjxQiLjOh/kJIg4h9Igag/IgZg/IgZhAIgsiBQgOgqgGgXIgmiDIgQhDIgPhDIgciGIgMhDQgHgpgEgbQgkj4gEkqQAEkpAkj4QAEgbAHgpIADgOIAJg1IArjJIAQhDIAmiDQAGgXAOgqIAsiBIAZhAIAZg/IAag/IA4h8QCAkKCKjPQCjjwCmi4QARgUAcgdIAugxIAugwIAwguIAwguQAdgbAUgSIBkhXQDLiqDeiKQDfiLDrhoIB2gyIA8gXIA8gYIB4goQBHgYAygNQDMg9EdgtIB7gQQBGgIA0gDIA9gFIA8gDIB6gDIA6gCIC0AFIB3AJIA7AEIA6AGIB1APIBzAUIA5AKIA5AKICoAoICjAuQAkALBHAZIA1ASQAfAKAVAJQGTCYFlDuQFHDbEUEdQD5EBDCEoQCzEQB3EVQANAbAPAnIAaBAIAZBAIAXA/IApB7IAiB2QBkFpAZFzQAGBPAAAjIAECTIgECVQAAAigGBPQgZFzhkFpIgiB2IgpB7IgXA/IgZBAIgaBBQgPAmgNAcQh3EUizEQQjCEpj5EAQkUEdlHDbQllDumTCYQgUAJggALIg1ARIg1ASIg2ASIijAuIg4AOIhwAaIg5ALIg5AKIjoAiQgZAEghACIg7AFIh3AJIi0AEIg6gBgEgA1g5lIh4ADIg8AEIg8AEQgzADhGAIIh5AQQkbAtjJA8QgyAMhGAYIh3AoIg7AXIg7AXIh1AyQjpBnjcCKQjcCJjJCnIhjBWQgUARgcAcIgwAtIgwAuIhbBgQgbAdgRATQimC4igDtQiIDMiAEHIg3B7QgSApggBUIgZA/IgrB/QgOAogGAaIgmCBQgLAsgUBYIgbCFIgLA7IgBAIIgLBCQgkD4gDEkQADElAkD4IALBCIAMBDIAbCFIAPBCIAQBCIAmCCQAHAaANAmIArCBIAZA/IAYA+IAaA/IA3B6QCAEICIDLQCiDvCkC2QAQATAcAdIAuAwIAtAwIAwAuIAwAtIAwAtIBjBVQDJCpDcCJQDcCKDpBmIB1AyIB2AuIB3AoQBGAXAyANQBwAiCBAbQBtAXCGAVIB5APQBGAJAzADIA8AEIA8AEIB4ADIA6ABICygEIB2gIIA6gFIA6gHIDlghIA5gKIA4gLIBvgZIA3gOICiguIA1gRIA0gSIA1gSQAfgKAUgJQGOiWFjjsQFDjYERkaQD3j/DAklQCxkOB2kQQAMgbAQgnIAZhAIAZhAIAWg+IAph5IAih2QBklnAXltQAHhKAAglIADiUIgDiSQAAglgHhLQgXlthklnIgih1Igph5IgWg/IgZg/IgZhBQgQgmgMgbQh2kRixkOQjAklj3j/QkRkZlDjZQlijrmPiXIgzgTIg1gSIg0gSIg1gRIiiguIg3gNIhvgaQgWgFgigGIg5gKIjlgiQgZgDghgCIg6gFQhPgHgngCIiygEIg6ABg");
    this.shape_1.setTransform(786.9,784.3);
  
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0,0,1571.5,1571.8);
  
  
  (lib.ClipGroup = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // 图层 3
    this.instance = new lib.元件2();
    this.instance.setTransform(996.1,1016.9,1,1,0,0,0,785.8,785.9);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},239).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(210.3,231,1571.5,1571.8);
  
  
  (lib.元件5 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // 图层 1
    this.instance = new lib.元件6();
    this.instance.setTransform(387.5,387.6,1,1,0,0,0,387.5,387.6);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},240).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0,0,775.1,775.3);
  
  
  (lib.元件8 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // 图层 1
    this.instance = new lib.元件5();
    this.instance.setTransform(612.4,243.5,1.149,0.448,0,0,0,387.5,387.7);
    this.instance.alpha = 0.449;
  
    this.instance_1 = new lib.ClipGroup();
    this.instance_1.setTransform(615.4,233.5,0.779,0.304,0,0,0,1000,999.9);
    this.instance_1.alpha = 0.629;
  
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0,0,1224.6,477.3);
  
  
  // stage content:
  
  
  
  (lib.无标题1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // 图层 2
    this.instance = new lib.元件8();
    this.instance.setTransform(667.2,566.3,0.69,0.69,0,0,0,612.3,238.7);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  
    // 图层 1
    this.instance_1 = new lib.bg();
    this.instance_1.setTransform(0,0,0.696,0.711);
  
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(668,384,1336,768);
  
  }
