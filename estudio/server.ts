const PORT =8000;

//HANDLER DE LA API
const vehiculosHandler = async (req: Request): Promise<Response> => {
    try{
        const data = await Deno.readTextFile("./data.json");
        return new Response(data,{
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" // DEJA QUE REACT "CONSUMA" LA API
            },
            status: 200,
        });
    } catch(error){
        return new Response(JSON.stringify({ error: "No se pudo leer data.json"}),{
            headers: {"Content-Type": "application/json"},
            status: 500,
        });
    }
    
};

Deno.serve({ port: PORT}, (req)=> {
    const url = new URL(req.url);

    //Ruta de la API solicitada
    if (req.method ==="GET" && url.pathname=== "/api/vehiculos"){
        return vehiculosHandler(req);
    }

    return new Response("Ruta no encontrada", {status: 404});
});

console.log(`Backend corriendo en http://localhost:${PORT}`);

