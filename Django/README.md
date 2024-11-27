# Django

## Step 1: Set Up Your Environment

1. **Create Virtual Environment**  
   ```bash
   python3 -m venv myenv
   source myenv/bin/activate  # Activate virtual environment
   ```

2. **Install Django**  
   ```bash
   pip install django
   python -m django --version  # Verify installation
   ```

---

## Step 2: Create a Django Project

1. **Start a New Project**  
   ```bash
   django-admin startproject project_name  # Replace project_name
   cd project_name  # Navigate to project directory
   ```

2. **Project Structure**  
   ```
   project_name/
       manage.py
       project_name/
           settings.py
           urls.py
           wsgi.py
           asgi.py
   ```

---

## Step 3: Run the Development Server

1. **Run Server**  
   ```bash
   python manage.py runserver  # Starts server at http://127.0.0.1:8000/
   ```

---

## Step 4: Create a Django App

1. **Create an App**  
   ```bash
   python manage.py startapp app_name  # Replace app_name
   ```

2. **Register the App**  
   Add to `INSTALLED_APPS` in `settings.py`:
   ```python
   INSTALLED_APPS = [
       'django.contrib.admin',
       'django.contrib.auth',
       'django.contrib.contenttypes',
       'django.contrib.sessions',
       'django.contrib.messages',
       'django.contrib.staticfiles',
       'app_name',  # Register your app
   ]
   ```

---

## Step 5: Database Setup

1. **Run Migrations**  
   ```bash
   python manage.py makemigrations  # Prepare migrations
   python manage.py migrate  # Apply migrations
   ```

---

## Step 6: Build Your Application

1. **Define Models** in `models.py`.
2. **Create Views** in `views.py`.
3. **Set Up Routes** in `urls.py`.
4. **Run the Server** to test:  
  ```bash
  python manage.py runserver
  ```