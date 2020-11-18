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

    add(parent)
    {
        this.parent = parent;
        this.handle = SvgController.CreateNewElement('rect', true);
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

    add(parent)
    {
        this.parent = parent;
        this.handle = SvgController.CreateNewElement('line', true);
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

    add(parent)
    {
        this.parent = parent;
        this.handle = SvgController.CreateNewElement('path', true);
    }

    compilePath()
    {
        let path = `M${this.nodes[0].position.x},${this.nodes[0].position.y} `;

        // FOR EACH LINE SEGMENT
        for (let n=1; n<=this.nodes.length; n++)
        {
            let nNode = (n==this.nodes.length)? this.nodes[0]:this.nodes[n];
            let pNode = this.nodes[n-1];
            
            if (pNode.c2.x === 0 && pNode.c2.y === 0 && nNode.c1.x === 0 && nNode.c1.y === 0)
            {
                path += `L${pNode.position.x},${pNode.position.y} ${nNode.position.x},${nNode.position.y} `;
            }
            else
            {
                path += `C${pNode.position.x},${pNode.position.y}`;
    
                if (pNode.c2.x !== 0 || pNode.c2.y !== 0)
                    path += ` ${pNode.position.x + pNode.c2.x},${pNode.position.y + pNode.c2.y}`;
    
                if (nNode.c1.x !== 0 || nNode.c1.y !== 0)
                    path += ` ${nNode.position.x + nNode.c1.x},${nNode.position.y + nNode.c1.y}`;

                path += ` ${nNode.position.x},${nNode.position.y} `;
            }

        }

        path += this.closed? 'z':'';
        return path;
    }


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



class Group extends Element
{
    constructor()
    {
        super();
    }

    add(parent)
    {
        this.parent = parent;
        this.handle = SvgController.CreateNewElement('g', true);
    }

    addElement(child)
    {
        child.parent = this.handle;
        SvgController.appendChild(this.handle, child.handle);
    }

    update()
    {
        for(let e in Element.__elementTable)
        {
            let element = Element.__elementTable[e];
            if (element.parent == this.handle) { element.update(); }
        }
    } 
}