/*Tarefa:**

Imagine que você está desenvolvendo um sistema de controle de versão simplificado, similar ao Git. Neste sistema, cada branch (ramo) será representado por uma classe. A branch principal, geralmente chamada de `master` ou `main`, será a classe base. As demais branches (`develop`, `hotfix`, `feature` e `release`) herdarão da branch `master` e terão suas próprias características e comportamentos.

Implemente um sistema de controle de versão simplificado utilizando a linguagem de programação de sua preferência. O sistema deve permitir a criação de diferentes tipos de branches (master, develop, hotfix, feature e release), cada uma com suas características e comportamentos específicos. Utilize herança e polimorfismo para modelar a hierarquia entre as branches. Crie um menu interativo para permitir que o usuário interaja com o sistema.


**Tarefa:**

1. **Crie a classe `Branch`:**
   * **Atributos:**
     * `nome`: String (nome da branch)
     * `dataCriacao`: Data (data de criação da branch)
     * `commits`: Lista de Commits (lista de alterações realizadas na branch)
     * `branchPai`: Branch (referência à branch pai)
   * **Métodos:**
     * `criarCommit(mensagem)`: Adiciona um novo commit à lista de commits da branch.
     * `merge(outraBranch)`: Realiza a fusão de outra branch com a branch atual.
     * `checkout()`: Troca para a branch atual.
     * `mostrarHistorico()`: Imprime na tela o histórico de commits da branch.

2. **Crie as classes filhas:**
   * **`BranchMaster`:**
     * **Métodos:**
       * `criarBranch(nome)`: Cria uma nova branch a partir da branch master.
   * **`BranchDevelop`:**
     * **Métodos:**
       * `finalizarSprint()`: Prepara a branch para ser mesclada na branch release.
   * **`BranchHotfix`:**
     * **Métodos:**
       * `corrigirBug(descricao)`: Adiciona um commit para corrigir um bug.
   * **`BranchFeature`:**
     * **Métodos:**
       * `implementarFuncionalidade(descricao)`: Adiciona um commit para implementar uma nova funcionalidade.
   * **`BranchRelease`:**
     * **Métodos:**
        * `promoverParaProducao()`: Prepara a branch para ser lançada em produção.
                                                                                        
3. **Crie um menu interativo:**
   * Utilize um `switch case` para permitir que o usuário escolha a ação a ser realizada:
     * Criar uma nova branch
     * Realizar um commit
     * Fazer merge entre branches
     * Ver o histórico de commits de uma branch
     * Sair do programa

**Exemplo de utilização do menu:**

```
1. Criar nova branch
2. Realizar commit
3. Fazer merge
4. Ver histórico
5. Sair

Digite a opção desejada: */



var rl = require('readline-sync')

export class Branch{
   public nome: string
   public dataCriacao: string
   public commits: Array<string> = []
   public branchPai: Branch
   

    constructor(nome: string,dataCriacao:string){
        this.nome = nome
        this.dataCriacao = dataCriacao
    }

   public criarCommit(): void{
        let frase = rl.question('Fale o que voce quer add no commit: ')
        this.commits.push(frase)
    }

   public merge(outraBranch: Branch): void{
        this.commits.concat(outraBranch.commits)
    }

    checkout(): number{
      let escolha = rl.questionInt('Qual branch voce quer escolher: ')

      return escolha
    }

    mostrarHistorico(): void{
      console.log(this.commits);
      
  }
}

export class branchMaster extends Branch{
    criarBranch(nome: string,data: string): branchMaster{
      let newBranch = new branchMaster(nome,data)

      return newBranch
  }
}

export class BranchDevelop extends Branch{
    finalizarSprint(branchRelease): void{
      this.merge(branchRelease)
  }
}

export class BranchHotfix extends Branch{
    corrigirBug(descricao: string): void{
      this.commits.push(descricao)
  }
}

export class BranchFeature extends Branch{
    implementaFuncionalidade(descricao): void{
      this.commits.push(descricao)
  }
}

export class BranchRelease extends Branch{
    promoverParaProducao(): void{
      console.log(`${this.commits}
        Esta branch esta pronta pra ser lançada`);
      
  }
}