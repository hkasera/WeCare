
/** activity indexes **/
db.getCollection("activity").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** campaign indexes **/
db.getCollection("campaign").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** ngo indexes **/
db.getCollection("ngo").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** activity records **/
db.getCollection("activity").insert({
  "_id": ObjectId("55ea699322554a4298242cc7"),
  "desc": "Free diagnosis and awareness among people",
  "img": "/img/act2.jpeg",
  "title": "Healthcare"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55ea6a2a021312a7964c62fa"),
  "title": "Food",
  "img": "/img/camp5.jpeg",
  "desc": "Distribute food to needy"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55ea6a46021312a7964c62fb"),
  "title": "Motivate",
  "img": "/img/camp9.jpeg",
  "desc": "Help motivate children to do extraordinary activities"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55fe54ebbd74e2bed2000000"),
  "title": "E-learning",
  "img": "/img/act1.jpeg",
  "desc": "Skill enhancement by e-learning"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55fe58bcbd74e250e0000000"),
  "title": "Education",
  "img": "/img/act3.jpeg",
  "desc": "Facilitate the process of learning"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55fe5b0ebd74e2c591000000"),
  "desc": "Filling the gaps of basic educational material",
  "img": "/img/act5.jpeg",
  "title": "Donation"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55fe6479bd74e285e3000000"),
  "desc": "Repurpose the water for sanitation",
  "img": "/img/act6.jpeg",
  "title": "Hygiene"
});
db.getCollection("activity").insert({
  "_id": ObjectId("55fea9a1bd74e2015f000001"),
  "desc": "Like-minded elders forming small groups and working together",
  "img": "/img/camp5.jpeg",
  "title": "Social Engagement"
});

