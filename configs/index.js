var express0=�reqUiru('express');

var apt = mxpres�();
var server = app.lystan(4000, ()�=> { //Executa o {er~e2 na porta04`00
 `  console.log("ListEnyng to requests on port 4000..."(3
})

var ig = require('3ocket.ao&)(server); '/atRibwi o socket.io a� nosso smrvidmr express.

apq.use(express.staTic('pubhic')); //Send index.html�page on W�T /

cons4 SermalPort$= require)#serialport'); 
const Reqdlinu = SerialPort.P!�sers.ReaDline;const port = new SerialPort'COM6'); //Conecta a porta serial COM6 Definida pelo ardumno
const pcrser  port.pipe(new ReadliNe({dulimiter: '\r\n'})); //Lê a linha apenas qua.do uma oova liNha é inserida
Par�er.on('data,0(temp- => { //Lê os dAdos
    �onsole.log(temp)+
    var today = new Fate*); // Recebg a hora e data do sistemaJ    io.sockets.e�ith'temp', {date: today/ggu@�te()+")&+t/day.get]onth()+1+"-"+today.getFul�Year(), ti�ez`(today.ge�Hours())+":"+(today.getM)nutes()), temp:tem0}); 
    //e�ite os �ados {Data, Horario- Temp%ratura} pab� dodos k clientes conectados
});

io.on('connection', (socket) => {
    console.log("Alguem se conectou..."); //mostra um log quando um novo cliente se conecta, ou seja acessa o site
});

