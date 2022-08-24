import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Marina Lopes",
            "title": "Kraft Heinz recalls contaminated Capri Sun Wild Cherry drinks - The Washington Post",
            "description": "Kraft Heinz said the drinks, with a “best when used by” date of June 25, 2023, were accidentally mixed with a diluted cleaning solution at a factory.",
            "url": "https://www.washingtonpost.com/world/2022/08/16/capri-sun-recall-kraft-heinz/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/W4E4ZFQ5GQI63HHGNASTXUYYMQ.jpg&w=1440",
            "publishedAt": "2022-08-16T12:20:00Z",
            "content": "Placeholder while article actions load\r\nKraft Heinz recalled more than 5,700 cases of Wild Cherry Capri Sun drinks contaminated with cleaning solution, the company said in a statement on Friday. The … [+1962 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Annabelle Timsit, Katerina Ang",
            "title": "Russia-Ukraine war latest updates - The Washington Post",
            "description": "An ammunition depot was on fire near Dzhankoi. Three foreign nationals could face the death penalty in eastern Ukraine.",
            "url": "https://www.washingtonpost.com/world/2022/08/16/russia-ukraine-war-latest-updates/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CL5TCWA47UI63HHGNASTXUYYMQ.jpg&w=1440",
            "publishedAt": "2022-08-16T12:09:27Z",
            "content": "Return to menuInside Ukraines Zaporizhzhia nuclear plant, workers describe explosions and constant fear. Six of them spoke to The Washington Posts Loveday Morris, Ievgeniia Sivorka and John Hudson ab… [+1000 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": "Ryan Leston",
            "title": "Ezra Miller Apologizes for Recent Behavior, Says They're Suffering 'Complex Mental Health Issues' - IGN - IGN",
            "description": "The Flash star Ezra Miller has issued an apology for their recent behaviour, said they're suffering \"complex mental healthy issues\", and confirmed they have begun treatment.",
            "url": "https://www.ign.com/articles/ezra-miller-apologizes-complex-mental-health-issues",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/06/19/theflash-1623696668930-1655665330114.jpg?width=1280",
            "publishedAt": "2022-08-16T11:43:31Z",
            "content": "The Flash star Ezra Miller has issued an apology for their recent behavior.\r\nAccording to Variety, the 29-year-old actor confirmed that they are suffering complex mental health issues following a ser… [+2236 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Ella Nilsen and Rachel Ramirez, CNN",
            "title": "Steep water cuts are coming for the Southwest as Colorado River shrinks and Lake Mead's level plummets - CNN",
            "description": "New mandatory water cuts are coming for the Colorado River. But they aren't enough to solve the West's water crisis.",
            "url": "https://www.cnn.com/2022/08/16/us/colorado-river-water-cuts-lake-mead-negotiations-climate/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220816032942-colorado-river-arizona-california-border-super-tease.jpg",
            "publishedAt": "2022-08-16T11:07:00Z",
            "content": "Officials reveal new details about the 3 sets of human remains found at Lake Mead\r\nThe West's historic drought is threatening hydropower at Hoover Dam\r\nExperts say the term 'drought' may be insuffici… [+296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Carmen Reinicke",
            "title": "Stock futures are little changed, traders await Walmart earnings - CNBC",
            "description": "Here's how stock futures traded early Tuesday morning",
            "url": "https://www.cnbc.com/2022/08/15/stock-market-news-futures-open-to-close.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107103947-1660578167510-nyse1.jpg?v=1660578193&w=1920&h=1080",
            "publishedAt": "2022-08-16T10:34:00Z",
            "content": "U.S. stock futures were little changed Tuesday after a solid session the prior day, as traders awaited quarterly reports from major U.S. retailers. \r\nDow Jones Industrial Average futures dipped 26 po… [+1306 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Paul Steinhauser",
            "title": "Top Trump targets Cheney, Murkowski, face voters in Tuesday’s primaries in Wyoming, Alaska - Fox News",
            "description": "Rep. Liz Cheney, Sen. LIsa Murkowski and former Gov. Sarah Palin, as well as former President Donald Trump, are in the spotlight Tuesday as Alaska and Wyoming hold primaries.",
            "url": "https://www.foxnews.com/politics/top-trump-targets-cheney-murkowski-face-voters-tuesdays-primaries-wyoming-alaska",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/Liz-Cheney-talks-with-voters-at-Wyomings-Wind-River-Reservation-on-July-16-2022.jpg",
            "publishedAt": "2022-08-16T10:28:34Z",
            "content": "Rep. Liz Cheney of Wyoming and Sen. Lisa Murkowski of Alaska sit high atop former President Trumps Republican hit list.\r\nAs Alaska and Wyoming hold primary elections on Tuesday, both federal lawmaker… [+8824 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jack Stebbins",
            "title": "Home Depot's second-quarter earnings beat expectations, company stands by 2022 guidance - CNBC",
            "description": "Home Depot reported second-quarter earnings and revenue that beat expectations Tuesday morning.",
            "url": "https://www.cnbc.com/2022/08/16/home-depot-hd-q2-2022-earnings.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106843931-1614033927070-hd.jpg?v=1648498896&w=1920&h=1080",
            "publishedAt": "2022-08-16T10:04:37Z",
            "content": "Home Depot on Tuesday reported quarterly earnings and revenue that beat analysts' expectations as the company cited continued strength in demand for home improvement projects.\r\n\"Our team has done a f… [+1582 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Adrianna Rodriguez, USA TODAY",
            "title": "Monkeypox in pets: Signs, symptoms your dog or cat may be infected - USA TODAY",
            "description": "Although it's possible, health experts say monkeypox in domestic pets is rare. Here's how to know if your dog or cat has been infected with the virus.",
            "url": "https://www.usatoday.com/story/news/health/2022/08/16/monkeypox-pets-signs-symptoms-your-dog-cat-may-infected/10297408002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/08/15/USAT/3b02f4a9-f268-4354-9059-b6eea2df34e5-GettyImages-1078250394.jpg?auto=webp&crop=2120,1193,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2022-08-16T09:01:26Z",
            "content": "As U.S. health officials struggle to contain the monkeypox outbreak, some pet owners wonder if their four-legged companions could be at risk.\r\nResearchers discovered it’s possible after identifying a… [+5246 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Rhea Mogul, CNN",
            "title": "Chinese research ship Yuan Wang 5 docks at Sri Lanka's Hambantota port - CNN",
            "description": "A Chinese research ship docked at a southern Sri Lankan port Beijing leases from the government on Tuesday, officials said, despite security concerns raised by India about the vessel's presence in nearby waters.",
            "url": "https://www.cnn.com/2022/08/16/asia/india-china-tensions-military-ship-docks-sri-lanka-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220816021443-02-chinese-military-ship-sri-lanka-super-tease.jpg",
            "publishedAt": "2022-08-16T08:55:00Z",
            "content": "(CNN)A Chinese research ship docked at a southern Sri Lankan port Beijing leases from the government on Tuesday, officials said, despite security concerns raised by India about the vessel's presence … [+7003 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Russia says 'no need' to use nuclear weapons in Ukraine - Reuters",
            "description": "Russia has \"no need\" to use nuclear weapons in Ukraine, its defence minister said on Tuesday, describing media speculation that Moscow might deploy nuclear or chemical weapons in the conflict as \"absolute lies\".",
            "url": "https://www.reuters.com/world/europe/defence-minister-shoigu-says-russia-has-no-need-use-nuclear-weapons-ukraine-2022-08-16/",
            "urlToImage": "https://www.reuters.com/resizer/I7OWeO7Z4le5esEEZ8vEMH9EcVg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EYSO35RTWFN6FC7RNWHEX773LM.jpg",
            "publishedAt": "2022-08-16T08:52:00Z",
            "content": "MOSCOW, Aug 16 (Reuters) - Russia has \"no need\" to use nuclear weapons in Ukraine, its defence minister said on Tuesday, describing media speculation that Moscow might deploy nuclear or chemical weap… [+1498 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "Jay Bonggolto",
            "title": "Android 13 squashes a ton of Google Pixel bugs with August software patch - Android Central",
            "description": "The update fixes more than a hundred bugs.",
            "url": "https://www.androidcentral.com/apps-software/android-13-august-patch-bug-fixes",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/jZkCBn2GnkcAWd6NkU5JpD-1200-80.jpg",
            "publishedAt": "2022-08-16T08:16:02Z",
            "content": "<ul><li>Google has rolled out the August 2022 software update alongside the stable Android 13 release.</li><li>The update fixes a bevy of bugs affecting the battery, camera, connectivity, Bluetooth, … [+2024 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Landon Mion",
            "title": "Jury selection begins in R. Kelly's federal trial in Chicago - Fox News",
            "description": "Jury selection is underway at R. Kelly’s federal trial in his hometown of Chicago. The 'I Wish' singer faces charges that he rigged his 2008 state child pornography trial.",
            "url": "https://www.foxnews.com/entertainment/jury-selection-begins-r-kellys-federal-trial-chicago",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/r-kelly.jpg",
            "publishedAt": "2022-08-16T07:02:26Z",
            "content": "Jury selection for singer R. Kelly's federal trial on allegations of child pornography and rigging his 2008 state trial kicked off Monday in Chicago in a trial that is expected to last up to four wee… [+2723 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Stephanie Nolen, Dado Galdieri",
            "title": "The Forgotten Virus: Zika Families and Researchers Struggle for Support - The New York Times",
            "description": "Some babies born with devastating birth defects from the mosquito-borne illness are 7 now, but Covid turned the world’s attention away.",
            "url": "https://www.nytimes.com/2022/08/16/health/zika-children-research.html",
            "urlToImage": "https://static01.nyt.com/images/2022/08/16/science/16sci-brazil-zika1/00sci-brazil-zika1-facebookJumbo.jpg",
            "publishedAt": "2022-08-16T06:59:14Z",
            "content": "Sometimes I wonder: What will happen to him when Im gone? Ms. Santos said.\r\nBecause Ms. Santos is a fierce advocate for her son, he gets physiotherapy and audio and visual stimulation every day. In R… [+1795 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The A.V. Club"
            },
            "author": "Kimberly Potts",
            "title": "Better Call Saul ends with blasts from the past and one last twist - The A.V. Club",
            "description": "The series finale “Saul Gone” is a supremely satisfying sendoff",
            "url": "https://www.avclub.com/better-call-saul-review-season-6-episode-13-saul-gon-1849415911",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8de3741a322257b53730522efe49beda.png",
            "publishedAt": "2022-08-16T06:39:00Z",
            "content": "When asked to give a hint about how Better Call Saul would wrap up during a Tribeca Festival panel in June, Bob Odenkirk offered two words: second life. That clue turned out to be much pithier and mo… [+7946 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Josh Dawsey, Shayna Jacobs, Mark Berman",
            "title": "Trump executive Weisselberg expected to reach plea deal - The Washington Post",
            "description": "The longtime Trump Organization executive was indicted last year.",
            "url": "https://www.washingtonpost.com/nation/2022/08/15/allen-weisselberg-trump-plea/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SXPQGKA2KYI63OMYWKVWR5MENA.jpg&w=1440",
            "publishedAt": "2022-08-16T04:29:27Z",
            "content": "Placeholder while article actions load\r\nAllen Weisselberg, the longtime chief financial officer of former president Donald Trumps company, is expected to reach a plea deal in a criminal case against … [+2700 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Amir Vera and Cheri Mossburg, CNN",
            "title": "Son of the suspect in killings of 2 Muslim men in Albuquerque ordered to remain in custody on a federal charge of making false statements - CNN",
            "description": "The son of a man suspected of killing at least two men in a recent spate of killings that terrorized Albuquerque, New Mexico, was ordered Monday to remain in federal custody on a charge tied to his father's case.",
            "url": "https://www.cnn.com/2022/08/15/us/shaheen-syed-albuquerque-federal-custody/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220816025402-unity-event-new-mexico-super-tease.jpg",
            "publishedAt": "2022-08-16T04:05:00Z",
            "content": "(CNN)The son of a man suspected of killing at least two men in a recent spate of killings that terrorized Albuquerque, New Mexico, was ordered Monday to remain in federal custody on a charge tied to … [+3258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Christopher Clarey",
            "title": "Serena Williams Takes On Emma Raducanu On the Road to the U.S. Open - The New York Times",
            "description": "After a postponement because of physical problems, Williams is scheduled to play Emma Raducanu on Tuesday. Her prime target is the U.S. Open, and she will not want to take undue risks.",
            "url": "https://www.nytimes.com/2022/08/16/sports/tennis/serena-williams-western-southern-open.html",
            "urlToImage": "https://static01.nyt.com/images/2022/08/16/multimedia/16tennis-serena4/16tennis-serena4-facebookJumbo.jpg",
            "publishedAt": "2022-08-16T04:01:12Z",
            "content": "It was the third singles match of Williamss latest and surely last comeback, following an opening-round defeat to Harmony Tan, an unseeded Frenchwoman, at Wimbledon in June and a first-round victory … [+1142 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Bizarre Underwater Snow Gives Clues About the Icy Shell of Jupiter’s Moon Europa - SciTechDaily",
            "description": "Below the thick icy crust of Jupiter's moon Europa is a massive, global ocean where the snow floats upwards onto inverted ice peaks and submerged ravines. Bizarre underwater snow is known to occur below ice shelves on Earth, but new research shows that the sa…",
            "url": "https://scitechdaily.com/bizarre-underwater-snow-gives-clues-about-the-icy-shell-of-jupiters-moon-europa/",
            "urlToImage": "https://scitechdaily.com/images/Underwater-Snow-in-Antarctica.jpg",
            "publishedAt": "2022-08-16T03:21:00Z",
            "content": "ByUniversity of Texas at AustinAugust 15, 2022\r\nMounds of snow-like frazil ice under the Antarctic ice shelf. According to research from UT Austin, Europas ice shell could be made of the same stuff. … [+3662 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Rob McLean, CNN Business",
            "title": "4moms recalls millions of baby swings and rockers - CNN",
            "description": "Millions of baby swings and rockers that pose a risk of asphyxiation or other injuries to infants have been recalled, according to an announcement Monday from the US Consumer Product Safety Commission.",
            "url": "https://www.cnn.com/2022/08/15/business/4moms-recall-baby-swings-baby-rockers/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220815180538-mamaroo-infant-swing-recall-super-tease.jpg",
            "publishedAt": "2022-08-16T03:11:00Z",
            "content": "New York (CNN Business)Millions of baby swings and rockers that pose a risk of asphyxiation or other injuries to infants have been recalled, according to an announcement Monday from the US Consumer P… [+1858 chars]"
        }
    ]

constructor(){
    super()
    this.state = {
        articles: this.articles,
        loading: false
    }
}
render() {
    return (
        <div className="container my-3" >
            <h2>NewsMonk - Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{ return <div className="col-md-4" key={element.url} >
                    <NewsItem Title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                </div>})}
            </div>
        </div>
    )
}
}

export default News