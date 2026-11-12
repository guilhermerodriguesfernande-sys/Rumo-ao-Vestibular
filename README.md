# Rumo ao Vestibular – Plano Estuda+
> **Plataforma Educacional Interativa para Estudantes de Vestibular e ENEM**

O **Rumo ao Vestibular – Plano Estuda+** é uma aplicação completa voltada para estudantes do Ensino Médio que estão se preparando para o ENEM e os principais vestibulares do país. O sistema combina uma interface moderna, profissional e responsiva com funcionalidades práticas para organização, disciplina e acompanhamento dos estudos.

---

## 🚀 Como Executar o Projeto

### Método Rápido (1 Clique no Windows):
Dê um duplo clique no arquivo:
```
iniciar_prototipo.bat
```
Ele abrirá o navegador e iniciará o servidor local em: **[http://localhost:5173](http://localhost:5173)**.

### Via Terminal:
```bash
node server.cjs
```

---

## 🌟 Funcionalidades Implementadas

### 1. 📅 Plano de Estudos
- **Adicionar Atividades**: Cadastro de matérias (Matemática, Português, Redação, História, Geografia, Física, Química, Biologia ou personalizada), especificação do assunto e dia da semana.
- **Marcar Conclusão**: Checkbox interativo para alternar entre *Pendente*, *Em andamento* e *Concluído*.
- **Filtros e Contadores**: Filtre por todas as atividades, pendentes ou concluídas com contadores em tempo real.
- **Excluir**: Lixeira para remoção rápida de atividades.

### 2. ⏱️ Tempo de Estudo
- **Cronômetro Funcional**: Iniciar, pausar e zerar o tempo com precisão em segundos.
- **Seleção de Matéria**: Escolha da disciplina que está sendo estudada no momento.
- **Histórico de Sessões**: Salva as sessões com data/hora, matéria e duração formatada (ex: `45m`, `1h 20m`).
- **Tempo Total Acumulado**: Indicador consolidado de horas e minutos dedicados.

### 3. ✍️ Laboratório de Redação
- **Editor Completo**: Campos para título, tema e desenvolvimento da redação dissertativo-argumentativa.
- **Temas do ENEM**: Sugestões clicáveis com temas oficiais dos últimos anos (2023, 2022, 2021, 2020, 2019 e propostas atuais).
- **Contadores em Tempo Real**: Quantidade de palavras (com indicação do padrão ENEM), caracteres e parágrafos.
- **Salvar, Editar e Excluir**: Lista de redações salvas para revisão contínua.

### 4. 📊 Meu Desempenho
- **Taxa de Conclusão**: Percentual geral calculado a partir das atividades do Plano de Estudos.
- **Métricas Chave**: Horas acumuladas, metas cumpridas e taxa de acertos no último simulado.
- **Gráficos por Matéria**: Barras de aproveitamento por disciplina que refletem o progresso real do aluno.

### 5. 🎯 Minhas Metas
- **Criação de Objetivos**: Definição da meta de estudo com data limite / prazo.
- **Barra de Progresso**: Acompanhamento visual da porcentagem de metas atingidas.
- **Status Interativo**: Conclusão de metas com cálculo automático do percentual.

### 6. 📝 Simulados
- **Questões Multidisciplinares**: Questões no modelo ENEM cobrindo Matemática, Linguagens, Humanas e Natureza.
- **Seleção de Alternativas**: Alternativas A, B, C, D e E interativas.
- **Finalização e Diagnóstico**: Contagem de acertos, erros e percentual de aproveitamento.
- **Gabarito Comentado**: Explicação pedagógica detalhada de cada questão após a entrega.

---

## 💾 Persistência de Dados (Local & Offline)

- **LocalStorage**: Todos os dados cadastrados (atividades, sessões de cronômetro, redações, metas e resultados de simulados) ficam salvos no navegador e **não são perdidos ao atualizar a página**.
- **100% Funcional sem Internet**: Não depende de serviços externos nem de banco de dados.

---

## 📂 Arquitetura de Componentes

- `src/components/Sidebar.jsx`: Menu lateral com navegação ativa e responsiva.
- `src/components/Header.jsx`: Topbar com perfil do aluno Guilherme.
- `src/components/Banner.jsx`: Banner com frase motivacional e mesa de estudos.
- `src/components/ProgressCard.jsx`: Card de progresso integrado ao estado.
- `src/components/RoutineCard.jsx`: Rotina do dia integrada às atividades.
- `src/components/SubjectProgress.jsx`: Visão rápida da evolução por disciplina.
- `src/components/FeatureCard.jsx`: Cartões de atalho da página inicial.
- `src/components/views/PlanoEstudosView.jsx`: Tela do Plano de Estudos.
- `src/components/views/TempoEstudoView.jsx`: Tela do Cronômetro de Foco.
- `src/components/views/RedacaoView.jsx`: Tela do Laboratório de Redação.
- `src/components/views/DesempenhoView.jsx`: Tela de Métricas e Gráficos.
- `src/components/views/MetasView.jsx`: Tela de Definição de Metas.
- `src/components/views/SimuladosView.jsx`: Tela de Questões e Gabarito.
- `src/components/Icons.jsx`: Biblioteca de ícones SVG vetorizados.
- `src/utils/storage.js`: Dados iniciais e funções de persistência.
