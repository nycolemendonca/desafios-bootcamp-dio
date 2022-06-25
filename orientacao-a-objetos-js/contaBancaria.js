/* Esta atividade tem o objetivo de testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada um.

    1. Crie a classe 'contaBancaria', que possui os parâmetros agencia, numero, tipo e saldo.

    2. Dentro de contaBancaria, construa o getter e o setter de saldo.
    
    3. Dentro de contaBancaria, crie os métodos sacar e depositar.
    
    4. Crie uma classe-filha chamada contaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito.
    
    5. Ainda em contaCorrente, construa o getter e o setter de cartaoCredito.
    
    6. Ainda em contaCorrente, faça com que o tipo seja 'conta corrente' por padrão.
    
    7. Crie uma classe-filha chamada contaPoupanca que hera todos os parâmetros de contaBancaria.
    
    8. Crie uma classe-filha chamada contaUniversitaria que herda todos os parâmetros de contaBancaria.
    
    9. Faça com que o método saque de contaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class contaBancaria {
    // os parâmetros da classe sempre se alocam em 'constructor'.
    constructor(agencia, numero, tipo) {
        // this: refere-se ao objeto contaBancaria
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    // getter de saldo
    get saldo() {
        return this._saldo;
    }

    // setter de saldo
    set saldo(valor) {
        this._saldo = valor; 
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Operação negada. Saldo insuficiente.';
        } 
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500) return 'Operação negada.';

        this._saldo = this._saldo - valor;
    }
}