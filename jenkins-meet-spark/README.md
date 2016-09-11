openssl x509 \
       -signkey domain.key \
       -in domain.csr \
       -req -days 365 -out domain.crt