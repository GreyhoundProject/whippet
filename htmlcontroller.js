class HtmlController
{
    static Create(type, bind, cssClass, id)
    {
        let temp = document.createElement(type);
        if (bind){ HtmlController.Bind(temp) };
        if (cssClass){ temp.classList = cssClass; }
        if (id){ temp.setAttribute('id', id); }
        return temp
    }
    
    static Bind(element)
    {
        let appDiv = document.getElementById('app');
        appDiv.appendChild(element);
    }

    static BindTo(parent, element)
    {
        parent.appendChild(element);
    }

    static Css(id, props)
    {
        let element = document.getElementById(id);

        for(let p in props)
            element.style[p] = props[p];
    }

    static Attributes(id, attributes)
    {
        let element = document.getElementById(id);
            
        for(let a in attributes)
            element.setAttribute(a, attributes[a]);
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
            this.__htmlElement.style[p] = props[p];
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
        this.__htmlElement.appendChild(child.__htmlElement);
    }
    
}