var rl = require('readline-sync')

class Repositorio{
    //os blobs são variáveis comuns, o commit é um array de blobs e a branch é um array de commits
    commit: Array<string> = []
    branch: Array<any> = []
    historico: Array<any> = []

    //criar array de histórico onde recebe o mesmo push da branch
    //merge: somar dois arrays de branches
    index(): boolean{
        let verificacao = rl.question('Voce realmente quer adicionar o arquivo: Sim ou Nao')
        if(verificacao.toLowerCase() == 'sim'){
            return true
        }else if(verificacao.toLowerCase() == 'nao'){
            return false
        }else{
            throw new Error('Voce precisa responder sim ou nao !!')
        }
    }
    setCommit(): void {
        let frase = rl.question('O que voce quer adicionar dentro do arquivo? ')
        this.commit.push(frase)
         if(this.index()){
                this.branch.push(this.commit)
                this.historico.push(this.branch)
        }
    }
    uploadBranch(): void{
        let newRepositorio = new Repositorio()
    
        newRepositorio.commit = this.commit
        newRepositorio.branch = this.branch
        newRepositorio.historico = this.historico
    }
    merge(): void{

        let somaCommit: Array<any> = this.branch[this.branch.length - 1] + this.branch[this.branch.length - 2]
        console.log('Você somou os commits com susseso!!');

        this.branch.push(somaCommit)
        this.historico.push(this.branch)
         
    }
    head(): void{
        console.log(this.commit[this.commit.length - 1]);
        
    }
    removerBlob(): void{
        
        console.log(this.commit);
        
        let escolha = rl.questionInt('Qual arquivo voce quer remover? ')

        this.commit.slice((escolha - 1),1)
    }
    setBlob(): void{
        
        console.log(this.commit);
        
        let escolha = rl.questionINT("Qual arquivo você deseja modificar ? Fale o número")
        let frase = rl.question('O que voce quer modificar? ')
        this.commit[escolha - 1] = frase
    }
    getBlod(): void{
        let escolha = rl.question('Qual blob você quer ver? ')
        console.log(this.commit[escolha - 1])
    } 
    getCommit(): void{
        console.log(this.commit);        
    }
    gerenciarComflitos(): void{
         
    }
}



