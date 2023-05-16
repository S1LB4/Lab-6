export async function starapi() {
    try {
        const data = await fetch('https://swapi.dev/api/people/')
        const response = await data.json();
        console.log(response)
        return response;
    } catch (error) {
        console.log('error')
    }
}