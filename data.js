import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// console.log(uuidv4())

export const goalsArray = [
    {
        picture: "img/best_goals/P2021-10-27-Preston_Liverpool-DivockOrigi.jpeg",
        alt: "Divock Origi scores against Preston",
        date: "2021-10-27",
        competition: "English League Cup",
        goalscorer: "Divock Origi", 
        match: "Preston 0-2 Liverpool",
        uuid: "0cfe3639-b9a0-4dbf-9d86-94003c4ee9cb",
        likes: 64,
        comments: 2,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `This Is Anfield`,
                        commentText: `Scorpion like finish ⚽`,
                    },
                    {
                        name: `Red Forever`,
                        commentText: `Skilled technician ❤️❤️❤️`,
                    },
                ],
    },
    {
        picture: "img/best_goals/P2021-11-07-West_Ham_Liverpool-TAA.jpeg",
        alt: "Trent Alexander Arnold scores against West Ham",
        date: "2021-11-07",
        competition: "English Premier League",
        goalscorer: "Trent Alexander-Arnold", 
        match: "West Ham 3-2 Liverpool",
        uuid: "c535e141-6af7-4f8e-923c-53e69582e18c",
        likes: 109,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `Paisley Gates`,
                        commentText: `Inch-perfect belter free kick 💯`,
                    },
                ],
    },
    {
        picture: "img/best_goals/P2021-10-19-Atletico_Liverpool-NabyKeita.jpeg",
        alt: "Naby Keita scores against Atletico Madrid",
        date: "2021-10-19",
        competition: "European Champions League",
        goalscorer: "Naby Keita", 
        match: "Atletico Madrid 3-2 Liverpool",
        uuid: "5dd04a5c-50ea-4f02-a0dd-39e8acc4b80d",
        likes: 78,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `The Kop`,
                        commentText: `Truly magnificent strike`,
                    },
                ],
    },
    {
        picture: "img/best_goals/PC4_6683-JordanHenderson.jpeg",
        alt: "Jordan Henderson scores against AC Milan",
        date: "2021-09-15",
        competition: "European Champions League",
        goalscorer: "Jordan Henderson", 
        match: "Liverpool 3-2 AC Milan",
        uuid: "d41ea8f8-25b5-4e71-a792-e30535a7bb56",
        likes: 95,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `The Kop`,
                        commentText: `Fast and furious rocket `,
                    },
                ],
    },
    {
        picture: "img/best_goals/P2021-12-16-Liverpool_Newcastle-TAA.jpeg",
        alt: "Trent Alexander Arnold scores against Newcastle",
        date: "2021-12-16",
        competition: "English Premier League",
        goalscorer: "Trent Alexander-Arnold", 
        match: "Liverpool 3-1 Newcastle",
        uuid: "174ea0c0-7465-4003-95b8-913702f4aaaa",
        likes: 196,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `Empire Of The Kop`,
                        commentText: `Long-range thunder 🇫🇴`,
                    },
                ],
    },
    {
        picture: "img/best_goals/P2021-09-18-Liverpool_Crystal_Palace-NabyKeita.jpeg",
        alt: "Naby Keita scores against Crystal Palace",
        date: "2021-09-18",
        competition: "English Premier League",
        goalscorer: "Naby Keita", 
        match: "Liverpool 3-0 Crystal Palace",
        uuid: '6fe1f501-5a8a-4ab1-851d-459a905df4be',
        likes: 89,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `Paisley Gates`,
                        commentText: `Superb volley stroke to perfection`,
                    },
                ],
    },
    {
        picture: "img/best_goals/P2021-11-24-Liverpool_Porto-ThaigoAlcantara.jpeg",
        alt: "Thiago Alcantara scores against Porto",
        date: "2021-11-24",
        competition: "European Champions League",
        goalscorer: "Thiago Alcantara", 
        match: "Liverpool 2-0 Porto",
        uuid: "37f2eafd-9afe-4ae4-8422-08b879d17b8e",
        likes: 174,
        comments: 1,
        isLiked: false,
        commentsList: [
                    {
                        name: `Red Forever`,
                        commentText: `Sweet half-volley`,
                    },
                ],
    },
    {
        picture: "img/best_goals/2J4KCJH-SaidoMane.jpeg",
        alt: "Sadio Mane scores against Machester City",
        date: "2022-04-16",
        competition: "English FA Cup",
        goalscorer: "Sadio Mane",
        match: "Man City 2-3 Liverpool",
        uuid: "916c5e80-0e38-4dd1-beb9-c1935f209174",
        likes: 157,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `Anfield Central`,
                        commentText: `Emphatic volley`,
                    },
                ],
    },
    {
        picture: "img/best_goals/P2021-10-16-Watford_Liverpool-Salah.jpeg",
        alt: "Mohamed Salah scores against Watford",
        date: "2021-10-16",
        competition: "English Premier League",
        goalscorer: "Mohamed Salah", 
        match: "Watford 0-5 Liverpool",
        uuid: "32f506c3-ef5f-477f-9b57-2d5df5ad4bb7",
        likes: 240,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `Empire Of The Kop`,
                        commentText: `Remarkable solo effort🔥`,
                    },
                ],
    },
    {
        picture: "img/best_goals/2GWHWDY-salah.jpeg",
        alt: "Mohamed Salah scores against Machester City",
        date: "2021-10-03",
        competition: "English Premier League",
        goalscorer: "Mohamed Salah", 
        match: "Liverpool 2-2 Man City",
        uuid: "9cf2df90-50cc-4477-94e9-7b7da16ea587",
        likes: 398,
        comments: 1,
        isLiked: false,
        viewComment: false,
        commentsList: [
                    {
                        name: `Empire Of The Kop`,
                        commentText: `Mesmerising and thrilling finish ⚽`,
                    },
                ],
    }
]