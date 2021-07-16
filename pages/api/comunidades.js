import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = 'a538188c7f100dce1fa72e6a0cde70';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "967643", // ID do Model de "Communities" criado pelo Dato
            ...request.body
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
} 