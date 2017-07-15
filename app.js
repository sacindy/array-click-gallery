var titles =["Modern Art", "Lilo & Stich", "Starry Night"];
//document.getElementById('art1');","

var images=["https://lh3.ggpht.com/B6CQmZxhwHvC5ZuJZEEIWrNn0RJ1HqAh9Vo91b3sHNYRXZaFkolZxGGFWL6XdAcQqzsA78rG4r4ZsyV8dDsE7r5i_PQ=s0","https://vignette2.wikia.nocookie.net/stitchipediaalilostitch/images/6/60/Lilo_and_Stitch.png/revision/latest?cb=20140530120333","https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VanGogh-starry_night_ballance1.jpg/962px-VanGogh-starry_night_ballance1.jpg"];
var artist= ["Who Knows", "Disney","Vincent Van Gogh"];
var i=0;
var titleElement = document.getElementById("title");
var imgElement = document.getElementById("imgPlaceholder");
var pElement =  document.getElementById("para");

var btn= document.getElementById("btn");

function changeImg(){
		if{i === 3}{
		i=0;
	}
	titleElement.innerHTML =titles [i];
	imgElement.src = images [i];
	pElement.innerHTML = artist[i];
	i++;
}
btn.addEventListener("click", changeImg);
//add.addEventListener ("onclick");