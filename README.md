# Django and React App Setup

This repository contains a Django backend and a React frontend. Follow the instructions below to set up the project.

## Prerequisites

- Python (3.6 or higher)
- Node.js
- npm (Node Package Manager)

## Backend Setup (Django)
Open terminal and paste below code:

1. Clone the repository:

    ```bash
    git clone https://github.com/saashish7070/BlogApp.git
    cd BlogApp
    ```

2. Navigate to the backend directory:

    ```bash
    cd backend
    ```

3. Create a virtual environment:

    ```bash
    python -m venv env
    ```
    or
    ```bash
    python3 -m venv env
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
    cd blogproject
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

Open new terminal and paste below code:

1. Navigate to the frontend directory:

    ```bash
    cd BlogApp
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

   ## Screenshots
<img width="1440" alt="Screenshot 2024-04-23 at 17 44 26" src="https://github.com/saashish7070/BlogApp/assets/69105660/17375b8c-8d39-4399-ac67-d9d5f8472a27">
<img width="1440" alt="Screenshot 2024-04-23 at 17 44 39" src="https://github.com/saashish7070/BlogApp/assets/69105660/03b62d01-af97-4f72-9cae-90a19267b0a1">
<img width="1440" alt="Screenshot 2024-04-23 at 17 44 55" src="https://github.com/saashish7070/BlogApp/assets/69105660/0049765d-837b-4ee0-a4d7-034276a219b2">
<img width="1440" alt="Screenshot 2024-04-23 at 17 45 04" src="https://github.com/saashish7070/BlogApp/assets/69105660/1808fdbc-b73b-4e01-86ec-e9840cc63b0c">

   

## Usage

- Access the Django admin panel at `http://localhost:8000/admin/`.
- Use the React app to interact with the Django backend APIs.

## Additional Notes

- Modify the Django settings in `backend/backend/settings.py` as needed.
- Modify the React app code in `frontend/src/` to customize the frontend.
