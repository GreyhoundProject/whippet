class Vector2
{
    constructor(x=0, y=0)
    {
        this.x = x;
        this.y = y;
    }


    multiply(k)
    {
        if (!k.isNan)
        {
            return new  Vector2(this.x*k, this.y*k);
        }
        else if (k instanceof Vector2)
        {
            return (this.x*k.x + this.y*k.y);
        }
    }


    add( )
    {
        if (!k.isNan)
        {
            return new  Vector2(this.x+k, this.y+k);
        }
        else if (k instanceof Vector2)
        {
            return (this.x+k.x + this.y+k.y);
        }
    }


    subtract( )
    {
        if (!k.isNan)
        {
            return new  Vector2(this.x-k, this.y-k);
        }
        else if (k instanceof Vector2)
        {
            return (this.x-k.x + this.y-k.y);
        }
    }
}


class Matrix
{
    constructor(values)
    {
        this.elements = [];
        this.set(values);
    }
    
    set(values)
    {
        if (!Array.isArray(values))
        {
            this.elements = [ [0,0],[0,0] ];
            Debug.out('False Matrix Constructor');
            return false;
        }

        // CHECK FORMAT OF VALUES
        if ( Array.isArray(values[0]) )
        {
            let rowLength = values[0].length
            for(let i in values)
            {
                if (rowLength !== values[i].length)
                {
                    this.elements = [ [0,0],[0,0] ];
                    Debug.out('Inconsistent column length');
                    return false;
                }
            }

            this.elements = values;
        }

    }
}