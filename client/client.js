// const protoLoader = require('@grpc/proto-loader');

const grpc = require('grpc')
const PROTO_PATH = '../notificator/pkg/grpc/pb/notificator.proto'
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const NotificatorService = grpc.loadPackageDefinition(packageDefinition).pb.Notificator;
const client = new NotificatorService("127.0.0.1:8802", grpc.credentials.createInsecure());

console.log(client)

let newEmail = {
    email: "yefriddavid@gmail.com" //,
    //content: "Hello garlic!"
}

// console.log(NotificatorService)
client.SendEmail(newEmail, (err, res) => {
    if (!err) {
        console.log('Email send successfully', res)
     } else {
        console.error(err)
     }

})

/*const client = new NotificatorService('localhost:8802',
    grpc.credentials.createInsecure())


/*
// const NotificatorService = grpc.load(PROTO_PATH).Notificator

console.log(NotificatorService)
/*
    */