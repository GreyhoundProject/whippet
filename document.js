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

    regen()
    {
        for(let e in Element.__elementTable)
        {
            let element = Element.__elementTable[e];
            if (element.parent == this.handle) { element.update(); }
        }
    }
}