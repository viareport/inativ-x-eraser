var TestSuite = require('spatester');

var testSuite = new TestSuite("WEB COMPONENT test", {});

//Testem.useCustomAdapter(function(socket) {
//    testSuite.setSocket(socket);
//});

/** TODO : écrire les tests **/
testSuite.addTest("le test qui sert à rien", function (scenario, asserter) {
    asserter.assertTrue(function(){
        return true;
    });
});

document.addEventListener('DOMComponentsLoaded', function(){
    testSuite.run();
});
