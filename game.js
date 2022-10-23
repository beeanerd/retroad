const p5 = require('node-p5')

function sketch(p) {
    p.setup = () => {
        p.createCanvas(200, 200); // going to make this width of the window
    }
    p.draw = () => {
        p.background(50);
        p.text('hello world', 50, 100);

    }
}

let p5Instance = p5.createSketch(sketch);