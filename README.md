# Portfólio - Tiago Rossini

Portfólio profissional e moderno desenvolvido com HTML, CSS e JavaScript vanilla.

## 🚀 Características

- ✨ Página de boas-vindas animada com efeitos de partículas
- 🎨 Design moderno com gradientes vibrantes (cyan + roxo)
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- 🌟 Animações suaves e efeitos hover sofisticados
- 📜 Modal para visualização de certificados em PDF
- 🎯 Navegação com scroll suave
- 💫 Logo personalizada com fonte Great Vibes

## 📂 Estrutura do Projeto

```
antigravity-portfolio/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── profile.jpg         # Foto de perfil
├── certificados/       # Pasta com certificados em PDF
│   ├── Certificado cc50 harvard.pdf
│   ├── certificado ciência de dados.pdf
│   ├── backend.pdf
│   ├── certificado aws.pdf
│   ├── python.pdf
│   └── espanhol.pdf
└── README.md          # Este arquivo
```

## 🌐 Como Executar Localmente

### Opção 1: Python (Recomendado)

```bash
python -m http.server 8000
```

Acesse: `http://localhost:8000`

### Opção 2: Node.js

```bash
npx serve
```

### Opção 3: VS Code

Instale a extensão "Live Server" e clique com botão direito no `index.html` → "Open with Live Server"

## 🚀 Como Publicar

### GitHub Pages (Grátis e Fácil)

1. **Criar repositório no GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio"
   git branch -M main
   git remote add origin https://github.com/tiagorossini2007/portfolio.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages:**
   - Vá em Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root) → Save
   - Aguarde alguns minutos
   - Acesse: `https://tiagorossini2007.github.io/portfolio`

### Netlify (Recomendado - Mais Rápido)

1. **Via Drag & Drop:**
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta do projeto
   - Pronto! URL gerada automaticamente

2. **Via GitHub:**
   - Conecte seu repositório GitHub
   - Deploy automático a cada commit

### Vercel (Alternativa)

1. **Via CLI:**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Via GitHub:**
   - Conecte no [vercel.com](https://vercel.com)
   - Importe o repositório
   - Deploy automático

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
  --accent-primary: #00d9ff; /* Cyan */
  --accent-secondary: #7c3aed; /* Roxo */
  --bg-primary: #0a0a0f; /* Fundo escuro */
}
```

### Conteúdo

- **Sobre Mim**: Edite a seção `#about` no `index.html`
- **Projetos**: Adicione/edite cards na seção `#projects`
- **Certificados**: Adicione PDFs na pasta `certificados/` e crie novos botões na seção `#certificates`

## 📱 Seções do Portfólio

1. **Welcome Screen** - Página de boas-vindas animada
2. **Hero** - Apresentação com foto de perfil
3. **Sobre Mim** - Descrição profissional detalhada
4. **Projetos** - Projetos acadêmicos e profissionais
5. **Habilidades** - Tecnologias e ferramentas
6. **Formação** - Timeline de educação
7. **Certificados** - Certificações com visualização em modal
8. **Contato** - Links de contato e redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com variáveis CSS
- **JavaScript (Vanilla)** - Interatividade sem frameworks
- **Google Fonts** - Great Vibes, Space Grotesk, Inter

## 📞 Contato

- **Email**: tiagorossinicorrea@gmail.com
- **LinkedIn**: [linkedin.com/in/tiagorossini](https://www.linkedin.com/in/tiagorossini/)
- **GitHub**: [github.com/tiagorossini2007](https://github.com/tiagorossini2007)
- **WhatsApp**: (17) 99678-1076

## 📄 Licença

Desenvolvido por Tiago Antônio Rossini Corrêa © 2026

---

**Dica**: Para um domínio personalizado (ex: `tiagorossini.com`), registre em [Namecheap](https://namecheap.com) ou [GoDaddy](https://godaddy.com) e configure nas settings do GitHub Pages/Netlify/Vercel.
