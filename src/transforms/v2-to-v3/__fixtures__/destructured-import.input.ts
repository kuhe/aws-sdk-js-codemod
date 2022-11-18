import { Lambda, Sagemaker } from "aws-sdk";
const { S3, EC2 } = require("aws-sdk");

const sagemaker = new SageMaker({});
const lambda = new Lambda({});
const s3 = new S3({});
const ec2 = new EC2({});
