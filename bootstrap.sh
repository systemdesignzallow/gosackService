#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo yum install git -y
cd ~
git clone https://github.com/systemdesignzallow/gosackService
cd gosackService
sudo docker pull node:11.15.0
sudo docker build -t gosackService .
sudo docker run -d --name newservice -p 6001:6001 gosackservice