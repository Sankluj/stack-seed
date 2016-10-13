#!/bin/bash

set -e

PGPASSWORD=dbpassword psql -f /fixtures/init.sql -d dbuser -U dbuser
