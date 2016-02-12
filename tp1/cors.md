pierre-alexandre.st-jean.1@ulaval.ca

1. Je dois pouvoir exécuter les commandes (cli) dans le readme pour compiler/exécuter le programme, gérer les dépendances
2. Vous avez droit aux librairies externes pour communiquer avec github
3. glo2003.xyz/?server=http://localhost:123121
4. CORS----

en go : 
```go
func Cors() gin.HandlerFunc {
 return func(c *gin.Context) {
 c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
 c.Next()
 }
}
...

r.Use(Cors())

    r.OPTIONS("/*", func(c *gin.Context) {
        c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
        c.Writer.Header().Set("Access-Control-Allow-Methods", "DELETE,POST,PUT,GET")
        c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        c.Next()
    })
```
java:
```java
        options("*", (request, response) -> "");

        before((req, resp) -> {
            resp.header("Access-Control-Allow-Origin", "*");
            resp.header("Access-Control-Request-Method", req.requestMethod());
            resp.header("Access-Control-Allow-Headers",
                        List.ofAll(req.headers()).reduceLeft((s,l) -> (s.isEmpty() ? "": s + ", ")+ l));
        });
```
