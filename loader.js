let includes = [
    'debug',
    'app',
    'document',
    'elements',
    'math',
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
            if (scriptLoadCounter == includes.length ) { EntryPoint(); }
        });
        
        tempScript.src = `${includes[scr]}.js`;
    }
})