provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

# ami amazon machine image

# instance | name
resource "aws_instance" "gosackService" {
  #   count           = 3
  ami             = "ami-014cbdfc21886a09b"
  instance_type   = "t2.micro"
  key_name        = "zallowBackend"
  user_data       = "${data.template_file.bootstrap.template}"
  security_groups = ["Service"]
}

# user data is shell script that gets loaded into terraform
data "template_file" "bootstrap" {
  # count = 3
  #   template = "${file("${path.cwd}/bootstrap${count.index}.sh")}"
  template = "${file("${path.cwd}/bootstrap.sh")}"
}


## TODO: 
# Build security group in TF using tf resource block
# optional: build key pair in TF 
# define root/ extra EBS volumes with resource blocks
#### FIX BOOTSTRAP SCRIPT 
