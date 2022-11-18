import("aws-sdk")
  .then((module) => {
    return module.S3;
  })
  .then(() => {
    const AWS = require("aws-sdk");
    const s3 = new AWS.S3({});
  });
