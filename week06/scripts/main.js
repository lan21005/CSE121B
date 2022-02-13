/* CSE 121B: Lesson 6 
Final Project: Jon Lanenga 
*/

// toggle menu in small view
const toggleMenu = () => {
    document.querySelector("#menu").classList.toggle("open");
  };
  
  document.querySelector("#toggleMenu").addEventListener("click", toggleMenu);
  
  /*banner*/
  const monday = "images/monday.webp";
  const tuesday = "images/tuesday.webp";
  const wednesday = "images/wednesday.webp";
  const thursday = "images/thursday.webp";
  const friday = "images/friday.webp";
  const weekend = "images/weekend.webp";
  const today = new Date();
  let dayOfWeek;
  dayOfWeek = today.getDay();
  let message1;
  if (dayOfWeek == 1) {
    message1 =
      "A ship in harbor is safe, but that is not what ships are for. - John A. Shedd ";
    document.querySelector("img").setAttribute("src", monday);
  } else if (dayOfWeek == 2) {
    message1 = "Someday is not a day of the week. - Jaeet Dailey ";
    document.querySelector("img").setAttribute("src", tuesday);
  } else if (dayOfWeek == 3) {
    message1 =
      "Success is the sum of small efforts repeated day in and day out. - Robert Collier";
    document.querySelector("img").setAttribute("src", wednesday);
  } else if (dayOfWeek == 4) {
    message1 =
      "Today you are you, that is truer than true. There is no one alive who is youer than you. - Dr. Seuss";
    document.querySelector("img").setAttribute("src", thursday);
  } else if (dayOfWeek == 5) {
    message1 =
      "Failure is the condiment that gives success its flavor. - Truman Capote";
    document.querySelector("img").setAttribute("src", friday);
  } else {
    message1 =
      "People rarely succeed unless they have fun in what they are doing. - Dale Carnegie";
    document.querySelector("img").setAttribute("src", weekend);
  }
  document.querySelector("#message1").textContent = message1;
  
    
  let info = {
    definitions: [
      "Effective Isotropic Radiated Power: A ccalculation used to estimate the radiated output power of an isotropic antenna (a theoretical half wave dipole antenna that radiates perfectly in all directions). This formula takes into account transmitter output power, cable loss, and antenna gain.",

      "Line of Sight: This line of sight calculator calculates how far the horizon is from an antenna placed at a particular height.",

      "Radio Horizon: The locus of points on the earth's surface where rays from a transmitting antenna are tangent to the surface",

      "RF Link Range: The estimated range of a line-of-sight RF link, given the transmitter power, transmitter and receiver antenna gains, receiver sensitivty, and the link margin. This calculation should be considered a best-case number, other effects can significantly reduce this range",

      "Frequency:  The number of occurrences of a repeating event per unit of time. It is also occasionally referred to as temporal frequency to emphasize the contrast to spatial frequency, and ordinary frequency to emphasize the contrast to angular frequency. Frequency is measured in hertz which is equal to one per second",

      "Antenna Gain: In electromagnetics, an antenna's power gain or simply gain is a key performance number which combines the antenna's directivity and electrical efficiency.",

      "Link Margin: In a wireless communication system, the link margin (LKM), measured in dB, is the difference between the minimum expected power received at the receiver's end, and the receiver's sensitivity (i.e., the received power at which the receiver will stop working).",

      "Receiver Sensitivity: The signal optical power required at the receiver to achieve the targeted bit error rate."

    ],
    name: "Jon Lanenga",
    email: "lan1005@byui.edu",
    slack: "lan21005",
    github: "lan21005",
  };
  
  info.definitions.forEach((definitions) => {
    let definitionsElem = document.createElement("li");
    definitionsElem.textContent = definitions;
    document.querySelector("#definitions").appendChild(definitionsElem);
  });
  
  document.querySelector("#name").textContent = info.name;
  document.querySelector("#email").textContent = info.email;
  document.querySelector("#slack").textContent = info.slack;
  document.querySelector("#github").textContent = info.github;
  
  /* FOOTER */
  const p_year = document.querySelector("#copyright");
  const year = today.getFullYear();
  
  //Last date accessed code
  const lastmodified = document.querySelector("#lastaccessed");
  const author_name = "Jon Lanenga";
  lastmodified.innerHTML = `&copy; ${year} | CSE121B: Final Project | ${author_name} | Last Accessed: ${document.lastModified}`;
  