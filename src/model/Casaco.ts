export class Casaco{
    //atributos da classe
    private material: string;
    private cor: string;
    private comprimento: string;
    
    public constructor(_material: string, _cor: string, _comprimento: string){
        this.material = _material;
        this.cor = _cor;
        this.comprimento= _comprimento;
}

//métodos GETTERS and SETTERS

    public getMaterial(): string{ //get = recuperar
        return this.material;
    }

    public setMaterial(_material: string): void{ //set = atribuir
        this.material = _material;
    }

    
    public getCor(): string{ //get = recuperar
        return this.cor;
    }

    public setCor (_cor: string): void{ //set = atribuir
        this.cor = _cor;
    }

    
    public getComprimento(): string{ //get = recuperar
        return this.comprimento;
    }

    public setComprimento(_comprimento: string): void{ //set = atribuir
        this.comprimento = _comprimento;
    }

}