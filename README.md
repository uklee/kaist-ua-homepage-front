This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Commit Message Guidelines
#### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

Samples: \(even more [samples](https://github.com/winningarc/kaist-ua-homepage-front/commits/master)\)

```text
docs(README): update README adding instruction on how to start docker on EC2
```

```text
build(babel): Add babel preset-env

Add @babel/core, @babel/preset-env and register with @babel/register.
Entry point of the application is set to be bin/www_es6.js
Refer to the package.json file to fidn out more.
```

#### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type

Should be one of the following:

* **build**: Changes that affect the build system or external dependencies \(example scopes: gulp, broccoli, npm\)
* **ci**: Changes to our CI configuration files and scripts \(example scopes: Circle, BrowserStack, SauceLabs\)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code \(white-space, formatting, missing semi-colons, etc\)
* **test**: Adding missing tests or correcting existing tests
* **misc**: Adding miscellaneous items

## Branch Management

For branch history, see the [branches on this repository](https://github.com/winningarc/kaist-ua-homepage-front/branches)

#### Branch Naming Format
```
<type>/<scope>
```

#### Type

Should be one of the following:

* **master**
* **develop**
* **feature**
* **release**
* **hotfix**

## Authors

* **winningarc** - [Winningarc](https://github.com/winningarc)
* **coderlulu** - [CoderLulu](https://github.com/coderlulu)
