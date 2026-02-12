const themToggle = document.querySelector(".them-toggle");
const promptBtn = document.querySelector(".prompt-btn");
const promptInput = document.querySelector(".prompt-input");
const promptForm = document.querySelector(".prompt-form");
const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");
const gridGallery = document.querySelector(".gallery-grid");
const generateBtn = document.querySelector(".generate-btn");
const API_KEY = ""; //hugging face free api key
//random szöveg:
const examplePrompts = [
    "A magic forest with glowing plants and fairy homes among giant mushrooms",
    "An old steampunk airship floating through golden clouds at sunset",
    "A future Mars colony with glass domes and gardens against red mountains",
    "A dragon sleeping on gold coins in a crystal cave",
    "An underwater kingdom with merpeople and glowing coral buildings",
    "A floating island with waterfalls pouring into clouds below",
    "A witch's cottage in fall with magic herbs in the garden",
    "A robot painting in a sunny studio with art supplies around it",
    "A magical library with floating glowing books and spiral staircases",
    "Japanese shrine during cherry blossom season with lanterns and misty mountains",
];

//a rendszer áltál preferált háttér szín téma:
(() => {
    const savedTheme = localStorage.getItem("them");
    const systemPreferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkThem = savedTheme === "dark" || (!savedTheme && systemPreferDark);
    document.body.classList.toggle("dark-them", isDarkThem);
    themToggle.querySelector("i").className = isDarkThem ? "fa-solid fa-sun" : "fa-solid fa-moon";

})();

const toggleThem = () => { //keres egy them-toggle nevű ha talál akkor menjen a függvény
    const isDarkThem = document.body.classList.toggle("dark-them") //keresi hol van dark-them h van törli ha nincs hozza adja
    localStorage.setItem("them", isDarkThem ? "dark" : "light")
    themToggle.querySelector("i").className = isDarkThem ? "fa-solid fa-sun" : "fa-solid fa-moon";
}
themToggle.addEventListener("click", toggleThem)

//képarány szamolása a aspectRatio alapjan
const getImageDimensions = (aspectRatio, baseSize = 512) => {
    const [width, height] = aspectRatio.split("/").map(Number);
    const scaleFactor = baseSize / Math.sqrt(width * height);

    let calculatedWidth = Math.round(width * scaleFactor);
    let calculatedHeight = Math.round(height * scaleFactor);

    //az hogy az össze sképaranáy. a 16nak a. valamilyen oszótja vag yszorza t legyen !!(ai model követelménye!!)
    calculatedWidth = Math.floor(calculatedWidth / 16) * 16;
    calculatedHeight = Math.floor(calculatedHeight / 16) * 16;
    return { width: calculatedWidth, height: calculatedHeight };
}
//lecserélni a töltöt képet a rendes képre
const updateImageCards = (imgIndex, imgUrl) => {
    const imgCard = document.getElementById(`img-card-${imgIndex}`)
    if (!imgCard) return;

    imgCard.classList.remove("loading");
    imgCard.innerHTML = `<img src="${imgUrl}" class="result-img" />
                        <div class="img-overlay">
                            <a href="${imgUrl}" class="img-download-btn" download="${Date.now()}.png">
                                <i class="fa-solid fa-downloads"></i>
                            </button>
                        </div>`;
}

// lekéri az API-tól a felhasználó promptja alapján a kért számú képet a megadott arányban

const generateImages = async (selectModel, imageCount, aspectRatio, promptText) => {
    const MODEL_URL = `https://api-inference.huggingface.co/models/${selectModel}`; //api kulcs az ai szöveg kép generálásahoz
    const { width, height } = getImageDimensions(aspectRatio);

    generateBtn.setAttribute("disabled","true");

    const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
        //kérést küld az apinak
        try {
            const response = await fetch(MODEL_URL, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    inputs: promptText,
                    parameters: { width, height },
                    options: { wait_for_model: true, user_cache: false },
                }),
            });

            if (!response.ok) throw new Error((await response.json())?.error);


            const result = await response.blob();
            updateImageCards(i, URL.createObjectURL(result))
        } catch (error) {
            console.log(error);
            const imgCard = document.getElementById(`img-card-${i}`);
            imgCard.classList.replace("loading","error");
            imgCard.querySelector(".status-text").textContent = "A generálás hibába ütközött, nézd meg a console-t több részletért!";
        }
    })
    await Promise.allSettled(imagePromises);
    generateBtn.removeAttribute("disabled");
}

//img kártáyk létrehozása:
const createImageCards = (selectModel, imageCount, aspectRatio, promptText) => {
    gridGallery.innerHTML = "";

    for (let i = 0; i < imageCount; i++) {
        gridGallery.innerHTML += `                    
                    <div class="img-card loading" id="img-${i}" style="aspect-ratio: ${aspectRatio}">
                        <div class="status-container">
                            <div class="spinner"></div>
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <p class="status-text">Generálás...</p>
                        </div>
                    </div>`;
    }
    generateImages(selectModel, imageCount, aspectRatio, promptText);
}


//random szöveg generálás:
promptBtn.addEventListener("click", () => {
    const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptInput.value = prompt
    promptInput.focus();
});
//kezeli a from küldést
const handleFormSubmit = (e) => {
    e.preventDefault(); //http szar letiltja
    // minden form érték beállítása / és megszerzése
    const selectModel = modelSelect.value;
    const imageCount = parseInt(countSelect.value)//parseInt = teljes egész szám
    const aspectRatio = ratioSelect.value || "1/1"; // || vagy vagy (true/false)
    const promptText = promptInput.value.trim() //vágd le a whitespacet vagyis szókóz tab stb a stringekbe
    createImageCards(selectModel, imageCount, aspectRatio, promptText)
}

promptForm.addEventListener("submit", handleFormSubmit);