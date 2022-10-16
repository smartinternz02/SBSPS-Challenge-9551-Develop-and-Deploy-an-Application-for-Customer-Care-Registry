public abstract class clscon
{
protected SqlConnection con = new SqlConnection();
public clscon()
{
con.ConnectionString =
ConfigurationManager.ConnectionStrings["cn"].ConnectionString;
}
}