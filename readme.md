# Proyecto Sistemas Distribuidos

Proyecto de una aplicacion basado en una arquitectura de sistemas distribuidos

  <a href="url"><img src="./images/arquitectura.png" style="border-radius:20px"></a>

## Configuracion de Entorno de Desarrollo
---

### PreRequisitos:

- Docker Engine

### Configuracion de Proyecto
---

**Descarga de Imagenes de DockerHub**

```
docker pull node
docker pull mongo
```

**Creacion de Red de Comunicacion de Contenedores**

```
docker network create 'name network' 
```

**Ejecucion de Imagenes con asignacion de red y puertos**

*MongoDB*

```
docker run -itd --name 'name mongo' --network 'name created network' mongo
```

*Node Backend Node-Express* 

```
docker run -itd --name 'name backend' --network 'name created network' -p 'any port':3000 -v $(pwd)/server/:/home/node node
```

*Node Frontend Node-Angular*

```
docker run -itd --name 'name frontend'  --network 'name created network' -p 'any port':4200 $(pwd)/client/:/home/node node
```

**Configuracion Backend API**
---

Modo de interaccion shell del contenedor

```
docker exec -it 'name backend' bash
```

Ejecucion de aplicacion Node en el contenedor

```
cd /home/node
npm install -f
npm run dev
```

**Configuracion Frontend USER**
---

Modo de interaccion shell del contenedor

```
docker exec -it 'name frontend' bash
```

Ejecucion de aplicacion Node en el contenedor

```
cd /home/node
npm install -f
npm install -g @angular/cli@14.0.0
ng serve --host=0.0.0.0 
```