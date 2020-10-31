# Fullstack app with Vue (client) and Expressjs (server)

## Etape 1

### Énoncé

Créer un .gitignore

### Ressources

- [Documentation officielle de git](https://git-scm.com/docs/gitignore)
- [gitignore.io](https://www.toptal.com/developers/gitignore)

### Actions

Copier le contenu du fichier généré par l'outil [gitignore.io](https://www.toptal.com/developers/gitignore) et le coller dans un fichier nommé `.gitignore` et placé à la racine du projet.

## Étape 2

### Énoncé

Créer un répertoire `server` avec un fichier `package.json` minimal.

### Ressources

- [Commande `npm init` dans la documentation officielle](https://docs.npmjs.com/cli-commands/init.html)
- [Section sur package.json dans la documentation officielle](https://docs.npmjs.com/files/package.json)

### Actions

Se placer dans le dossier `server` et taper la commande suivante :

```
npm init -y
```

Éventuellement, remplacer la ligne suivante :

```json
  "name": "server",
```

par la ligne suivante :

```
  "name": "fullstack-api",
```

ou une ligne avec un nom correspondant plus à votre projet. Veillez à ne pas mettre d'espace ni majuscules ni caractères spéciaux.


## Étape 3

### Énoncé

Créer une application server minimale (Hello world).

### Ressources

- [Guide "Getting started" dans la documentation officielle de nodejs](https://nodejs.org/en/docs/guides/getting-started-guide/)

### Actions

Créer un fichier `index.js` dans le dossier `server` avec ce contenu :

```
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

## Étape 4

### Énoncé

Créer un script `start` pour lancer l'application "Hello World".

### Ressources

- [npm-start dans la documentation officielle](https://docs.npmjs.com/cli/v6/commands/npm-start)
- [package.json scripts dans la documentation officielle](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#scripts)