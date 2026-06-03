// Server
ServerSocket ss=new ServerSocket(5000);
Socket s=ss.accept();

// Client
Socket s=new Socket("localhost",5000);