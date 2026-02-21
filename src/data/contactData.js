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
                send_by_me: false, 
                created_at: '2024-06-01T12:00:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Si, ya comio ma',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'Gracias, por favor compra bananas cuando vuelvas',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        name: 'Juan UTN',
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            {
                id: 1,
                text: 'Holaaa, como venis con el tp?',
                send_by_me: true, 
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola! Estoy en el horno jajaja',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 3,
                text: 'XD same',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            }
        ]
    }, 
    {
        id: 3,
        name: 'Cata',
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://www.clarin.com/img/2022/01/20/GWR2-6fo__1256x620__1.jpg',
        messages: [
            {
                id: 1,
                text: 'Hola buenas',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z', 
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, como va?',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            }, 
            {
                id: 3,
                text: 'bien bien, vas a ir a la fiesta de Juan?',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 4,
                text: 'Sii, vamos juntas? ',
                send_by_me: false,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            },
            {
                id: 5,
                text: 'dale!',
                send_by_me: true,
                created_at: '2024-06-01T12:05:00Z',
                is_read: true
            }
        ]
    }
]

export default contacts