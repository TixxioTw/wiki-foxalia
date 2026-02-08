---
sidebar_position: 3
title: 🏘️ Les Villes
---

# 🏘️ Système de Villes

Les **Villes** représentent le cœur de la vie sociale sur Foxalia. En fonder une vous permet de bâtir un empire, de gérer une économie commune et de protéger vos citoyens sous une identité unique.

---

## 🎨 Identité Visuelle & Couleurs

Nous laissons une liberté totale pour le nom et le préfixe de votre ville, à condition qu'ils restent lisibles.

### ✨ Créer un dégradé (RGB)
Pour obtenir un nom unique avec des dégradés de couleurs :
1. Rendez-vous sur le site [Birdflop RGB](https://www.birdflop.com/resources/rgb/).
2. Dans la section **"Options"**, assurez-vous de sélectionner le format suivant : `&x&r&r&g&g&b&b&l`.
3. Copiez le code généré pour l'utiliser dans les commandes ci-dessous.

:::danger Vigilance : Code Magic
L'usage du code de mise en forme **&k** (caractères mouvants) est strictement interdit. Toute ville utilisant ce code sera contrainte de modifier son identité sous peine de dissolution.
:::

---

## 🏗️ Fonder sa Ville

La création d'une ville est un privilège réservé aux détenteurs du grade **Titan**.

* **Étape 1 (Fondation)** : `/v create <nom>`
* **Étape 2 (Validation)** : `/v confirm` (ou `/v cancel` pour annuler).

### 🛠️ Personnalisation avancée
Si vous souhaitez utiliser un nom long ou un dégradé complexe :
1. Créez d'abord votre ville avec un nom simple (ex: `/v create Paris`).
2. Modifiez le nom complet : `/v rename <code_couleur_Birdflop>`
3. Modifiez le préfixe (celui affiché dans le chat) : `/v prefix <code_couleur_Birdflop>`

---

## 👥 Vie Citoyenne & Hiérarchie

### Intégrer de nouveaux membres
* **Recrutement** : `/v invite <pseudo>`
* **Rejoindre** : `/v accept <NomDeLaVille>`

### Gestion des rangs
Attribuez des responsabilités à vos membres pour mieux gérer la ville :
* **Promouvoir** : `/v promote <pseudo>`
* **Rétrograder** : `/v demote <pseudo>`
* **Rangs** : Chef 👑 | Officier 🛡️ | Membre 👥 | Recrue 🎓

---

## ⚡ Utilitaires de Ville

| Catégorie | Commande | Description |
| :--- | :--- | :--- |
| **Communication** | `/v chat` | Bascule vers le canal de discussion privé de la ville. |
| **Téléportation** | `/v sethome` | Définit le point d'apparition (Spawn) de la ville. |
| **Téléportation** | `/v home` | Retourne instantanément au point de spawn de la ville. |
| **Stockage** | `/v vault` | Ouvre le coffre sécurisé partagé entre les membres. |

---

## 🚀 Évolution & Niveaux

Votre ville peut évoluer pour accueillir plus de citoyens. Déposez l'argent en banque avec `/v bank deposit <somme>` puis lancez l'amélioration avec `/v upgrade`.

* **Niveau 2** : 25 000 $ (5 membres)
* **Niveau 3** : 50 000 $ (10 membres)
* **Niveau 4** : 75 000 $ (15 membres)
* **Niveau 5** : 100 000 $ (25 membres)

---

:::info Conseil
Utilisez `/v info` pour visualiser l'état de votre ville (argent, membres connectés, niveau actuel).
:::