/** campaign records **/
db.getCollection("campaign").insert({
  "_id": ObjectId("55f1b445933a96ba39000000"),
  "about": "Smile Twin E- learning Programme (STeP) is an initiative of Smile Foundation that aims at creating a pool of young and independent people, from the marginalized section, through skill enhancement in tandem with market requirements. It is an effort towards bridging the gap between demand and supply of skilled manpower in the fast emerging services and retail sectors of modern India. ",
  "activities": [
    {
      "_id": ObjectId("55fe54ebbd74e2bed2000000"),
      "title": "E-learning",
      "img": "/img/act1.jpeg",
      "desc": "Skill enhancement by e-learning"
    }
  ],
  "contact": {
    "website": "http://www.smilefoundationindia.org/e_learning.htm",
    "email": "info@smilefoundationindia.org",
    "fb_link": "https://www.facebook.com/smilefoundationindia.org"
  },
  "img": "/img/camp23.jpeg",
  "metadata": {
    "startsOn": "2015-03-30T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Free E-Learning",
  "name": "STeP",
  "ngo": {
    "_id": ObjectId("55fdb2a0bd74e21c27000000"),
    "name": "Smile Foundation",
    "shortDesc": "for children's health and education"
  },
  "progress": 50,
  "shortDesc": "Creating a pool of young and independent people",
  "subTitle": "Smile Twin E- learning Programme",
  "url": "/campaign/55f1b445933a96ba39000000"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55f1b86b933a96ba39000001"),
  "about": "Fulfilling the requirement of a health NGO in India, the Smile on Wheels programme at present has 22 operational projects in 265 remote villages and urban slums across India, benefitting 3, 10, 000 lives directly in a year.",
  "activities": [
    {
      "_id": "55ea699322554a4298242cc7",
      "desc": "Free diagnosis and awareness among people",
      "img": "/img/act2.jpeg",
      "title": "Healthcare"
    }
  ],
  "contact": {
    "website": "http://www.smilefoundationindia.org/smile_on_wheels.htm",
    "email": "info@smilefoundationindia.org",
    "fb_link": "https://www.facebook.com/smilefoundationindia.org"
  },
  "img": "/img/camp25.jpeg",
  "metadata": {
    "startsOn": "2015-08-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Health awareness",
  "name": "Smile on Wheels",
  "ngo": {
    "_id": ObjectId("55fdb2a0bd74e21c27000000"),
    "name": "Smile Foundation",
    "shortDesc": "for children's health and education"
  },
  "progress": 70,
  "shortDesc": "He who has health has hope; and he who has hope has everything",
  "subTitle": "a step towards better health to everyone.",
  "url": "/campaign/55f1b86b933a96ba39000001"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55fda079bd74e2fe60000000"),
  "about": "Girls must be given the same opportunities and protection as boys, and must be treated on par. A girl's childhood can and must be preserved, cherished, nurtured and protected. Because she has the right. The right to survive, develop, be protected and participate in decisions that impact her life. That will impact future generations to come.",
  "activities": [
    {
      "_id": ObjectId("55fe58bcbd74e250e0000000"),
      "title": "Education",
      "img": "/img/act3.jpeg",
      "desc": "Facilitate the process of learning"
    }
  ],
  "contact": {
    "website": "http://www.cry.org/about-cry/campaigns/theres-no-stopping-the-girl-child.html",
    "email": "webinfo@crymail.org"
  },
  "img": "/img/camp11.jpeg",
  "metadata": {
    "startsOn": "2015-08-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Girl Child Education",
  "name": "There's no stopping the Girl Child",
  "ngo": {
    "_id": ObjectId("55fd9df6bd74e2eab8000001"),
    "name": "CRY",
    "shortDesc": "Act locally Bengaluru"
  },
  "progress": 30,
  "shortDesc": "Girl child education in india supported by CRY",
  "subTitle": "a campaign by CRY",
  "url": "/campaign/55fda079bd74e2fe60000000"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55feaa77bd74e218e1000000"),
  "about": "HelpAge has always encouraged Senior Citizen Associations to form small groups of like-minded people to engage in community work. However, it was soon realized that these groups of elders need a physical space with at least a minimal infrastructure for them to come together to engage in social work and pursue their interests. Hence, there was an urgent need for AdvantAge Centres.",
  "activities": [
    {
      "_id": ObjectId("55fea9a1bd74e2015f000001"),
      "desc": "Like-minded elders forming small groups and working together",
      "img": "/img/camp5.jpeg",
      "title": "Social Engagement"
    }
  ],
  "contact": {
    "website": "http://www.helpageindia.org/",
    "email": "headoffice@helpageindia.org"
  },
  "img": "/img/camp3.jpeg",
  "metadata": {
    "startsOn": "2015-04-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Taking care of elders",
  "name": "Active Ageing Centres",
  "ngo": {
    "_id": ObjectId("55fea8f3bd74e2015f000000"),
    "name": "HelpAge India",
    "shortDesc": "help elders rebuild their own lives"
  },
  "progress": 80,
  "shortDesc": "Encourage Senior Citizen Associations to form small groups of like-minded people",
  "subTitle": "stay socially engaged ",
  "url": "/campaign/55fda933bd74e294cc000000"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55fda2c2bd74e2fe60000001"),
  "about": "Children should be carrying books, not bricks. They should be playing with footballs, not stitching them. They should be sitting inside classrooms, instead of sweeping them.",
  "activities": [
    {
      "_id": "55ea699322554a4298242cc7",
      "desc": "Protest child labour",
      "img": "/img/camp15.jpeg",
      "title": "Child Care"
    }
  ],
  "contact": {
    "website": "http://www.cry.org/about-cry/campaigns/say-no-to-child-labour.html",
    "email": "webinfo@crymail.org"
  },
  "img": "/img/camp15.jpeg",
  "metadata": {
    "startsOn": "2015-04-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Child Care",
  "name": "Say No to Child Labour",
  "ngo": {
    "_id": ObjectId("55fd9df6bd74e2eab8000001"),
    "name": "CRY",
    "shortDesc": "Act locally Bengaluru"
  },
  "progress": 30,
  "shortDesc": "Child labour protest in India",
  "subTitle": "CRY Campaign",
  "url": "/campaign/55fda2c2bd74e2fe60000001"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55fda626bd74e241d8000000"),
  "about": "Low cost greywater harvesting systems and waterless urinals set up in government schools tackle water shortage, and repurpose the water in toilets for better sanitation.",
  "activities": [
    {
      "_id": ObjectId("55fe6479bd74e285e3000000"),
      "desc": "Repurpose the water for sanitation",
      "img": "/img/act6.jpeg",
      "title": "Hygiene"
    }
  ],
  "contact": {
    "website": "http://reapbenefit.org/",
    "email": "info@reapbenefit.org"
  },
  "img": "/img/camp16.jpeg",
  "metadata": {
    "startsOn": "2015-04-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Sanitation",
  "name": "Water And Sanitation Interventions",
  "ngo": {
    "_id": ObjectId("55fd9b85bd74e2eab8000000"),
    "name": "Reap Benefit",
    "shortDesc": "Designing data-driven innovations"
  },
  "progress": 80,
  "shortDesc": "Water And Sanitation Interventions",
  "subTitle": "campaign by Reap Benefit",
  "url": "/campaign/55fda626bd74e241d8000000"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55fda933bd74e294cc000000"),
  "about": "Plenty of under-utilized school material (last year’s uniform, bag, books,stationery etc.) may find its way into the landfills once again, while there are many village/ slum kids who will embrace these essentials happily..Goonj’s “School to School” initiative is about filling the gaps of basic educational material in rural schools, as a reward instead of charity.",
  "activities": [
    {
      "_id": ObjectId("55fe5b0ebd74e2c591000000"),
      "desc": "Filling the gaps of basic educational material",
      "img": "/img/act5.jpeg",
      "title": "Donate"
    }
  ],
  "contact": {
    "website": "http://goonj.org/?page_id=23243",
    "email": "mail@goonj.org"
  },
  "img": "/img/camp20.jpeg",
  "metadata": {
    "startsOn": "2015-04-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Donation",
  "name": "The Power of 5",
  "ngo": {
    "_id": ObjectId("55eaac4b933a960ba9000000"),
    "name": "Goonj",
    "shortDesc": "a voice, an effort"
  },
  "progress": 80,
  "shortDesc": "Take out at least 5 things from last years school items",
  "subTitle": "join school to school",
  "url": "/campaign/55fda933bd74e294cc000000"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55ea6e3f8954ab2ee35c2ee1"),
  "about": "Every child who enters BOSCO would undergo Counseling. We provide two types of counseling: Initial counseling and Intensive counseling. The intensive counselling will take a week long. The details of the child are revealed through the initial counseling. Our professional counsellors, who would in the process identify the real problems of the child and help him to transform his attitudes towards life. The intensive counselling includes recreational and motivational therapy as well. At the end of the counselling the child is either reinstated into his family or placed in one of its centres for rehabilitation. In some exceptional cases the child is referred to other care institutions.",
  "activities": [
    {
      "_id": "55ea6a46021312a7964c62fb",
      "desc": "Help motivate children to do extraordinary activities",
      "img": "/img/camp9.jpeg",
      "title": "Motivate"
    }
  ],
  "contact": {
    "website": "http://boscoban.org/",
    "email": "boscoban@gmail.com",
    "fb_link": "https://www.facebook.com/boscobengaluru"
  },
  "img": "/img/camp21.jpeg",
  "metadata": {
    "startsOn": "2015-08-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Building future of innocents",
  "name": "Udaan",
  "ngo": {
    "_id": ObjectId("55ea6de58954ab2ee35c2ee0"),
    "name": "BOSCO",
    "shortDesc": "Bangalore Oniyavara Seva Coota"
  },
  "progress": 60,
  "shortDesc": "Rise and fly",
  "subTitle": "your concern and involvement is all it takes to build their dreams",
  "url": "/campaign/55ea6e3f8954ab2ee35c2ee1"
});
db.getCollection("campaign").insert({
  "_id": ObjectId("55f1b3b4933a96fe75000000"),
  "about": "Over the last 14 years Goonj has built a reliable and time-tested network in both the rural & urban areas. This network means our wide spread presence, which helps us respond to any kind of geographical and cultural aspect. With an active network in place, our response time for generating & channelising resources becomes much quicker. Despite being a small team, we have been able to respond to disasters as wide apart as Kashmir and Tamil Nadu, with the same amount of urgency and scale. We work throughout the year on educating the common masses about the sensitivities of giving at the time of disasters i.e. how one should understand the cultural, social, geographical aspects before deciding what to give. Like women in south India don’t wear suits while women in Kashmir don’t wear saris or eating habits-people in Gujarat don’t eat rice much while in Kashmir rice is a part of the staple diet. Sensitivities towards these aspects have a big impact at the time of material generation.",
  "activities": [
    {
      "_id": "5ea6a2a021312a7964c62fa",
      "desc": "Distribute food to needy",
      "img": "/img/camp5.jpeg",
      "title": "Food"
    }
  ],
  "contact": {
    "website": "http://goonj.org/?p=22276",
    "email": "mail@goonj.org"
  },
  "img": "/img/camp22.jpeg",
  "metadata": {
    "startsOn": "2015-08-29T16:04:34-04:00",
    "endsOn": "2015-10-29T16:04:34-04:00"
  },
  "mission": "Disaster Relief",
  "name": "Rahat",
  "ngo": {
    "_id": ObjectId("55eaac4b933a960ba9000000"),
    "name": "Goonj",
    "shortDesc": "a voice, an effort"
  },
  "progress": 100,
  "shortDesc": "Nepal Relief Fund",
  "subTitle": "our neighbour country is calling us for help",
  "url": "/campaign/55f1b3b4933a96fe75000000"
});

/** ngo records **/
db.getCollection("ngo").insert({
  "_id": ObjectId("55eaac4b933a960ba9000000"),
  "about": "Goonj foundation works to bring about change in the lives of children, young people and vulnerable individuals. We educate children, provide healthcare and train young people and women in skills for livelihoods.",
  "campaigns": [
    ObjectId("55fda933bd74e294cc000000"),
    ObjectId("55f1b3b4933a96fe75000000")
  ],
  "contact": {
    "website": "http://goonj.org/",
    "email": "contact@goonj.in",
    "fb_link": "https://www.facebook.com/goonj",
    "tw_link": "https://www.twitter.com/goonj"
  },
  "img": "/img/ngo1.jpeg",
  "metadata": {
    "joined": "2014-08-29T16:04:34-04:00",
    "founder": "Anshu Gupta"
  },
  "mission": "Social welfare",
  "name": "Goonj",
  "shortDesc": "a voice, an effort",
  "url": "/ngo/55eaac4b933a960ba9000000"
});
db.getCollection("ngo").insert({
  "_id": ObjectId("55fdb2a0bd74e21c27000000"),
  "about": "Smile Foundation is a national level development organisation directly benefitting over 300,000 children and their families every year, through 158 welfare projects on education, healthcare, livelihood and women empowerment, in more than 700 remote villages and slums across 25 states of India.",
  "campaigns": [
    ObjectId("55f1b445933a96ba39000000"),
    ObjectId("55f1b86b933a96ba39000001")
  ],
  "contact": {
    "website": "http://www.smilefoundationindia.org/",
    "email": "info@smilefoundationindia.org",
    "fb_link": "https://www.facebook.com/smilefoundationindia.org"
  },
  "img": "/img/ngo3.jpeg",
  "metadata": {
    "joined": "2002-08-29T16:04:34-04:00",
    "founder": "Santanu Mishra"
  },
  "mission": "Education For Poor Children",
  "name": "Smile Foundation",
  "shortDesc": "for children's health and education",
  "url": "/ngo/55fdb2a0bd74e21c27000000"
});
db.getCollection("ngo").insert({
  "_id": ObjectId("55fd9df6bd74e2eab8000001"),
  "about": "A happy, healthy and creative child whose rights are protected and honoured in a society that is built on respect for dignity, justice and equity for all.",
  "campaigns": [
    ObjectId("55fda079bd74e2fe60000000"),
    ObjectId("55fda2c2bd74e2fe60000001")
  ],
  "contact": {
    "website": "http://www.cry.org/",
    "email": "cryinfo.blr@crymail.org",
    "fb_link": "https://www.facebook.com/CRYINDIA",
    "tw_link": "https://twitter.com/cryindia"
  },
  "img": "/img/camp19.jpeg",
  "metadata": {
    "joined": "2014-08-29T16:04:34-04:00",
    "founder": "Rippan Kapur"
  },
  "mission": "Ensuring lasting change for children",
  "name": "CRY",
  "shortDesc": "Act locally Bengaluru",
  "url": "/ngo/55fd9df6bd74e2eab8000001"
});
db.getCollection("ngo").insert({
  "_id": ObjectId("55ea6de58954ab2ee35c2ee0"),
  "about": "Bangalore Oniyavara Seva Coota (BOSCO), more commonly known as BOSCO is a project of the Salesians of Don BOSCO (SDB). BOSCO is a registered Non Profitable Charitable Organization under the Society's registration Act of 1960 (No.184/86-87). Constituted in 1980, we offer service to the Young at Risk like - children living on the streets, child labourers, abandoned / orphaned children, victims of drug abuse, victims of child abuse, begging children, rag pickers etc. Now, BOSCO has spread its wings across the city of Bangalore through 7 rehabilitation centres & 6 street presence locations ",
  "campaigns": [
    ObjectId("55ea6e3f8954ab2ee35c2ee1")
  ],
  "contact": {
    "website": "http://boscoban.org/",
    "email": "boscoban@gmail.com"
  },
  "img": "/img/ngo2.jpeg",
  "metadata": {
    "joined": "2014-08-29T16:04:34-04:00",
    "founder": "Salesian students of Kristu Jyoti College"
  },
  "mission": "Unreservedly care for children",
  "name": "BOSCO",
  "shortDesc": "Bangalore Oniyavara Seva Coota",
  "url": "/ngo/55ea6de58954ab2ee35c2ee0"
});
db.getCollection("ngo").insert({
  "_id": ObjectId("55fd9b85bd74e2eab8000000"),
  "about": "Reap Benefit is a platform to educate, empower and “reward” students (Institutions: Schools & Universities) for taking everyday green actions through partnerships with municipalities, haulers, NGO’s and corporates",
  "campaigns": [
    ObjectId("55fda626bd74e241d8000000")
  ],
  "contact": {
    "website": "http://reapbenefit.org/",
    "email": "info@reapbenefit.org",
    "fb_link": "https://www.facebook.com/goonj",
    "tw_link": "https://www.twitter.com/goonj"
  },
  "img": "/img/camp18.jpeg",
  "metadata": {
    "joined": "2014-08-29T16:04:34-04:00",
    "founder": "Kuldeep Dantewadia"
  },
  "mission": "Research Innovate Impact",
  "name": "Reap Benefit",
  "shortDesc": "Designing data-driven innovations",
  "url": "/ngo/55fd9b85bd74e2eab8000000"
});
db.getCollection("ngo").insert({
  "_id": ObjectId("55fea8f3bd74e2015f000000"),
  "about": "HelpAge envisions a society where elderly have the Right to an active, healthy and dignified life. We are integrating our programmes and services, and consciously moving from welfare towards development and long term sustainability for seniors. We are working closely with Senior Citizen Associations and encouraging seniors to speak up for their own rights.",
  "campaigns": [
    ObjectId("55feaa77bd74e218e1000000")
  ],
  "contact": {
    "website": "http://www.helpageindia.org/",
    "email": "headoffice@helpageindia.org"
  },
  "img": "/img/ngo6.jpeg",
  "metadata": {
    "joined": "1978-08-29T16:04:34-04:00",
    "founder": "Cecil Jackson Cole"
  },
  "mission": "To work for the cause and care of disadvantaged older persons and to improve their quality of life.",
  "name": "HelpAge India",
  "shortDesc": "help elders rebuild their own lives",
  "url": "/ngo/55fdb2a0bd74e21c27000000"
});
