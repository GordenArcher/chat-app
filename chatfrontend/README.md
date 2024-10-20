# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


```markdown
# Chat Application

This project is a full-stack chat application, consisting of a React frontend and a Django backend. The purpose of this project is to provide real-time communication between users.

## Project Structure
- chatfrontend: Contains the React code for the frontend, built using Vite for fast development and hot module replacement (HMR).
- chatbackend: The Django backend that handles API requests, user authentication, and database interactions.

## Technologies Used
### Frontend:
- React: For building the user interface.
- Vite: A fast frontend build tool for rapid development.
- SCSS/CSS Modules: For styling the components.

### Backend:
- Django: For handling backend logic and serving the API.
- Django REST Framework: For building the API endpoints.

### Additional Libraries/Tools:
- Babel: For compiling modern JavaScript.
- SWC: A super-fast JavaScript/TypeScript compiler used in Vite.

## Features
- Real-time messaging using WebSockets.
- User authentication and authorization.
- Responsive and modern UI built with React.
- Backend powered by Django with REST API integration.

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js
- Python
- Django
- Vite

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/GordenArcher/chat-app.git
   ```

2. Navigate to the frontend and install dependencies:
   ```bash
   cd chatfrontend
   npm install
   ```

3. Run the frontend:
   ```bash
   npm run dev
   ```

4. Navigate to the backend and install dependencies:
   ```bash
   cd ../chatbackend
   pip install -r requirements.txt
   ```

5. Run the backend server:
   ```bash
   python manage.py runserver
   ```

## Contributing
If you would like to contribute to the project, feel free to create a pull request.

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
```
