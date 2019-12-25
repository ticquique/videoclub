const http = require('http')

const administrators = [
    { _id: "5df94b239be06d0020ca5b54", username: "superadmin" }
];

const members = [
    { _id: "5df9502f9be06d0020ca5b28", name: "usuario", age: 22 }
];

const videoclubs = [
    { _id: "5df9502f9be06d0020ca5b29", manager: "manage", city: "valencia", street: "Calle del Oeste", postal_code: "46001" }
];

const films = [
    { _id: "5df9502f9be06d0020ca5030", videoclub_code: "5df9502f9be06d0020ca5b29", name: "Lo que se fue", director: "Juan car", released_at: "2002-12-09", rent_price: 23 }
];

const rents = [
    { _id: "5df9502f9be06d0020ca5b2b", films: ["5df9502f9be06d0020ca5030"], member: "5df9502f9be06d0020ca5b28", pickup_date: "2002-12-09", devolution_date: "2012-12-09" }
];

const statistics = [
    { _id: "5df9572f9be06d0020ca5b2b", administrator: "5df94b239be06d0020ca5b54", member: "5df9502f9be06d0020ca5b28", rents: ["5df9502f9be06d0020ca5b2b"] }
];

const query = `mutation {
    ${administrators.reduce((old, current, i) => old + `administrator${i}: administrator(element: ${JSON.stringify(current).replace(/\"([^(\")"]+)\":/g, "$1:")}) {_id},`, '')}
    ${members.reduce((old, current, i) => old + `member${i}: member(element: ${JSON.stringify(current).replace(/\"([^(\")"]+)\":/g, "$1:")}) {_id},`, '')}
    ${videoclubs.reduce((old, current, i) => old + `videoclub${i}: videoclub(element: ${JSON.stringify(current).replace(/\"([^(\")"]+)\":/g, "$1:")}) {_id},`, '')}
    ${films.reduce((old, current, i) => old + `film${i}: film(element: ${JSON.stringify(current).replace(/\"([^(\")"]+)\":/g, "$1:")}) {_id},`, '')}
    ${rents.reduce((old, current, i) => old + `rent${i}: rent(element: ${JSON.stringify(current).replace(/\"([^(\")"]+)\":/g, "$1:")}) {_id},`, '')}
}`;

const data = JSON.stringify({
    query,
    variables: null
})

const options = {
    hostname: 'processor',
    port: 3000,
    path: '/graphql',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = http.request(options, (res) => {
    res.on('data', (d) => {
        process.stdout.write(d)
    })
})

req.on('error', (error) => {
    console.error(error)
})

req.write(data)
req.end()
