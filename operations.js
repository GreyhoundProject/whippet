class Convert
{
    static ToPoly(element)
    {
        let p = new Poly();

        switch(element.constructor.name)
        {
            case 'Circle':
            {
                p.fill = new Colour(1,1,1,0);
                p.stroke.colour = new Colour(0,0,255,1);
                p.closed = false;

                let cx = element.position.x;
                let cy = element.position.y;
                let sx = element.size.x;
                let sy = element.size.y;

                p.addNode(new PolyNode( cx-(sx), cy      ));
                p.addNode(new PolyNode( cx,      cy-(sy) ));
                p.addNode(new PolyNode( cx+(sx), cy      ));
                p.addNode(new PolyNode( cx,      cy+(sy) ));

                let fX = 0.55228474 * sx;
                let fY = 0.55228474 * sy;

                p.nodes[0].c2.y = -fY;
                p.nodes[1].c1.x = -fX;
                p.nodes[1].c2.x = fX;
                p.nodes[2].c1.y = -fY;
                p.nodes[2].c2.y = fY;
                p.nodes[3].c1.x = fX;
                p.nodes[3].c2.x = -fX;
                p.nodes[0].c1.y = fY;
                
                


                console.log(p);
                
            }
            break;
        }

        return p;
    }
}