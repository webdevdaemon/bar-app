/* -------------------------------------------------------------------------- */
/*                              USER STATE SCHEMA                             */
/* -------------------------------------------------------------------------- */

/**
 * Instantiates a User Object
 * @class User
 * @property {Boolean} isAuthorized  
 * @property {Boolean} dbAccess
 * @property {String} username
 * @property {String} userID
 * @property {String} avatar
 * @property {String} userPath
 * @returns {UserInstance} User
 */

class User {
  constructor(
    isAuthorized = false,
    dbAccess = false,
    username = '',
    userID = '',
    avatar = '',
    userPath = '',
  ) {
    this.isAuthorized = isAuthorized
    this.dbAccess = dbAccess
    this.username = username
    this.userPath = userPath
    this.avatar = avatar
    this.userID = userID
  }

  update(updater = {}) {
    Object.entries(updater).forEach(([key, value]) => {
      this[key] = value
    })
  }
}

export {User}

