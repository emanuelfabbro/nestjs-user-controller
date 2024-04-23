### Controllers y Services



| Spring |  Quarkus |
| ------------ | ------------ |
| @RestController | @ApplicationScoped 
@RequestMapping(value = "/v1") | @Path("/v1") 
@Api( value = "API-Notificaciones", | @Tag( name = "Agrupador de notificaciones.",
tags = "Agrupador de notificaciones") |  description = "Notificaciones controller") 
|      |  @Produces(MediaType.APPLICATION_JSON)     |
|      |  @Consumes(MediaType.APPLICATION_JSON)      |
public class NotificacionesController {  | public class NotificacionesResource {        |

