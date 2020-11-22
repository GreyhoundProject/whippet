function EntryPoint()
{
    Debug.active = true;
    let app = new App();
    let doc = new Document();

    app.addDocument(doc);
    app.setActiveFillRgba(255, 30, 30, 1);
    app.setActiveStrokeRgba(0,255,0,1);

    let c = new Circle();
    c.position.x = 150;
    c.position.y = 150;
    c.size.x = 50;
    c.size.y = 50;
    c.fillColour.setRgba( app.getActiveFillRgba() );

    doc.addElement(c);

    let p = Convert.ToPoly(c);
    doc.addElement(p);


    
    let t = new Poly();
    t.addNode( new PolyNode(100, 100) );
    t.addNode( new PolyNode(200, 100) );
    t.addNode( new PolyNode(200, 200) );
    t.addNode( new PolyNode(100, 200) );
    t.fill = new Colour(0,0,0,0)
    doc.addElement(t);

    doc.regen();
    


    let wnd = new Dialog();
    console.log(wnd);




}