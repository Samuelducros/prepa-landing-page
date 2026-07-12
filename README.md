# Landing page Samuel Ducros

Version propre et autonome du projet React extrait de Base44.

## Prérequis

Installe Node.js LTS depuis https://nodejs.org

## Lancer le projet en local

Dans le Terminal :

```bash
cd landing-page-samuel
npm install
npm run dev
```

Puis ouvre l’adresse affichée par Vite, généralement :

```text
http://localhost:5173
```

## Construire la version à publier

```bash
npm run build
```

Le dossier `dist/` contiendra la version finale du site.

## Fichiers à personnaliser en priorité

- `src/components/VideoSection.jsx` : intégrer la vraie vidéo.
- `src/components/Plaquette.jsx` : remplacer `href="#"` par le lien vers le PDF.
- `src/components/HeroSection.jsx` : modifier l’image principale si nécessaire.
- `src/components/AboutMe.jsx` : remplacer l’image par ton portrait.
- Tous les textes peuvent être modifiés directement dans les composants.

## Publication

Le projet peut être publié gratuitement sur Vercel, Netlify ou Cloudflare Pages.


- [ ] Créer un compte GitHub
- [ ] Créer un dépôt
- [ ] Envoyer le projet sur GitHub
- [ ] Créer le projet Cloudflare Pages
- [ ] Relier le dépôt GitHub
- [ ] Configurer la commande de build : `npm run build`
- [ ] Configurer le dossier de sortie : `dist`
- [ ] Tester l’adresse temporaire
- [ ] Relier `samuel-ducros.fr`
- [ ] Activer le HTTPS
