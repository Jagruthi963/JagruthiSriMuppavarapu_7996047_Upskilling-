HttpClient client=HttpClient.newHttpClient();
HttpRequest req=HttpRequest.newBuilder()
    .uri(URI.create("https://api.github.com"))
    .build();
System.out.println(
client.send(req,HttpResponse.BodyHandlers.ofString()).body()
);