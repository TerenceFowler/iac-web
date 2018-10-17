#!/bin/bash
sudo git clone https://github.com/TerenceFowler/iac-web.git
sudo cp -a /home/ec2-user/iac-web/. /var/www/html/
sudo rm -rf /home/ec2-user/iac-web/
[ec2-user@ip-172-31-25-30 ~]$ 
