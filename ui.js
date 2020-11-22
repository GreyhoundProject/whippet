class Dialog
{
    constructor( width=400, height=300 )
    {
        this.size = {x:200, y:200};
        this.position = {x:0, y:0};
        this.height = height;
        this.handle = Guid.new();
        this.container = HtmlController.Create('div', document, 'window', this.handle);

        let wndTitle = HtmlController.Create('div', this.container, 'window-title', null);
        HtmlController.BindTo(this.container, wndTitle);

        HtmlController.Css(this.handle, {
            width:      this.width +'px',
            height:     this.height +'px',
            position:   'absolute',
            backgroundColor:    'red'
        });

        this.setSize(500,100);
        this.setPosition(10,60);
    }

    setSize(x,y)
    {
        this.size = {x:x, y:y};
        HtmlController.Css(this.handle, {
            width:  this.size.x + 'px',
            height: this.size.y + 'px'
        });
    }

    setPosition(x,y)
    {
        this.position = {x:x, y:y};
        HtmlController.Css(this.handle, {
            left: this.position.x +'px',
            top:  this.position.y +'px'
        });
    }
}