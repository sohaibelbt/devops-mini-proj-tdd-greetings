# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

-   N° de groupe : 24
-   Membres du groupe : El Bouhtani Sohaib, Guerbaoui Mohamed, Yahia Ibrahim

## Énoncé

### Pré-requis :

-   Sur base de votre mini-projet 1 (TDD)
-   Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
-   Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)
[Repo](https://github.com/sohaibelbt/devops-mini-proj-tdd-greetings)

## Questions

-   Décrivez brièvement ce que fait votre fichier YML.

```bash
Le fichier YML configure un worflow GitHub Actions pour l'intégration continue sur les pull requests vers la branch principale (main). Il comprend des étapes telles que la récupération du code, la configuration de Node.js, l'installation des dépendances, l'exécution de Prettier et Eslint, les test, le build du projet et l'affichage des messages informatifs tels que l'auteur du pull request et permet d'assurer un CI sans erreurs.
```

-   En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
Le 'on push' déclenche la pipeline lorsqu'un push est effectué vers la branche principale, tandis que le 'on pull_request' déclenche la pipeline lorsqu'une pull request est ouverte ou mise à jour. Pour un groupe de développeurs juniors, afin de maintenir une cohérence dans les versions de Node.js, les conventions de formatage, et pour éviter les conflits lors des pushs, l'utilisation de 'on pull_request' serait plus avantageuse.
```

-   Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
runs-on: ubuntu-latest permet de spécifier que toutes les étapes du "build" seront exécutées sur une machine virtuelle Ubuntu avec la dernière version disponible.'run:' représente une étape spécifique qui va être exécuter.
```

-   Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
"Uses" dans GitHub Actions invoque des actions prédéfinies, telles que l'obtention du code source ou la configuration d'un environnement. Par exemple, actions/checkout@v2 récupère le code. "Run" exécute des commandes spécifiques à votre projet, comme l'installation de dépendances ou l'exécution de tests via des commandes npm. Les actions avec "uses" sont des composants prédéfinis, tandis que "run" exécute des commandes personnalisées dans l'environnement actuel. Ces deux mots-clés permettent de modéliser différentes étapes et actions dans un workflow de GitHub.
<votre réponse ici>
```

-   Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
Oui, les étapes dans un pipeline GitHub Actions peuvent être réorganisées. Cependant, il est crucial de considérer les dépendances entre les étapes. Par exemple, dans votre pipeline, l'étape "Checkout repository" doit être exécutée avant toute opération sur le code source, comme l'installation de dépendances ou l'exécution de tests. De même, les étapes de formatage, de linting, de tests et de construction ont un ordre logique à suivre. Donc, bien que vous puissiez réorganiser les étapes, assurez-vous de respecter les dépendances pour que le pipeline fonctionne correctement.
<votre réponse ici>
```

-   Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
Pour ajouter le test de sécurité secure_app :

Obtenez le programme : Assurez-vous d'avoir accès à secure_app soit en l'installant via une action existante, soit en le téléchargeant manuellement.
Comprenez le format de sortie : Déterminez comment le test de sécurité secure_app renvoie ses résultats (succès/échec, rapports détaillés).
Intégrez-le dans le pipeline : Ajoutez une étape pour exécuter secure_app au bon moment (après la construction, avant les tests, etc.).
Gestion des résultats : Décidez comment gérer les résultats du test, que ce soit par des notifications en cas d'échec ou par intégration dans les rapports de test globaux.
Testez et adaptez : Intégrez le test, vérifiez que cela fonctionne sans perturber le flux existant et ajustez si nécessaire.
<votre réponse ici>
```
