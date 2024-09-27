"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchRelease = exports.BranchFeature = exports.BranchHotfix = exports.BranchDevelop = exports.branchMaster = exports.Branch = void 0;
var rl = require('readline-sync');
var Branch = /** @class */ (function () {
    function Branch(nome, dataCriacao) {
        this.commits = [];
        this.nome = nome;
        this.dataCriacao = dataCriacao;
    }
    Branch.prototype.criarCommit = function () {
        var frase = rl.question('Fale o que voce quer add no commit: ');
        this.commits.push(frase);
    };
    Branch.prototype.merge = function (outraBranch) {
        this.commits.concat(outraBranch.commits);
    };
    Branch.prototype.checkout = function () {
        var escolha = rl.questionInt('Qual branch voce quer escolher: ');
        return escolha;
    };
    Branch.prototype.mostrarHistorico = function () {
        console.log(this.commits);
    };
    return Branch;
}());
exports.Branch = Branch;
var branchMaster = /** @class */ (function (_super) {
    __extends(branchMaster, _super);
    function branchMaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    branchMaster.prototype.criarBranch = function (nome, data) {
        var newBranch = new branchMaster(nome, data);
        return newBranch;
    };
    return branchMaster;
}(Branch));
exports.branchMaster = branchMaster;
var BranchDevelop = /** @class */ (function (_super) {
    __extends(BranchDevelop, _super);
    function BranchDevelop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchDevelop.prototype.finalizarSprint = function (branchRelease) {
        this.merge(branchRelease);
    };
    return BranchDevelop;
}(Branch));
exports.BranchDevelop = BranchDevelop;
var BranchHotfix = /** @class */ (function (_super) {
    __extends(BranchHotfix, _super);
    function BranchHotfix() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchHotfix.prototype.corrigirBug = function (descricao) {
        this.commits.push(descricao);
    };
    return BranchHotfix;
}(Branch));
exports.BranchHotfix = BranchHotfix;
var BranchFeature = /** @class */ (function (_super) {
    __extends(BranchFeature, _super);
    function BranchFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchFeature.prototype.implementaFuncionalidade = function (descricao) {
        this.commits.push(descricao);
    };
    return BranchFeature;
}(Branch));
exports.BranchFeature = BranchFeature;
var BranchRelease = /** @class */ (function (_super) {
    __extends(BranchRelease, _super);
    function BranchRelease() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchRelease.prototype.promoverParaProducao = function () {
        console.log("".concat(this.commits, "\n        Esta branch esta pronta pra ser lan\u00E7ada"));
    };
    return BranchRelease;
}(Branch));
exports.BranchRelease = BranchRelease;
