class Element
{
    
    static __elementTable = [];

    constructor()
    {
        this.parent = null;
        this.handle = null;
        Element.__elementTable.push( this );
    }

    __registerParent(pHandle)
    {
        this.parent = pHandle;
    }

    add() {}
    update() {}

}



class Circle extends Element
{
    constructor()
    {
        super();

        this.size = {x:130, y:60};
        this.postion = {x:0, y:0};
        this.fillColour = new Colour();
        this.stroke = {
             colour: new Colour(),
             width : 1
        };
    }

    add()
    {
        this.handle = SvgController.CreateNewElement('ellipse', true);
        this.update();
    }

    update()
    {
        SvgController.SetElementAttributes( this.handle, {
            'cx':           this.postion.x,
            'cy':           this.postion.y,
            'rx':           this.size.x,
            'ry':           this.size.y,
            'fill':         this.fillColour.rgba(),
            'stroke':       this.stroke.colour.rgba(),
            'stroke-width': this.stroke.width,
        });
    }
}



class Rectangle extends Element
{
    constructor()
    {
        super();
        
        this.size = {x: 100, y: 100};
        this.postion = {x:0, y:0};
        this.fillColour = new Colour();
        this.stroke = {
             colour: new Colour(),
             width : 1
        };
    }

    add()
    {
        this.handle = SvgController.CreateNewElement('rect', true);
        this.update();
    }

    update()
    {
        SvgController.SetElementAttributes( this.handle, {
            'x':            this.postion.x,
            'y':            this.postion.y,
            'width':        this.size.x,
            'height':       this.size.y,
            'fill':         this.fillColour.rgba(),
            'stroke':       this.stroke.colour.rgba(),
            'stroke-width': this.stroke.width
        });
    } 
}



class Line extends Element
{
    constructor()
    {
        super();
        
        this.start = {x: 0, y: 0};
        this.end   = {x: 0, y: 0};
        this.stroke = {
             colour: new Colour(),
             width : 1
        };
    }

    add()
    {
        this.handle = SvgController.CreateNewElement('line', true);
        this.update();
    }

    update()
    {
        SvgController.SetElementAttributes( this.handle, {
            'x1':           this.start.x,
            'y1':           this.start.y,
            'x2':           this.end.x,
            'y2':           this.end.y,
            'stroke':       this.stroke.colour.rgba(),
            'stroke-width': this.stroke.width
        });
    } 
}


class PolyNode
{
    constructor(x=0,y=0)
    {
        this.mode = 0;
        this.position   = {x:x, y:y};
        this.c1  = {x:0, y:0};
        this.c2 = {x:0, y:0};
    }
}

class Poly extends Element
{
    constructor()
    {
        super();
        
        this.nodes = [];
        this.closed = false;
        this.fill = new Colour();
        this.stroke = {
             colour: new Colour(),
             width : 1
        };
    }

    addNode(node)
    {
        this.nodes.push(node);
    }

    add()
    {
        this.handle = SvgController.CreateNewElement('path', true);
        this.update();
    }

    compilePath()
    {
        let path = `M${this.nodes[0].position.x},${this.nodes[0].position.y} `;

        // FOR EACH LINE SEGMENT
        for (let n=1; n<this.nodes.length; n++)
        {
            let nNode = this.nodes[n];
            let pNode = this.nodes[n-1];
            
            if (pNode.c2.x === 0 && pNode.c2.y === 0 && nNode.c1.x === 0 && nNode.c1.y === 0)
            {
                path += `L${pNode.position.x},${pNode.position.y} ${nNode.position.x},${nNode.position.y} `;
            }
            else
            {
                path += `C${pNode.position.x},${pNode.position.y}`;
    
                if (pNode.c2.x !== 0 || pNode.c2.y !== 0)
                    path += ` ${pNode.c2.x},${pNode.c2.y}`;
    
                if (nNode.c1.x !== 0 || nNode.c1.y !== 0)
                    path += ` ${nNode.c1.x},${nNode.c1.y}`;
                
                path += ` ${nNode.position.x},${nNode.position.y} `;
            }

        }
        console.log(path);
        path += this.closed? 'z':'';
        return path;
    }

    // M181,50 C140,1 100,1 60,52 L60,176 L181,176 L181,52Z

    update()
    {
        SvgController.SetElementAttributes( this.handle, {
            'd':            this.compilePath(),
            'fill':         this.fill.rgba(),
            'stroke':       this.stroke.colour.rgba(),
            'stroke-width': this.stroke.width
        });
    } 
}