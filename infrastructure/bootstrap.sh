#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo yum install git -y

git clone https://github.com/systemdesignzallow/gosackService
cd gosackService
git checkout docker

echo 'LOCAL_SERVICE_SERVER_PORT=6001' >> .env
echo 'NODE_ENV="docker"' >> .env
echo 'NEW_RELIC="ab77636d6d1a81e91b0b1326702da84ae52124a9"' >> .env
echo 'DOCKER_DB_HOST="34.222.160.20"' >> .env
echo 'DOCKER_DB_PORT=3306' >> .env
echo 'DOCKER_DB_USER="root"' >> .env
echo 'DOCKER_DB_PW="mypassword"' >> .env
echo 'DOCKER_DB="gosackDB"' >> .env

sudo docker pull node:11.15.0
sudo docker build -t gosackservice .
sudo docker run -itd -p 80:6001 --name newservice gosackservice