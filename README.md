This is a minimal Node.js app for quick JS experiments.

## scripts
### Install
```
npm install
```

### Develop
To experiment with JS(ES2015), update `howdy.js` and run

```
npm run dev
```

### Test
Run mocha tests with:

```
npm test
```

add tests in `howdy.spec.js`

Bonus:

If using Webstorm, you might also want to consider to 'Run > Edit Configurations...] and add a mocha configuration with --compilers js:babel-register for *.spec.js files.


### Build
```
npm run build
```

It will generate `dist/howdy.js`.

### Start
```
npm start
```

It runs `node dist/howdy.js`.
