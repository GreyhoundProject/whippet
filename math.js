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
    
}