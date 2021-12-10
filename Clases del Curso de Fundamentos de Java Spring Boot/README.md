## Introducción a Spring Boot

Spring es el framework más usado de Java. Nos ofrece herramientas que nos permite crear proyectos más avanzados, con mejores prácticas y en menor tiempo.También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda.

Spring tiene una estructura modular y flexible, lo que nos hace usar solo lo que necesitemos.

Vamos a usar 4 subproyectos de Sping:

- Spring Framework: Permite crear aplicaciones empresariales. Es transversal, ya que todos lo usan.
- Spring Boot: Con el que podemos crear aplicaciones autocontenidas y autoconfigurables.
- Spring Data: Gestionar e integrar bases de datos.
- Spring Security: Gestionar la seguridad de la aplicación.

## Dependencias en Spring Boot

++¿Qué es una dependencia?++

Objetos definidos como una funcionalidad, sin la cual, los otros objetos no podrían trabajar, ya que dependen de ella. Por ejemplo, un volante es una dependencia de un vehículo, ya que sin volante, no podemos conducir el vehículo.
Las dependencias nos permiten modularizar nuestra aplicación, lo cual nos beneficia en las pruebas unitarias.

Alta cohesión: Involucra que la entidad ejecute sus acciones sin involucrar otra clase o entidad.

Bajo acoplamiento Hablamos de acoplamiento bajo cuando existe una independencia entre los componentes entre si, por el contrario un alto acoplamiento es cuando tenemos varias dependencias relacionadas a un solo componente.

Entonces podemos afirmar que en la definición de un buen diseño de software se debe tener una ALTA COHESIÓN y un BAJO ACOPLAMIENTO.

## Inversión de control (IoC)

Es un principio que transfiere el control de objetos de un programa a un contenedor o framework, o sea, es el framework quien maneja el flujo del programa.

++Ventajas++

- Fácil testing por componentes o mocks de dependencias.
- Mayor modularización.
- Desacoplamiento cuando lo objetos cuentan con sus dependencias.
- Segmentación de interfaces.

++IoC en el contexto de spring boot++

Los objetos que son administrados por el contenedor, spring boot los denomina beans. Un bean seria los objetos administrados por el usuario en un website.

Un bean es un objeto el cual es instanciado, ensamblado y administrado por el contenedor de spring IoC.

++Patrón de inyección de dependencias++

Es el patrón que utiliza IoC para utilizar las dependencias anteriormente instanciadas por el contenedor de spring.

Una Anotación es una forma de añadir metadatos al código fuente Java que están disponibles para la aplicación en tiempo de ejecución o de compilación. Es una alternativa mas sencilla al uso de XML.

++Tipos de anotaciones++

- @Controller: Para indicar que esta será la clase que gestionara las peticiones del usuario por get, post, put, patch o delete.
- @Service: Con esta notación especificamos que en esta clase se encontrara toda nuestra lógica de negocio, cálculos o llamadas a otras API externas.
- @Repository: Se usa para las clases o interfaces que funcionaran con el acceso a la base de datos.

Si nuestra clase o interfaz no tiene una especificación clara como @Service, @Repository o @Controller, simplemente recurrimos a @Component y le indicamos que sencillamente es un componente.

Por otro lado, no es estrictamente necesario que cumplas con colocar una notación especifica, pero es una buena practica.

## JPA con Spring y Spring Data

++¿Qué es JPA?++ Java Persistence API

JPA es una especificación de Java para acceder, conservar y administrar datos entre objetos y clases, es un estándar de implementación para cualquier framework ORM. Quiere decir que son una serie de reglas que Java define para que cualquier framework que quiera interactuar con la BD de Java, tenga que seguir.

Los frameworks mas populares de Java para este fin son:

- Hibernate
- TopLink
- EclipseLink
- ObjectDB

++Anotaciones JPA++

JPA utiliza anotaciones para conectar clases a tablas de la BD y así evitar hacerlo de manera nativa con SQL.

