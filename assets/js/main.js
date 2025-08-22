function updateProfileInfo(profileData) {

    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
    email.href = `tel:${profileData.email}`
}

function updateSoftSkills (profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills (profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => ` <li>
                                    <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
                                    </li>`).join('')
}

function updateLanguages (profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
}

function updatePortfolio (profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li>
                            <h3 class="title github">${portfolio.name}</h3>
                            <a href="${portfolio.url}" target="_blank">${portfolio.url}</a>
                        </li>`).join('')
}

function updateProfessionalExperience (profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(professionalExperience => `<li>
                            <h3 class="title">${professionalExperience.name}</h3>
                            <span class="periodo">${professionalExperience.period}</span>
                            <p>${professionalExperience.description}</p>
                        </li>`).join('')
}

(async () => {
    const profileData= await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
})()