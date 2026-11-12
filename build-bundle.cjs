const fs = require('fs');
const path = require('path');

const files = [
  'src/utils/storage.js',
  'src/components/Icons.jsx',
  'src/components/Sidebar.jsx',
  'src/components/Header.jsx',
  'src/components/Banner.jsx',
  'src/components/ProgressCard.jsx',
  'src/components/RoutineCard.jsx',
  'src/components/SubjectProgress.jsx',
  'src/components/FeatureCard.jsx',
  'src/components/views/PlanoEstudosView.jsx',
  'src/components/views/TempoEstudoView.jsx',
  'src/components/views/RedacaoView.jsx',
  'src/components/views/DesempenhoView.jsx',
  'src/components/views/MetasView.jsx',
  'src/components/views/SimuladosView.jsx',
  'src/App.jsx',
  'src/main.jsx'
];

let bundle = `// Rumo ao Vestibular – Bundle Standalone Funcional para Apresentação TCC
const { useState, useEffect } = React;
`;

for (const file of files) {
  let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  
  // Remover imports multi-linha e linha única
  content = content.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"].*?['"];?/g, '');
  content = content.replace(/import\s+[\w*\s,{}]+from\s*['"].*?['"];?/g, '');
  content = content.replace(/import\s*['"].*?['"];?/g, '');
  
  // Converter 'export default function X' para 'function X'
  content = content.replace(/^export\s+default\s+function\s+/gm, 'function ');
  // Converter 'export function X' para 'function X'
  content = content.replace(/^export\s+function\s+/gm, 'function ');
  // Converter 'export const X' para 'const X'
  content = content.replace(/^export\s+const\s+/gm, 'const ');
  // Converter 'export default X' para '// export default X'
  content = content.replace(/^export\s+default\s+.*$/gm, '');

  bundle += `\n// --- ${file} ---\n` + content + '\n';
}

fs.writeFileSync(path.join(__dirname, 'public/app.bundle.jsx'), bundle, 'utf8');
console.log('Bundle gerado com sucesso em public/app.bundle.jsx!');
