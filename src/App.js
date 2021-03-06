/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		var table = app.appendChild(document.createElement("table"));
		table.classList.add("heros");
		/////////////////////////////////////////////////////////////
		// TABLEAU SIMPLE
		/////////////////////////////////////////////////////////////
		var simpleHeros = [
			"Spiderman",
			"Batman",
			"Superman",
			"Hulk",
			"Ironman",
			"Capitaine América",
			"Daredevil",
			"Wonder Woman",
		];
		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "lightcyan";
		for (let i = 0; i < simpleHeros.length; i += 1) {
			let gauche = i;
			let droite = simpleHeros[i];
			tbody.appendChild(this.rangee(gauche, droite));
		}
		/////////////////////////////////////////////////////////////
		// TABLEAUX COORDONNÉS
		/////////////////////////////////////////////////////////////
		var coordHeros = [
			"Spiderman",
			"Batman",
			"Superman",
			"Hulk",
			"Ironman",
			"Capitaine América",
			"Daredevil",
			"Wonder Woman",
		];
		var coordEgos = [
			"Peter Parker",
			"Bruce Wayne",
			"Clark Kent",
			"Bruce Banner",
			"Tony Stark",
			"Steve Rogers",
			"Matt Murdock",
			"Diana Prince",
		];

		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "lightsteelblue";
		for (let i = 0; i < coordHeros.length; i += 1) {
			let gauche = coordEgos[i];
			let droite = coordHeros[i];
			tbody.appendChild(this.rangee(gauche, droite));
		}
		/////////////////////////////////////////////////////////////
		// TABLEAU DE TABLEAUX
		/////////////////////////////////////////////////////////////
		var tTableaux = [
			["Spiderman","Peter Parker"],
			["Batman","Bruce Wayne"],
			["Superman","Clark Kent"],
			["Hulk","Bruce Banner"],
			["Ironman","Tony Stark"],
			["Capitaine América","Steve Rogers"],
			["Daredevil","Matt Murdock"],
			["Wonder Woman","Diana Prince"],
		];
		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "lightgreen";
		for (let i = 0; i < tTableaux.length; i += 1) {
			let gauche = tTableaux[i][1];
			let droite = tTableaux[i][0];
			tbody.appendChild(this.rangee(gauche, droite));
		}
		/////////////////////////////////////////////////////////////
		// TABLEAU D'OBJETS
		/////////////////////////////////////////////////////////////
		var tObjets = [
			{nom: "Spiderman", alterego: "Peter Parker"},
			{nom: "Batman", alterego: "Bruce Wayne"},
			{nom: "Superman", alterego: "Clark Kent"},
			{nom: "Hulk", alterego: "Bruce Banner"},
			{nom: "Ironman", alterego: "Tony Stark"},
			{nom: "Capitaine América", alterego: "Steve Rogers"},
			{nom: "Daredevil", alterego: "Matt Murdock"},
			{nom: "Wonder Woman", alterego: "Diana Prince"},
		];
		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "lightpink";
		for (let i = 0; i < tObjets.length; i += 1) {
			let gauche = tObjets[i].alterego;
			let droite = tObjets[i].nom;
			tbody.appendChild(this.rangee(gauche, droite));
		}
		/////////////////////////////////////////////////////////////
		// OBJET GÉNÉRIQUE
		/////////////////////////////////////////////////////////////
		var objHeros = {
			"Spiderman": "Peter Parker",
			"Batman": "Bruce Wayne",
			"Superman": "Clark Kent",
			"Hulk": "Bruce Banner",
			"Ironman": "Tony Stark",
			"Capitaine América": "Steve Rogers",
			"Daredevil": "Matt Murdock",
			"Wonder Woman": "Diana Prince",
		};
		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "lightyellow";
		for (let i in objHeros) {
			let gauche = objHeros[i];
			let droite = i;
			tbody.appendChild(this.rangee(gauche, droite));
		}
		/////////////////////////////////////////////////////////////
		// AUTRE BOUCLE
		/////////////////////////////////////////////////////////////
		
		// Avec simpleHeros
		//-----------------------------------------------------------
		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "darkcyan";
		tbody.style.color = "white";
		simpleHeros.forEach((hero, i) => {
			let gauche = i;
			let droite = hero;
			tbody.appendChild(this.rangee(gauche, droite));
		})

		// Avec tObjets
		var tbody = table.appendChild(document.createElement("tbody"));
		tbody.style.backgroundColor = "darkred";
		tbody.style.color = "white";
		tObjets.forEach(hero => {
			let gauche = hero.alterego;
			let droite = hero.nom;
			tbody.appendChild(this.rangee(gauche, droite));
		})
	}
	/**
	 * Retourne une rangée de tableau (tr) avec 2 cellules
	 * @param {string} gauche Le texte à mettre dans la première cellule
	 * @param {string} droite Le texte à mettre dans la deuxième cellule
	 */
	static rangee(gauche, droite) {
		var resultat;
		resultat = document.createElement("tr");
		var th = resultat.appendChild(document.createElement("th"));
		th.innerHTML = gauche;
		var td = resultat.appendChild(document.createElement("td"));
		td.innerHTML = droite;
		return resultat;
	}

	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
