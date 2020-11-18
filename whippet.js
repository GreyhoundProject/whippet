function scriptsLoaded()
{
    let app = new App();
    let doc = new Document();


    app.addDocument(doc);
    

    let rect = new Rectangle();
    //doc.addElement(rect);

    let line = new Line();
    doc.addElement(line);
    line.start.x = 100;
    line.start.y = 100;
    line.end.x = 150;
    line.end.y = 150;
    
    
    let p  = new Poly();
    let aFill = app.activeFill;
    let sColour = app.activeStroke.colour;
    
    aFill.a = 0;
    
    p.fill.setRgba( aFill.r, aFill.g, aFill.b, aFill.a ); 
    p.stroke.colour.setRgba( sColour.r, sColour.g, sColour.b, sColour.a );
    p.stroke.width = app.activeStroke.width;
    
    let n1 = new PolyNode(100, 100);
    let n2 = new PolyNode(150, 100);
    let n3 = new PolyNode(150, 150);
    let n4 = new PolyNode(100, 150);
    p.closed = true;
    
    p.addNode(n1);
    p.addNode(n2);
    p.addNode(n3);
    p.addNode(n4);
    
    doc.addElement(p);
    
    
    let g = new Group();
    doc.addElement(g);
    g.addElement(p);
    g.addElement(line);
    

    doc.regen();






    // console.log(app);


}