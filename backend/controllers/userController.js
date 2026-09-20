const { userService } = require('../services');

async function getProfile(request, response) {
  const user = await userService.getUserProfile(request.user.id);
  return response.json({ user });
}

async function updateProfile(request, response) {
  const user = await userService.updateUserProfile(request.user.id, request.body);
  return response.json({ user });
}

module.exports = { getProfile, updateProfile };