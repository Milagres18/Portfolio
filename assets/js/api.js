async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Milagres18/Portfolio/refs/heads/main/data/profile.json'
    const fetching = await fetch(url) //Retorna uma promise
    return fetching.json()
}