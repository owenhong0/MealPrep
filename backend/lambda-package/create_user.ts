import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Client } from 'pg';

const dbConfig = {
    host: 'mealprep-1.cbqausasoq9y.us-east-2.rds.amazonaws.com',
    port: 5432,
    user: 'adminstrator',
    password: 'mealpreppassword',
    database: 'mealprep-1',
}

export const handler = async (
    event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult>=> {
    const client = new Client(dbConfig);
    try {
        const body = JSON.parse(event.body || '{}');
        const { username, email } = body;

        if (!username || !email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Username and Password are required" }),
            };
        }

        await client.connect();

        const query = 'INSERT INTO users (username, email) VALUES ($1, $2)';
        await client.query(query, [username, email])

        return {
            statusCode: 201,
            body: JSON.stringify({ message: "User created successfully" }),
        }
    } catch (err) {
        console.error("Error:", err);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error", details: err.message}),
        };
    } finally {
        await client.end();
    }
}