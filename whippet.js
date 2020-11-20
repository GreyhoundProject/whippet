function EntryPoint()
{
    Debug.active = true;
    let app = new App();
    let doc = new Document();

    app.addDocument(doc);
    app.setActiveFillRgba(255, 30, 30, 1);
    app.setActiveStrokeRgba(0,255,0,1);


    let line = new Line();
    doc.addElement(line);
    line.start.x = 100;
    line.start.y = 100;
    line.end.x = 150;
    line.end.y = 150;
    

    let p  = new Poly();
    p.fill.setRgba( app.getActiveFillRgba() );
    p.stroke.colour = app.getActiveStrokeColour();
    Debug.out(p);
    
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


    let m = new Matrix([ [1,2],[3,4] ]);
    Debug.out(m);



}