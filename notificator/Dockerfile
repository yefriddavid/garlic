FROM golang:1.10.3

RUN curl https://glide.sh/get | sh

ENV MDL_NAME=notificator
ENV PKG_NAME=github.com/yefriddavid/garlic
ENV PKG_PATH=$GOPATH/src/$PKG_NAME
ENV MDL_PATH=$PKG_PATH/$MDL_NAME

COPY glide.yaml glide.lock $PKG_PATH/

WORKDIR $PKG_PATH

RUN glide install

COPY . $PKG_PATH

RUN go get github.com/canthefason/go-watcher
RUN go install github.com/canthefason/go-watcher/cmd/watcher

ENTRYPOINT  watcher -run $PKG_NAME/$MDL_NAME/cmd  -watch $PKG_NAME/$MDL_NAME
