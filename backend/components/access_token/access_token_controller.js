module.exports.getMapBoxAccessToken = (req, res) => {
  res.status(200).json({
    access_token: process.env.MAPBOX_ACCESSTOKEN,
  });
};
