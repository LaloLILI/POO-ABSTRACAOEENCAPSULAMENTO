export class Cobra{
    //atributos da classe
    private habitat: string;
    private tamanho: number;
    private especie: string;
    
    public constructor(_habitat: string, _tamanho: number, _especie: string){
        this.habitat = _habitat;
        this.tamanho = _tamanho;
        this.especie= _especie;
}

//métodos GETTERS and SETTERS

    public getHabitat(): string{ //get = recuperar
        return this.habitat;
    }

    public setHabitat(_habitat: string): void{ //set = atribuir
        this.habitat = _habitat;
    }

    
    public getTamanho(): number{ //get = recuperar
        return this.tamanho;
    }

    public setTamanho (_tamanho: number): void{ //set = atribuir
        this.tamanho = _tamanho;
    }

    
    public getEspecie(): string{ //get = recuperar
        return this.especie;
    }

    public setEspecie(_especie: string): void{ //set = atribuir
        this.especie = _especie;
    }

}