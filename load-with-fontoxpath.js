new Function(await(await fetch('./node_modules/prsc/dist/prsc.umd.cjs')).text())(window);
new Function(await(await fetch('./node_modules/xspattern/dist/xspattern.umd.cjs')).text())(window);

new Function(await(await fetch('./node_modules/fontoxpath/dist/fontoxpath.js')).text())(window);


const {
	registerXQueryModule,
	finalizeModuleRegistration,
	evaluateXPathToString,
	Language
} = window.fontoxpath;

console.log('linsy');
registerXQueryModule(await(await fetch('./src/content/linsy.xqm')).text(), {debug:true});
console.log('prob');
registerXQueryModule(await(await fetch('./src/content/prob.xqm')).text(), {debug:true});
console.log('read');
registerXQueryModule(await(await fetch('./src/content/read.xqm')).text(), {debug:true});
console.log('render');
registerXQueryModule(await(await fetch('./src/content/render.xqm')).text(), {debug:true});

finalizeModuleRegistration();

document.getElementById('btn').addEventListener('click', () => document.getElementById('log').innerText = evaluateXPathToString('import module namespace linsy = "//line-o.de/ns/linsy"; linsy:deterministic(10, "A", map { "A": "AB", "B": "A" })', null, null, null, {language: Language.XQUERY_3_1_LANGUAGE}));
