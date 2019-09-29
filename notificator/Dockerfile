FROM golang:1.10.3

#RUN echo $GOPATH
RUN curl https://glide.sh/get | sh

ENV MDL_NAME=notificator
ENV PKG_NAME=garlic
ENV PKG_PATH=$GOPATH/src/$PKG_NAME
#RUN mkdir -p $PKG_NAME 

#ADD . $GOPATH/src/garlic
COPY glide.yaml glide.lock $PKG_PATH/

WORKDIR $PKG_PATH


RUN dir
#RUN glide info
RUN glide name
RUN glide install
#RUN glide list
RUN pwd
RUN dir
#RUN dir
#RUN glide install
#RUN glide up
#RUN glide install

COPY . $PKG_PATH

RUN go get github.com/canthefason/go-watcher
RUN go install github.com/canthefason/go-watcher/cmd/watcher

WORKDIR $PKG_PATH
ENTRYPOINT  watcher -run $MDL_NAME/cmd  -watch $MDL_NAME


#RUN curl https://glide.sh/get | sh
#
##ENV PKG_NAME=github.com/yefriddavid/garlic
#ENV PKG_NAME=/go/src/github.com/yefriddavid/garlic
#ENV PKG_PATH=$GOPATH/src/$PKG_NAME
#WORKDIR $PKG_PATH
#
#COPY glide.yaml glide.lock $PKG_PATH/
#RUN glide install
#
##COPY . $PKG_PATH
#COPY . $PKG_PATH/notificator
#RUN go build && go install
#
#WORKDIR $PKG_PATH
#EXPOSE 9487
#CMD ["garlic"]




#RUN mkdir -p /go/src/garlic
#
#ADD . /go/src/garlic
#
#RUN go get  -t -v ./...
#RUN go get  github.com/canthefason/go-watcher
#RUN go install github.com/canthefason/go-watcher/cmd/watcher
#
#ENTRYPOINT  watcher -run garlic/notificator/cmd  -watch garlic/notificator


