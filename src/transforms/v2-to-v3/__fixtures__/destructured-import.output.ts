import { Lambda } from "@aws-sdk/client-lambda";
import { SageMaker } from "@aws-sdk/client-sagemaker";
const { S3 } = require("@aws-sdk/client-s3");
const { EC2 } = require("@aws-sdk/client-ec2");

const sagemaker = new SageMaker({});
const lambda = new Lambda({});
const s3 = new S3({});
const ec2 = new EC2({});
