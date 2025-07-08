# 🌱 Charles's Linktree

Ceci est mon **Linktree perso**, que j'ai préféré coder moi-même plutôt que d'utiliser un outil tout fait.  
On y retrouve quelques liens utiles me concernant, sous forme de **cartes cliquables** :

- 🧾 Mon CV (PDF)
- 💼 Mon LinkedIn
- 🌐 Mon Portfolio
- 🧠 La formation CDA chez Simplon (descriptif & calendrier)
- 👨‍💻 Mon GitHub

---

## 🚀 Lancer le projet en local

```bash
npm install
npm run dev
```

Accès via :
http://localhost:5173/Linktree/

    ⚠️ En production (ex. Vercel), le projet est servi depuis /Linktree/, donc les assets (comme les PDF) sont accessibles via /Linktree/NOM_DU_FICHIER.pdf.

---

## 🎨 Organisation du projet

    /public : contient les fichiers statiques comme les PDF (CV, calendrier, etc.).

    /src/pages/Home : la page principale, qui affiche toutes les cartes.

    /src/components/ProfileCard : le composant utilisé pour chaque carte.

    /src/assets/Cards : les images des cartes (GitHub, CV, Portfolio...).

    /src/components/Sun : un petit composant décoratif 🌞

    /src/assets/Me.png : l’image de profil.

---

## 📦 Utiliser ce projet comme template

Tu peux te le réapproprier facilement :

    Change les images dans /src/assets/.

    Modifie les liens dans Home.tsx.

    Personnalise les styles dans les fichiers .module.css.

---

## ✨ Déploiement

Le projet est prêt pour être déployé sur Vercel, Netlify ou autre.
N'oublie pas de définir base: '/Linktree/' dans vite.config.ts pour que les fichiers PDF soient bien trouvés.

Un mini-projet sympa, rapide à coder, et parfait pour montrer qui je suis !
N'hésite pas à t'en inspirer ou à l'améliorer 😉
