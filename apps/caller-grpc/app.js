const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = '../../notificator/pkg/grpc/pb/notificator.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const NotificatorService = grpc.loadPackageDefinition(packageDefinition).pb.Notificator;

// console.log(process.env.TARGET_IP);


// const endpoint = "127.0.0.1:8802"
// const endpoint = "localhost:8802"
// const endpoint = "192.168.99.100:8082"
// const endpoint = `${process.env.TARGET_IP}:30091`
// const endpoint = `${process.env.TARGET_IP}:8802`
const endpoint = `${process.env.TARGET_HOST}`
// const endpoint = "172.26.0.2:8802"

const caller = new NotificatorService(endpoint, grpc.credentials.createInsecure());

let newEmail = {
    email: "yefriddavid@gmail.com",
    content: "Hello garlic!"
}

caller.SendEmail(newEmail, (err, res) => {
    if (!err) {
        console.log('Email send successfully', res)
     } else {
        console.error(err)
     }

})
