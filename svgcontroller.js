class SvgController
{
    static SVGREFERENCE = 'http://www.w3.org/2000/svg';
    static __superCounter = 1;
    
    static __requestNewHandle()
    {
        let newHandle = SvgController.__superCounter.toString(16);
        SvgController.__superCounter++;
        
        for( let c=newHandle.length; c < 5; c++)
            newHandle = `0${newHandle}`;

        return "SVG-" + newHandle.toUpperCase();
    }

    static CreateNewElement(type, bind)
    {
        let newSvgElement = document.createElementNS(SvgController.SVGREFERENCE, type);
        let newElementHandle = SvgController.__requestNewHandle();
        newSvgElement.setAttribute('id', newElementHandle );
        
        if (bind) {
            let doc = document.getElementById('svg-main');
            doc.appendChild(newSvgElement)
        }

        return newElementHandle;
    }

    static appendChild(parent, child)
    {
        let pElement = new DocElement(parent);
        let cElement = new DocElement(child);
        pElement.append(cElement);
    }

    static SetElementAttributes(svgElementHandle, attributes)
    {
        let svgElement = new DocElement(svgElementHandle);
        svgElement.attributes(attributes);
    }
}