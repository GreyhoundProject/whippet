class Document
{
    constructor()
    {
        this.handle = Guid.new();
    }

    addElement(element)
    {
        element.add(this.handle);
    }

    redraw()
    {
        for(e in this.elementTable)
        {
            this.elementTable[e].update();
        }
    }
}