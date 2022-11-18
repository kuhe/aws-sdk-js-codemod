import("@aws-sdk/client-s3")
  .then((module) => {
    return module.S3;
  })
  .then(async () => {
    const { S3 } = require("@aws-sdk/client-s3");
    const s3 = new S3({});
  });
