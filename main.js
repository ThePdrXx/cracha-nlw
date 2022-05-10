const LinksSocialMedia = {
  github: 'thepdrxx',
  youtube: 'channel/UCT27A5sYcKrKHfJl_xnCL-Q',
  instagram: 'pdr_vinic/',
  facebook: 'pedroviniciusurai',
  twitter: 'pdr_zika'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
