## Uso de Angular Framework

## Estructura

 - src: compontes bases de la aplicacion, html, css, typescript
    - style.css: Estilos globales de la aplicacion 
    - assets: contenido estatico de acceso para al aplicacion

## Comandos
- Generar Poryecto: ng new "name"
- Generar Componente: ng g c "dir/name"
- Iniciar Servidor: ng serve

## Valor

- valueBool: boolean = true;

## Componentes 

- Component: Componente angular
  - selector: Como se llama el componente
  - templeateUrl: Plantilla Html
  - styleUrl:Plantillas Css
  - encapsulation: Encapsulacion de CSS en el componente

- OnInit: Ejecuta algo al iniciar `ngOnInit(): void {}`

- Decorador: Agrega opciones a la clase `@Componente`

Mostrar vairables en HTML usamos `{{ var }}`


Iterar array en HTML usamos `*ngFor`

~~~
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html', 
  styleUrls: ['./navbar.component.css'], 
  encapsulation: ViewEncapsulation.Emulated 
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }
}
~~~

## Condiciones y Plantillas


- *ngIf="!valueBool" -> Muestra el componente, se puede establecer cualquier condicion `*ngIf="nivel >= 10"`


- ng-container -> Contenedor que agrupa lo que hay dentro sin crear un tag, en donde podemos usar varias condiciones en un solo contenedor


- ng-template #"name" -> Plantilla de elementos que puede ser llamado en una clausa *ngIf

~~~
<ng-container *ngIf="!isLogged; else logueado">
  <button (click)="isLogged = true">Iniciar</button>
</ng-container>
<ng-template #logueado>
  <button (click)="isLogged = false">Cerrar</button>
</ng-template>
<button *ngIf=" nivel >= 10">Vip</button>
~~~

## Interfaces, Enumeracion y Casting (PreServicios)

### Interfaces


Interfaces son definiciones de objetos, osea dado objeto con datos definimos la estructura que nos da

~~~
//Creacion 
  export interface Usuario {
    ID: number,
    Nombre: string,
    Apellidos" string 
    ...
  }

//Importacion
import { Usuario } from './...'

  user:Usuario = {
    Id: 23,
    Nombre: Stalin,
    ...
  }
~~~

### Enumeraciones


Lista de posibilidades

~~~
  //Creacion
    enum UserType{
      Administrador,
      Cliente,
      Invitado
    }

  //Importacion
  import { Usuario, UserType } from './...'

    user:Usuario = {
    Id: 23,
    Nombre: Stalin,
    ...
    Tipo: UserType.Cliente
  }
~~~

### Casting

Permite transformar un formato object a otro tipo de dato "interfaz", permite saber la estructura del objeto

~~~
  user: Usuario = <Usuario>//<--Casting{
    Id: 23,
    Nombre: Stalin,
    ...
    Tipo: UserType.Cliente
  }
~~~

## Atributos, Eventos y ngModel

### Atributos 

Son atributos de html que los modificamos dinamicamente

`[disabled]="status"`, `[type]={tipo}`

~~~
  export ... {
    status = false;
  }
~~~

### Eventos 

Eventos que usamos por medio de angular en los elementos de html, no agregamos el "on"

`(click)="funcion"`, `(dblclick)="..."`


### ngModel

Atributo especial para formulario, que sirve como atributo/evento

`imports: FormsModule` --> `import { FormsModule } from '@angular/forms`


`<input type="text" [ngModel]="titulo">` --> Atributo


`<input type="text" (ngModel)="titulo">` --> Evento


`<input type="text" [(ngModel)]="titulo">` --> Atributo/Evento


~~~
  titulo: string = " ";
~~~


### ngModelChage


Detecta los cambios en un elemento de formulario `[(ngModelChange)]`


`(ngModelChange)="log($event)"` --> $event: enviamos el valor del evento

~~~
  <h1>{{ seleccion }}</h1>

  <select [(ngModel)]="seleccion">
    //Opcion 2: [value]="seleccion" (change)="seleccion = $event.target.value"
    <option value="...">/<option>
    ...
  </select>>
~~~
