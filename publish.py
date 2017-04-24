#!/usr/bin/env python
#
# Usage:
#    ./publish.py <arg1: name of the target directory>
#
# This script copies the contents of the local public_html
# directory to /var/www/<arg1>/public_html then restarts httpd

import sys
import subprocess

no_arguments_error_text = ("\n\n" + "You must specify the name of the directory you want to publish to." + "\n")
too_many_arguments_error_text = ("\n\n" + "Too many arguments." + "\n")
usage_text = ("\n\n" + "Usage:" + "\n" + "  ./publish.py <arg1: name of the target directory>" + "\n")

if len(sys.argv) > 2:
    sys.exit(too_many_arguments_error_text + usage_text)
elif len(sys.argv) == 1:
    sys.exit(no_arguments_error_text + usage_text)
else:
    subprocess.call("sudo cp -R public_html/* /var/www/" + sys.argv[1] + "/public_html", shell=True)
    subprocess.call("sudo apachectl restart", shell=True)
