function displayPoem(response) {
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
        });
    
}

function aiPoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "t9e9139a19b801fbcfa020d17a47ob1f";
    let prompt = `Generate a French poem about ${instructionsInput.value}`;
    let context = "You need to generate a roman poem in French. Keep the poem short and sweet, 4 lines maxmimum with a <br/> between each line. . Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement = classList.remove("hidden");
    poemElement.InnerHTML = `⏳Generating a French Poem about a ${instructionsInput.value}`;

    axios.get(apiURL).then(displayPoem);
    
 }

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", aiPoem);