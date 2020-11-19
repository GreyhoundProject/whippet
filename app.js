class App
{
    constructor()
    {
        this.__documents = [];
        this.__activeDocument = null;
        this.__active = {
            fill: new Colour( 200, 40, 40, 1),
            stroke: { width: 1, colour: new Colour() }
        }
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
        this.__activeDocument.regen();
    }


    //
    // FILL GETTERS AND SETTERS
    //
    getActiveFillHex()    { return this.__active.fill.hex();  }
    getActiveFillRgb()    { return this.__active.fill.rgb();  }
    getActiveFillRgba()   { return this.__active.fill.rgba(); }
    getActiveFillColour() { return new Colour (
        this.__active.fill.r,
        this.__active.fill.g,
        this.__active.fill.b,
        this.__active.fill.a
    )}

    setActiveFillHex   (hex)     { this.__active.fill.setHex (hex);  }
    setActiveFillRgb   (r,g,b)   { this.__active.fill.setRgb (r,g,b);  }
    setActiveFillRgba  (r,g,b,a) { this.__active.fill.setRgba(r,g,b,a); }
    setActiveFillColour(c)       { this.__active.fill = new Colour(c.r,c.g,c.b,c.a)}


    //
    // STROKE COLOUR GETTERS AND SETTERS
    //
    getActiveStrokeHex()    { return this.__active.stroke.colour.hex();  }
    getActiveStrokeRgb()    { return this.__active.stroke.colour.rgb();  }
    getActiveStrokeRgba()   { return this.__active.stroke.colour.rgba(); }
    getActiveStrokeColour() { return new Colour (
        this.__active.stroke.colour.r,
        this.__active.stroke.colour.g,
        this.__active.stroke.colour.b,
        this.__active.stroke.colour.a
    )}

    setActiveStrokeHex   (hex)     { this.__active.stroke.colour.setHex (hex);  }
    setActiveStrokeRgb   (r,g,b)   { this.__active.stroke.colour.setRgb (r,g,b);  }
    setActiveStrokeRgba  (r,g,b,a) { this.__active.stroke.colour.setRgba(r,g,b,a); }
    setActiveStrokeColour(c)       { this.__active.stroke.colour = new Colour(c.r,c.g,c.b,c.a)}


    //
    // STROKE WIDTH GETTER AND SETTER
    //
    getActiveStrokeWidth()  { return parseFloat(this.__active.stroke.width); }
    setActiveStrokeWidth(f) { this.__active.stroke.width = parseFloat(f);    }

}
