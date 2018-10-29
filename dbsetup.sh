#!/bin/bash
set -e

check_db_status() {

    #See if the database is installed
    if [ "$(which mysql | wc -l)" -eq 0 ]; then
        echo "mysql not installed"
        db_status=-1
        return
    fi

    db_status=0
}

install_db() {
    echo "Installing mysql requires sudo"
    sudo apt update
    sudo apt-get install mysql-server
    sudo ufw allow mysql

    echo "GRANT ALL PRIVILEGES ON *.* TO 'khaki'@'localhost' IDENTIFIED BY 'khaki';" | sudo mysql -u root -p'\n' mysql
}

check_db_status
if [ $db_status -eq -1 ]; then
    install_db
else
    echo "mysql already installed"
fi

exit 0
