# 🛠️ Comece com Solidity AGORA MESMO!

Este template mostra um contrato inteligente básico em Solidity com um ambiente de desenvolvimento e implantação totalmente configurado.

---

**Ferramentas utilizadas neste template:**

- [**Solidity**](https://docs.soliditylang.org/en/v0.8.14/) para a linguagem de desenvolvimento do nosso contrato inteligente.
- [**Hardhat**](https://hardhat.org/) para o ambiente de desenvolvimento (testes, depuração, etc.).
- [**thirdweb deploy**](https://portal.thirdweb.com/thirdweb-deploy) para implantar o contrato na blockchain sem usar uma chave privada.

---

**Comandos Principais:**

- `npx thirdweb deploy`: Implanta o contrato inteligente.
- `npx hardhat test`: Executa a suíte de testes (testes unitários).

---

## **Como usar este template**

### **Explorando o Contrato Inteligente**

Dê uma olhada no arquivo [`Greeter.sol`](https://www.notion.so/flow-br/contracts/Greeter.sol), onde você encontrará um contrato inteligente!

Ele é básico, mas é um ótimo ponto de partida para explicar como construir, testar e implantar contratos inteligentes usando Solidity.

Primeiro, declaramos a [**Licença**](https://spdx.org/licenses/) e a [**Versão do Solidity**](https://github.com/ethereum/solidity/releases) do nosso contrato:

```solidity
solidityCopy code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

```

Em seguida, definimos o nosso primeiro `contract`, chamado `Greeter`!

Um `contract` é um contrato inteligente, que é uma coleção contendo:

1. Funções
2. Dados / Estado

Que vivem em um endereço específico na blockchain:

```solidity
solidityCopy code
contract Greeter {

}

```

Definimos uma `variável` (dados) chamada `greeting`, que é uma `string` **privada**.

Isso significa que ela não é acessível publicamente por outros contratos ou usuários:

```solidity
solidityCopy code
string private greeting;

```

O `constructor` é o que é chamado quando o contrato é criado pela primeira vez.

Quando implantamos o contrato, vamos informar ao contrato qual é o valor inicial da variável `greeting`, passando uma `string` como argumento e definindo o valor de `greeting` para essa string:

```solidity
solidityCopy code
constructor(string memory _greeting) {
    greeting = _greeting;
}

```

Como fizemos nossa variável `greeting` **privada**, podemos escrever uma `view` que lê e retorna o valor da variável `greeting`.

Como isso é `public`, pode ser acessado por outros contratos ou usuários. Você também notará a palavra-chave `view`, o que significa que essa função não modificará nenhum estado ou dado em nosso contrato; ela simplesmente retorna alguns dados para o chamador:

```solidity
solidityCopy code
function greet() public view returns (string memory) {
    return greeting;
}

```

Finalmente, temos uma `função` chamada `setGreeting`, que recebe uma `string` como argumento e define o valor de `greeting` para essa string.

Isso permite que um usuário altere o valor de `greeting` para outra coisa:

```solidity
solidityCopy code
function setGreeting(string memory _greeting) public {
    greeting = _greeting;
}

```

---

### **Implantando o contrato inteligente**

Para implantar o contrato na blockchain, execute o script abaixo:

```bash
bashCopy code
npx thirdweb deploy

```

Esse comando usa [**thirdweb deploy**](https://portal.thirdweb.com/thirdweb-deploy) para:

1. Compilar seu contrato inteligente e detectar quaisquer erros.
2. Fazer upload da ABI do contrato para o IPFS.
3. Gerar uma URL para implantar o contrato no painel do thirdweb.

---

### **Testando o Contrato**

Para executar a suíte de testes e ver se o seu contrato funciona como esperado, execute o script abaixo:

```bash
bashCopy code
npx hardhat test

```

---

