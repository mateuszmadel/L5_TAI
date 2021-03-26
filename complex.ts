class Complex {
    re: number;
    im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    add(b: Complex): Complex {
        let re = this.re + b.re;
        let im = this.im + b.im;
        return new Complex(re, im);
    }

    subtract(b: Complex): Complex {
        let re = this.re - b.re;
        let im = this.im - b.im;
        return new Complex(re, im);
    }

    modulus(): number {
        return Math.sqrt(this.re ** 2 + this.im ** 2);
    }

    toString(): string {
        return this.re + " + " + this.im + "i";
    }

}
let a:Complex = new Complex(2,2);
let b:Complex = new Complex(3,4);

let c = a.add(b);
console.log(c.toString());
let d = c.subtract(a);
console.log(d.toString());
let mod=d.modulus();
console.log(mod);
