# Monitor de Casos Activos de Covid via twitter y telegram

![twitter](https://user-images.githubusercontent.com/4065733/90918700-c65ab400-e3aa-11ea-8ce8-c645e3057e8b.png)

![telegram](https://user-images.githubusercontent.com/4065733/90918702-c78be100-e3aa-11ea-96cc-9c9ccac1361a.jpg)

# Instalar

```
npm install
```

# Uso

Poner municipio en minúsculas y los servicios que se quieren enviar. 
Debe existir un archivo de configuración que coincida, por ejemplo: 

`.env.cdmx`

Ejemplos:

```
node main.js xalapa test
node main.js puebla test
node main.js cdmx test
node main.js xalapa twitter
node main.js puebla telegram
node main.js cdmx telegram twitter
```

Ejemplo de crontab:

```
0 8 * * * cd /srv/users/miuser/repos/covid/ && /usr/bin/node main.js xalapa twitter telegram 2>&1
0 8 * * * cd /srv/users/miuser/repos/covid/ && /usr/bin/node main.js puebla twitter telegram 2>&1
0 8 * * * cd /srv/users/miuser/repos/covid/ && /usr/bin/node main.js cdmx twitter telegram 2>&1
``` 

# Fuente de los datos

https://coronavirus.gob.mx/datos/

# Desarrollador

Ing. Eduardo Aranda Hernández
https://eduardoarandah.github.io/
