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
docker pull nginx
```

**Creacion de Red de Comunicacion de Contenedores**

```
docker network create --driver=bridge --subnet=192.168.100.0/24 --gateway=192.168.100.254 redg1
```

**Ejecucion de Imagenes con asignacion de red y puertos**

*MongoDB*

```
docker run -itd --name MongoDB --network redg1 --ip 192.168.100.10 mongo
```

*Node Backend Node-Express* 

```
docker run -itd --name NodeBack --network redg1 --ip 192.168.100.20 -p 3000:3000 -v $(pwd)/server:/home/node node
```

*Node Frontend Node-Angular*

```
docker run -itd --name NodeFront --network redg1 --ip 192.168.100.30 -p 4200:4200 $(pwd)/client/:/home/node node
```

*Load Balancer Nginx*

```
docker run -itd --name NginxLB --network redg1 --ip 192.168.100.40 -p 80:80 nginx
```

**Configuracion Backend API**
---

Modo de interaccion shell del contenedor

```
docker exec -it NodeBack bash
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
docker exec -it NodeFront bash
```

Ejecucion de aplicacion Node en el contenedor

```
cd /home/node
npm install -f
npm install -g @angular/cli@14.0.0
ng serve --host 192.168.100.30 --port 4200 --disable-host-check
```

**Configuracion Load Balancer Nginx**
---

```
cd /etc/nginx
nano nginx.conf
```
```
user nginx;
worker_processes auto;

error_log /var/log/nginx/error_log notice;
pid /var/run/nginx.pid;

events {
    worker_processes 1024;
}

http {
    include /etc/nginx/mime.type;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$requuest" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwared_for';

    access_log /var/log/nginx/access_log main;

    sendfile        on;

    keepalive_timeout   65;

    upstream services {
        server 192.168.100.30:4200;
        server 192.168.100.31:4200;
        server 192.168.100.32:4200;
    }

    server {
        location / {
            proxy_pass http://services;
        }
    }
}
```
```
docker restart NginxLB
```

