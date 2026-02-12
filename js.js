const button = document.querySelector(".thema");
button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});


// ?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"
let base = "https://fdnd.directus.app/items"
let eindpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&filter[name][_eq]=Aya%20Barni&filter[github_handle][_nempty]=true"
let url = base + eindpoint
console.log(url);

async function haalAyaBarni() {
    let response = await fetch(url)
    let responseJSON = await response.json()
    let aya = responseJSON.data[0]
    let naamElement = document.querySelector("#person-name")
    let githubLink = document.querySelector("#github-link")
    naamElement.textContent = aya.name
    githubLink.href ="https://github.com/" + aya.github_handle;

}
haalAyaBarni();


let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_hobby][_nempty]=true";
let url2 = base + endpoint
let list = document.querySelector(".buddiesList")

async function haalHakenBuddiesOp() {
    let response = await fetch(url2)
    let data = await response.json();
    let studenten = data.data;
    list.innerHTML = "";
   studenten.forEach((person) => {
	const hobby = (person.fav_hobby ?? "").toLowerCase();

	if (hobby.includes("haken") || hobby.includes("crochet")) {
		const html = `
			<li class="buddy-crochet">
				<div class="avatar">  <img src="${person.avatar}" alt="${person.name}">
</div>
				<p class="name-buddy">${person.name ?? ""}</p>
			</li>`;
		list.insertAdjacentHTML("beforeend", html);
	}
});

   
}
haalHakenBuddiesOp();
// ik had errors hier dus heb het opgelost met gpt:
// https://chatgpt.com/c/698cd8e9-2f78-8388-9f91-9564a0b27ac2

