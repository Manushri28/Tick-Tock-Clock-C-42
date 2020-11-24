var hr, mn, sc;
var scAngle, mnAngle, hrAngle;

function setup(){
  createCanvas(700,600);

  angleMode(DEGREES)

  }

function draw(){
    background(0);

    fill("white")
    textSize(25)
    text(hr+" : " + mn+" : "+sc, 460, 430)

    translate(250,250);
    rotate(-90);

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360)
    mnAngle = map(mn, 0, 60, 0, 360)
    hrAngle = map(hr%12, 0, 12, 0, 360)

    noFill();

    //seconds

    push();
    rotate(scAngle)
    stroke(186,85,211)
    strokeWeight(7)
    line(0, 0, 100, 0)
    pop();


    //minutes

    push();
    rotate(mnAngle)
    stroke(30,144,255)
    strokeWeight(7)
    line(0, 0, 80, 0)
    pop();

    //hours

    push();
    rotate(hrAngle)
    stroke(0,250,154)
    strokeWeight(7)
    line(0, 0, 60, 0)
    pop();

    noFill();

    stroke(186,85,211)
    strokeWeight(7)
    arc(0, 0, 300, 300, 0, scAngle);

    stroke(30,144,255)
    strokeWeight(7)
    arc(0, 0, 280, 280, 0, mnAngle);

    stroke(0,250,154)
    strokeWeight(7)
    arc(0, 0, 260, 260, 0, hrAngle);


}
