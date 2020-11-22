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
    

    let l2 = new Line(0,0,0,0);
    doc.addElement(l2);
    
    doc.regen();
    
    



}