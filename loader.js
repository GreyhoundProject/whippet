let includes = [
    'app',
    'document',
    'elements',
    'primitives',
    'svgcontroller',
    'whippet'
]

let  scriptLoadCounter = 0;

window.addEventListener('load', () => {

    for (let scr in includes)
    {
        let tempScript = document.createElement('script');
        document.head.appendChild(tempScript);
        tempScript.addEventListener('load', () => {
            scriptLoadCounter++;
            if (scriptLoadCounter == includes.length ) { scriptsLoaded(); }
        });
        console.log( `Imported script file: ${includes[scr]}.js` );
        tempScript.src = `${includes[scr]}.js`;
    }
})