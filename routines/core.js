axios.get("https://wger.de/api/v2/exercise/?language=2&limit=100&muscle=10", {
  header: {
    authorization: "Token b42f25822a561ae2858762328ad8c2bc709c0853"
  }
}).then((res) => {
    console.log(res);
    let dataArr = res.data.results;
    let workoutNames = document.querySelector('.workout-names');
    let workoutExplanation = document.querySelector('.workout-explanation');
    let randomSelection = dataArr[Math.floor(Math.random()*dataArr.length)];
    workoutNames.innerHTML = `<p>${randomSelection.name}</p>`;
    workoutExplanation.innerHTML = randomSelection.description;
})
