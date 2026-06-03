PreparedStatement ps=
con.prepareStatement("insert into students values(?,?)");
ps.setInt(1,1);
ps.setString(2,"John");
ps.executeUpdate();