const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = '../notificator/pkg/grpc/pb/notificator.proto'
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const NotificatorService = grpc.loadPackageDefinition(packageDefinition).pb.Notificator;
const client = new NotificatorService("127.0.0.1:8802", grpc.credentials.createInsecure());

let newEmail = {
    email: "yefriddavid@gmail.com",
    content: "Hello garlic!"
}

client.SendEmail(newEmail, (err, res) => {
    if (!err) {
        console.log('Email send successfully', res)
     } else {
        console.error(err)
     }

})
