# Introduce
   This lib is mean to detect whether the resource(url) is modified. We do this by calling a fetch to get the 'etag', and cache the last one.


# HOW TO USE

### Install
```cmd
    npm i --save is-resource-modified
```

### import or require
```js
    import isResourceModified,{autoCheck} from 'is-resource-modified'

    // if your are using in client-side(browser)
    // import isResourceModified,{autoCheck} from 'is-resource-modified/dist/lib/is-resource-modified-browser'
```

### isResourceModified(url, Options)
```ts
    // a single call
    isResourceModified('http://i.e./resource.js')
    .then(isModified => {
            console.log(isModified) // boolean
            // because we use a scoped map to cache the etag, so, the first-call will always be a false
    })
```


### autoCheck(url, Options)
```ts
    // interval-checking
    const checker = autoCheck('http://i.e./resource.js', {
        loopInterval: 1000 * 60 * 10 // set the autocheck interval,default to be 10min
        onModified: (url:string, headers: any){
            // will be called when the source is-modified
        }
    })
    // we can manually stop/re-run the checker for spec-scene.
    // checker.stop()
    // checker.run()
    
```