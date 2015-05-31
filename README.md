#Static website

First, clone or download the GitHub repository in your local machine. Then, using the command line interface, type


```javascript
npm install
```
this will install all node modules specified in package.json; next, type

```javascript
bower install
```

with this, all packages and dependencies contained in bower.json.

Now that the project is set in the local file system, it is time to see it in action. The gulp tasks are used for this
purpose. In the CLI, type

```javascript
 gulp
```

this will trigger the dev task, which contains the watch task, responsible for looking out for changes in the code; and
the connect task, which make it possible to see our changes in the browser with a live reload.

A production build is also included. This task optimizes the files, so they do not take much space and, therefore, it
will make the page load faster. To start the production task, type:

```javascript
 gulp --production
```
