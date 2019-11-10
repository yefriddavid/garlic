curl -XPOST http://localhost:8800/create -d '{"email": "test"}'

docker-compose up



first commit era necesario glid install en el hierro
second commit se cambio la ruta de los paquetes (garlic/bugs by github.com/yefriddavid/garlic/bugs)



References:

https://dev.to/plutov/microservices-with-go-kit-part-1-13dd

https://www.youtube.com/watch?v=SU9t6fUQltE

https://github.com/plutov/packagemain/tree/master/13-go-kit-2


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
kubectl create -f deployment/users-service.yaml

kubectl get pods -w
minikube service api-service --url
minikube service user-deployment --url
