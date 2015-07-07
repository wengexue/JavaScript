/**
 * @author Charlie Calvert
 */

var tests = [];
for (var file in window.__karma__.files) {
    
    if (/Spec\.js$/.test(file)) {
        console.log("Testing: " + file);
        tests.push(file);
    }
}
requirejs.config({
    baseUrl : '/base',
    paths : {
        'SailBoatFactory' : 'Factory/SailBoatFactory',
        'Sloop' : 'Factory/Sloop',
        'Yawl' : 'Factory/Yawl',
        'Ketch' : 'Factory/Ketch'
     },
    shim : {
    },
    deps : tests,
    callback : window.__karma__.start
});
