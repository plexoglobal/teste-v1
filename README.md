<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Oportunizap

Landing page React/Vite do Oportunizap.

## Executar localmente

**Pré‑requisitos**
- Node.js 18+ e npm

**Passos**
1. Instale as dependências  
   `npm install`
2. Copie `env.example` para `.env.local` e defina `VITE_GEMINI_API_KEY` (caso a página venha a consumir a API)
3. Rode o servidor de desenvolvimento  
   `npm run dev`
4. Build local (opcional)  
   `npm run build && npm run preview`

## Deploy na Vercel

1. Crie um novo projeto na Vercel apontando para este repositório.
2. Em *Settings → Environment Variables*, adicione `VITE_GEMINI_API_KEY` (Production e Preview).
3. Confirme os comandos padrão:
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build` (ou `npm run vercel-build`)
   - **Output Directory**: `dist`
4. Faça o primeiro deploy. A Vercel detecta automaticamente projetos Vite, mas você também pode manter o arquivo `vercel.json` incluído neste repo para garantir as configurações.

Após o deploy, cada push na branch principal dispara uma nova publicação automaticamente. Use *Preview Deployments* para testar antes de promover para produção. 
