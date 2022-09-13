class GitHub{
    constructor(){
        this.client_id = "2586437b0292693f14b9";
        this.client_secret = "3e59f65ccd1b64a36483134fe5506f14b53e5ef7";
        this.repos_count = 5;
        this.repos_sort = "created : acs"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&
        sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

        return {
            profile: profileData,
            repos: repoData
        }
    }
}