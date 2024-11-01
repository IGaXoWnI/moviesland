const movies = [
    {
        id: 1,
        title: "The Rings of Power",
        genre: "Fantasy",
        releaseYear: 2022,
        description: "A grand tale set in the Second Age of Middle-earth, exploring the rise of Sauron and the forging of the Rings of Power. It follows the heroic quests of various characters as they unite against the dark forces threatening their world.",
        imagepath: "../assets/movies/the_rings_of_power.svg",
        likes : 43
    },
    {
        id: 2,
        title: "Prison Break",
        genre: "Action, Crime, Drama",
        releaseYear: 2005,
        description: "A man devises an elaborate plan to free his wrongly accused brother from prison. As he infiltrates the prison system, he uncovers a web of conspiracy and corruption that extends far beyond the prison walls.",
        imagepath: "../assets/movies/prison_break.svg",
        likes : 173
    },
    {
        id: 3,
        title: "Vikings",
        genre: "Historical, Drama",
        releaseYear: 2013,
        description: "The adventures of Ragnar Lothbrok, a legendary Norse hero, as he rises to fame and power. The series explores his explorations, battles, and the impact of Norse culture on the world during the Viking Age.",
        imagepath: "../assets/movies/vikings.svg",
        likes : 635
    },
    {
        id: 4,
        title: "Stagecoach",
        genre: "Western",
        releaseYear: 1939,
        description: "A group of strangers travels through dangerous Apache territory in a stagecoach. Each character harbors their own secrets, and their interactions reveal the complexities of human nature in the face of danger.",
        imagepath: "../assets/movies/stagecoach.svg",
        likes : 65768
        
    },
    {
        id: 5,
        title: "Meteor",
        genre: "Sci-Fi, Disaster",
        releaseYear: 1979,
        description: "A massive asteroid is hurtling towards Earth, threatening humanity's survival. As governments scramble to find a solution, a team of scientists and astronauts must work together to prevent a catastrophic collision.",
        imagepath: "../assets/movies/meteor.svg",
        likes : 678
    },
    {
        id: 6,
        title: "Venom",
        genre: "Action, Sci-Fi",
        releaseYear: 2018,
        description: "A journalist becomes host to an alien symbiote and gains superhuman abilities. Struggling with the symbiote's violent tendencies, he must navigate his new life while battling both external enemies and his inner demons.",
        imagepath: "../assets/movies/venom.svg",
        likes :2345
    },
    {
        id: 7,
        title: "Terrifier 3",
        genre: "Horror",
        releaseYear: 2024,
        description: "The latest installment in the horror series featuring the sadistic clown, Art. As his gruesome antics escalate, a group of unsuspecting victims must confront their darkest fears to survive the night.",
        imagepath: "../assets/movies/terrifier3.svg",
        likes :560
    },
    {
        id: 8,
        title: "The Substance",
        genre: "Sci-Fi, Thriller",
        releaseYear: 2023,
        description: "A mysterious substance leads to unforeseen consequences for those who encounter it. As scientists race to understand its origins, individuals experience bizarre transformations that challenge their perceptions of reality.",
        imagepath: "../assets/movies/the_substance.svg",
        likes :6758768
    },
    {
        id: 9,
        title: "The Count of Monte Cristo",
        genre: "Adventure, Drama",
        releaseYear: 2002,
        description: "A tale of revenge following the wrongful imprisonment of Edmond Dantès. After escaping, he discovers a treasure that empowers him to exact his revenge on those who betrayed him, all while exploring themes of justice and redemption.",
        imagepath: "../assets/movies/the_montecristo.svg",
        likes :4656
    },
    {
        id: 10,
        title: "Tulsa King",
        genre: "Crime, Drama",
        releaseYear: 2022,
        description: "A mafia capo is exiled to Tulsa, where he builds a new empire. As he navigates the criminal underworld, he encounters new allies and enemies, leading to a dramatic clash of loyalties and power struggles.",
        imagepath: "../assets/movies/tulsa_king.svg",
        likes :56789
    }
];




localStorage.setItem("moviesData" , JSON.stringify(movies)) ;












const my_data = JSON.parse(localStorage.getItem("moviesData")) ;

const films = document.querySelectorAll(".movie");

films.forEach((film) => {
  film.addEventListener("click", () => {
    const filmId = Number(film.getAttribute("id"));
    const selectedMovie = my_data.find(movie => movie.id === filmId);
    
    if (selectedMovie) {
        localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
        window.location.href = "pages/details.html";
    } else {
        console.log("Movie not found.");
      }
    
    
  });
});












document.querySelector("#input_popular").addEventListener("input" , filtercards);

function filtercards(){
    const searchInput = document.querySelector("#input_popular");
    const value = searchInput.value.toLowerCase();
    const cards =  document.querySelectorAll(".pop") ;
    cards.forEach((card)=>{
        let text = card.textContent.toLowerCase();
        if(text.includes(value)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }
    })
}














 let i = 0;
    const cards = document.querySelectorAll(".trend");
    const previousArrow = document.getElementById("leftArrow");
    const nextArrow = document.getElementById("rightArrow");
    const totalCards = cards.length; 
    const visibleCards = 6;

    function updateDisplay() {
        cards.forEach((card) => {
            card.style.display = "none";
        });

        for (let j = 0; j < visibleCards; j++) {
            const currentIndex = i + j;
                cards[currentIndex].style.display = "block";

        }
    }

    previousArrow.addEventListener("click", () => {
        if (i > 0) {
            i--; 
            updateDisplay();
        }
    });

    nextArrow.addEventListener("click", () => {
        if (i + visibleCards < totalCards) {
            i++; 
            updateDisplay();
        }
    });

    updateDisplay();










    
