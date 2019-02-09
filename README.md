# Reagent
An CLI for creating components, containers, redux sections and another things from variety user templates within React-application built with Create-React-App (and not only).

**`reagent`** means REAct-GENerator-Templates that actually stands for generating React entities from templates.

**`reagent`** strives to be an easily embeddable and beautiful command line interface for [Node.js](https://nodejs.org/) in goal to reduce creating components, containers or custom boilerplates in your React application.

**`reagent`** allows you quickly

- create essences from inner templates
- define your own templates
- eject all inner templates for modification and farther using

## Installation
<a name="installation"></a>
```shell
$ npm install --save-dev reagent-cli
```
or if you want to install it globally
```shell
$ npm install -g reagent-cli
```

> **Note**
> For using it in development mode you can just clone this repository and create virtual link as shown below:
> ```shell
> $ git clone https://github.com/daminort/reagent-cli.git
> $ cd reagent-cli
> $ npm link
> ```
> Then you will be allowed to use **`reagent`** as globally installed package.
> To remove it simply type
> ```shell
> $ cd reagent-cli
> $ npm unlink
> ```
> This will remove package from your system but not cloned folder

## Usage
<a name="usage"></a>
If **`reagent`** is installed as dev-dependency of your project you can type
```shell
$ npx reagent create
```
or if **`reagent`** is installed globally
```shell
$ reagent create
```

## Commands (brief overview)
<a name="commands"></a>

| Command | Alias | Options | Description |
|---------|-------|---------|-------------|
|**create**|**new**| |Creating component, container, redux section or anything else from user defined templates in current working directory|
|**eject**| | |Ejecting inner templates into current working directory|
|**current**| | |Set absolute path to current working directory as path to folder with user defined templates|
|**path**| |pathname|Set absolute path to defined directory as path to folder with user defined templates|
|**clear**| | |Removing path to user defined temlates from config of **`reagent`**|
|**info**| | on/off |Toogle showing information about created files and folders|


## Commands Documentation
<a name="commands-doc"></a>

### create | new

The **`create`** command has two levels of questions to user:
- Type of template
- Template parameters

In the section **Type of template** you can choose one of the following options:
- user defined template (if you have it)
- component
- container
- redux section

In the section **Template parameters** you have to answer next questions:
- **Template Name**: you can choose needed template from the list of available ones
- **Name**: it will be used for naming target folder and replacing template name within copied files
- **Location**: a relative path from current working directory. Content of template will be copied into the pointed folder. If target folder doesn't exist, it will be created
- Checking and confirmation chosen options

> Notice that come types of templates has default value for location:
> - component: `src/components`
> - container: `src/containers`
> - redux section: `src/redux`
>
> But, of course, you can use any location up to you

Usage:
```shell
$ reagent create
$ reagent new
```

### eject

The **`eject`** command allows you to derive all inner teplates in current working directory in folder `templates`.

This folder will content templates and configuration file `config.json` with descriptions of templates.

It can be useful as an example to create your own templates.

During ejection target path is saving to config of **`reagent`** as path to user defined templates. You can rewrite it later.

Usage:
```shell
$ reagent eject
```

### current

The **`current`** command allows you to define path to folder with user defined templates which is current working directory

Usage:
```shell
$ reagent current
```

### path <pathname>

The **`path`** command does the same things as command **`current`** but you have to pass the absolute path to folder with user defined templates

Usage:
```shell
$ reagent path /home/daminort/reagent-templates
```

### clear

The **`clear`** command allows you to define path to folder with user defined templates which is current working directory

Usage:
```shell
$ reagent clear
```

### info <mode>

The **`info`** command allows you to handle whether an information about created files and folder be shown in console

Usage:
```shell
$ reagent info on
$ reagent info off
```

## Inner templates
**`reagent`** has some inner predefined templates. Among them:

**Components**
- Functional component
- Functional component (with styled wrapper)
- Class-based component
- Class-based component (with styled wrapper)

**Containers**
- Functional container (with connecting to Redux)
- Functional container (with connecting to Redux and styled wrapper)
- Class-based container (with connecting to Redux)
- Class-based container (with connecting to Redux and styled wrapper)

**Redux Section**
- Redux actions + Reducer
- Redux actions + Immutable reducer
- Redux actions + Reducer + Saga
- Redux actions + Immutable reducer + Saga

All of these templates you can find in [templates](/templates) folder

## Using template example
For example, let's create simple functional component `Button`. To do it you can type
```shell
$ cd my-project
$ reagent create
```
and then pass the next answers:
```
Type          : Simply reusable component
Template Name : Functional component
Name          : Button
Location      : src/components (by default)
```

After that you will get the folder structure like this:
```
my-project
...
└── src
    └── components
        ├── Button.js
        └── index.js
```

and the files will content the next code:

**index.js**
```javascript
import Button from './Button';

export default Button;
```

**Button.js**
```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id }) => {

  return (
    <div id={id}>
      There is some content
    </div>
  );
};

Button.propTypes = {
  id : PropTypes.string,
};

Button.defaultProps = {
  id : 'id',
};

export default Button;
```

## User defined templates
**`reagent`** allows you define and use your own templates. To do this you have to make some steps:
- create folder with your templates
- create file `config.json` within this folder
- go to the template folder and run `reagent current`
- enjoy :)

A structure of `config.json` must be like this:
```json
{
  "templates": [
    {
      "type": "MyButton",
      "description": "Awesome Button",
      "path": "MyButton",
      "rename": true
    }, {
      "type": "HelloWorld",
      "description": "Real HelloWorld Project boilerplate",
      "path": "HelloWorld",
      "rename": false
    }
  ]
}
```
Template description fields mean:
- **type**: an uniq identifier of your template
- **description**: some reasonable description. You will see it in the questions
- **path**: relative path to template. Don't add `./` before it
- **rename**: a flag that defines if rename files of template and names within them in according to entered Name

You can get an example of `config.json` by command `reagent eject`

## Change Log
- 2019-02-08, v2.0.0: Full refactoring project structure, added new setting option `showInfo`
- 2019-02-06, v1.0.0: Project is finished with necessary features

## License
Reagent is open source software [licensed as MIT](/LICENSE).
