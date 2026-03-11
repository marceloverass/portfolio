<a href="https://gearc.github.io/Meu-Querido-Diario-Docs/" target="_blank" style="display: flex; justify-content: center; align-items: center;">
    ![Logo](../assets/mqd/logo.png)
</a>

**Meu Querido Diário** é uma aplicação desenvolvida no âmbito da **Gerência de Cadastro e Arrecadação (GEARC)** da **FUNPRESP-JUD**, com o objetivo de automatizar o monitoramento de movimentações funcionais de servidores públicos publicadas no **Diário Oficial da União (DOU)**.

Essa ferramenta visa ampliar a eficiência e a precisão no acompanhamento de nomeações, vacâncias, cessões, redistribuições e demais atos administrativos relevantes ao regime de previdência dos servidores vinculados à Fundação.

[Link para a documentação completa](https://gearc.github.io/Meu-Querido-Diario-Docs/)

---

## 🧠 Propósito

O projeto surgiu da necessidade de substituir processos manuais e suscetíveis a erros por uma solução automatizada, capaz de realizar varreduras diárias no DOU, extrair e interpretar as informações relevantes, além de disponibilizá-las de forma estruturada para a equipe responsável.

---

## ⚙️ Como Funciona

A rotina de execução do sistema é realizada automaticamente em dias úteis e segue os seguintes passos principais:

1. **Coleta dos Dados:**
   A aplicação acessa o [site do DOU](https://www.in.gov.br/leiturajornal) para capturar os links de todas as publicações do dia anterior. Cada link é acessado individualmente e seu conteúdo HTML é extraído.

2. **Leitura com IA:**
   O conteúdo das postagens é interpretado utilizando um modelo de linguagem por meio do [G4F (GPT4Free)](https://github.com/xtekky/gpt4free), que retorna um JSON estruturado com os dados extraídos.

3. **Extração e Estruturação:**
   As informações do JSON são processadas e inseridas em um dataframe, garantindo padronização, clareza e integridade dos dados.

4. **Armazenamento:**
   Os dados são registrados no banco de dados da Fundação, ficando disponíveis para análise e ações internas.

5. **Notificações de Erro:**
   Em caso de falhas no processo (como indisponibilidade do site, falhas de leitura ou conexão), um e-mail automático é enviado ao gerente responsável, contendo os detalhes do erro ocorrido.

---

## 🔍 Detalhamento

Este site contém páginas dedicadas a explicar cada componente da aplicação com mais profundidade, incluindo:

* Coleta de dados no DOU
* Leitura automatizada com IA
* Tratamento de erros e notificações
* Estrutura dos dados salvos no banco
* Casos de uso reais e aplicações práticas

---

## 👨‍💻 Público-Alvo

O sistema é destinado aos colaboradores da FUNPRESP-JUD, especialmente à equipe da GEARC, mas também pode ser útil a outras áreas interessadas no acompanhamento sistematizado das publicações no DOU.

---

## 🧩 Tecnologias Utilizadas

* **Python**
* **Selenium**
* **Pandas**
* **G4F (GPT4Free)**
* **MkDocs**
* **SMTP para envio de e-mails**
* **Banco de dados SQL Server**

---

## Desenvolvedores do Projeto

| Nome              | Função                              | Perfil no Github                        | Perfil do LinkedIn |
|-------------------|-------------------------------------|-----------------------------------------|----------------------------------------|
| Giovani Rocha     | Supervisor do Projeto / Gerente     | --                                      |[Giovani Rocha](https://br.linkedin.com/in/giovani-alves-da-rocha-4ab34b25)|
| André Machado     | Supervisor do Projeto / Supervisor  | --                                      |[André Machado](https://www.linkedin.com/in/andr%C3%A9-carvalho-machado-10b40068/?originalSubdomain=br)|
| Marcos Marinho    | Desenvolvedor / Estagiário          | [devMarcosVM](https://github.com/devMarcosVM) |[Marcos Marinho](https://www.linkedin.com/in/marcos-vieira-marinho/?originalSubdomain=br) |
| Marcelo Veras   | Desenvolvedor / Estagiário          | [marceloverass](https://github.com/marceloverass) |[Marcelo Veras](https://www.linkedin.com/in/marceloveras/?originalSubdomain=br)|
| Gabriel Delmondes | Desenvolvedor / Estagiário          | [gabrieldelmondess](https://github.com/gabrieldelmondess) |[Gabriel Delmondes](https://www.linkedin.com/in/gabriel-%C3%A2ngelo-delmondes-de-lima-b91541219/?originalSubdomain=br)|

---

[⬅️ Voltar para o Início](../index.md)