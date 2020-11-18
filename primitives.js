class Guid
{
    static new()
    {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    }
}


class DocElement
{
    __htmlElement = null;
    
    constructor(id)
    {
        this.__htmlElement = document.getElementById(id);
    }

    style(props)
    {
        if (this.__htmlElement === null)
            return false;

        for(let p in props)
            this.__htmlElement.style.p = props[p];
    }

    attributes(attributes)
    {
        if (this.__htmlElement === null)
            return false;
            
        for(let a in attributes)
            this.__htmlElement.setAttribute(a, attributes[a]);
    }

    append(child)
    {
        console.log(this, child)
        this.__htmlElement.appendChild(child.__htmlElement);
    }
    
}


class Colour
{
    constructor( r=0, g=0, b=0, a=1 )
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    setRgba(r,g,b,a)
    {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    setRgb(r,g,b)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    setHex(hex) {
        var split = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        this.r = parseInt(split[1], 16);
        this.g = parseInt(split[2], 16);
        this.b = parseInt(split[3], 16);
        this.a = 1;    
    }

    hex()
    {
        let hex = ((1<<24) + (this.r<<16) + (this.g<<8) + this.b);
        return "#" + hex.toString(16).slice(1);
    }

    rgb()
    {
        return (`rgba(${this.r},${this.g},${this.b})`);
    }

    rgba()
    {
        return (`rgba(${this.r},${this.g},${this.b},${this.a})`);
    }
}