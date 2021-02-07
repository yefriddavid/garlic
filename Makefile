


##Docker
startDockerCompose:
startDockerCompose:
	docker-compose up

callNotificatorFromNode:
callNotificatorFromNode:
	@cd apps/caller-grpc && TARGET_IP=$(shell hostname -I | cut -d' ' -f1) node app.js




## Kubernetes
startMinikubeWithVirtualbox:
startMinikubeWithVirtualbox:
	minikube start --vm-driver=virtualbox



help:
	minikube status
	kubectl get pods --all-namespaces
	minikube dashboard
	kubectl get services




