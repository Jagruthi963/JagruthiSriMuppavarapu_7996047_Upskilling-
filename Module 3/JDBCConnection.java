Connection con=DriverManager.getConnection(
"jdbc:mysql://localhost:3306/test","root","pwd");
Statement st=con.createStatement();
ResultSet rs=st.executeQuery("select * from students");
while(rs.next())
    System.out.println(rs.getString("name"));