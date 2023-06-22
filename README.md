# @tririga/cra-template

Quickstart Create React App (CRA) template for building TRIRIGA UX Web applications using ReactJS and IBM Carbon Components.

# Usage

npx create-react-app my-app-name --template @tririga/cra-template --use-npm

# Note

When running `npm run start`, the code editor console displays an "Invalid dependencies" deprecation warning. It is an open issue in `create-react-app`, facebook/create-react-app#12329.

A workaround to resolve that warning (only work on IOS, not Windows), in the package.json, replace script `"start": react-scripts start"` with

```
"start": "SASS_PATH=\"`cd \"./node_modules/@carbon\";pwd`\" react-scripts start"
```
