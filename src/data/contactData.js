
const contacts = [
    {
        id: 1,
        phone: "1123456789",
        type: "ind",
        name: "Mama",
        favorite: true,
        last_time_connection: "Hace 2 horas",
        profile_picture: 'https://media.istockphoto.com/id/1494044119/es/foto/seguros-de-mujer-madura.jpg?s=612x612&w=0&k=20&c=LcVKY8Eh1Fce5CGpfE8aN1mJO2lW2iEhOGKmWIA4kzY=',
        messages: [
            {
                id: 1,
                text: 'Hola Mica, le diste de comer al perro ya?',
                send_by_me: false, 
                created_at: '09:31',
                is_read: true
            },
            {
                id: 2,
                text: 'Si, ya comio ma',
                send_by_me: true,
                created_at: '09:35',
                is_read: true
            },
            {
                id: 3,
                text: 'Gracias, por favor compra bananas cuando vuelvas',
                send_by_me: false,
                created_at: '09:36',
                is_read: false
            }
        ]
    },
    {
        id: 2,
        phone: "1155667788",
        type: "ind",
        name: 'Juan UTN',
        favorite: false,
        last_time_connection: 'Hace 3 horas',
        profile_picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJT7SsCekyBA9Hn6Q8wpNNrfjh4Dunfm0Ftw&s',
        messages: [
            {
                id: 1,
                text: 'Holaaa, como venis con el tp?',
                send_by_me: true, 
                created_at: '22:35',
                is_read: true
            },
            {
                id: 2,
                text: 'Hola! Estoy en el horno jajaja',
                send_by_me: false,
                created_at: '23:02',
                is_read: true
            },
            {
                id: 3,
                text: 'XD same',
                send_by_me: true,
                created_at: '23:05',
                is_read: true
            }
        ]
    }, 
    {
        id: 3,
        phone: "1133990088",
        type: "ind",
        name: 'Cata',
        favorite: true,
        last_time_connection: 'Hace 20 minutos',
        profile_picture: 'https://thumbs.dreamstime.com/z/young-woman-working-modern-business-office-student-girl-using-laptop-computer-cafe-young-woman-working-modern-business-198117357.jpg?ct=jpeg',
        messages: [
            {
                id: 1,
                text: 'Hola buenas',
                send_by_me: true,
                created_at: '14:34', 
                is_read: true
            },
            {
                id: 2,
                text: 'Hola, como va?',
                send_by_me: false,
                created_at: '15:04',
                is_read: true
            }, 
            {
                id: 3,
                text: 'bien bien, vas a ir a la fiesta de Juan?',
                send_by_me: true,
                created_at: '15:05',
                is_read: true
            },
            {
                id: 4,
                text: 'Sii, vamos juntas? ',
                send_by_me: false,
                created_at: '15:05',
                is_read: true
            },
            {
                id: 5,
                text: 'dale!',
                send_by_me: true,
                created_at: '15:06',
                is_read: true
            }
        ]
    },
    {
        id: 4,
        phone: "1123456234",
        type: "ind",
        name: 'Santi',
        favorite: true,
        last_time_connection: 'Hace 10 minutos',
        profile_picture: 'https://thumbs.dreamstime.com/b/man-shivering-cold-winter-rubbing-hands-snowing-59445841.jpg?w=768',
        messages: [
            {
                id: 1,
                text: 'Mica, podrás pasarme el numero de May? Se me borró',
                send_by_me: false,
                created_at: '19:00', 
                is_read: true
            },
            {
                id: 2,
                text: 'Sii obvio, ya lo busco',
                send_by_me: true,
                created_at: '19:06',
                is_read: true
            }, 
            {
                id: 3,
                text: 'Es este: 1145632712',
                send_by_me: true,
                created_at: '19:06',
                is_read: true
            },
            {
                id: 4,
                text: 'Gracias! Sabes si hoy anda por CABA? Para visitarla ',
                send_by_me: false,
                created_at: '19:07',
                is_read: true
            },
            {
                id: 5,
                text: 'Creo que si!',
                send_by_me: true,
                created_at: '19:07',
                is_read: true
            }
        ]
    },
    {
        id: 5,
        phone: "1183673412",
        type: "ind",
        name: 'Flor',
        favorite: false,
        last_time_connection: 'Hace 5 minutos',
        profile_picture: 'https://thumbs.dreamstime.com/b/dog-welcome-home-26629661.jpg?w=768',
        messages: [
            {
                id: 1,
                text: 'Mica, estas en casa ya?',
                send_by_me: false,
                created_at: '17:35', 
                is_read: true
            },
            {
                id: 2,
                text: 'No no, llego en 1 hora mas o menos',
                send_by_me: true,
                created_at: '17:35',
                is_read: true
            }, 
            {
                id: 3,
                text: 'Ah bueno, puedo usar tu compu mientras?',
                send_by_me: false,
                created_at: '17:40',
                is_read: true
            },
            {
                id: 4,
                text: 'Si dale np',
                send_by_me: true,
                created_at: '17:41',
                is_read: true
            }
        ]
    },
    {
        id: 6,
        phone: "1145632712",
        type: "ind",
        name: 'May',
        favorite: true,
        last_time_connection: 'Hace 1 hora',
        profile_picture: 'https://thumbs.dreamstime.com/b/learning-studying-woman-using-laptop-computer-cafe-working-portrait-beautiful-student-notebook-thinking-female-freelancer-70080723.jpg?w=768',
        messages: [
            {
                id: 1,
                text: 'Mica, te puedo mandar el texto del post para que lo revises?',
                send_by_me: false,
                created_at: '20:04', 
                is_read: true
            },
            {
                id: 2,
                text: 'Dale',
                send_by_me: true,
                created_at: '20:05',
                is_read: true
            }, 
            {
                id: 3,
                text: 'Mandalo y lo veo',
                send_by_me: true,
                created_at: '20:05',
                is_read: true
            },
            {
                id: 4,
                text: 'El gobierno anunció nuevas medidas económicas destinadas a estimular el crecimiento y reducir la inflación. Especialistas señalan que el impacto dependerá de la implementación y la respuesta del mercado. Mientras tanto, sectores productivos evalúan oportunidades y riesgos ante un escenario internacional todavía incierto.',
                send_by_me: false,
                created_at: '20:15',
                is_read: false
            }
        ]
    },
    {
        id: 7,
        phone: "May , Sergio, Santi",
        type: "group",
        name: "Los Bros",
        favorite: true,
        last_time_connection: "Hace 3 minutos",
        profile_picture: 'https://static.nuso.org/media/articles/files/6c77c183-4a38-4111-91ce-eb325963fce7.png',
        members: ["Me", "May", "Santi", "Sergio"],
        messages: [
            {
                id: 1,
                text: 'Holaaa nos vemos hoy?',
                send_by_me: true,
                send_by: "Me", 
                created_at: '13:07',
                is_read: true
            },
            {
                id: 2,
                text: 'Dalee a que hora y donde?',
                send_by_me: false,
                send_by: "May",
                created_at: '13:20',
                is_read: true
            },
            {
                id: 3,
                text: 'Yo estoy',
                send_by_me: false,
                send_by: "Santi",
                created_at: '13:20',
                is_read: true
            },
            {
                id: 1,
                text: 'Tipo 4 vamos a la plaza cerca de lo de May',
                send_by_me: true,
                send_by: "Me", 
                created_at: '13:21',
                is_read: true
            },
        ]
    },
    {
        id: 8,
        phone: "Mama , Flor",
        type: "group",
        name: "Familia",
        favorite: false,
        last_time_connection: "Hace 2 horas",
        profile_picture: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg',
        members: ["Me", "Mama", "Flor"],
        messages: [
            {
                id: 1,
                text: 'Acuerdense de que hay que comprar un regalo para papa',
                send_by_me: false,
                send_by: "Mama", 
                created_at: '12:45',
                is_read: true
            },
            {
                id: 2,
                text: 'Ok, le compramos un perfume como siempre?',
                send_by_me: false,
                send_by: "Flor",
                created_at: '12:55',
                is_read: false
            },
        ]
    },
]

export default contacts