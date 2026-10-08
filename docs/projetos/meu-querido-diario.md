# Meu Querido Diário — Monitoramento do DOU

<div class="hero-badges" style="margin-bottom: 20px;">
  <span class="tech-tag">Funpresp-Jud</span>
  <span class="tech-tag">Automação & Engenharia</span>
  <span class="tech-tag">Python</span>
  <span class="tech-tag">Selenium</span>
  <span class="tech-tag">Pandas</span>
</div>

<div align="center" style="margin-bottom: 24px;">
  <a href="https://gearc.github.io/Meu-Querido-Diario-Docs/" target="_blank" rel="noopener">
    <img src="../../assets/mqd/logo.png" class="no-zoom" alt="Meu Querido Diário - Logo" style="max-height: 52px; max-width: 100%; object-fit: contain;">
  </a>
</div>

**Meu Querido Diário** é uma aplicação desenvolvida no âmbito da Gerência de Cadastro e Arrecadação (GEARC) da **Funpresp-Jud**, com o objetivo de automatizar o monitoramento contínuo de movimentações funcionais de servidores públicos federais publicadas no **Diário Oficial da União (DOU)**.

A ferramenta otimiza o acompanhamento de atos administrativos essenciais para a previdência complementar dos servidores vinculados ao Poder Judiciário da União, tais como nomeações, vacâncias, cessões, redistribuições e aposentadorias.

<div align="center" style="margin: 16px 0 24px 0;">
  <a href="https://gearc.github.io/Meu-Querido-Diario-Docs/" target="_blank" rel="noopener" class="report-btn report-btn--secondary" style="display: inline-flex; width: auto; padding: 8px 18px;">
    Consultar documentação técnica completa &nearr;
  </a>
</div>

---

## Propósito

Substituir a checagem manual e amostral de atos no DOU por uma rotina automatizada, capaz de varrer diariamente as publicações oficiais, extrair entidades relevantes, estruturar os dados e alertar a equipe técnica sobre alterações de cadastro.

---

## Fluxo Operacional

A execução da rotina ocorre de forma agendada em dias úteis, seguindo as seguintes etapas:

1. **Coleta de Publicações:** O módulo faz o rastreamento no [portal da Imprensa Nacional (DOU)](https://www.in.gov.br/leiturajornal), identificando todas as matérias cadastradas da edição diária e extraindo o código HTML bruto de cada ato.
2. **Processamento e Extração Textual:** O texto dos atos administrativos passa por rotinas de processamento de linguagem natural e extração semântica com suporte a LLMs para identificar servidores, cargos, órgãos de origem/destino e enquadramento funcional em JSON estruturado.
3. **Tratamento e Validação:** Os dados estruturados são normalizados em dataframes com validação de tipos, formatação de datas e tratamento de homônimos.
4. **Carga em Banco de Dados:** As informações sanitizadas são persistidas em tabelas relacionais no banco corporativo da fundação para consumo operacional.
5. **Monitoramento e Alertas:** Em caso de exceções operacionais (indisponibilidade temporária do portal ou instabilidades de rede), o sistema emite relatórios de erro automáticos para a equipe de suporte.

---

## Stack Tecnológica

* **Linguagem Principal:** Python.
* **Automação Web e Coleta:** Selenium e Requests.
* **Engenharia de Dados:** Pandas.
* **Processamento de Linguagem:** G4F e integração com modelos de extração textual.
* **Persistência:** SQL Server.
* **Documentação Técnica:** MkDocs Material.
* **Notificações:** SMTP / Python email service.

---

## Aplicação e Usuários

O sistema apoia as operações diárias da equipe de arrecadação e cadastro da Funpresp-Jud, servindo também como base de inteligência cadastral para auditorias e estudos atuariais da fundação.

---

## Equipe do Projeto

| Nome | Função | Perfil Profissional |
| :--- | :--- | :--- |
| **Giovani Rocha** | Gerente / Coordenação Geral | [LinkedIn](https://br.linkedin.com/in/giovani-alves-da-rocha-4ab34b25) |
| **André Machado** | Supervisor Técnico | [LinkedIn](https://www.linkedin.com/in/andr%C3%A9-carvalho-machado-10b40068/) |
| **Marcos Marinho** | Desenvolvedor | [GitHub](https://github.com/devMarcosVM) &bull; [LinkedIn](https://www.linkedin.com/in/marcos-vieira-marinho/) |
| **Marcelo Veras** | Desenvolvedor | [GitHub](https://github.com/marceloverass) &bull; [LinkedIn](https://www.linkedin.com/in/marceloveras) |
| **Gabriel Delmondes** | Desenvolvedor | [GitHub](https://github.com/gabrieldelmondess) &bull; [LinkedIn](https://www.linkedin.com/in/gabriel-%C3%A2ngelo-delmondes-de-lima-b91541219/) |

---

<a href="../../" class="back-link">&larr; Voltar para o Início</a>