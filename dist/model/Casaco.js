"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casaco = void 0;
class Casaco {
    constructor(_material, _cor, _comprimento) {
        this.material = _material;
        this.cor = _cor;
        this.comprimento = _comprimento;
    }
    //métodos GETTERS and SETTERS
    getMaterial() {
        return this.material;
    }
    setMaterial(_material) {
        this.material = _material;
    }
    getCor() {
        return this.cor;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getComprimento() {
        return this.comprimento;
    }
    setComprimento(_comprimento) {
        this.comprimento = _comprimento;
    }
}
exports.Casaco = Casaco;
//# sourceMappingURL=Casaco.js.map