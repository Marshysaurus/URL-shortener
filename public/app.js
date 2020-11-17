function shortenUrl() {
  console.log("shortenUrl");
  //check if + in last part
  let longUrl = document.getElementById("long_url").value;

  let payload = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ longUrl: longUrl }),
  };
}

function getUrlData() {
  console.log("getUrl");
  let shortUrl = document.getElementById("short_url").value;

  let payload = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ longUrl: longUrl }),
  };
}
