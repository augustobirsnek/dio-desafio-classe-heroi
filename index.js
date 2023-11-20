class Heroi {
    constructor (nome,idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        if (this.tipo === "guerreiro") {
            console.log(`O guerreiro atacou usando espada`);
        } else if (this.tipo === "mago") {
            console.log(`O mago atacou usando magia`);
        } else if (this.tipo === "monge") {
            console.log(`O monge atacou usando artes marciais`);
        } else if (this.tipo === "ninja") {
            console.log(`O ninja atacou usando shuriken`);
        }
    }
}

let orion = new Heroi("Orion",55,"mago");
orion.atacar();

let boris = new Heroi("Boris",40,"guerreiro");
boris.atacar();

let benkei = new Heroi("Benkei",60,"monge");
benkei.atacar();

let hiryu = new Heroi("Hiryu",28,"ninja");
hiryu.atacar();


