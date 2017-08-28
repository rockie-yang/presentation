#/bin/bash

curl https://raw.githubusercontent.com/rockie-yang/data/master/pm2.5/us_ambassy_pm2.5.csv.gz -o data.csv.gz

docker build -t air-quality .

docker run -it --rm -p 8083:8080 air-quality