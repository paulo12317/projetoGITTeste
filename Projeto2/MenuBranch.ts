import { Branch, branchMaster } from "./myBranch";
import { BranchDevelop } from "./myBranch";
import { BranchFeature } from "./myBranch";
import { BranchHotfix } from "./myBranch";
import { BranchRelease } from "./myBranch";


var rl = require('readline-sync')
let menu: boolean = true

let bancoBranch: Array<any> = []
function menuPrincipal(): void {
    while (menu) {
        console.log(
            `
        1 - criarBranch
        2 - Selecionar Branch
        0 - Sair
     `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                menuCriar()

                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i].nome}`)
                }
                let escolha = rl.questionInt(`Escolha uma Branch: `) 
                let tipo = rl.questionInt('Qual o tipo da branch?\n 1) brach master \n 2) BranchDevelop \n 3) BranchHotfix \n 4) BranchFeature \n 5) BranchRelease \n 6) brach\n')

                switch(tipo){
                    case 1:
                        menuBranchMaster(bancoBranch[escolha])
                        break
                    case 2:
                        menuBranchDevelop(bancoBranch[escolha])
                        break
                    case 3:
                        menuBranchHotflix(bancoBranch[escolha])
                        break
                    case 4:
                        menuBranchFeature(bancoBranch[escolha])
                        break
                    case 5:
                        menuBranchRelease(bancoBranch[escolha])
                        break
                    case 6:
                        menuBranch(bancoBranch[escolha])
                    default:
                        console.log("opcao invalida ")
                }
                


                break
            case 0:
                process.exit(0)
            default:
                console.log('Opcao invalida');
                break
        }
    }
}

function menuBranch(Branch: Branch): void {
    let menu = true
    while (menu) {
        console.log(
            `
        1 - Criar Commit
        2 - Merge
        3 - Chekout
        4 - Mostrar Historico
        0 - Voltar
     `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                Branch.criarCommit( )

                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }

                let escolha = rl.questionInt(`Escolha uma Branch: `) 
                Branch.merge(bancoBranch[escolha])

                break
            case 3:
                Branch.checkout()
                
                break
            case 4: 

                Branch.mostrarHistorico()
                break
            case 0:
                menu = false
                menuPrincipal()
            default:
                console.log('Opcao invalida');
                break
        }
    }
}

function menuBranchMaster(BranchMaster: branchMaster): void {
    while (menu) {
        console.log(
            `
            1 - Criar Commit
            2 - Merge
            3 - Chekout
            4 - Mostrar Historico
            5 - Criar branch
            0 - Voltar
                             `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                BranchMaster.criarCommit()

                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }

                let escolha = rl.questionInt(`Escolha uma Branch: `)
                BranchMaster.merge(bancoBranch[escolha])

                break
            case 3:
                BranchMaster.checkout()

                break
            case 4:

                BranchMaster.mostrarHistorico()
                break
            case 5:
                let nome = rl.question(`Escolha um nome: `)
                let dataCriacao = rl.question(`Escolha uma data de criacao: `)
                BranchMaster.criarBranch(nome, dataCriacao)

                break
            case 0:
                menu = false
                menuPrincipal()
            default:
                console.log('Opcao invalida');
                break
        }
    }
}

function menuBranchDevelop(branchdevelop: BranchDevelop): void {
    while (menu) {
        console.log(
            `
                    1 - Criar Commit
                    2 - Merge
                    3 - Chekout
                    4 - Mostrar Historico
                    5 - finalizarSprint
                    0 - Voltar
                 `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                branchdevelop.criarCommit()
                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }
                let escolha = rl.questionInt(`Escolha uma Branch: `)
                branchdevelop.merge(bancoBranch[escolha])
                break
            case 3:
                branchdevelop.checkout()

                break
            case 4:

                branchdevelop.mostrarHistorico()
                break
            case 5:
                console.log('Escolha somente Branch do tipo Realese!!');
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }
                let escolha1 = rl.questionInt(`Escolha uma Branch: `)
                branchdevelop.finalizarSprint(bancoBranch[escolha1])
                break
            case 0:
                menu = false
                menuPrincipal()
            default:
                console.log('Opcao invalida');
                break
        }
    }
}

function menuBranchHotflix(BranchHotfix: BranchHotfix): void {
    while (menu) {
        console.log(
            `
                    1 - Criar Commit
                    2 - Merge
                    3 - Chekout
                    4 - Mostrar Historico
                    5 - corrigir bug
                    0 - Voltar
                 `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                BranchHotfix.criarCommit()

                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }

                let escolha = rl.questionInt(`Escolha uma Branch: `)
                BranchHotfix.merge(bancoBranch[escolha])

                break
            case 3:
                BranchHotfix.checkout()

                break
            case 4:

                BranchHotfix.mostrarHistorico()
                break
            case 5: 
            let descricao = rl.question(`Escreva uma descricao: `)
            BranchHotfix.corrigirBug(descricao)
            break
            case 0:
                menu = false
                menuPrincipal()
            default:
                console.log('Opcao invalida');
                break
        }
    }
}

function menuBranchFeature(BranchFeature: BranchFeature): void {
    while (menu) {
        console.log(
            `
                    1 - Criar Commit
                    2 - Merge
                    3 - Chekout
                    4 - Mostrar Historico
                    5 - implementa funcionalidade
                    0 - Voltar
                 `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                BranchFeature.criarCommit()

                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }

                let escolha = rl.questionInt(`Escolha uma Branch: `)
                BranchFeature.merge(bancoBranch[escolha])

                break
            case 3:
                BranchFeature.checkout()

                break
            case 4:

                BranchFeature.mostrarHistorico()
                break

            case 5:
            let funcionalidade = rl.questionInt(`Escolha uma Funcionalidade: `)
            BranchFeature.implementaFuncionalidade(funcionalidade)
                break
            case 0:
                menu = false
                menuPrincipal()
            default:
                console.log('Opcao invalida');
                break
        }
    }
}

function menuBranchRelease(BranchRelease: BranchRelease): void {
    while (menu) {
        console.log(
            `
                    1 - Criar Commit
                    2 - Merge
                    3 - Chekout
                    4 - Mostrar Historico
                    5 - Promover para producao
                    0 - Voltar
                 `
        );

        let option = rl.questionInt('Escolha:')

        switch (option) {
            case 1:
                BranchRelease.criarCommit()

                break
            case 2:
                for (let i = 0; i < bancoBranch.length; i++) {
                    console.log(`${i} - ${bancoBranch[i]}`);
                }

                let escolha = rl.questionInt(`Escolha uma Branch: `)
                BranchRelease.merge(bancoBranch[escolha])

                break
            case 3:
                BranchRelease.checkout()

                break
            case 4:

                BranchRelease.mostrarHistorico()
                break
            case 5:
                BranchRelease.promoverParaProducao()
                break
            case 0:
                menu = false
                menuPrincipal()
            default:
                console.log('Opcao invalida');
                break
        }
    }
}


function menuCriar(): void {
    let menuCriar: boolean = true
    while (menuCriar) {
        console.log(
            `
            1 - Criar Branch
            2 - Criar Branch Release
            3 - Criar Branch Hotfix
            4 - Criar Branch Develop
            5 - Criar Branch Feature
            6 - Criar Branch Master
            0 - Voltar
         `
        );
        let option = rl.questionInt('Escolha:')
        switch (option) {
            case 1:

                let newBranch = new Branch('', '')
                let nome = rl.question('Nome do Branch: ')
                let dataCriacao = rl.question('Data de criacao da Branch: ')
                newBranch.nome = nome
                newBranch.dataCriacao = dataCriacao
                bancoBranch.push(newBranch)
                break
            case 2:
                let newBranchRealese = new BranchRelease('', '')
                let nomeRealese = rl.question('Nome do Branch: ')
                let dataCriacaoRealese = rl.question('Data de criacao da Branch: ')
                newBranchRealese.nome = nomeRealese
                newBranchRealese.dataCriacao = dataCriacaoRealese
                bancoBranch.push(newBranchRealese)
                break
            case 3:
                let newBranchHotfix = new BranchHotfix('', '')
                let nomeHotfix = rl.question('Nome do Branch: ')
                let dataCriacaoHotfix = rl.question('Data de criacao da Branch: ')
                newBranchHotfix.nome = nomeHotfix
                newBranchHotfix.dataCriacao = dataCriacaoHotfix
                bancoBranch.push(newBranchHotfix)
                break
            case 4:
                let newBranchDevelop = new BranchDevelop('', '')
                let nomeDevelop = rl.question('Nome do Branch: ')
                let dataCriacaoDevelop = rl.question('Data de criacao da Branch: ')
                newBranchDevelop.nome = nomeDevelop
                newBranchDevelop.dataCriacao = dataCriacaoDevelop
                bancoBranch.push(newBranchDevelop)
                break
            case 4:
                let newBranchFeature = new BranchFeature('', '')
                let nomeFeature = rl.question('Nome do Branch: ')
                let dataCriacaoFeature = rl.question('Data de criacao da Branch: ')
                newBranchFeature.nome = nomeFeature
                newBranchFeature.dataCriacao = dataCriacaoFeature
                bancoBranch.push(newBranchFeature)
                break
            case 6:
                let newBranchMaster = new branchMaster('', '')
                let nomeMaster = rl.question('Nome do Branch: ')
                let dataCriacaoMaster = rl.question('Data de criacao da Branch: ')
                newBranchMaster.nome = nomeMaster
                newBranchMaster.dataCriacao = dataCriacaoMaster
                bancoBranch.push(newBranchMaster)
                break
            case 0:
                menuCriar = false
                menuPrincipal()
                break
            default:
                console.log('Opção invalida, tente novamente')
                break
        }
    }
}
 
menuPrincipal()