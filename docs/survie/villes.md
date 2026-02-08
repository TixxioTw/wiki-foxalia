---
sidebar_position: 3
title: 🏘️ Les Villes
---

# 🏘️ Système de Villes

Une **Ville** est une communauté regroupée autour d’une aventure commune et régie par une hiérarchie précise : Chef, Officiers, Citoyens et Recrues.

---

## 🎨 Personnalisation (Code couleurs)

Pour le nom de votre ville, aucune restriction de couleur ne vous est imposée. Vous pouvez utiliser plusieurs couleurs selon vos envies.

:::danger Important : Code Magic
Le code **&k** (Magic) est strictement **interdit**. Si vous l'utilisez, le staff vous demandera de modifier le préfixe. En cas de refus, la ville pourra être supprimée et une sanction appliquée.
:::

---

## 🏗️ Créer une Ville

Pour fonder votre propre ville, vous devez posséder le grade **Titan**.

### Étapes de création
1. Utilisez la commande : `/v create <nom>`
2. Pour valider, faites : `/v confirm`
3. Pour annuler, faites : `/v cancel`

:::tip Difficulté de création ?
Si un message d'erreur s'affiche :
* **Caractères spéciaux** : Ils sont interdits et bloquent la création.
* **Nom trop long** : Créez la ville avec un nom court (ex: `/v create Paris`), validez avec `/v confirm`, puis changez le préfixe avec `/v prefix NomTresLong`.
:::

---

## 👥 Gestion des Membres

### Inviter et Rejoindre
* **Inviter un joueur** : `/v invite <pseudo>`
* **Rejoindre une ville** : `/v join <NomDeLaVille>` ou `/v accept <NomDeLaVille>`
* **Expulser un membre** : `/v kick <pseudo>`

### Hiérarchie et Rangs
En tant que chef, vous pouvez promouvoir ou rétrograder vos citoyens :
* **Promouvoir** : `/v promote <pseudo>`
* **Rétrograder** : `/v demote <pseudo>`

**Rangs disponibles :** Chef 👑, Officier 🛡️, Membre 👥, Recrue 🎓.

---

## ⚔️ Avantages et Utilitaires

### Chat Privé
Communiquez uniquement avec les membres de votre ville :
* Activez/Désactivez avec : `/v chat`

### Points de téléportation (Home)
* **Définir le point de ralliement** : `/v sethome`
* **Se téléporter à la ville** : `/v home`
* **Supprimer le point** : `/v delhome`

---

## 📋 Informations et Évolution

Utilisez `/v info` pour afficher le menu visuel de votre ville :
* 🪙 **Lingot d'or** : Argent en banque.
* ⛑️ **Casque en fer** : Liste des membres.
* 💎 **Émeraude** : Statut (Public/Privé).
* 🛏️ **Lit** : Gestion du home.
* 🧰 **Coffre** : Stockage commun de la ville.

### 🚀 Améliorer la Ville (Upgrade)
Déposez l'argent nécessaire avec `/v bank deposit <somme>` puis faites `/v upgrade`.

| Niveau | Prix | Capacité |
| :--- | :--- | :--- |
| **Niveau 2** | 25 000 $ | 5 membres max |
| **Niveau 3** | 50 000 $ | 10 membres max |
| **Niveau 4** | 75 000 $ | 15 membres max |
| **Niveau 5** | 100 000 $ | 25 membres max |

---

## 🔧 Liste des commandes pratiques

| Commande | Action |
| :--- | :--- |
| `/v bank balance` | Voir l'argent de la ville. |
| `/v bank deposit <montant>` | Déposer de l'argent en banque. |
| `/v bank withdraw <montant>` | Retirer de l'argent. |
| `/v vault` | Ouvre le coffre de stockage commun. |
| `/v list` | Affiche la liste de toutes les villes. |
| `/v delete` | Supprimer définitivement la ville. |

:::info Astuce
Toutes les commandes peuvent être abrégées en utilisant simplement **`/v`**.
:::