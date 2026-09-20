const { userRepository } = require('../repositories');

const PROFILE_FIELDS = ['name', 'phone', 'email', 'location'];

function pickProfileUpdates(updates = {}) {
  return PROFILE_FIELDS.reduce((profile, field) => {
    if (updates[field] !== undefined) profile[field] = updates[field];
    return profile;
  }, {});
}

async function getUserProfile(userId) {
  const user = await userRepository.findById(userId);
  if (!user) throw new Error('User profile not found.');
  return user;
}

async function updateUserProfile(userId, updates) {
  const user = await userRepository.updateById(userId, pickProfileUpdates(updates));
  if (!user) throw new Error('User profile not found.');
  return user;
}

module.exports = { getUserProfile, updateUserProfile };