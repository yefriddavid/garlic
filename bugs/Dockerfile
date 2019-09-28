FROM golang:1.10.3

RUN mkdir -p /go/src/garlic

ADD . /go/src/garlic

RUN go get  -t -v ./...
RUN go get  github.com/canthefason/go-watcher
RUN go install github.com/canthefason/go-watcher/cmd/watcher

ENTRYPOINT  watcher -run garlic/bugs/cmd  -watch garlic/bugs
