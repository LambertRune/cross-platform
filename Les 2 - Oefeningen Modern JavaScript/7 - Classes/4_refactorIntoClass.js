/**
 * Refactor onderstaande naar een class.
 */
class Pixel {
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
    this._id = Math.random();
  }
  
  distance(p) {
    const { pow, sqrt } = Math;
    return sqrt(pow(this.x - p.x, 2) + pow(this.y - p.y, 2));
  }

  midpoint(p) {
    const x = (this.x + p.x) / 2.0;
    const y = (this.y + p.y) / 2.0;
    return Pixel.fromObj({ x, y });
  }

  toString() {
    return `${this.id}: (x: ${this.x}, y: ${this.y})`;
  }

  static fromObj(obj) {
    const p = new Pixel(obj.x, obj.y);
    return p;
  }

  get id() {
    return this._id;
  }

  set id(val) {
    this._id = val;
  }
}

let pixel = new Pixel();

class Voxel extends Pixel {
  constructor(x, y, z = 0) {
    super(x, y);
    this.z = z;
  }

  distance(v) {
    const deltaX = this.x - v.x;
    const deltaY = this.y - v.y;
    const deltaZ = this.z - v.z;

    const { pow, sqrt } = Math;
    return sqrt(pow(deltaX, 2) + pow(deltaY, 2) + pow(deltaZ, 2));
  }

  midpoint(v) {
    const midX = (this.x + v.x) / 2.0;
    const midY = (this.y + v.y) / 2.0;
    const midZ = (this.z + v.z) / 2.0;
    return Voxel.fromObj({ x: midX, y: midY, z: midZ });
  }

  toString() {
    return `${this.id}: (x: ${this.x}, y: ${this.y}, z: ${this.z})`;
  }

  static fromObj(obj) {
    return new Voxel(obj.x, obj.y, obj.z);
  }
}

// Herwerk onderstaande functies naar arrow functions. Zorg ervoor dat het resultaat voor en na herwerken hetzelfde is.
function testDistance() {
  const p = new Pixel(5, 12);
  const q = Pixel.fromObj({ x: 0, y: 0 });
  return p.distance(q);
}

function testMidpoint() {
  const p = new Pixel(7, 24);
  const q = Pixel.fromObj({ x: 0, y: 0 });
  return p.midpoint(q).toString();
}

function testDistanceVoxel() {
  const v = new Voxel(5, 6, 7);
  const w = Voxel.fromObj({ x: 2, y: 3.4, z: 7.9 });
  return v.distance(w);
}

function testMidpointVoxel() {
  const v = new Voxel(5, 6, 7);
  const w = Voxel.fromObj({ x: 2, y: 3.4, z: 7.9 });
  return v.midpoint(w).toString();
}

console.log("testDistance", testDistance());
console.log("testMidpoint", testMidpoint());
console.log("testDistanceVoxel", testDistanceVoxel());
console.log("testMidpointVoxel", testMidpointVoxel());