FROM mysql

EXPOSE 3306

# --default-authentication-plugin=mysql_native_password --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
# CMD [ "--default-authentication-plugin=mysql_native_password", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci" ]

COPY ./db.example.sql /docker-entrypoint-initdb.d/