const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.static('./')); 
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/contato.html');
})

app.post('/', (req,res) =>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user: "covidonation@gmail.com",
            pass: "covidonation123",
        },
        tls:{
            rejectUnauthorized: false,
        }
    
    });


    transporter.sendMail({
        from: req.body.nome,
        to: "covidonation@gmail.com",
        subject: "Mensagem de contato",
        text: req.body.mensagem +"\n Mensagem enviada por:"+"\n Telefone: "+req.body.telefone+
        "\n Nome:"+req.body.nome,
        replyTo: req.body.email
    }).then(message =>{
        console.log(message);
        res.send('success');
    }).catch(err => {
        console.log(err);
    })

})

app.listen(process.env.PORT || 5000);