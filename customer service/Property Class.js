public class clscontypprp : intcontyp
{
private Int32 prvcontypcod;
private String prvcontypnam;
#region intcontyp Members
public int contypcod
{
get
{
return prvcontypcod;
}
set
{
prvcontypcod = value;
}
}
public string contypnam
{
get
{
return prvcontypnam;
}
set
{
prvcontypnam = value;
}
}
#endregion
}