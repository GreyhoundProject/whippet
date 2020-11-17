function scriptsLoaded()
{
    let app = new App();
    let doc = new Document();


    app.addDocument(doc);
    

    let rect = new Rectangle();
    //doc.addElement(rect);

    let line = new Line();
    //doc.addElement(line);


    let p  = new Poly();
    let aFill = app.activeFill;
    let sColour = app.activeStroke.colour;

    p.fill.setRgba( aFill.r, aFill.g, aFill.b, aFill.a ); 
    p.stroke.colour.setRgba( sColour.r, sColour.g, sColour.b, sColour.a );
    p.stroke.width = app.activeStroke.width;

    let n1 = new PolyNode(100, 100);
    let n2 = new PolyNode(150, 100);
    let n3 = new PolyNode(150, 150);
    let n4 = new PolyNode(100, 150);

    n2.c1.y = 40
    n2.c1.x = 120

    n4.c1.x = 125
    n4.c1.y = 200
    
    
    p.addNode(n1);
    p.addNode(n2);
    p.addNode(n3);
    p.addNode(n4);

    doc.addElement(p);






    // console.log(app);


}