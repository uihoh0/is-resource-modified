
const isResourceModified = require('../dist/lib/is-resource-modified')


isResourceModified.default('https://test.your.resource')
isResourceModified.default('https://test.your.resource')



const ck = isResourceModified.autoCheck('https://test.your.resource', {
    loopInterval: 3000
})


ck.stop()

// setTimeout(()=>{
//     ck.stop()
// }, 15000)
console.log('stop')

setTimeout(() => {
    ck.run()
}, 7000)