# Django and React App Setup

This repository contains a Django backend and a React frontend. Follow the instructions below to set up the project.

## Prerequisites

- Python (3.6 or higher)
- Node.js
- npm (Node Package Manager)

## Backend Setup (Django)

1. Clone the repository:

    ```bash
    git clone https://github.com/saashish7070/BlogApp.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd backend
    ```

3. Create a virtual environment:

    ```bash
    python -m venv env
    ```

4. Activate the virtual environment:

    - On Windows:

        ```bash
        .\env\Scripts\activate
        ```

    - On macOS and Linux:

        ```bash
        source env/bin/activate
        ```

5. Install Django and other dependencies:

    ```bash
    pip install -r requirements.txt
    ```

6. Apply migrations:

    ```bash
    python manage.py migrate
    ```

7. Create a superuser:

    ```bash
    python manage.py createsuperuser
    ```

8. Run the Django development server:

    ```bash
    python manage.py runserver
    ```

9. The Django API should now be running at `http://localhost:8000/api/`.

## Frontend Setup (React)

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

4. The React app should now be running at `http://localhost:3000/`.

## Usage

- Access the Django admin panel at `http://localhost:8000/admin/`.
- Use the React app to interact with the Django backend APIs.

## Additional Notes

- Modify the Django settings in `backend/backend/settings.py` as needed.
- Modify the React app code in `frontend/src/` to customize the frontend.
