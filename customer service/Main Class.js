public class clscontyp : clscon
{
public void save_rec(clscontypprp p)
{
if (con.State == ConnectionState.Closed)
{
con.Open();
}
SqlCommand cmd = new SqlCommand("inscontyp", con);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.Add("@contypnam", SqlDbType.VarChar, 50).Value =
p.contypnam;
cmd.ExecuteNonQuery();
cmd.Dispose();
con.Close();
}
public void update_rec(clscontypprp p)
{
if (con.State == ConnectionState.Closed)
{
con.Open();
}
SqlCommand cmd = new SqlCommand("updcontyp", con);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.Add("@contypcod", SqlDbType.Int).Value =
p.contypcod;
cmd.Parameters.Add("@contypnam", SqlDbType.VarChar, 50).Value =
p.contypnam;
cmd.ExecuteNonQuery();
cmd.Dispose();
con.Close();
}
public void delete_rec(clscontypprp p)
{
if (con.State == ConnectionState.Closed)
{
con.Open();
}
SqlCommand cmd = new SqlCommand("delcontyp", con);
cmd.CommandType = CommandType.StoredProcedure;
cmd.Parameters.Add("@contypcod", SqlDbType.Int).Value =
p.contypcod;
cmd.ExecuteNonQuery();
cmd.Dispose();