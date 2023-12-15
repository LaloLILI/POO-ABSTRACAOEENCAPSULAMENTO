"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobra = void 0;
class Cobra {
    constructor(_habitat, _tamanho, _especie) {
        this.habitat = _habitat;
        this.tamanho = _tamanho;
        this.especie = _especie;
    }
    //métodos GETTERS and SETTERS
    getHabitat() {
        return this.habitat;
    }
    setHabitat(_habitat) {
        this.habitat = _habitat;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(_tamanho) {
        this.tamanho = _tamanho;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(_especie) {
        this.especie = _especie;
    }
}
exports.Cobra = Cobra;
//# sourceMappingURL=Cobra.js.map