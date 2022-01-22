const validateModileNumber = (mobile) => {
  if (mobile && mobile.length === 12) {
    if (new RegExp(/^(\+)(94)(\d){9}$/).test(mobile)) {
      return mobile;
    }
  }
  return null;
};

const validateEmail = (email) => {
  if (email != null) {
    if (new RegExp(/\w*[_a-zA-Z0-9](@)(hacktitude)(\.io)/).test(email)) {
      return email;
    }
  }
  return null;
};

module.exports = {
  validateModileNumber,
  validateEmail,
};
