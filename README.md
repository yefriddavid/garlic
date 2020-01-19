// Users
- curl -XPOST http://localhost:8800/create -d '{"email": "test@gmail.com"}'
- curl -XPOST http://192.168.99.100:30090/create -d '{"email": "test"}'


// Bugs
- curl -XPOST http://localhost:8801/create -d '{"bug": "buuuuu"}'

// Notificator
- node app.js


docker-compose up



- first commit era necesario glid install en el hierro
- second commit se cambio la ruta de los paquetes (garlic/bugs by github.com/yefriddavid/garlic/bugs)



References:

https://dev.to/plutov/microservices-with-go-kit-part-1-13dd

https://www.youtube.com/watch?v=SU9t6fUQltE

https://github.com/plutov/packagemain/tree/master/13-go-kit-2



```sh


// lets create service with next commands:

kit new service users
kit new service bugs
kit new service notificator

kit generate service users --dmw
kit generate service bugs --dmw


kit generate docker

docker-compose up






minikube status
minikube start -p clusterName
minikube dashboard




kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node


kubectl create deployment hello-garlic --image=yefriddavid/node-garlic:v1
kubectl expose deployment hello-garlic --type=LoadBalancer --port=8080
kubectl get services
kubectl get deployments
minikube service hello-garlic


kubectl delete service hello-garlic
kubectl delete deployment hello-garlic
kubectl delete pod podname




docker run --name burrito node-garlic:v1



kubectl get pods
kubectl logs -f hello-garlic-7dfdb459d9-rhlrn
kubectl describe pod hello-garlic-7dfdb459d9-rhlrn
kubectl logs -f hello-garlic-5998fd7b8f-dk8nm


kubectl create -f deployment/api-service.yaml
kubectl create -f deployment/user-service.yaml
kubectl create -f deployment/bug-service.yaml
kubectl create -f deployment/notificator-service.yaml

kubectl get pods -w
minikube service api-service --url

minikube service user-service --url
minikube service noti-service --url
minikube service bug-service --url

kubectl get nodes
kubectl get namespaces




docker commit users yefriddavid/garlic-users:v1
docker commit bugs yefriddavid/garlic-bugs:v1
docker commit notificator yefriddavid/garlic-notificator:v1


docker push yefriddavid/garlic-users:v1
docker push yefriddavid/garlic-bugs:v1
docker push yefriddavid/garlic-notificator:v1

minikube ip
minikube ssh

```



applicatio features

modules (notification logs, users and emails)

- notification logs is local
- user crud save notifications logs actions (save, update, delete, list, getOne), for new users send notification email
- send email save log of action in notification log


1. users mongodb (crued) (http and grpc)
2. notification logs (http and grpc)


