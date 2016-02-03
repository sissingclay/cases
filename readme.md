#Getting setup

Go to [node.js](https://nodejs.org/en/ "Node.js") and download version 4. This should download a .pdk file. Install this
on your system.

To test if you have install Node.js on your system run the command below. It should return a version number.

```node -v```

Installing node also installs its package manager which is NPM. You need to test if this was install by running the 
command below.

```npm -v```

Now you need to install babel which is a transpiler. It will convert ES6 to ES5. Installing Babel globally gives us a 
babel [command line interface](http://babeljs.io/docs/usage/cli/) (CLI) option.

```sudo npm install -g babel-cli```

Let’s go ahead and install webpack globally (which gives us a webpack CLI):

```sudo npm install -g webpack```

Next we can install babel-loader to our local project. This loader enables webpack to load our ES6 modules and transpile 
them to ES5. We can install it, and save it to our package.json’s devDependencies by running this:

```sudo npm install -g webpack```

Then install all the dependencies

```npm install```