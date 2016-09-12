openssl x509 \
       -signkey domain.key \
       -in domain.csr \
       -req -days 365 -out domain.crt

docker build -t my-zeppelin:0.6.2 .
docker run -d -p 8089:8080 my-zeppelin:0.6.2       