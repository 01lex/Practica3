function HolaMundo(user1,user2){
    var resultado ="Bienvenido" + user1 +" y " + user2;
        alert(resultado);
        return resultado;
}

test("Mi Primera Prueba",function () {
    ok(HolaMundo("Programador","Analista al equipo de desarrollo"),"Satisfactorio");
});
