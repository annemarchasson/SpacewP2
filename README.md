SpacewP2
![logonav](https://github.com/annemarchasson/SpacewP2/assets/66382092/821d915e-4fae-4cb0-af17-b5e1b1965f43)


SpacewP2 est un projet React qui vise à créer un site web interactif dédié à l'exploration spatiale . Ce projet est le deuxième projet de groupe fait à la wild code school. L'objectif principal de ce projet est de vendre des tickets pour voyager dans l'espace et de fournir des informations et des actualités sur l'espace, ainsi que des images et des vidéos captivantes de l'univers. 

Fonctionnalités
Affichage d'informations sur les vols spaciaux.
Mise en avant d'actualités et d'événements liés à l'espace.
Visualisation d'images et de vidéos de l'espace capturées par des télescopes et des sondes spatiales.
![Capture d'écran 2023-06-18 190702](https://github.com/annemarchasson/SpacewP2/assets/66382092/901de789-2425-460a-a210-bdba1c8d55fd)

Technologie:

React: React est une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur réactives et interactives. Dans ce projet, React est la base de développement pour la création de composants réutilisables et la gestion de l'état de l'application.

HTML: HTML (HyperText Markup Language) est le langage de balisage utilisé pour structurer le contenu du site web. Dans ce projet, HTML est utilisé pour définir la structure des différentes pages et composants.

CSS: CSS (Cascading Style Sheets) est utilisé pour définir les styles et la présentation visuelle du site web. Dans ce projet, CSS est utilisé pour personnaliser l'apparence des éléments et créer des mises en page attrayantes.

JavaScript: JavaScript est un langage de programmation utilisé pour ajouter des fonctionnalités et des comportements interactifs au site web. Dans ce projet, JavaScript est utilisé pour interagir avec l'API, gérer les événements et effectuer des opérations dynamiques côté client.

React Router: React Router est une bibliothèque de routage pour React qui permet de gérer la navigation dans une application à pages multiples. Dans ce projet, React Router est utilisé pour gérer les différentes routes et permettre la navigation entre les pages.

API REST: Une API REST (Representational State Transfer) est utilisée pour récupérer les données liées à l'exploration spatiale, telles que les informations sur les planètes, les étoiles, les galaxies, les actualités, les images, etc. L'application communique avec l'API REST pour obtenir les données nécessaires à l'affichage et à la fonctionnalité de l'application.

Axios: Axios est une bibliothèque JavaScript utilisée pour effectuer des requêtes HTTP depuis le navigateur. Dans ce projet, Axios est utilisé pour envoyer des requêtes à l'API REST et récupérer les données nécessaires.

ESLint et Prettier: ESLint et Prettier sont des outils utilisés pour garantir la cohérence du code et appliquer les bonnes pratiques. Ils permettent de détecter et de corriger automatiquement les erreurs de syntaxe, les problèmes de style et les violations des conventions de codage.

Git: Git est un système de contrôle de version utilisé pour suivre les modifications du code source et faciliter la collaboration entre les développeurs. Dans ce projet, Git est utilisé pour gérer les différentes versions du code et permettre la collaboration via des branches et des demandes de fusion.

Installation & Utilisation

Pour commencer un projet
Sur VSCode, installer les plugins Prettier - Code formatter et ESLint et les configurer
Cloner ce dépôt, se rendre à l'intérieur
Si vous utilisez yarn ou pnpm, adapter config/cli dans le fichier package.json
Lancer la commande npm install
NB: Pour exécuter le backend, un fichier d'environnement avec les données de connexion d'une BdD valide est nécesaire. Un modèle se trouve dans backend/.env.sample

Liste des commandes et signification

migrate : Exécute le script de création de la base de données
dev : Démarrage des deux serveurs (frontend + backend) dans un même terminal
dev-front : Démarrage d'un serveur React pour le frontend
dev-back : Démarrage d'un serveur Express pour le backend
lint : Exécute des outils de validation de code (sera exécutée automatiquement à chaque commit)
fix : Fixe les erreurs de formatage (à lancer si lint ne passe pas)
Pour plus d'informations

Listing des outils utilisés

Concurrently : Permet d'exécuter plusieurs commandes dans un même terminal
Husky : Permet d'exécuter des actions en déclenchement de commandes git
Vite : Alternative à Create-React-App, embarquant moins de packages pour une expérience plus fluide
ESLint : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
Prettier : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
Standard Airbnb : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
Nodemon : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

Auteurs
Anne Marchasson - @annemarchasson
