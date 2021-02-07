


##Docker
startDockerCompose:
startDockerCompose:
	docker-compose up

createKubeDeploymentService:
createKubeDeploymentService:
	kubectl create -f deployment/notificator-service.yaml


showIp:
showIp:
	minikube service noti-service --url

callNotificatorFromNode:
callNotificatorFromNode:
	@cd apps/caller-grpc && TARGET_IP=$(shell hostname -I | cut -d' ' -f1) node app.js

callKubeNotificatorFromNode:
callKubeNotificatorFromNode:
	@cd apps/caller-grpc && TARGET_HOST=$(shell echo $(shell minikube service noti-service --url) | sed s/'http[s]\?:\/\/'//) node app.js




## Kubernetes
startMinikubeWithVirtualbox:
startMinikubeWithVirtualbox:
	minikube start --vm-driver=virtualbox



help:
	minikube start --vm-driver=virtualbox
	kubectl get pods --all-namespaces
	minikube status
	minikube start
	kubectl get pods --all-namespaces
	minikube dashboard
	kubectl get services




