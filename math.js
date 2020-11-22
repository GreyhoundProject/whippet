class Angle
{
    constructor(angle, unit)
    {
        this.set(angle, unit)
    }

    set(angle=0, unit='d')
    {
        let rUnits = ['r', 'R', 'rad', 'RAD', 'radian', 'radians'];
        let dUnits = ['d', 'D', 'deg', 'DEG', 'degree', 'degrees'];

        if ( rUnits.includes(unit) )
        {
            this.setRad(angle);
        }
        else if ( dUnits.includes(unit) )
        {
            this.setDeg(angle);
        }
        else this.__value = 0;
    }
    
    deg() { return parseFloat( this.__value ); }
    setDeg( angle ) { this.__value = angle                 }
    rad() { return parseFloat( this.__value * (Math.PI/180)) }
    setRad( angle ) { this.__value = angle * (180/Math.PI) }
}

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


class Matrix2x2
{
    constructor(values)
    {
        this.__elements = {a:0, b:0, c:0, d:0};
        this.set(values);
    }

    set(values)
    {
        this.__elements.a = values.hasOwnProperty('a')? values.a:0;
        this.__elements.b = values.hasOwnProperty('b')? values.b:0;
        this.__elements.c = values.hasOwnProperty('c')? values.c:0;
        this.__elements.d = values.hasOwnProperty('d')? values.d:0;
    }

    get(i)
    {
        return parseFloat( this.__elements[i] );
    }

    multiply(k)
    {
        
        if ( !isNaN(k) )
        {
            return new Matrix2x2({
                a: k*this.get('a'),
                b: k*this.get('b'),
                c: k*this.get('c'),
                d: k*this.get('d')
            });
        }
        else if (k instanceof Vector2)
        {
            return new Vector2(
                (this.get('a')*k.x) + (this.get('b')*k.y),
                (this.get('c')*k.x) + (this.get('d')*k.y)
            )
        }
        else if (k instanceof Matrix2x2)
        {
            let a = (this.get('a')*k.get('a')) + (this.get('b')*k.get('c'));
            let b = (this.get('a')*k.get('b')) + (this.get('b')*k.get('d'));
            let c = (this.get('c')*k.get('a')) + (this.get('d')*k.get('c'));
            let d = (this.get('c')*k.get('b')) + (this.get('d')*k.get('d'));
            return new Matrix2x2({ a:a, b:b, c:c, d:d });
        }
    }

    det()
    {
        let ad = this.get('a') * this.get('d');
        let bc = this.get('b') * this.get('c');
        return ad-bc;
    }

    inv()
    {
        let iDet = 1/this.det();
        let a = this.get('a');
        let b = this.get('b');
        let c = this.get('c');
        let d = this.get('d');
        return new Matrix2x2({ a:d*iDet, b:-b*iDet, c: c*iDet, d:-a*iDet });
    }

}
