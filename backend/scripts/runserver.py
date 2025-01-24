import os
import subprocess

backend_dir = "/Users/owenhong/Desktop/Projects/MealPrep/backend"
os.chdir(backend_dir)
subprocess.run(["python", "manage.py", "runserver"])