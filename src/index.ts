import{ Casaco } from "./model/Casaco"
import{ Cobra } from "./model/Cobra"

const c1 = new Casaco (`Lã`, `Grande`, `Azul`);
console.log(c1);
c1.setMaterial(`Bouclé`);
c1.setComprimento(`Pequeno`);
c1.setCor(`Vermelho`);

console.log(c1.getMaterial());
console.log(c1.getComprimento());
console.log(c1.getCor());

const co1 = new Cobra (`Subsolo`, 40, `Cascavel-diamante-ocidental`);
console.log(co1);
co1.setHabitat(`Floresta`);
co1.setTamanho(30);
co1.setEspecie(`Cobra-real`);

console.log(co1.getHabitat());
console.log(co1.getTamanho());
console.log(co1.getEspecie());