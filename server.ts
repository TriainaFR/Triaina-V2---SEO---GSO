import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { BLOG_DATA, EXPERTISE_DATA, ROUTES } from './constants';

async function startServer() {
  const app = express();
  // Trust proxy is essential behind Railway/Cloudflare edge load balancers
  app.set('trust proxy', 1);
  const PORT = process.env.PORT || 3000;

  // Redirect old slug via 301
  app.use('/blog/optimiser-site-llm-2026-guide-complet', (req, res) => {
    res.redirect(301, 'https://www.triaina.fr/blog/optimiser-site-llm-guide-seo-complet-2026');
  });

  // Enforce www for SEO
  app.use((req, res, next) => {
    const host = req.headers.host || '';
    // Look for exact 'triaina.fr' and not 'www.triaina.fr' nor localhost or other domains
    if (host.match(/^triaina\.fr(:\d+)?$/)) {
      return res.redirect(301, `https://www.triaina.fr${req.originalUrl}`);
    }
    next();
  });

  // Add CORS specific for well-known endpoints to allow agent discovery tools
  app.use('/.well-known', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }
    next();
  });

  // 1. GSO: Link headers for Agent Discovery (RFC 8288)
  app.use((req, res, next) => {
    if (req.path === '/' || req.path === '/index.html') {
      res.setHeader('Link', '</.well-known/api-catalog>; rel="api-catalog", </.well-known/mcp/server-card.json>; rel="mcp-server-card"');
    }
    next();
  });

  // 2. GSO: API Catalog (RFC 9727)
  app.get('/.well-known/api-catalog', (_req, res) => {
    res.setHeader('Content-Type', 'application/linkset+json');
    res.send(JSON.stringify({
      linkset: [
        {
          anchor: "https://www.triaina.fr/api",
          "service-desc": [{ href: "https://www.triaina.fr/openapi.yaml", type: "application/yaml" }],
          "service-doc": [{ href: "https://www.triaina.fr/docs", type: "text/html" }],
          status: [{ href: "https://www.triaina.fr/api/health", type: "application/json" }]
        }
      ]
    }, null, 2));
  });

  // 3. GSO: OAuth/OIDC Discovery Metadata (RFC 8414)
  app.get('/.well-known/oauth-authorization-server', (_req, res) => {
    res.json({
      issuer: "https://www.triaina.fr",
      authorization_endpoint: "https://www.triaina.fr/oauth/authorize",
      token_endpoint: "https://www.triaina.fr/oauth/token",
      jwks_uri: "https://www.triaina.fr/oauth/jwks",
      grant_types_supported: ["authorization_code", "client_credentials"],
      response_types_supported: ["code"]
    });
  });

  // 4. GSO: OAuth Protected Resource Metadata (RFC 9728)
  app.get('/.well-known/oauth-protected-resource', (_req, res) => {
    res.json({
      resource: "https://www.triaina.fr/api",
      authorization_servers: ["https://www.triaina.fr"],
      scopes_supported: ["read", "write", "gso_access"]
    });
  });

  // 5. GSO: MCP Server Card
  app.get('/.well-known/mcp/server-card.json', (_req, res) => {
    res.json({
      $schema: "https://mcp.schema.example.com/server-card",
      serverInfo: {
        name: "triaina-mcp-server",
        version: "1.0.0",
        description: "Serveur MCP pour l'agence Triaina SEO / GSO"
      },
      transport: {
        type: "sse",
        endpoint: "https://www.triaina.fr/mcp/sse"
      },
      capabilities: {
        tools: true,
        resources: true,
        prompts: true
      }
    });
  });

  // GSO: A2A Agent Card (Discovery)
  app.get('/.well-known/agent-card.json', (_req, res) => {
    res.json({
      name: "Triaina",
      version: "1.0.0",
      description: "Agence spécialisée en SEO (Search Engine Optimization) et GSO (Generative Search Optimization).",
      supportedInterfaces: [
        {
          url: "https://www.triaina.fr",
          transport: "HTTP"
        }
      ],
      capabilities: [
        "SEO Audit",
        "GSO Analysis"
      ],
      skills: [
        {
          id: "seo-audit",
          name: "SEO Audit",
          description: "Auditing websites for technical, content, and link profile quality according to Google best practices."
        },
        {
          id: "gso-optimization",
          name: "Generative Search Optimization",
          description: "Optimizing online presence and mentions to rank within AI-generated responses."
        }
      ]
    });
  });

  // 6. GSO: Agent Skills Index
  app.get('/.well-known/agent-skills/index.json', (_req, res) => {
    res.json({
      $schema: "https://agentskills.io/schema/v0.2.0/index.schema.json",
      skills: [
        {
          name: "audit-seo-gso",
          type: "api",
          description: "Lance un audit rapide de visibilité",
          url: "https://www.triaina.fr/api/skills/audit",
          sha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
        }
      ]
    });
  });

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
    // Production serving with dynamic SEO injection
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath, { index: false }));
    app.get('*all', async (req, res) => {
      try {
        let html = await fs.promises.readFile(path.join(distPath, 'index.html'), 'utf-8');
        
        const cleanPath = req.path === '/' ? '/' : req.path.replace(/\/$/, '');
        const routeId = ROUTES[cleanPath];
        
        if (routeId) {
            let title = '';
            let description = '';
            let extraSchema = '';
            
            const blogPost = BLOG_DATA.find(b => b.url === cleanPath || b.id === routeId);
            if (blogPost) {
                title = `${blogPost.title} | Triaina`;
                description = blogPost.excerpt;
                extraSchema = JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": blogPost.title,
                    "description": blogPost.excerpt,
                    "image": blogPost.image,
                    "datePublished": blogPost.date,
                    "author": { "@type": "Organization", "name": "Triaina", "url": "https://www.triaina.fr" },
                    "publisher": { "@type": "Organization", "name": "Triaina", "url": "https://www.triaina.fr", "logo": { "@type": "ImageObject", "url": "https://www.triaina.fr/logo.svg" } },
                    "mainEntityOfPage": `https://www.triaina.fr${cleanPath}`
                });
            } else {
                // Not a blog post, check expertise
                const exp = EXPERTISE_DATA[routeId];
                if (exp) {
                    title = `${exp.title} | Triaina`;
                    description = exp.description;
                    extraSchema = JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": exp.title,
                        "provider": { "@type": "Organization", "name": "Triaina", "@id": "https://www.triaina.fr/#organization" },
                        "description": exp.description,
                        "url": `https://www.triaina.fr${cleanPath}`
                    });
                } else if (routeId === 'seo-paris') {
                    title = "Agence SEO Paris | Expert Référencement Naturel | Triaina";
                    description = "Experts en référencement naturel et optimisation GSO à Paris. Améliorez votre visibilité avec Triaina.";
                    extraSchema = JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": title,
                        "description": description,
                        "url": `https://www.triaina.fr${cleanPath}`
                    });
                } else if (routeId === 'agence-referencement-ia' || routeId === 'agence-referencement-ia-paris') {
                    title = "Agence de Référencement IA & GSO | Triaina";
                    description = "Soyez cité par ChatGPT, Claude, et Gemini. Expert en Generative Search Optimization (GSO).";
                    extraSchema = JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": title,
                        "description": description,
                        "url": `https://www.triaina.fr${cleanPath}`
                    });
                }
            }
            
            if (title) html = html.replace(/<title>.*?<\/title>/si, `<title>${title}</title>`);
            if (description) html = html.replace(/<meta name="description" content=".*?"\s*\/>/si, `<meta name="description" content="${description}" />`);
            if (extraSchema) {
                html = html.replace('</head>', `<script type="application/ld+json">\n${extraSchema}\n</script>\n</head>`);
            }
        }
        
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
      } catch (err) {
        console.error("Error reading index.html", err);
        res.status(500).send("Internal Server Error");
      }
    });
  }

  app.listen(PORT as number, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
