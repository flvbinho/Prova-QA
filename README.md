# Prova-QA

## Casos de Testes/SQL/Automação Cypress

### Prova QA

Abaixo estão todas as respostas, como os casos de testes e selects solicitados. O código Cypress da automação se encontra aqui no mesmo repositório, no qual pode ser encontrado facilmente e baixado. Qualquer dúvida, estarei à disposição.

### Cenários de Teste para o Aplicativo Bancário

**Premissas:**
1. O saldo do correntista deve ser maior ou igual ao valor a ser transferido.
2. A data de efetivação da transferência deve ser posterior à data atual.
3. O valor a ser transferido não deve ser negativo.

**Observação:**
Os testes serão conduzidos conforme as premissas mencionadas anteriormente. Embora não disponha das versões originais para referência, foram desenvolvidos exemplos, evidenciando meu método de trabalho. 
No modelo original, haveria cenários correspondentes e consequentemente mais testes.

#### Casos de Testes Positivos:

1. **Transferência com saldo suficiente**
   - Informar o valor da transferência: R$100,00
   - Informar a data de efetivação: (data futura)
   - Clicar em "Transferir"
   - Resultado esperado: A transferência é efetuada com sucesso e o saldo do correntista é atualizado para R$100,00.

2. **Transferência com saldo igual ao valor**
   - Informar o valor da transferência: R$200,00
   - Informar a data de efetivação: (data futura)
   - Clicar em "Transferir"
   - Resultado esperado: A transferência é efetuada com sucesso e o saldo do correntista é atualizado para R$0,00.

3. **Transferência com data de efetivação no mesmo dia**
   - Informar o valor da transferência: R$50,00
   - Informar a data de efetivação: (data atual)
   - Clicar em "Transferir"
   - Resultado esperado: A transferência é efetuada com sucesso e o saldo do correntista é atualizado para R$150,00.

#### Casos de Teste Negativos:

1. **Transferência com saldo insuficiente**
   - Informar o valor da transferência: R$250,00
   - Informar a data de efetivação: (data futura)
   - Clicar em "Transferir"
   - Resultado esperado: Exibir mensagem de erro informando que o saldo é insuficiente.

2. **Transferência com data de efetivação no passado**
   - Informar o valor da transferência: R$50,00
   - Informar a data de efetivação: (data passada)
   - Clicar em "Transferir"
   - Resultado esperado: Exibir mensagem de erro informando que a data de efetivação é inválida.

3. **Transferência com valor negativo**
   - Informar o valor da transferência: R$-50,00
   - Informar a data de efetivação: (data futura)
   - Clicar em "Transferir"
   - Resultado esperado: Exibir mensagem de erro informando que o valor da transferência é inválido.

### Consultas SQL


 Consulta SQL para listar o nome de todos os alunos matriculados na disciplina de Cálculo do professor João.
```SELECT a.nome AS nome_aluno
FROM Aluno a
JOIN Matricula m ON a.coda = m.coda
JOIN Disciplina d ON m.codd = d.codd
JOIN Professor p ON d.codp = p.codp
WHERE d.nome = 'Cálculo' AND p.nome = 'João';
```




Consulta SQL para exibir a quantidade de alunos por disciplinas.


```
SELECT d.nome AS disciplina, COUNT(a.coda) AS quantidade_de_alunos
FROM Disciplina d
LEFT JOIN Aluno a ON d.codd = a.codd
GROUP BY d.nome;
```




Consulta SQL para listar as disciplinas que todos os professores lecionam.


```SELECT d.nome AS disciplina
FROM Disciplina d
WHERE NOT EXISTS (
    SELECT p.codp
    FROM Professor p
    WHERE NOT EXISTS (
        SELECT *
        FROM Professor_Disciplina pd
        WHERE pd.codp = p.codp
        AND pd.codd = d.codd
    )
);
```



Consulta SQL que exibe o total de professores.


```
SELECT COUNT(*) AS total_de_professores
FROM Professor;
```




Consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020.

```
SELECT a.nome AS nome_aluno, d.nome AS nome_disciplina
FROM Aluno a
INNER JOIN Matricula m ON a.coda = m.coda
INNER JOIN Disciplina d ON m.codd = d.codd
WHERE a.ano BETWEEN 2000 AND 2020;
```


Abaixo o Mapa Mental direcionado ao teste das Api's da TRELLO


![Mapa Mental Teste QA](https://github.com/flvbinho/Prova-QA/assets/70342110/a870ec84-1e3d-4f5e-a8f6-05c54c8e3bf4)

