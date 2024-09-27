"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myBranch_1 = require("./myBranch");
var myBranch_2 = require("./myBranch");
var myBranch_3 = require("./myBranch");
var myBranch_4 = require("./myBranch");
var myBranch_5 = require("./myBranch");
var rl = require('readline-sync');
var menu = true;
var bancoBranch = [];
function menuPrincipal() {
    while (menu) {
        console.log("\n        1 - criarBranch\n        2 - Selecionar Branch\n        0 - Sair\n     ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                menuCriar();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i].nome));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                var tipo = rl.questionInt('Qual o tipo da branch?\n 1) brach master \n 2) BranchDevelop \n 3) BranchHotfix \n4) BranchFeature \n 5) BranchRelease \n 6) brach\n');
                switch (tipo) {
                    case 1:
                        menuBranchMaster(bancoBranch[escolha]);
                        break;
                    case 2:
                        menuBranchDevelop(bancoBranch[escolha]);
                        break;
                    case 3:
                        menuBranchHotflix(bancoBranch[escolha]);
                        break;
                    case 4:
                        menuBranchMaster(bancoBranch[escolha]);
                        break;
                    case 5:
                        menuBranchRelease(bancoBranch[escolha]);
                        break;
                    case 6:
                        menuBranch(bancoBranch[escolha]);
                    default:
                        console.log("opcao invalida ");
                }
                break;
            case 0:
                process.exit(0);
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuBranch(Branch) {
    var menu = true;
    while (menu) {
        console.log("\n        1 - Criar Commit\n        2 - Merge\n        3 - Chekout\n        4 - Mostrar Historico\n        0 - Voltar\n     ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                Branch.criarCommit();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                Branch.merge(bancoBranch[escolha]);
                break;
            case 3:
                Branch.checkout();
                break;
            case 4:
                Branch.mostrarHistorico();
                break;
            case 0:
                menu = false;
                menuPrincipal();
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuBranchMaster(BranchMaster) {
    while (menu) {
        console.log("\n            1 - Criar Commit\n            2 - Merge\n            3 - Chekout\n            4 - Mostrar Historico\n            5 - Criar branch\n            0 - Voltar\n                             ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                BranchMaster.criarCommit();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                BranchMaster.merge(bancoBranch[escolha]);
                break;
            case 3:
                BranchMaster.checkout();
                break;
            case 4:
                BranchMaster.mostrarHistorico();
                break;
            case 5:
                var nome = rl.question("Escolha um nome: ");
                var dataCriacao = rl.question("Escolha uma data de criacao: ");
                BranchMaster.criarBranch(nome, dataCriacao);
                break;
            case 0:
                menu = false;
                menuPrincipal();
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuBranchDevelop(branchdevelop) {
    while (menu) {
        console.log("\n                    1 - Criar Commit\n                    2 - Merge\n                    3 - Chekout\n                    4 - Mostrar Historico\n                    5 - finalizarSprint\n                    0 - Voltar\n                 ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                branchdevelop.criarCommit();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                branchdevelop.merge(bancoBranch[escolha]);
                break;
            case 3:
                branchdevelop.checkout();
                break;
            case 4:
                branchdevelop.mostrarHistorico();
                break;
            case 5:
                console.log('Escolha somente Branch do tipo Realese!!');
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha1 = rl.questionInt("Escolha uma Branch: ");
                branchdevelop.finalizarSprint(bancoBranch[escolha1]);
                break;
            case 0:
                menu = false;
                menuPrincipal();
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuBranchHotflix(BranchHotfix) {
    while (menu) {
        console.log("\n                    1 - Criar Commit\n                    2 - Merge\n                    3 - Chekout\n                    4 - Mostrar Historico\n                    5 - corrigir bug\n                    0 - Voltar\n                 ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                BranchHotfix.criarCommit();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                BranchHotfix.merge(bancoBranch[escolha]);
                break;
            case 3:
                BranchHotfix.checkout();
                break;
            case 4:
                BranchHotfix.mostrarHistorico();
                break;
            case 5:
                var descricao = rl.question("Escreva uma descricao: ");
                BranchHotfix.corrigirBug(descricao);
                break;
            case 0:
                menu = false;
                menuPrincipal();
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuBranchFeature(BranchFeature) {
    while (menu) {
        console.log("\n                    1 - Criar Commit\n                    2 - Merge\n                    3 - Chekout\n                    4 - Mostrar Historico\n                    5 - implementa funcionalidade\n                    0 - Voltar\n                 ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                BranchFeature.criarCommit();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                BranchFeature.merge(bancoBranch[escolha]);
                break;
            case 3:
                BranchFeature.checkout();
                break;
            case 4:
                BranchFeature.mostrarHistorico();
                break;
            case 5:
                var funcionalidade = rl.questionInt("Escolha uma Funcionalidade: ");
                BranchFeature.implementaFuncionalidade(funcionalidade);
                break;
            case 0:
                menu = false;
                menuPrincipal();
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuBranchRelease(BranchRelease) {
    while (menu) {
        console.log("\n                    1 - Criar Commit\n                    2 - Merge\n                    3 - Chekout\n                    4 - Mostrar Historico\n                    5 - Promover para producao\n                    0 - Voltar\n                 ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                BranchRelease.criarCommit();
                break;
            case 2:
                for (var i = 0; i < bancoBranch.length; i++) {
                    console.log("".concat(i, " - ").concat(bancoBranch[i]));
                }
                var escolha = rl.questionInt("Escolha uma Branch: ");
                BranchRelease.merge(bancoBranch[escolha]);
                break;
            case 3:
                BranchRelease.checkout();
                break;
            case 4:
                BranchRelease.mostrarHistorico();
                break;
            case 5:
                BranchRelease.promoverParaProducao();
                break;
            case 0:
                menu = false;
                menuPrincipal();
            default:
                console.log('Opcao invalida');
                break;
        }
    }
}
function menuCriar() {
    var menuCriar = true;
    while (menuCriar) {
        console.log("\n            1 - Criar Branch\n            2 - Criar Branch Release\n            3 - Criar Branch Hotfix\n            4 - Criar Branch Develop\n            5 - Criar Branch Feature\n            6 - Criar Branch Master\n            0 - Voltar\n         ");
        var option = rl.questionInt('Escolha:');
        switch (option) {
            case 1:
                var newBranch = new myBranch_1.Branch('', '');
                var nome = rl.question('Nome do Branch: ');
                var dataCriacao = rl.question('Data de criacao da Branch: ');
                newBranch.nome = nome;
                newBranch.dataCriacao = dataCriacao;
                bancoBranch.push(newBranch);
                break;
            case 2:
                var newBranchRealese = new myBranch_5.BranchRelease('', '');
                var nomeRealese = rl.question('Nome do Branch: ');
                var dataCriacaoRealese = rl.question('Data de criacao da Branch: ');
                newBranchRealese.nome = nomeRealese;
                newBranchRealese.dataCriacao = dataCriacaoRealese;
                bancoBranch.push(newBranchRealese);
                break;
            case 3:
                var newBranchHotfix = new myBranch_4.BranchHotfix('', '');
                var nomeHotfix = rl.question('Nome do Branch: ');
                var dataCriacaoHotfix = rl.question('Data de criacao da Branch: ');
                newBranchHotfix.nome = nomeHotfix;
                newBranchHotfix.dataCriacao = dataCriacaoHotfix;
                bancoBranch.push(newBranchHotfix);
                break;
            case 4:
                var newBranchDevelop = new myBranch_2.BranchDevelop('', '');
                var nomeDevelop = rl.question('Nome do Branch: ');
                var dataCriacaoDevelop = rl.question('Data de criacao da Branch: ');
                newBranchDevelop.nome = nomeDevelop;
                newBranchDevelop.dataCriacao = dataCriacaoDevelop;
                bancoBranch.push(newBranchDevelop);
                break;
            case 4:
                var newBranchFeature = new myBranch_3.BranchFeature('', '');
                var nomeFeature = rl.question('Nome do Branch: ');
                var dataCriacaoFeature = rl.question('Data de criacao da Branch: ');
                newBranchFeature.nome = nomeFeature;
                newBranchFeature.dataCriacao = dataCriacaoFeature;
                bancoBranch.push(newBranchFeature);
                break;
            case 6:
                var newBranchMaster = new myBranch_1.branchMaster('', '');
                var nomeMaster = rl.question('Nome do Branch: ');
                var dataCriacaoMaster = rl.question('Data de criacao da Branch: ');
                newBranchMaster.nome = nomeMaster;
                newBranchMaster.dataCriacao = dataCriacaoMaster;
                bancoBranch.push(newBranchMaster);
                break;
            case 0:
                menuCriar = false;
                menuPrincipal();
                break;
            default:
                console.log('Opção invalida, tente novamente');
                break;
        }
    }
}
menuPrincipal();
