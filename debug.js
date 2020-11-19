class Debug
{
    constructor()
    {
        this.active = false;
    }

    static out(message)
    {
        if (this.active)
        {
            console.log(message);
        }
    }
}