- @Entity. Indica a una clase de java que esta representando una tabla de nuestra BD.
- @Table. Recibe el nombre de la tabla a la cual esta mapeando la clase.
- @column. Se le pone a los atributos de la clase, no es obligatoria, se indica sólo cuando el nombre de la columna es diferente al nombre del atributo de la tabla.
- @id y @EmbededID. Es el atributo como clave primaria de la tabla dentro de la clase. @id se utiliza cuando es clave primaria sencilla y @EmbededID cuando es una clave primaria compuesta.
- @GeneratedValue. Permite generar automáticamente generar valores para las clases primarias en nuestras clases
- @OneToMany and @ManyToOne. Representar relaciones

Ejemplo de Modelado de entidades con JPA

```
@Entity
@Table(name = "user")
public class User {
    @id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user", nullable = false, unique = true)
    private Long id;

    @Column(length = 50)
    private String name;

    @Column(length = 50)
    private String email

    /*
    * OneToMany indica la relación que existe entre esta entidad (User) y Post, la cual corresponde a una relación de uno a muchos.
    * FetchType.EAGER indica que devolverá el objeto  post completo y no sólo su referencia (fk)
    */
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Post> post = new ArrayList<>();

    se debe crear un constructor vacío y otro con todos los métodos, getters y setters, y toString)...
}
```

```
@Entity
@Table(name = "post")
public class Post{
    @id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_post", nullable = false, unique = true)
    private Long id;

    @Column(length = 255)
    private String description;

    @ManyToOne
    private User user;

    constructores, getters y setters y toString()...
}
```

## Registro en bbdd con JpaRepository

JpaRepository es una implementación a nivel de interfaz de JPA, el cual cuenta con métodos para insertar información, obtener información, entre otras cosas.

JpaRepository hereda de PagingAndSortingRepository, y este a su vez hereda de CrudRepository, cada uno tiene su propia función:

- CrudRepository proporciona funciones CRUD
- PagingAndSortingRepository proporciona funciones de paginación y clasificación
- JpaRepository proporciona métodos relacionados con JPA, como la actualización de datos persistentes y la eliminación por lotes.

Debido a la relación de herencia entre los tres,JpaRepository contiene todas las API de CrudRepository y PagingAndSortingRepository

Ejemplo:

```
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}
```

```
@Repository
public interface PostRepository extends JpaRepository<Post, Long>{
}
```

```
// método para persistir información
private void saveUsersInDB() {
    User user1 = new User("John Doe", "john@doe.com");
    User user2 = new User("John Doe2", "john2@doe.com");
    List <User> list = Arrays.asList(user1, user2);
    // Fuera de este método, pero dentro de la clase, inyectamos UserRepository como dependencia
    list.forEach(userRepository::save);
}
```

## Uso de JPQL en anotación Query

JPQL es el lenguaje de consulta definido por JPA. Es similar a SQL, pero con la particularidad de operar sobre objetos (no con tablas y columnas).

JPQL nos permite hacer selects, updates y delete. No podemos realizar inserts.

```
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    @Query("Select u from User u where u.email=?1") // Consulta JPQL
    Optional<User> f indByUserEmail(String email);
}
```

```
private void getInformationJpql() {
    // previamente inyectamos UserRepository como dependencia
    userRepository.indByUserEmail("john@doe.com")
}
```

## Obtención de información usando Query methods

Los query methods son una definición de una consulta manual que realizamos directamente en el nombre del método. En otras palabras, JPA admite varias palabras claves con las que se puede describir un método, y que posteriormente se traducen en una consulta propiamente tal.

Palabras clave admitidas dentro de los nombres de los métodos: Distinct, And, Like, Between, Containing, entre muchas otras. Documentación oficial [aquí](https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation)

Ejemplo:

```
@Repository
public interface PostRepository extends JpaRepository<Post, Long>{

    // Se traduce en la siguiente consulta: select u from User u where u.emailAddress = ?1 and u.lastname = ?2
    List<User> findByEmailAddressAndLastname(String emailAddress, String lastname);
    List<User> findByBithDateBetween(LocalDate begin, LocalDate end);
    List<User> findByNameContainingOrderByIdDesc(String name);
}
```
