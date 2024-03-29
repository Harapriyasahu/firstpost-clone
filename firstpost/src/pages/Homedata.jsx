import React from "react";
import Home from "./Home";
import { Posts } from "../config/PostData";

// const Posts = [
//   {
//     id: 1,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/01/economy.jpg?impolicy=website&width=320&height=180",
//     category: "Opinion",
//     title:
//       "How Modi government pushes the pedal on India’s growth story while reining in inflation",
//     desc: "India’s 8.7 per cent GDP growth in FY22 is a glowing testimony to Modinomics and how Prime Minister Narendra Modi has been able to navigate India's powerful growth story into a sustainably stronger orbit",
//   },

//   {
//     id: 2,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Stephen-Curry-NBA-Finals-Game-5-AP-640.jpg?impolicy=website&width=640&height=362",
//     category: "Sports",
//     title:
//       "Fan shows his tattoo to Roger Federer, here's how the Swiss tennis legend reacted",
//     desc: "Roger Federer has been out of the game since his quarter-final defeat at Wimbledon almost one year ago. The tennis legend recently underwent his third knee surgery in 18 months.",
//   },
//   {
//     id: 3,
//     img: "https://images.firstpost.com/wp-content/uploads/2021/07/BCCI-logo-3-AFP-640.jpg?impolicy=website&width=640&height=362",
//     category: "Cricket",
//     title:
//       "Indian Cricketers' Association welcomes BCCI's decision to increase pension of former players and umpires",
//     desc: "BCCI has doubled the pension of former first-class and Test cricketers with those earning Rs 15,000 going up to Rs 30,000 and those with Rs 37,500 being upgraded to Rs 60,000 bracket. Those who received Rs 50,000 from now on will get Rs 70,000.",
//   },
//   {
//     id: 4,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/john-rahm.jpg?impolicy=website&width=640&height=362",
//     category: "Sports",
//     title:
//       "US Open Golf 2022: John Rahm, Rory McIlroy get early starts with LIV in afternoon",
//     desc: "World number two Rahm, a Spaniard who took his first major title last June at Torrey Pines, will start in the fourth group off the first tee on Thursday alongside James Piot, last year's US Amateur winner, and fellow American Collin Morikawa",
//   },
//   {
//     id: 5,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/TKS-Elangovan-2.jpg?impolicy=website&width=640&height=362",
//     category: "Politics",
//     title:
//       "FIFA World Cup 2022 Qualifiers: Dancing goalkeeper Redmayne confirms Australia’s fifth consecutive appearance",
//     desc: "The 33-year-old clowned his way along the goal line as Peru's players prepared to take their penalty kicks and his block of Alex Valera's shot gave Australia a 5-4 win after the two sides had been deadlocked without a goal for 120 minutes.",
//   },
//   {
//     id: 6,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/TeamIndia-min.jpg?impolicy=website&width=640&height=362",
//     category: "Cricket",
//     title:
//       "I do believe Umran Malik should play: Sunil Gavaskar ahead of third India-South Africa T20I",
//     desc: "India have failed to defend totals on both occasions in the two matches of the five-T20I series vs South Africa.",
//   },
//   {
//     id: 7,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Bhaderwah-Jammu.jpg?impolicy=website&width=640&height=362",
//     category: "India",
//     title:
//       "Prophet Muhammad row: Nine detained in J&K's Bhaderwah; curfew relaxed in Kishtwar for five hours",
//     desc: "Curfew was imposed in Bhaderwah and Kishtwar on Thursday following communal tension over the controversial remarks against Prophet Muhammad by Nupur Sharma and certain social media posts by local right-wing activists in her support",
//   },
//   {
//     id: 8,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/05/COVID-among-babies.jpg?impolicy=website&width=640&height=362",
//     category: "Health",
//     title:
//       "From COVID-19 test for infants, to breastfeeding babies if positive; all you need to know if your child gets infected",
//     desc: "Babies may be at higher risk if they are premature or have another underlying serious illness or condition. Studies describing COVID-19 in newborns reflect that similar to other respiratory viruses",
//   },
//   {
//     id: 9,
//     img: "https://images.firstpost.com/fpimages/100x100/fixed/jpg/scalex16x9/2022/06/Looks-like-the-Samsung-Galaxy-Fold-4-is-shaping-up-to-an-iPad-Pro-rival.jpg?impolicy=website&width=355&height=200",
//     category: "Tech",
//     title:
//       "Looks like the Samsung Galaxy Fold 4 is shaping up to an iPad Pro rival",
//     desc: "Samsung knows that Apple can’t be touched when it comes to Tablets. Maybe that is why, they are making the Galaxy Z Fold 4 as close to a tablet as they can. The upcoming Z Fold 4 will come with 1 TB storage, making a very close rival to the iPad Pro.",
//   },
//   {
//     id: 10,
//     img: "https://images.firstpost.com/fpimages/100x100/fixed/jpg/scalex16x9/2022/06/Govt.-of-India-issues-high-severity-warning-for-Google-Chrome-Firefox-users-here%E2%80%99s-how-to-stay-safe.jpg?impolicy=website&width=355&height=200",
//     category: "Tech",
//     title:
//       "Govt. of India issues high-severity warning for Google Chrome & Firefox users, here’s how to stay safe",
//     desc: "CERT-In has flagged certain versions of Google Chrome and Mozilla Firefox to be severely vulnerable to hackers and malicious programmes. There is, however, a very simple way to keep themselves safe and protected.",
//   },
//   {
//     id: 11,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/war9.jpg?impolicy=website&width=640&height=362",
//     category: "World",
//     title:
//       "Russia-Ukraine conflict: The battle of Donbas could prove decisive in Ukraine war",
//     desc: "With the Russia-Ukraine conflict now in its fourth month, Moscow is pounding the Donbas region with relentless artillery and air raids, making slow but steady progress to seize the industrial heartland of its neighbour",
//   },
//   {
//     id: 12,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Nadda1.jpg?impolicy=website&width=640&height=362",
//     category: "Politics",
//     title: "Bengal BJP's infighting comes to the fore amid JP Nadda's visit",
//     desc: "According to state BJP sources, several party MLAs were not present at the state executive committee meeting held at the National Library and addressed by Nadda",
//   },
//   {
//     id: 13,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/andrew-wiggins-640jpg.jpg?impolicy=website&width=640&height=362",
//     category: "Sports",
//     title:
//       "NBA Finals: Golden State Warriors on brink of title as Andrew Wiggins inspires Boston Celtics defeat",
//     desc: "Golden State Warriors beat the Boston Celtics 104-94 on Monday night for a 3-2 NBA Finals lead as Andrew Wiggins bags 26 points and 13 rebounds.",
//   },
//   {
//     id: 14,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Daryl-Mitchell-and-Matt-Henry-640_AP.jpg?impolicy=website&width=640&height=362",
//     category: "Cricket",
//     title: "ENG vs NZ 2nd Test, Live cricket score and update",
//     desc: "England and New Zealand live score update, watch ENG vs NZ 2nd Test match today",
//   },
//   {
//     id: 15,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/nupursharma.jpg?impolicy=website&width=320&height=180",
//     category: "Opinion",
//     title: "Friday fury! It is not Nupur Sharma issue, it is the mindset",
//     desc: "It is clear that the huge boisterous protests across the country on Friday were orchestrated. Accommodating such elements is not going to bring peace.",
//   },
//   {
//     id: 16,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Prime-Minister-Narendra-Modi2.jpg?impolicy=website&width=640&height=362",
//     category: "India",
//     title:
//       "Govt jobs for 10 lakh people by December 2023 as PM Modi reviews HR status in all ministries, departments",
//     desc: "In a meeting with the secretaries on 2 April, Prime Minister Narendra Modi had stressed that employment should be the focus of all government interventions in both public and private sectors",
//   },
//   {
//     id: 17,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/deadlift-with-finger-header-640.jpg?impolicy=website&width=640&height=362",
//     category: "World",
//     title:
//       "Man deadlifts 129.50 kg weight with one finger for 8 seconds, hits Guinness World Record",
//     desc: "Keeler, who is 48 now, has been strength training for the past 4 years. During one of his strength training sessions with his training partner, he found out that his lifting ability was far above the norm and could possibly break a record.",
//   },
//   {
//     id: 18,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Pfizer-for-children.jpg?impolicy=website&width=640&height=362",
//     category: "Health",
//     title:
//       "Pfizer vaccines for COVID-19 safe for children under five years, says US health officials",
//     desc: "FDA posted its analysis of the Pfizer shot ahead of a Wednesday meeting where outside experts will vote on whether the shots are ready for the nation’s 18 million babies, toddlers and preschoolers",
//   },
//   {
//     id: 19,
//     img: "https://www.firstpost.com/wp-content/uploads/2022/06/Toyota-is-set-to-launch-3-new-SUVs-and-1-new-MPV-in-India-this-year.jpg?impolicy=website&width=320&height=180",
//     category: "Auto",
//     title:
//       "Toyota is set to launch 3 new SUVs and 1 new MPV in India this year",
//     desc: "In a bid to consolidate its position in the Indian market, Japanese automaker Toyota will be launching at least 3 new SUVs and 1 new MPV this year. These include the Hyryder, Land Cruiser, Innova Hycross and the new generation of the urban cruiser.",
//   },
//   {
//     id: 20,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/pjimage-2022-06-11T160503.609-min-1.jpg?impolicy=website&width=320&height=180",
//     category: "Opinion",
//     title:
//       "Explained: Why Suzhal - The Vortex promises to be an intriguing watch",
//     desc: "Sriya Reddy, Kathir and Aishwarya Rajesh starrer Suzhal: The Vortex will premiere in over 30 languages in 240 countries and territories exclusively on Amazon Prime Video on 17th June.",
//   },
//   {
//     id: 21,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/pjimage-2022-06-14T094858.636.jpg?impolicy=website&width=320&height=180",
//     category: "Entertainment",
//     title: "Sushant Singh Rajput, you are missed",
//     desc: "Today, 14th June marks the second death anniversary of Sushant Singh Rajput. The young star passed away at the 34 in 2020.",
//   },
//   {
//     id: 22,
//     img: "https://images.firstpost.com/wp-content/uploads/2021/08/bhupesh-baghel-nbm-2.jpg?impolicy=website&width=640&height=362",
//     category: "Politics",
//     title:
//       "National Herald case: 'Gandhi family falsely implicated', says Bhupesh Baghel as ED grills Rahul Gandhi",
//     desc: "Calling the ED action on Gandhi 'malicious', the Chhattisgarh chief minister said that the Centre is using its agencies to 'suppress the voice of Opposition'",
//   },
//   {
//     id: 23,
//     img: "https://images.firstpost.com/fpimages/100x100/fixed/jpg/scalex16x9/2022/06/14.jpg?impolicy=website&width=355&height=200",
//     category: "Tech",
//     title:
//       "Oppo launches the K10 5G in India, check out the specs, price and launch offers",
//     desc: "Oppo launched the K10 5G in India, with a dual camera set up and a Dimensity 810 Soc and a 6.56-inch display with a 120Hz refresh rate. The device is available in only one variant, a 8GB+128GB unit, which has been priced at Rs 17,499.",
//   },
//   {
//     id: 24,
//     img: "https://images.firstpost.com/wp-content/uploads/2018/09/yami-gautam-1200.jpg?impolicy=website&width=320&height=180",
//     category: "Entertainment",
//     title: "Yami Gautam throws light on her upcoming releases",
//     desc: "Actress Yami Gautam is currently in one of the best phases of her career. Not only is she giving back-to-back hits but is continuously proving her worth time and again.",
//   },
//   {
//     id: 25,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/Indian_women.jpg?impolicy=website&width=640&height=362",
//     category: "World",
//     title:
//       "Indian women sold as slaves in West Asian nations: Why are we bowing to them then?",
//     desc: "A government official reported that Indian women were ‘treated worse than cattle there’. One of the women who was interviewed did not even know where she was",
//   },
//   {
//     id: 26,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/museum-4-640.jpg?impolicy=website&width=640&height=362",
//     category: "India",
//     title:
//       "PM Modi to inaugurate underground museum in Mumbai: What you need to know",
//     desc: "While the museum is special for its theme of the Indian Independence Movement, its location is equally significant as it has come up in a network of pre-World War I British-era bunkers that were discovered under the Raj Bhavan in 2016",
//   },
//   {
//     id: 27,
//     img: "https://www.firstpost.com/wp-content/uploads/2022/06/wuling-air-ev-1.jpg?impolicy=website&width=320&height=180",
//     category: "Auto",
//     title:
//       "MG Motors’ entry-level EV for India uncovered, will be priced around Rs 10 Lakh",
//     desc: "MG Motors India is planning to launch an ultra affordable EV sometime next year, which would cost about Rs 10 Lakhs. The upcoming EV will be based on a kei-car design, with 2 sliding doors, and 39bhp drive train.",
//   },
//   {
//     id: 28,
//     img: "https://www.firstpost.com/wp-content/uploads/2022/06/Mercedes-Benz-recalls-one-million-cars-mainly-SUVs-and-minivans-over-fear-of-faulty-brakes-1.jpg?impolicy=website&width=320&height=180",
//     category: "Auto",
//     title:
//       "Mercedes Benz recalls one million cars, mainly SUVs and minivans, over fear of faulty brakes",
//     desc: "Fearing that the corrosion on the brake booster can lead to catastrophic brake failure in some of their cars, Mercedes-Benz has recalled about 1 million cars from all across the world. The affected cars mainly include the ML & the GL line of cars, and some of their popular minivans or MPVs.",
//   },
//   {
//     id: 29,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/06/pjimage-2022-06-14T103642.930.jpg?impolicy=website&width=320&height=180",
//     category: "Entertainment",
//     title:
//       "Sushant Singh Rajput death anniversary: From Kai Po Che to Sonchiriya; here are some of his best films",
//     desc: "Sushant Singh Rajput made his debut in the entertainment industry with a supporting role in Ekta Kapoor’s Kis Desh Mein Hai Meraa Dil. He got his big break in the show Pavitra Rishta, where he played the lead role.",
//   },
//   {
//     id: 30,
//     img: "https://images.firstpost.com/wp-content/uploads/2022/05/monkeypox_edit.jpg?impolicy=website&width=640&height=362",
//     category: "Health",
//     title:
//       "780 cases of monkeypox reported or identified as of 2 June, says WHO",
//     desc: "The sudden and unexpected appearance of monkeypox simultaneously in several non-endemic countries suggests that there might have been undetected transmission for some unknown duration of time followed by recent amplifier events",
//   },
// ];

const Homedata = () => {
  return (
    <>
      <div>
        <img
          style={{ margin: "auto", marginTop: "30px" }}
          src="https://tpc.googlesyndication.com/simgad/7937691974444879532"
        />
        <p
          style={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "660px",
            fontWeight: "600",
            width: "210px",
            fontSize: "30px",
            borderBottom: "5px solid #f3a342",
          }}
        >
          THE BIG STORY
        </p>
        <div>
          {Posts.map((item) => (
            <Home item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Homedata;
