con.setAutoCommit(false);
try{
    // debit
    // credit
    con.commit();
}catch(Exception e){
    con.rollback();
}
