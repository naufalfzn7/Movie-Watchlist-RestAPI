import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const creatorId = "47859f77-df2f-46b3-a2d4-cf78e51fe8a6";

const movies = [
  {
    title: "The Shawshank Redemption",
    overview:
      "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genre: ["Drama", "Crime"],
    runtime: 142,
    posterUrl: "https://example.com/shawshank_redemption.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Godfather",
    overview:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    genre: ["Crime", "Drama"],
    runtime: 175,
    posterUrl: "https://example.com/the_godfather.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Dark Knight",
    overview:
      "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: 2008,
    genre: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://example.com/the_dark_knight.jpg",
    createdBy: creatorId,
  },
  {
    title: "Pulp Fiction",
    overview:
      "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    genre: ["Crime", "Drama"],
    runtime: 154,
    posterUrl: "https://example.com/pulp_fiction.jpg",
    createdBy: creatorId,
  },
  {
    title: "Forrest Gump",
    overview:
      "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man with a low IQ but good intentions.",
    releaseYear: 1994,
    genre: ["Drama", "Romance"],
    runtime: 142,
    posterUrl: "https://example.com/forrest_gump.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Matrix",
    overview:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
    genre: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl: "https://example.com/the_matrix.jpg",
    createdBy: creatorId,
  },
  {
    title: "Fight Club",
    overview:
      "An insomniac office worker forms an underground fight club that evolves into something much more.",
    releaseYear: 1999,
    genre: ["Drama"],
    runtime: 139,
    posterUrl: "https://example.com/fight_club.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    overview:
      "A meek Hobbit sets out on a journey to destroy a powerful ring with the help of a fellowship of companions.",
    releaseYear: 2001,
    genre: ["Adventure", "Drama", "Fantasy"],
    runtime: 178,
    posterUrl: "https://example.com/lotr_fellowship.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    overview:
      "While Frodo and Sam edge closer to Mordor with the help of a guide, the divided fellowship makes a stand against Sauron's new ally.",
    releaseYear: 2002,
    genre: ["Adventure", "Drama", "Fantasy"],
    runtime: 179,
    posterUrl: "https://example.com/lotr_two_towers.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    overview:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    releaseYear: 2003,
    genre: ["Adventure", "Drama", "Fantasy"],
    runtime: 201,
    posterUrl: "https://example.com/lotr_return_king.jpg",
    createdBy: creatorId,
  },
  {
    title: "Star Wars: Episode IV – A New Hope",
    overview:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world‑destroying battle station.",
    releaseYear: 1977,
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: 121,
    posterUrl: "https://example.com/star_wars_4.jpg",
    createdBy: creatorId,
  },
  {
    title: "Star Wars: Episode V – The Empire Strikes Back",
    overview:
      "After the rebels are overpowered by the Empire on their newly established base, Luke Skywalker begins Jedi training with Yoda while his friends are pursued across the galaxy.",
    releaseYear: 1980,
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: 124,
    posterUrl: "https://example.com/star_wars_5.jpg",
    createdBy: creatorId,
  },
  {
    title: "Star Wars: Episode VI – Return of the Jedi",
    overview:
      "Luke Skywalker attempts to save his friends; Darth Vader and the Emperor await him in a final battle for the fate of the galaxy.",
    releaseYear: 1983,
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: 131,
    posterUrl: "https://example.com/star_wars_6.jpg",
    createdBy: creatorId,
  },
  {
    title: "Interstellar",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl: "https://example.com/interstellar.jpg",
    createdBy: creatorId,
  },
  {
    title: "Gladiator",
    overview:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    releaseYear: 2000,
    genre: ["Action", "Adventure", "Drama"],
    runtime: 155,
    posterUrl: "https://example.com/gladiator.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Lion King",
    overview:
      "Lion cub Simba must embrace his role as the rightful king of his homeland after the murder of his father by his uncle.",
    releaseYear: 1994,
    genre: ["Animation", "Adventure", "Drama"],
    runtime: 88,
    posterUrl: "https://example.com/the_lion_king.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Silence of the Lambs",
    overview:
      "A young FBI cadet must confide in an incarcerated and manipulative killer to catch another serial killer who skins his victims.",
    releaseYear: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    runtime: 118,
    posterUrl: "https://example.com/silence_lambs.jpg",
    createdBy: creatorId,
  },
  {
    title: "Schindler's List",
    overview:
      "In German‑occupied Poland during WWII, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    releaseYear: 1993,
    genre: ["Biography", "Drama", "History"],
    runtime: 195,
    posterUrl: "https://example.com/schindlers_list.jpg",
    createdBy: creatorId,
  },
  {
    title: "Saving Private Ryan",
    overview:
      "Following the Normandy landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    releaseYear: 1998,
    genre: ["Drama", "War"],
    runtime: 169,
    posterUrl: "https://example.com/saving_private_ryan.jpg",
    createdBy: creatorId,
  },
  {
    title: "Jurassic Park",
    overview:
      "During a preview tour, a theme park suffers a major power breakdown that lets its cloned dinosaur exhibits run amok.",
    releaseYear: 1993,
    genre: ["Adventure", "Sci-Fi", "Thriller"],
    runtime: 127,
    posterUrl: "https://example.com/jurassic_park.jpg",
    createdBy: creatorId,
  },
  {
    title: "Back to the Future",
    overview:
      "Marty McFly, a teenager, is accidentally sent 30 years into the past in a time‑traveling DeLorean invented by his friend, Doc Brown.",
    releaseYear: 1985,
    genre: ["Adventure", "Comedy", "Sci-Fi"],
    runtime: 116,
    posterUrl: "https://example.com/back_to_future.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Prestige",
    overview:
      "Two stage magicians engage in a bitter rivalry with increasingly dangerous consequences as they attempt to create the ultimate illusion.",
    releaseYear: 2006,
    genre: ["Drama", "Mystery", "Sci-Fi"],
    runtime: 130,
    posterUrl: "https://example.com/the_prestige.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Departed",
    overview:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
    releaseYear: 2006,
    genre: ["Crime", "Drama", "Thriller"],
    runtime: 151,
    posterUrl: "https://example.com/the_departed.jpg",
    createdBy: creatorId,
  },
  {
    title: "Whiplash",
    overview:
      "A young drummer enrolls at a cutthroat music conservatory where his dreams of greatness are mentored by an abusive instructor.",
    releaseYear: 2014,
    genre: ["Drama", "Music"],
    runtime: 106,
    posterUrl: "https://example.com/whiplash.jpg",
    createdBy: creatorId,
  },
  {
    title: "Parasite",
    overview:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseYear: 2019,
    genre: ["Drama", "Thriller"],
    runtime: 132,
    posterUrl: "https://example.com/parasite.jpg",
    createdBy: creatorId,
  },
  {
    title: "Avengers: Endgame",
    overview:
      "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' actions and restore order to the universe.",
    releaseYear: 2019,
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: 181,
    posterUrl: "https://example.com/avengers_endgame.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Social Network",
    overview:
      "The story of the founders of Facebook, and how lawsuits and betrayal threatened to destroy their creation.",
    releaseYear: 2010,
    genre: ["Biography", "Drama"],
    runtime: 120,
    posterUrl: "https://example.com/the_social_network.jpg",
    createdBy: creatorId,
  },
  {
    title: "Mad Max: Fury Road",
    overview:
      "In a post‑apocalyptic wasteland, Max teams up with Furiosa to flee from a cult leader and his army in a high‑octane chase across the desert.",
    releaseYear: 2015,
    genre: ["Action", "Adventure", "Sci-Fi"],
    runtime: 120,
    posterUrl: "https://example.com/mad_max_fury_road.jpg",
    createdBy: creatorId,
  },
  {
    title: "Titanic",
    overview:
      "A seventeen‑year‑old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill‑fated R.M.S. Titanic.",
    releaseYear: 1997,
    genre: ["Drama", "Romance"],
    runtime: 195,
    posterUrl: "https://example.com/titanic.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Green Mile",
    overview:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, but who has a mysterious gift.",
    releaseYear: 1999,
    genre: ["Crime", "Drama", "Fantasy"],
    runtime: 189,
    posterUrl: "https://example.com/the_green_mile.jpg",
    createdBy: creatorId,
  },
  {
    title: "Goodfellas",
    overview:
      "The rise and fall of mob associate Henry Hill and his friends over three decades in the mafia world.",
    releaseYear: 1990,
    genre: ["Biography", "Crime", "Drama"],
    runtime: 146,
    posterUrl: "https://example.com/goodfellas.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Dark Knight Rises",
    overview:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Selina Kyle, is forced from exile to save Gotham City from a new terrorist leader.",
    releaseYear: 2012,
    genre: ["Action", "Adventure", "Drama"],
    runtime: 165,
    posterUrl: "https://example.com/dark_knight_rises.jpg",
    createdBy: creatorId,
  },
  {
    title: "Django Unchained",
    overview:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in the pre‑Civil War South.",
    releaseYear: 2012,
    genre: ["Drama", "Western"],
    runtime: 165,
    posterUrl: "https://example.com/django_unchained.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Wolf of Wall Street",
    overview:
      "Based on true events, a New York stockbroker rises to wealth through corruption, fraud and drugs before falling under federal investigation.",
    releaseYear: 2013,
    genre: ["Biography", "Crime", "Drama"],
    runtime: 180,
    posterUrl: "https://example.com/wolf_of_wall_street.jpg",
    createdBy: creatorId,
  },
  {
    title: "Casablanca",
    overview:
      "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape French Morocco during WWII.",
    releaseYear: 1942,
    genre: ["Drama", "Romance", "War"],
    runtime: 102,
    posterUrl: "https://example.com/casablanca.jpg",
    createdBy: creatorId,
  },
  {
    title: "Citizen Kane",
    overview:
      "Following the death of a publishing tycoon, reporters scramble to uncover the meaning of his final utterance: 'Rosebud'.",
    releaseYear: 1941,
    genre: ["Drama", "Mystery"],
    runtime: 119,
    posterUrl: "https://example.com/citizen_kane.jpg",
    createdBy: creatorId,
  },
  {
    title: "12 Angry Men",
    overview:
      "A jury hold‑out attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    releaseYear: 1957,
    genre: ["Drama"],
    runtime: 96,
    posterUrl: "https://example.com/12_angry_men.jpg",
    createdBy: creatorId,
  },
  {
    title: "The Shining",
    overview:
      "A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and future.",
    releaseYear: 1980,
    genre: ["Drama", "Horror"],
    runtime: 146,
    posterUrl: "https://example.com/the_shining.jpg",
    createdBy: creatorId,
  },
];

async function main() {
  for (const movie of movies) {
    await prisma.movie.create({ data: movie });
    console.log(`Created movie: ${movie.title}`);
  }
  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
