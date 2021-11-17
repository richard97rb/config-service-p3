# BootCamp Microservicios

Proyecto desarrollado durante el Bootcamp de Microservicios en NTT DATA del 18/10 al 18/11 de 2021.

## Repositorios
Para la ejecución de los microservicios es necesario iniciar primero el llamado "ConfigService" qué contiene Config Server. Después es necesario iniciar EurekaService y GatewayService como discovery y puerta de entrada global a los microservicios, respectivamente. El resto de repositorios pueden iniciarse en cualquier orden.

- [ConfigData](https://github.com/christiangarcia97/config-data-p3)
- [ConfigService](https://github.com/christiangarcia97/config-service-p3)
- [EurekaService](https://github.com/christiangarcia97/eureka-service-p3)
- [GatewayService](https://github.com/christiangarcia97/gateway-service-p3)
- [CustomerService](https://github.com/christiangarcia97/customer-service-p3)
- [AccountService](https://github.com/christiangarcia97/account-service-p3)
- [TransactionService](https://github.com/christiangarcia97/transaction-service-p3)
- [ReportService](https://github.com/christiangarcia97/report-service-p3)
- [PocketService](https://github.com/christiangarcia97/pocket-service-p4)
- [PocketTransactionService](https://github.com/christiangarcia97/pocket-transaction-service-p4)

## Ports
Puertos de los microservicios tanto para su uso con docker como en localhost. Como extra, el puerto para MongoDB es 28017:27017.

Microservice | Port | 
--- | --- | 
config-service | 8888 | 
eureka-service | 8761 | 
gateway-service | 8080 | 
customer-service | 8081 | 
account-service | 8082 | 
transaction-service | 8083 | 
report-service | 8084 |
pocket-service | 8085 |
pocket-transaction-service | 8086 |

## Docker 

Para el uso de los microservicios con Docker es necesario ejecutar el comando a continuación:
```
docker-compose up -d
```
Ejecutar el comando en la carpeta de cada proyecto para su dockerización.

## Postman

Primero descargar la colección en Postman desde este [enlace](https://drive.google.com/file/d/1d3qqPssPuQpXtu1bJhb5Kxj1A6xy26C3/view?usp=sharing). Importarlo a Postman para el uso de los endpoints.

## Tecnologías 

* Proyecto 1
    * SpringBoot Webflux 2.5.5
    * Config Server
    * MongoDB
    * Maven
    * Lombok
* Proyecto 2
    * Docker
    * Eureka
    * API Gateway
    * CheckStyle
    * SonarQube
* Proyecto 3
    * Lambda
    * Streams 
* Proyecto 4
    * Apache Kafka
    * Redis
