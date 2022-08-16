export const config = {
  "dev": {
    "username": "postgres",
    "password": "AWSrds2.amazon",
    "database": "my-postgresql-db-1",
    "host": "my-postgresql-db-1.comkerjejfsf.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-dev"
  },
  "jwt": {
    "secret": " "
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
