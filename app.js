class App
{
    constructor()
    {
        this.__documents = [];
        this.__activeDocument = null;
        this.activeFill = new Colour( 200, 40, 40, 1);
        this.activeStroke = { width: 1, colour: new Colour() }
    }

    addDocument(document)
    {
        this.__documents.push(document);
        this.setActiveDocument(document);
        
    }

    getActiveDocument()
    {
        return this.__activeDocument;
    }

    setActiveDocument(document)
    {
        this.__activeDocument = document;
        this.__activeDocument.redraw();
    }

}
