let imgUrls = [
    `https://miro.medium.com/max/1400/0*SPjH6EGSjLcMPv8Q.jpg`,
    `https://blog.testproject.io/wp-content/uploads/2020/07/Using-Java-Enums-in-Test-Automation-Code.jpg`,
    `https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage01-398f220e.jpeg`,
    `https://mobiltek.pl/wp-content/themes/yootheme/cache/heroImage02-9df1a0cb.jpeg`,
    `https://technerds.com/wp-content/uploads/2021/06/13-api-2-1536x991.jpg`,
    `https://technerds.com/wp-content/uploads/2021/06/Twilio-Api-Marketplace.png`,
    `https://technerds.com/wp-content/uploads/2021/06/Google-maps-api-marketplace.png`,
    `https://multimatics.co.id/images/phyton-programming.jpg`,
    `https://multimatics.co.id/images/data-science-rockstar.jpg`,
    `https://diginovation.multimatics.co.id/images/banner-1-min.jpg`,
    `https://multimatics.co.id/images/back-services.jpg`,
    `https://multimatics.co.id/images/back-partner.jpg`,
    `https://diginovation.multimatics.co.id/images/img-slider-Managing%20Project%20Like%20Pro.jpg`,
    `https://www.skovian.com/wp-content/uploads/2020/12/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863-e1607419867297.jpg`
  ];
  const randomImg = () => {
    return imgUrls[Math.floor(Math.random() * imgUrls.length)]
  }
  
  console.log(randomImg());
  
  
  let url = "https://kontests.net/api/v1/all";
  let response = fetch(url);
  response.then((value) => {
    return value.json();
  }).then((contests) => {
    console.log(contests);
    let ihtml = "";
    let bgimg = randomImg();
    let c = 0;
    for (item in contests) {
      if (c == 5) {
        c = 0;
        bgimg = randomImg();
      }
      c++;
      console.log(contests[item]);
      ihtml += `
      <div class="card mx-1 my-1" style="width: 18rem;">
        <img src="${bgimg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text">Status is ${contests[item].status} & Site is ${contests[item].site}</p>
          <p class="card-text">In 24 Hours: ${contests[item].in_24_hours}</p>
          <p>Starts at: ${contests[item].start_time}</p>
          <p>Ends at: ${contests[item].end_time}</p>
          <a href="${contests[item].url}" class="btn btn-primary my-2">Visit Contest</a>
        </div>
      </div>
      `
    }
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = ihtml;
  
  })
  
  
  
  /* ******************************************************************************************************* */
  /*
  // Q1: use free api to fetch data
  
  /*
  const myDictionary = async (word) => {
    let response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
    let data = await response.json();
    return data;
  }
  
  const mainFunc = async () => {
    let word = prompt("Enter a word to find its meaning:");
    let data = await myDictionary(word);
    let myDefinitions = Array.from(data)[0].meanings[0].definitions;
  
    myDefinitions.forEach(element => {
      console.log(element.definition);
    });
  }
  
  mainFunc();
  */
  
  
  /* ***************** Q2 & Q3 : use localStorage to store note in localStorage ************************** */
  
  /*
  // let noteTitle = prompt("Enter the Note Title:");
  // let noteBody = prompt("Enter Note Body:");
  
  // localStorage.setItem(noteTitle, noteBody);
  
  // console.log(localStorage.getItem(noteTitle));
  
  
  // Q4: delete note in previous question
  // localStorage.removeItem('First Note');
  */