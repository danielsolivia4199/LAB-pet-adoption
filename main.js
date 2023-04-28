const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://bbts1.azureedge.net/images/p/full/2020/04/b2cf4920-c932-4ab7-ba4f-24265e8cda06.jpg",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://c8.alamy.com/comp/T3A6BR/a-scared-brown-tabby-cat-is-looking-of-a-round-window-in-a-cat-condo-and-hissing-T3A6BR.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2020/07/Realistic-Animatronic-Dinosaur-Costume-of-Raptor2-1.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2020/06/Baby-T-Rex-Puppet-with-Orange-Stripe1.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://townsquare.media/site/812/files/2019/05/valee-dog.jpg?w=980&q=75"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.fineartamerica.com/images/artworkimages/medium/3/t-rex-dinosaur-head-with-teeth-scary-closeup-of-a-dino-fine-art-nfts.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://a-z-animals.com/media/2021/11/oriental-kitten-1024x535.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://discovery.sndimg.com/content/dam/images/discovery/editorial/podcasts/Curiosity/2020/3/GettyImages-168839856.jpg.rend.hgtvcom.406.290.suffix/1583454574828.jpeg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.thesprucepets.com/thmb/TuSW-I2TbJKsnqECPOX2GUIl4zk=/2121x0/filters:no_upscale():strip_icc()/portrait-cute-gray-great-dane-puppy-with-blue-eyes-1252375901-b1d90e97e9b345b49da0a7c84c03ed9d.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.shutterstock.com/image-photo/black-cat-that-scared-something-260nw-1446367247.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://cdn.shopify.com/s/files/1/2381/2037/products/mcsdino-creature-suits-walkaround-t-rex-costume-red-dinosaur-dctr606-17177461162118.jpg?v=1622267660"
    },
    {
      id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/5452d441e4b0c188b51fef1a/1615326541809-TW01PVTOJ4PXQUXVRLHI/male-orange-tabby-cat.jpg"
    },
    {
      id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://pbs.twimg.com/profile_images/2522806676/dumbbrowndog_400x400.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://www.purina.com.au/-/media/Project/Purina/Main/Breeds/Cat/Mobile/Cat_Somali-Cat_Mobile.jpg?h=300&la=en&w=375&hash=6ED5877E8559617905A9848C6C6A1FD0"
    },
    {
      id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://kpcnotebook.scholastic.com/sites/default/files/dinosaur.jpg"
    }
  ];
//  const targetingApp = document.querySelector("#app");
//   console.log(targetingApp)

//   let domString = "";
//   for (const pet of pets) {
//     domString += `<div class="card" style="width: 18rem;">
//     <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
//     <div class="card-body">
//     <h5 class="card-title">${pet.name}</h5>
//     <p>Type: ${pet.type}</p>
//     <p>Color: ${pet.color}</p>
//     <p class="card-text">Skill: ${pet.specialSkill}</p>
//     </div>
//   </div>`;
//   }

//   console.log(domString);
//   targetingApp.innerHTML = domString;

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += 
    `<div class="card" style="width: 18rem;">
    <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
      <h5 class="card-title">${pet.name}</h5>
      <p>Type: ${pet.type}</p>
      <p>Color: ${pet.color}</p>
      <p>Skill: ${pet.specialSkill}</p>
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
    </div>`; }
    renderToDom("#app", domString);
  
}
cardsOnDom(pets);
  const filter = (array, typeString) => {
    const typeArray = [];
  for (const pet of array) {
    if (pet.type === typeString) {
      typeArray.push(pet);
    }
  }
  return typeArray;
}

const showAllButton = document.querySelector("#all-btn");
const showDogsButton = document.querySelector("#dog-btn")
const showCatsButton = document.querySelector("#cat-btn")
const showDinosButton = document.querySelector("#dino-btn")

showAllButton.addEventListener('click', () => {
  cardsOnDom(pets)
 });
 showCatsButton.addEventListener('click', () => {
  const catType = filter(pets, 'cat');
  cardsOnDom(catType);
 });
 showDogsButton.addEventListener('click', () => {
  const dogType = filter(pets, 'dog');
  cardsOnDom(dogType);
 });
 showDinosButton.addEventListener('click', () => {
  const dinoType = filter(pets, 'dino');
  cardsOnDom(dinoType);
 });
//reference to order of objects
 //id: 11,
 //name: "Coco",
 //color: "Orange",
 //specialSkill: "Can be around food without staring creepily at it.",
 //type: "dino",
 //imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"

//selecting and targeting the from on the DOM
const form = document.querySelector('form');
//creating the function that grabs all the values from the form and pushes the info
const createPet = (e) => {
  e.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector('#name').value,
    color: document.querySelector('#color').value,
    specialSkill: document.querySelector('#skill').value,
    type: document.querySelector('#type').value,
    imageUrl: document.querySelector('#image').value,
  }

  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}
//adding an event listener for the form submit and passing it the function
form.addEventListener('submit', createPet);

//delete button
//target app div
const app = document.querySelector("#app");
//add event listener to capture clicks
app.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
}

startApp();
