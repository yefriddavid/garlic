FROM golang:1.10.3

RUN curl https://glide.sh/get | sh
RUN mkdir -p /go/src/garlic

ADD . /go/src/garlic

WORKDIR /go/src/garlic


RUN dir
RUN glide up

RUN go get github.com/canthefason/go-watcher
RUN go install github.com/canthefason/go-watcher/cmd/watcher

ENTRYPOINT  watcher -run garlic/users/cmd  -watch garlic/users
