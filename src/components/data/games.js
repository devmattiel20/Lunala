import EscarlatayPurpura from "../../images/EscarlatayPurpura.jpg";
import MarioKart from "../../images/MarioKart.webp";
import Zelda from "../../images/Zelda.jpg";
import FC26 from "../../images/FC26.jpg"
import Spider from "../../images/Spider.webp"
import Tlou from "../../images/Tlou.webp"
import Halo from "../../images/Halo.webp"
import Forza from "../../images/Forza.webp"
import Star from "../../images/Star.jpg"
import NFL from "../../images/NFL.jpg"
import F1 from "../../images/F1.webp"
import Metal from "../../images/Metal.webp"
import EFOTBALL from "../../images/EFOTBALL.png"
import Castle from "../../images/Castle.webp"





export const publishers = [
    {
        id: "nintendo",
        nombre: "Nintendo",
        juegos: [
            {
                id: 1,
                nombre: "Pokémon Escarlata y purpura",
                genero: "RPG",
                precio: 59.99,
                imagen: EscarlatayPurpura
            },
            {
                id: 2,
                nombre: "MarioKart",
                genero: "Racing",
                precio: 49.99,
                imagen: MarioKart
            },
            {
                id: 3,
                nombre: "The Legend of Zelda",
                genero: "Adventure",
                precio: 69.99,
                imagen: Zelda
            }
        ]
    },

    {
        id: "playstation",
        nombre: "PlayStation",
        tema: "PlayStation",
      
        juegos: [
            {
                id: 4,
                nombre: "FC 26",
                precio: 69.99,
                imagen: FC26
            },
            {
                id: 5,
                nombre: "Spider-Man",
                genero: "Action",
                precio: 59.99,
                imagen: Spider
            },
            {
                id: 6,
                nombre: "The Last of Us",
                genero: "Adventure",
                precio: 69.99,
                imagen: Tlou
            }
        ]
    },

    {
        id: "xbox",
        nombre: "Xbox",
        tema: "xbox",
        juegos: [
            {
                id: 7,
                nombre: "Halo Infinite",
                genero: "Shooter",
                precio: 59.99,
                imagen: Halo
            },
            {
                id: 8,
                nombre: "Forza Horizon",
                genero: "Racing",
                precio: 69.99,
                imagen: Forza
            },
            {
                id: 9,
                nombre: "Starfield",
                genero: "RPG",
                precio: 69.99,
                imagen: Star
            }
        ]
    },

    {
        id: "ea",
        nombre: "EA Sports",
        tema: "ea",
        juegos: [
            {
                id: 10,
                nombre: "EA Sports FC",
                genero: "Sports",
                precio: 69.99,
                imagen: FC26
            },
            {
                id: 11,
                nombre: "Madden NFL",
                genero: "Sports",
                precio: 59.99,
                imagen: NFL
            },
            {
                id: 12,
                nombre: "F1",
                genero: "Racing",
                precio: 69.99,
                imagen: F1
            }
        ]
    },

    {
        id: "konami",
        nombre: "Konami",
        tema: "Konami",
        juegos: [
            {
                id: 13,
                nombre: "Metal Gear Solid",
                genero: "Stealth",
                precio: 49.99,
                imagen: Metal
            },
            {
                id: 14,
                nombre: "EFOTBALL",
                genero: "Horror",
                precio: 59.99,
                imagen: EFOTBALL
            },
            {
                id: 15,
                nombre: "Castlevania",
                genero: "Action",
                precio: 39.99,
                imagen: Castle
            }
        ]
    }
];