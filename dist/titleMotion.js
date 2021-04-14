let font;
let vehicles = []

function preload(){
    font = loadFont("AvenirNextLTPro-Demi.otf")
}

function setup(){
    createCanvas(800, 300)
    background(51)
    fill(255)

    let points = font.textToPoints('Andrew', 100, 200, 128)

    points.forEach( objPoint => {
        let vehicle = new Vehicle(objPoint.x, objPoint.y)
        vehicles.push(vehicle)
    })
}

function draw(){
    background(51)
    vehicles.forEach(vehicle => {
        vehicle.behaviours()
        vehicle.update()
        vehicle.show()
    })
}