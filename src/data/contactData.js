const contacts = [
    {
        id: 1, 
        name: "Mama",
        last_time_connection: "Hace 2 horas",
        profile_picture: 'https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&webp=true&resize=800,534',
        messages: [
            {
                id: 1,
                text: 'Hola Mica, le diste de comer al perro ya?',
                send_by_me: true, 
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Si, ya comio ma',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Pepe',
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            {
                id: 1,
                text: 'Holaaa',
                send_by_me: true, 
                is_read: true
            },
            {
                id: 2,
                text: 'Bien yo estoy',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    }, 
    {
        id: 3,
        name: 'Juan',
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            {
                id: 1,
                text: 'Holaaa',
                send_by_me: true, 
                is_read: true
            },
            {
                id: 2,
                text: 'Bien yo estoy',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }, 
            {
                id: 3,
                text: 'oki',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    }
]

export default contacts