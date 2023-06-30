import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  // articles= [
  // {
  //   "source": { "id": "cnn", "name": "CNN" },
  //   "author": "Nouran Salahieh,Samantha Beech",
  //   "title": "Voice recordings and data from the mother ship that carried the Titan submersible before it imploded will be examined, investigators say - CNN",
  //   "description": "As a remotely operated robot maps out the debris field from the fatal Titan submersible implosion, investigators will be reviewing voice recordings from the mother ship that carried the vessel and its five occupants on its journey to the site of the Titanic w…",
  //   "url": "https://www.cnn.com/2023/06/25/americas/submersible-titanic-implosion-deaths-sunday/index.html",
  //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230623140102-01a-oceangate-investigation-restricted.jpg?c=16x9&q=w_800,c_fill",
  //   "publishedAt": "2023-06-25T05:49:00Z",
  //   "content": "As a remotely operated robot maps out the debris field from the fatal Titan submersible implosion, investigators will be reviewing voice recordings from the mother ship that carried the vessel and it… [+5470 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Bleeding Cool News" },
  //   "author": "Gavin Sheehan",
  //   "title": "Valorant Reveals Everything Left To Show Off For Episode 7 - Bleeding Cool News",
  //   "description": "Riot Games took time over the weekend to release new information for Episode 7 of Valorant, as some new info dropped about their latest agent. The team gave more info on how Deadlock will play, as they seem to be a little more well-rounded with some keen spec…",
  //   "url": "https://bleedingcool.com/games/valorant-reveals-everything-left-show-off-episode-7-2/",
  //   "urlToImage": "https://bleedingcool.com/wp-content/uploads/2023/06/Valorant-Deadlock-Agent-Wallpaper-1200x628.jpg",
  //   "publishedAt": "2023-06-25T04:32:09Z",
  //   "content": "Posted in: Games, Riot Games, Valorant, Video Games | Tagged: Riot Games, Valorant\r\nRiot Games released new details today about Episode 7 of Valorant, including new info on the battle pass and the la… [+2802 chars]"
  // },
  // {
  //   "source": { "id": "cnn", "name": "CNN" },
  //   "author": "Jessie Yeung",
  //   "title": "Moscow has stepped back from civil war with Wagner. But the danger’s not over, experts warn - CNN",
  //   "description": "Within a remarkable day and a half, Russia faced the very real threat of an armed insurrection, with President Vladimir Putin vowing to punish Wagner fighters marching toward Moscow and occupying cities along the way – before a sudden deal with Belarus seemed…",
  //   "url": "https://www.cnn.com/2023/06/25/europe/russia-prigozhin-wagner-insurrection-belarus-explainer-intl-hnk/index.html",
  //   "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230624181456-18-russia-rostov-0624.jpg?c=16x9&q=w_800,c_fill",
  //   "publishedAt": "2023-06-25T04:08:00Z",
  //   "content": "Within a remarkable day and a half, Russia faced the very realthreat of an armed insurrection, with President Vladimir Putin vowing to punish Wagner fighters marching toward Moscow and occupying citi… [+7758 chars]"
  // },
  // {
  //   "source": { "id": "usa-today", "name": "USA Today" },
  //   "author": "AP",
  //   "title": "Human remains found in California mountain area where actor Julian Sands went missing - USA TODAY",
  //   "description": "Hikers found human remains Saturday in a Southern California mountain area where actor Julian Sands disappeared five months ago, authorities said.",
  //   "url": "https://www.usatoday.com/story/life/people/2023/06/24/julian-sands-search-in-california-human-remains-found/70354347007/",
  //   "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/01/19/USAT/d79e1da8-6675-43ed-b2a6-a2971274f6d0-AP_People_Julian_Sands.jpg?crop=3844,2163,x0,y223&width=3200&height=1801&format=pjpg&auto=webp",
  //   "publishedAt": "2023-06-25T03:52:33Z",
  //   "content": "SAN BERNARDINO, Calif. Hikers found human remains Saturday in a Southern California mountain area where actor Julian Sands disappeared five months ago, authorities said.\r\nThe body discovered around 1… [+1128 chars]"
  // },
  // {
  //   "source": { "id": "abc-news", "name": "ABC News" },
  //   "author": "BEN FINLEY and HOLLY RAMER Associated Press",
  //   "title": "Previous passengers recall ill-fated Titan: 'I 100% knew this was going to happen' - ABC News",
  //   "description": "Talk to someone who went on previous trips on the Titan submersible and they’re likely to mention a technology glitch",
  //   "url": "https://abcnews.go.com/US/wireStory/previous-passengers-recall-ill-fated-titan-100-knew-100350668",
  //   "urlToImage": "https://s.abcnews.com/images/US/wirestory_fd78c1e40917bd3d941274b4427eba97_12x5_992.jpg",
  //   "publishedAt": "2023-06-25T03:51:41Z",
  //   "content": "Talk to someone who rode on the Titan submersible, and they're likely to mention a technological glitch: the propulsion system failed or communications with people on the surface cut out. Maybe there… [+7174 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "MLB.com" },
  //   "author": "Rhett Bollinger",
  //   "title": "Angels score 13 runs in third inning vs. Rockies - MLB.com",
  //   "description": "DENVER -- It started out innocently enough with the Angels creating some fun trivia, becoming the first team in almost three years to hit back-to-back-to-back homers on three pitches.\nBut it got crazier and crazier from there for the Angels, who simply couldn…",
  //   "url": "https://www.mlb.com/news/angels-score-13-runs-in-third-inning-vs-rockies",
  //   "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/aswscnaqn2azpthaiagv.jpg",
  //   "publishedAt": "2023-06-25T03:08:34Z",
  //   "content": "DENVER -- It started out innocently enough with the Angels creating some fun trivia, becoming the first team in almost three years to hit back-to-back-to-back homers on three pitches.\r\nBut it got cra… [+3626 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Yahoo Entertainment" },
  //   "author": "Jason Owens",
  //   "title": "College World Series: Ty Floyd's 17 Ks, Cade Beloso's 11th-inning HR propel LSU to Game 1 thriller over Florida - Yahoo Sports",
  //   "description": "Josh Pearson's stunning catch in the 10th inning set up Cade Beloso's game-winning home run in the 11th.",
  //   "url": "https://sports.yahoo.com/college-world-series-ty-floyds-17-ks-cade-belosos-11th-inning-hr-propel-lsu-to-game-1-thriller-over-florida-023848201.html",
  //   "urlToImage": "https://s.yimg.com/ny/api/res/1.2/xFSIh9AeGHHcmnHP30AhIg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/4c7bec40-1308-11ee-9dfb-4ced5e30bfed",
  //   "publishedAt": "2023-06-25T02:38:00Z",
  //   "content": "Cade Beloso celebrates after hitting the go-ahead home run in the 11th inning. (AP Photo/Rebecca S. Gratz)\r\nTy Floyd struck out 17 Florida batters, and Josh Pearson snagged a game-saving 10th-inning … [+2794 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Variety" },
  //   "author": "Gene Maddaus",
  //   "title": "SAG-AFTRA Leaders Say Talks Have Been ‘Extremely Productive’ - Variety",
  //   "description": "With less than a week to go before their contract expires, the leaders of SAG-AFTRA are striking an optimistic note about the progress of negotiations. In a video sent to members on Saturday, union…",
  //   "url": "https://variety.com/2023/biz/news/sag-aftra-fran-drescher-duncan-crabtree-ireland-1235653888/",
  //   "urlToImage": "https://variety.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-24-at-6.21.58-PM.png?w=1000&h=563&crop=1",
  //   "publishedAt": "2023-06-25T01:45:00Z",
  //   "content": "With less than a week to go before their contract expires, the leaders of SAG-AFTRA are striking an optimistic note about the progress of negotiations.\r\nIn a video sent to members on Saturday, union … [+1989 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "WDIV ClickOnDetroit" },
  //   "author": "Ron Hilliard",
  //   "title": "Tracking possible severe weather on Sunday in Metro Detroit: Here's when, what to expect - WDIV ClickOnDetroit",
  //   "description": "Hot, muggy weather is here.",
  //   "url": "https://www.clickondetroit.com/weather/2023/06/25/tracking-possible-severe-weather-on-sunday-in-metro-detroit-heres-when/",
  //   "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/arc-cf/06-24-2023/t_42c5aa0393164ad8b7292507283459b7_name_image.jpg?_a=ATAPphC0",
  //   "publishedAt": "2023-06-25T01:33:33Z",
  //   "content": "4Warn Weather Hot, muggy weather is here.\r\nIt will be hot and humid on Sunday. Highs will be in the mid 80s. An isolated shower will be possible in the morning, but more showers and thunderstorms wil… [+1139 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "SciTechDaily" },
  //   "author": null,
  //   "title": "Fusion, Recoil, Discovery: A New Type of Atomic Nucleus Discovered - SciTechDaily",
  //   "description": "In a remarkable scientific breakthrough researchers have discovered the lightest isotope of the rare and rapidly decaying element, astatine. The discovery of 190-Astatine was made by Master of Science graduate Henna Kokkonen as part of her thesis work, provid…",
  //   "url": "https://scitechdaily.com/fusion-recoil-discovery-a-new-type-of-atomic-nucleus-discovered/",
  //   "urlToImage": "https://scitechdaily.com/images/Atomic-Nucleus-Art-Concept.jpg",
  //   "publishedAt": "2023-06-25T01:30:26Z",
  //   "content": "Researchers at the Accelerator Laboratory of the University of Jyväskylä, Finland, have made a groundbreaking discovery of a new atomic nucleus, 190-Astatine, which is now the lightest known isotope … [+3083 chars]"
  // },
  // {
  //   "source": { "id": "cbs-news", "name": "CBS News" },
  //   "author": "Kerry Breen, Faris Tanyos",
  //   "title": "Montana bridge collapse sends train cars into Yellowstone River, prompting federal response - CBS News",
  //   "description": "Several of the cars which collapsed into the river contained hot asphalt and molten sulfur, officials said.",
  //   "url": "https://www.cbsnews.com/news/montana-bridge-collapse-train-derails-yellowstone-river-asphalt-molton-sulfur/",
  //   "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/24/82590957-a551-459c-ae08-ee2e001ae96d/thumbnail/1200x630/2e6dd1e17deb0e3d5e0f261669838505/356223974-247753661324042-7901913354285815861-n.jpg?v=74b410729cdff54299e4158e8919d920",
  //   "publishedAt": "2023-06-25T01:01:00Z",
  //   "content": "A bridge collapse early Saturday morning in Montana sent several freight train cars crashing into the Yellowstone River, authorities said. The train was carrying hazardous materials, but it remains u… [+2158 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Oneesports.gg" },
  //   "author": "Nigel \"Zim947\" Zalamea",
  //   "title": "Deadlock abilities explained: How to weave chaos using Valorant's new web mechanics - ONE Esports",
  //   "description": "Deadlock abilities will give teams the advantage on defense. She can concuss, trap, block, and eliminate enemies with her kit.",
  //   "url": "https://www.oneesports.gg/valorant/deadlock-abilities-explained/",
  //   "urlToImage": "https://cdn.oneesports.gg/cdn-data/2023/06/Valorant_Deadlock_KeyArt.jpg",
  //   "publishedAt": "2023-06-25T00:32:31Z",
  //   "content": "A new hunter has joined the Valorant battlefield.\r\nThese Deadlock abilities are a game-changer that will force her opponents to change their approach when attacking sites and pushing on defense.\r\nDea… [+2646 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "KSAT San Antonio" },
  //   "author": "Cody King, Kolten Parker, Ivan Herrera, Andrew Wilson, Adam Barraza, Dillon Collier, Avery Everett",
  //   "title": "What we know about 3 San Antonio police officers charged with murder in death of Melissa Perez - KSAT San Antonio",
  //   "description": "SAPD Chief William McManus said Friday night the officers didn’t follow department training or policy and “used deadly force, which was not reasonable given all the circumstances as we now understand them.”",
  //   "url": "https://www.ksat.com/news/local/2023/06/25/what-we-know-about-3-san-antonio-police-officers-charged-with-murder-in-death-of-melissa-perez/",
  //   "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/ZYDAP2IOXRAJFMIH4NJWDEVN64.png?_a=ATAPphC0",
  //   "publishedAt": "2023-06-25T00:19:27Z",
  //   "content": "SAN ANTONIO Three San Antonio police officers are charged with murder after they shot and killed a woman inside her Southwest Side apartment early Friday morning, according to SAPD.\r\nSgt. Alfred Flor… [+6914 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Albuquerque Journal" },
  //   "author": "Matthew Reisen / Journal Staff Writer",
  //   "title": "Albuquerque police kill man in shootout inside West Central grocery store - Albuquerque Journal",
  //   "description": "Albuquerque police say a call about a person asleep in an SUV on Saturday afternoon ended with officers killing a man inside a bustling supermarket off West Central.",
  //   "url": "https://www.abqjournal.com/news/albuquerque-police-kill-man-in-shootout-inside-west-central-grocery-store/article_1227039c-12e3-11ee-b840-93d8bfaadd43.html",
  //   "urlToImage": "https://bloximages.chicago2.vip.townnews.com/abqjournal.com/content/tncms/assets/v3/editorial/1/22/1227039c-12e3-11ee-b840-93d8bfaadd43/6497af5bc068f.preview.jpg?crop=1662%2C873%2C0%2C187&resize=1200%2C630&order=crop%2Cresize",
  //   "publishedAt": "2023-06-24T23:01:00Z",
  //   "content": "Albuquerque police say a call about a man asleep in an SUV on Saturday afternoon ended with officers killing that man in a gunfight inside a bustling supermarket off West Central.\r\nPolice Chief Harol… [+3880 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Yahoo Entertainment" },
  //   "author": "DAVID HAMILTON",
  //   "title": "Ford Explorer recall prompts Transportation Department investigation - Yahoo News",
  //   "description": "The National Highway Traffic Safety Administration is investigating a Ford Motor Co. recall of more than a quarter-million Explorer SUVs in the U.S. after...",
  //   "url": "https://news.yahoo.com/ford-explorer-recall-prompts-transportation-213936679.html",
  //   "urlToImage": "https://s.yimg.com/ny/api/res/1.2/F477cq8fdXazl1vzDDJUOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/a1797abe3d01ce1d60e4db377c183005",
  //   "publishedAt": "2023-06-24T21:39:36Z",
  //   "content": "SAN FRANCISCO (AP) The National Highway Traffic Safety Administration is investigating a Ford Motor Co. recall of more than a quarter-million Explorer SUVs in the U.S. after receiving complaints abou… [+1291 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "13WHAM-TV" },
  //   "author": "Mark McLean",
  //   "title": "More showers and thunder Sunday - 13WHAM-TV",
  //   "description": "Rochester, NY (WHAM) - It was the first rain in a week for Rochester today and it looks like we'll have another chance for some showers and drought relief headi",
  //   "url": "https://13wham.com/news/local/more-showers-and-thunder-sunday",
  //   "urlToImage": "https://13wham.com/resources/media/524ef033-9711-499f-ba96-c931f85a3704-large16x9_AfewshowersandstormsSundayafternoon.png",
  //   "publishedAt": "2023-06-24T21:24:50Z",
  //   "content": null
  // },
  // {
  //   "source": { "id": null, "name": "Hollywood Reporter" },
  //   "author": "Christy Piña",
  //   "title": "‘It Ends With Us’ Author Addresses Controversy Surrounding Blake Lively and Justin Baldoni Casting in Sony Adaptation - Yahoo Entertainment",
  //   "description": "It Ends With Us author Colleen Hoover opened up about the controversy surrounding the casting of Blake Lively and Justin Baldoni in Sony’s adaptation of her ...",
  //   "url": "https://www.hollywoodreporter.com/movies/movie-news/it-ends-with-us-author-controversy-blake-lively-justin-baldoni-casting-1235523234/",
  //   "urlToImage": "https://s.yimg.com/ny/api/res/1.2/_WW6F2HrEKp92mnbltZyiQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzY-/https://media.zenfs.com/en/the_hollywood_reporter_217/8515fcb809032a13b16cf2a7c3fd1589",
  //   "publishedAt": "2023-06-24T21:13:54Z",
  //   "content": "It Ends With Us author Colleen Hoover opened up about the controversy surrounding the casting of Blake Lively and Justin Baldoni in Sonys adaptation of her best-selling novel of the same name.\r\nIn a … [+3177 chars]"
  // },
  // {
  //   "source": { "id": "usa-today", "name": "USA Today" },
  //   "author": "Nolan King",
  //   "title": "Elon Musk vs. Mark Zuckerberg: MMA community reacts, take sides in pitched billionaire fight - MMA Junkie",
  //   "description": "Jon Jones, Georges St-Pierre, dozens of others in the MMA community weigh in on a potential Elon Musk vs. Mark Zuckerberg fight.",
  //   "url": "https://mmajunkie.usatoday.com/lists/elon-musk-vs-mark-zuckerberg-fighters-react-ufc-jon-jones-dana-white-mma",
  //   "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2023/06/Elon-Musk-vs.-Mark-Zuckerberg.png?w=1000&h=576&crop=1",
  //   "publishedAt": "2023-06-24T19:30:00Z",
  //   "content": "Elon Musk vs. Mark Zuckerberg may or may not ever actually throw down inside a cage, but a proposed fight between the two caused quite a stir on social media over the past week.\r\nAfter Musk said he w… [+4189 chars]"
  // },
  // {
  //   "source": { "id": null, "name": "Jamanetwork.com" },
  //   "author": "Steven E. Nissen, MD",
  //   "title": "Bempedoic Acid for Primary Prevention of Cardiovascular Events in Statin-Intolerant Patients - JAMA Network",
  //   "description": "This 32-country randomized clinical trial assesses the effects of bempedoic acid on cardiovascular outcomes in statin-intolerant patients receiving bempedoic acid vs placebo for primary prevention of a first major adverse cardiovascular event.",
  //   "url": "https://jamanetwork.com/journals/jama/fullarticle/2806646",
  //   "urlToImage": "https://cdn.jamanetwork.com/ama/content_public/journal/jama/0/joi230067va_1687374294.152.png?Expires=2147483647&Signature=v-zD2CYJO~0zpb5QYePdIukWb90-Nln5n6gv5F4cCKcTsXA~bLTLjLHl1iV8ZcCVAziVfCb3iSpIWwIi7qma1lt14CvY8cvdABDiGQPNletLLMxID4DSrsEs3LhqNeO3voxTsT9WdFPRkDr2cm-9ELOK-9K4lYobOF9G2Lsneu1Iid881JNUOTHmtZV0zQOeKuz7QwB1dripdDVicyNO3g5TBAQjMHQXm1H0JlDGBSfEkm34R7h-Ykx2ZXSoY846A5OoPBXIL6jr2A~miDAhvtcZ8oJvWcI~gG~74FxzUrWQeAmq9YbFycleViMXz2tKd4HNNMRMWzwfvR2HcAp--A__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA",
  //   "publishedAt": "2023-06-24T18:35:29Z",
  //   "content": "Key PointsQuestion \r\n In statin-intolerant primary prevention patients at high cardiovascular risk, does bempedoic acid reduce major adverse cardiovascular events?\r\nFindings \r\n In this randomized tri… [+33213 chars]"
  // },
  // {
  //   "source": { "id": "usa-today", "name": "USA Today" },
  //   "author": "Victoria Hernandez",
  //   "title": "NBA's Thompson twins, Amen and Ausar, debate who is the 'big brother' - USA TODAY",
  //   "description": "Amen Thompson was born one minute earlier than his twin brother, but Ausar has a legitimate reason he considers himself the \"big brother.\"",
  //   "url": "https://www.usatoday.com/story/sports/nba/2023/06/24/nba-amen-ausar-thompson-debate-who-is-really-the-big-brother/70353725007/",
  //   "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/06/24/USAT/cdd43738-c0b5-49fd-b138-7724ff15010b-USATSI_20933210.jpg?crop=3891,2189,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
  //   "publishedAt": "2023-06-24T18:32:31Z",
  //   "content": "Amen and Ausar Thompson made history Thursday as the twins were both selected in the top 5 of the NBA draft.\r\nAmen, who was born first by a minute, continued his streak of accomplishments ahead of hi… [+1335 chars]"
  // }

  // ]
  constructor(props) {
    super(props);
    this.state = {
      // articles:this.articles, //yeh tb use karenge jb artivles manually fill kr rhe
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,
      
    };
    document.title=`${this.props.category}-khabron ki duniya`;
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=372159c173f948ec9ed9949a73e57264&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);

    this.setState({ loading: true });
    let parsedData = await data.json();
    this.props.setProgress(70);
    //json me convert kar denge data ko
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
     
    });
    this.props.setProgress(100);

  }
  // handleNextCLick = async () => {
  //   if (
  //     this.state.page + 1 >
  //     Math.ceil(this.state.totalResults / this.props.pageSize)
  //   ) {
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=372159c173f948ec9ed9949a73e57264&page=${
  //       this.state.page + 1
  //     }&pageSize=${this.props.pageSize}`;
  //     let data = await fetch(url);
  //     this.setState({ loading: true });
  //     let parsedData = await data.json(); //json me convert kar denge data ko
  //     console.log(parsedData);
  //     this.setState({
  //       articles: parsedData.articles,
  //       loading: false,
  //       page: this.state.page + 1,
  //     });
  //   }
  // };

  // handlePreviousCLick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=372159c173f948ec9ed9949a73e57264&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   this.setState({ loading: true });
  //   let parsedData = await data.json(); //json me convert kar denge data ko
  //   console.log(parsedData);
  //   this.setState({
  //     articles: parsedData.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //   });
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=372159c173f948ec9ed9949a73e57264&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
      
    let parsedData = await data.json();
    this.setState((prevState) => ({
      articles: prevState.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    }));
  };
  

  render() {
    return (
      <div className="container my-6 ">
        <h1 className="text-center my-4">
          <strong style={{ color: "white" }}>
            Khabron Ki Duniya-
            <span
              style={{
                border: "2px solid white",
                backgroundColor: "red",
                fontSize: 25,
                color: "white",
                padding: "1px 5px 1px 5px",
              }}
            >
              {this.props.category}
            </span>
          </strong>
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row mx-5">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-light mb-3"
            onClick={this.handlePreviousCLick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-light mb-3"
            onClick={this.handleNextCLick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
