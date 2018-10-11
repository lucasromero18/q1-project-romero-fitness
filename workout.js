axios.get("https://wger.de/api/v2/exercise/?language=2", {
  header: {
    authorization: "Token b42f25822a561ae2858762328ad8c2bc709c0853"
  }
}).then((res) => {
    console.log(res);

})
