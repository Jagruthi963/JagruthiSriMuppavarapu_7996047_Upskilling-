Class<?> c=Class.forName("java.lang.String");
for(var m:c.getDeclaredMethods())
    System.out.println(m.getName());