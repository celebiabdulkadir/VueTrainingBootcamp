async function fetchData() {
    const result = await fetch("https://newsdata.io/api/1/news?apikey=pub_1167484dd9f936920e64621a90b50f9a67645&language=en,tr&category=environment,food,politics,sports,technology")
    .then(data => data.json()).then(response => response)

    return result
}

const data = await fetchData()


export default data
