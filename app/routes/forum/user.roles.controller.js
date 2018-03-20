class userRolesController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const userRoles = this.data.userRoles.getAll();
        return userRoles;
    }
}

module.exports = userRolesController;