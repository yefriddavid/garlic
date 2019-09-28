FROM golang:1.10.3

RUN curl https://glide.sh/get | sh

ENV PKG_NAME=github.com/yefriddavid/garlic
ENV PKG_PATH=$GOPATH/src/$PKG_NAME
WORKDIR $PKG_PATH

COPY glide.yaml glide.lock $PKG_PATH/
RUN glide install

COPY . $PKG_PATH
RUN go build && go install

WORKDIR $PKG_PATH
EXPOSE 9487
CMD ["some-project"]




#RUN mkdir -p /go/src/garlic
#
#ADD . /go/src/garlic
#
#RUN go get  -t -v ./...
#RUN go get  github.com/canthefason/go-watcher
#RUN go install github.com/canthefason/go-watcher/cmd/watcher
#
#ENTRYPOINT  watcher -run garlic/notificator/cmd  -watch garlic/notificator
