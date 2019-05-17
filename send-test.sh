#!/bin/bash
npm run generate | mail -s "$(echo -e "This is a test email\nContent-Type: text/html")" andres.garciag747@gmail.com
