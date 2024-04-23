### Controllers y Services

| Spring | Quarkus |
| ------------ | ------------ |
| Controller |
| ``` spring
@RestController 
@RequestMapping(value = "/v1") 
@Api( value = "API-Notificaciones", tags = "Agrupador de notificaciones") public class NotificacionesController { | @ApplicationScoped @Path("/v1") @Tag( name = "Agrupador de notificaciones.",  description = "Notificaciones controller") @Produces(MediaType.APPLICATION_JSON) @Consumes(MediaType.APPLICATION_JSON) public class NotificacionesResource {|
|       |       |
