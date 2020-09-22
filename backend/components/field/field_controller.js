const Fields = require("./field_model");
const { getGeoPoints } = require("./utils");

module.exports.getFields = async (req, res, next) => {
  const { lat, lon } = req.params;
  console.log(req.params);
  try {
    const fields = await Fields.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(lon), parseFloat(lat)],
          },
          spherical: true,
          distanceField: "distance",
          maxDistance: 10 * 1000,
        },
      },
      { $skip: 0 },
      { $limit: 20 },
    ]);
    return res.status(200).send({
      success: true,
      count: fields.length,
      data: fields,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      error: "Server error",
    });
  }
};

module.exports.addField = async (req, res, next) => {
  try {
    const field = await Fields.create(req.body);
    console.log("data added");
    return res.status(200).send({
      success: true,
      data: field,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(400).json({
        error: "field Already exists",
      });
    }
    res.status(501).json({
      error: "Server error",
    });
  }
};

module.exports.helloWorld = (req, res) => {
  res.send("Hello World");
};
