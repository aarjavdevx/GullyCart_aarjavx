function asyncHandler(controller) {
  return (request, response, next) => {
    Promise.resolve(controller(request, response, next)).catch(next);
  };
}

function sendError(error, response) {
  const statusCode = error.message?.includes('required') || error.message?.includes('Invalid')
    ? 400
    : error.message?.includes('not found')
      ? 404
      : 500;

  return response.status(statusCode).json({ message: error.message || 'Internal server error.' });
}

module.exports = { asyncHandler, sendError };