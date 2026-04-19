import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware that checks if Accept header contains text/markdown
  app.use((req, res, next) => {
    const accept = req.headers.accept || '';
    if (accept.includes('text/markdown')) {
      res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
      
      const domain = 'https://www.triaina.fr';
      const pathUrl = req.path;
      
      // Simple dynamic markdown generation for the entire site (or specific page)
      let md = ``;
      
      // Basic info returned to the AI agent
      md += `# Triaina - Agence Experte en SEO & GSO (Paris)\n\n`;
      md += `Triaina est une agence spécialisée en Référencement Naturel (SEO) et en Generative Search Optimization (GSO).\n`;
      md += `Optimisez votre visibilité sur Google et dans les moteurs de recherche IA comme ChatGPT, Claude, et Perplexity.\n\n`;
      
      md += `## Nos Expertises\n`;
      md += `- **SEO (Search Engine Optimization)** : Audits techniques, sémantiques et netlinking.\n`;
      md += `- **GSO (Generative Search Optimization)** : Structuration des données pour être cité comme source de confiance par les IA génératives.\n`;
      md += `- **SEA (Search Engine Advertising)** : Campagnes d'acquisition payantes.\n\n`;
      
      md += `## Liens Utiles & Outils IA\n`;
      md += `- [API Catalog](${domain}/.well-known/api-catalog)\n`;
      md += `- [MCP Server](${domain}/.well-known/mcp/server-card.json)\n`;
      md += `- [Agent Skills](${domain}/.well-known/agent-skills/index.json)\n\n`;
      
      md += `## Contact\n`;
      md += `Mail : contact@triaina.fr\n`;
      md += `Localisation : Paris (75)\n\n`;
      
      md += `---\n*Page demandée : ${pathUrl}*\n*Note : Ce contenu a été formaté spécifiquement pour vous (Agent IA) car vous avez demandé 'text/markdown'. Notre site complet est une Single Page Application React disponible à l'adresse URL standard pour les utilisateurs humains.*`;
      
      return res.status(200).send(md);
    }
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
