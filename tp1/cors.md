pierre-alexandre.st-jean.1@ulaval.ca

1. Je dois pouvoir exécuter les commandes (cli) dans le readme pour compiler/exécuter le programme, gérer les dépendances
2. Vous avez droit aux librairies externes pour communiquer avec github
3. glo2003.xyz/?server=http://localhost:123121
4. CORS----

en go : 
```go

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		serveCors(c)
		c.Next()
	}
}

func serveCors(c *gin.Context) {
	c.Writer.Header().Add("Access-Control-Allow-Origin", c.Request.Header.Get("Origin"))
	c.Writer.Header().Add("Access-Control-Allow-Method", c.Request.Header.Get("Access-Control-Request-Method"))
	c.Writer.Header().Add("Access-Control-Allow-Headers", c.Request.Header.Get("Access-Control-Request-Headers"))
}


r.Use(Cors())
r.OPTIONS("/*",serveCors)
```
java:
```java
options("*", (request, response) -> "");

before((req, resp) -> {
    resp.header("Access-Control-Allow-Origin", req.headers("Origin"));
    resp.header("Access-Control-Allow-Method", req.headers("Access-Control-Request-Method"));
    resp.header("Access-Control-Allow-Headers", req.headers("Access-Control-Request-Headers"));
});
```
