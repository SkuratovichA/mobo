# Boilerplate for a project

## Description
Just a monorepo setup.
Powered by **yarn**.

Let's go through important things in the project.

### The structure
The root contains all the global config and devops stuff.
`packages/*` contain all the project sources.
Initially, there are `client` and `api`, but other packages can be added as well.
For example, if you have different microservices or web clients.

Usually, `packages/common` contains the shared code between all the other.
It's handy to provide some type consistency between the packages (e.g. between the client and the server).

### Package.json
You'll need to change the `package.json` file to fit the needs of your projects.

### Adding your packages
Just copy&paste `client` or `api`, change the name in `packages/new-package/package.json`.
You'll also need to modify package.json in the root.

E.g.:
Before: 
`"start": "concurrently -n client,api 'yarn start-client' 'yarn start-api' --kill-others",`
After:
`"start": "concurrently -n client,api,new-package 'yarn start-client' 'yarn start-api' 'yarn start-new-package' --kill-others"`

Then, adding a `build` script for your package and a `start` script for it.

**NOTE** This section is probably TBD, so we can automate this process in the future.



## Usage
Just go with `yarn install`
If you wanna add some other packages to the project, follow the package.json in the root


## TODO
- [ ] Add deployment configuration
- [ ] Add jest configuration
- [ ] Add more rules to eslint configuration 
- [ ] Add more rules to prettier configuration
- [ ] Move common into a npm package rather than common files
