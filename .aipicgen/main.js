const themToggle = document.querySelector(".them-toggle");

(()=> {
    const savedTheme = localStorage.getItem("them");
    const systemPreferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkThem = savedTheme === "dark" || (!savedTheme && systemPreferDark)
})();

const toggleThem = () => { //keres egy them-toggle nevű ha talál akkor menjen a függvény
    const isDarkThem = document.body.classList.toggle("dark-them") //keresi hol van dark-them h van törli ha nincs hozza adja
    localStorage.setItem("them", isDarkThem ? "dark" : "light")
    themToggle.querySelector("i").className = isDarkThem ? "fa-solid fa-sun" : "fa-solid fa-moon";
}
themToggle.addEventListener("click",toggleThem)