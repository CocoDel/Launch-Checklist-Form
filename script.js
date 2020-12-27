// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

//Ch 26.3.2
window.addEventListener("load", function() {
   let index = [0];

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function (json) {
         const  missionDestination = document.getElementById("missionTarget");
         console.log(json);

         missionDestination.addEventListener("click", function() {
            missionDestination.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
               </ol>
               <img src="${json[index].image}">
               `;
               index = (index + 1) % json.length;
          });
      }); 
   });


//adding validation and alerts (Ch 25.9)
// window.addEventListener("load", function() {

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
       
      let pilotNameInput = document.querySelector("input[name=pilotName]"); 
      let copilotNameInput = document.querySelector("input[name=copilotName]"); 
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]"); 
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
         // event.preventDefault(); //not necessary here, only on top

      
       
      } else if (!parseInt(fuelLevelInput.value) || (!parseInt(cargoMassInput.value) || (parseInt(pilotNameInput.value)) || (parseInt(copilotNameInput.value)))) {
         alert("Make sure you have entered a number in Fuel Level and/or Cargo Mass.  Also check name inputs for valid letters and not numbers");
         // event.preventDefault(); //not necessary here, only on top
      };

      // Check to see if all launch status requiremenst are good to go
      
      let launchStatus = document.getElementById("launchStatus");
      let faultyItems = document.getElementById("faultyItems");
      
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      
      // check fuel level
      if (fuelLevelInput.value < 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "ALERT: Not enough fuel for the journey";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         // event.preventDefault(); // Only needed at the top

      // check cargo mass 
      } else if (cargoMassInput.value > 10000) {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "DANGER: Too much cargo mass for take off";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = "red";
         // event.preventDefault(); //Only needed at the top

      } else {
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = "Shuttle is ready for launch";
         launchStatus.style.color = "green";
         // event.preventDefault(); //Only needed at the top
      }

   });
});

