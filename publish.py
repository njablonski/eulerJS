#!/usr/bin/env python
#
# Usage:
#    ./publish.py
#
# This script copies the contents of the local public_html
# directory to /var/www/<project_name>/public_html, clears
# all enabled .conf files, then links <project_name>.conf
# from sites_available to sites_enabled and restarts httpd

import subprocess
import sys

# Set your project name below
project_name = "eulerJS"

if project_name == "publish_script_default":
  sys.exit("\n\n" + "You must configure your project name in publish.py. See line 12 of the script." + "\n\n")
else:
  subprocess.call("sudo cp -R public_html/* /var/www/" + project_name + "/public_html", shell=True)
  subprocess.call("sudo rm /etc/httpd/sites-enabled/*.conf", shell=True)
  subprocess.call("sudo ln -s /etc/httpd/sites-available/" + project_name + ".conf /etc/httpd/sites-enabled/" + project_name + ".conf", shell=True)
  subprocess.call("sudo apachectl restart", shell=True)
