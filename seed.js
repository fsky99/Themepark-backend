require("dotenv").config()
const mongoose = require("mongoose")
const ThemePark = require("./models/themePark")
const Ride = require("./models/ride")

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const themeParkData = [
  {
    name: "Six Flags México",
    location: "Mexico City, Mexico",
    image:
      "https://www.civitatis.com/f/mexico/ciudad-de-mexico/entrada-six-flags-589x392.jpg",
    description:
      "Six Flags México is a amusement park located in the Tlalpan forest and borough, on the southern edge of Mexico City, Mexico. It is owned and operated by Six Flags, and is the most visited theme park in Latin America with 2.8 million annual visitors. It was previously known as Reino Aventura when it was Mexican-owned and featured the orca whale Keiko (from the movie Free Willy) as its principal attraction.",
    ridesIds: [],
  },
  {
    name: "Canada's Wonderland",
    location: "Vaughan, Ontario, Canada",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/ac/03.jpg",
    description:
      "Canada's Wonderland, formerly known as Paramount Canada's Wonderland, is a 134-hectare (330-acre) amusement park located in Vaughan, Ontario, a municipality within the Greater Toronto Area. Opened in 1981 by the Taft Broadcasting Company and the Great-West Life Assurance Company, it was the first major theme park in Canada and remains the country's largest.Cedar Fair purchased the park from Paramount Parks in 2006, and they have owned and operated the park since then. In 2019, it was the most-visited seasonal amusement park in North America with an estimated 3.9 million guests. The park still retains this record, with an estimated 3.8 million guests in 2022 amid the COVID-19 pandemic.",
    ridesIds: [],
  },
  {
    name: "Hong Kong Disneyland",
    location: "Hong Kong Disneyland Resort, Sunny Bay, Lantau Island, Hong Kong",
    image: "https://www.discoverhongkong.com/content/dam/dhk/intl/explore/attractions/the-ultimate-guide-to-hong-kong-disneyland/ultimate-guide-to-hong-kong-disneyland-1920x1080.jpg",
    description: "Hong Kong Disneyland (Chinese: 香港迪士尼樂園) (abbreviated HKDL; also known as HK Disneyland) is a theme park located on reclaimed land in Penny's Bay, Lantau Island, Hong Kong. It is the first Disneyland in Asia outside of Japan. The Hong Kong Disneyland is located inside the Hong Kong Disneyland Resort and it is owned and managed by Hong Kong International Theme Parks. It is the most visited theme park in Hong Kong, followed by Ocean Park Hong Kong. Hong Kong Disneyland opened to visitors on Monday, September 12, 2005, at 13:00 HKT. Disney attempted to avoid problems of cultural backlash by incorporating Chinese culture, customs and traditions when designing and building the resort, including adherence to the rules of feng shui. Notably, a bend was put in a walkway near the Hong Kong Disneyland Resort entrance so good qi energy would not flow into the South China Sea",
    ridesIds: [],
  },
  {
    name: "Universal Studios Japan",
    location: "Konohana-ku, Osaka, Japan",
    image: "https://www.travelcaffeine.com/wp-content/uploads/2022/09/night-super-nintendo-world-mario-land-universal-studios-bricker-1245.jpg",
    description: "Universal Studios Japan (ユニバーサル・スタジオ・ジャパン) is a theme park located in Osaka, Japan. Opened on March 31, 2001, it is one of six Universal Studios theme parks worldwide and was the first to open outside the United States. The park is owned and operated by USJ LLC, a wholly owned subsidiary of NBCUniversal.The park is similar in layout to Universal Studios Florida and contains selected attractions from both Universal Orlando and Universal Studios Hollywood, in addition to a small number of unique attractions.",
    ridesIds: [],
  },
  {
    name: "Tokyo DisneySea",
    location: "Tokyo Disney Resort, Urayasu, Chiba Prefecture, Japan",
    image: "https://www.japan-guide.com/g22/3016_04.jpg",
    description: "Tokyo DisneySea (東京ディズニーシー, Tōkyō DizunīShī) is a theme park at the Tokyo Disney Resort located in Urayasu, Chiba Prefecture, Japan, just next to Tokyo. It opened on 4 September 2001, at a cost of 335 billion yen. The Oriental Land Company owns the park, and licenses intellectual property from The Walt Disney Company. In 2022, Tokyo DisneySea hosted 10.1 million visitors, making it the eighth-most visited theme park in the world and the third-most visited in Japan.",
    ridesIds: [],
  },
  {
    name: "Shanghai Disneyland",
    location: "Shanghai Disney Resort, Pudong, Shanghai, China",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Shanghai_disneyland_castle.jpg",
    description: "Shanghai Disneyland (Chinese: 上海迪士尼乐园; Pinyin: Shànghǎi díshìní lèyuán, Shanghainese: Zaon-he Diq-zy-nyi Loq-yoe) is a theme park located in Chuansha New Town, Pudong, Shanghai",
    ridesIds: [],
  },
  {
    name: "Six Flags Magic Mountain",
    location: "Santa Clarita Valley,USA",
    image: "https://www.tripsavvy.com/thmb/wSsSrpYTJEHC3n3KARpAmLH6DOs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/230461728_454833a9e7_o-56a384ed3df78cf7727dd570.jpg",
    description: "Six Flags Magic Mountain, formerly known and colloquially referred to as simply Magic Mountain, is a 209-acre (85 ha) amusement park located in Valencia, California, 35 miles (56 km) northwest of downtown Los Angeles. It opened on May 29, 1971, as a development of the Newhall Land and Farming Company and Sea World Inc. In 1979, Six Flags purchased the park and added Six Flags to the park's name.",
    ridesIds: [],
  },
  {
    name: "Yas Waterworld",
    location: "Abu Dhabi , UAE",
    image: "https://seektheworld.com/wp-content/uploads/Yas-Waterworld-Abu-Dhabi.jpg",
    description: "Yas Waterworld, the most legendary waterpark in the UAE. Experience the World's leading waterpark in Abu Dhabi with over 40 iconic rides!",
    ridesIds: [],
  },
  {
    name: "Ferrari World Abu Dhabi",
    location: "Abu Dhabi, UAE",
    image: "https://img.veenaworld.com/wp-content/uploads/2021/08/Ferrari-World-Abu-Dhabi-An-Adventure-Amusement-Park-scaled.jpg",
    description: "Ferrari-Branded Theme Park — Thrill seekers, buckle up for epic rides and family fun, only at Ferrari World Abu Dhabi. Feel The thriling surge of 4.8Gs as You Scale Heart-Racing 52m Heights at Ferrari World.",
    ridesIds: [],
  },
]
// const rideData = [
//   {
//     name: "Roller Coaster",
//     ageLimit: 12,
//     thrill: "High",
//     description: "Experience the thrill of this high-speed roller coaster!",
//     image: "roller_coaster.jpg",
//     themeParkId: [], // not an array but an id
//   },
// ]
async function seedDatabase() {
  try {
    await Promise.all([ThemePark.deleteMany({}), Ride.deleteMany({})])

    const createdThemeParks = await ThemePark.insertMany(themeParkData)

    rideData.forEach((ride, index) => {
      ride.themeParkId = [createdThemeParks[index]._id]
    })

    await Ride.insertMany(rideData)

    console.log("Database seeded successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    mongoose.disconnect()
  }
}

seedDatabase()
