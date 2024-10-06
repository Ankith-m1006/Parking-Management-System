

# Vehicle Parking Spot Booking Web Application

## Overview
This web application simplifies the process of reserving vehicle parking spots within a college campus. It provides students and faculty the ability to book a parking space ahead of time, ensuring a hassle-free experience when arriving on campus.

## Key Features
- Secure user authentication and authorization system
- Real-time availability of parking spots
- Easy booking system to reserve parking in advance
- Manage and cancel existing bookings
- Fully responsive design for optimal viewing on both mobile and desktop devices

## Setup and Installation

### Prerequisites
- **Node.js**: Install the latest version of Node.js from [Node.js Official Site](https://nodejs.org/).
- **npm**: Comes pre-installed with Node.js; verify with `npm -v`.
- **MongoDB Atlas**: Create an account and set up a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation Steps
1. Clone the repository to your local system:
   ```bash
   git clone https://github.com/Ankith-m1006/Parking-Management-System.git
   ```

2. Install backend dependencies:
   - Navigate to the backend directory:
     ```bash
     cd BACKEND/Backendtemplate
     npm install
     ```

3. Install frontend dependencies:
   - Navigate to the frontend directory:
     ```bash
     cd FRONTEND/ParkingLotManagement
     npm install
     ```

4. Configure environment variables:
   - In the `BACKEND/Backendtemplate` directory, rename `.env.example` to `.env`, and fill in the required details as specified in the file.

5. Start the backend server:
   ```bash
   cd BACKEND/Backendtemplate
   npm run dev
   ```

6. Start the frontend server:
   ```bash
   cd FRONTEND/ParkingLotManagement
   npm run dev
   ```

7. Open your browser and navigate to `http://localhost:5173` to access the application.

### Notes:
- When registering as an admin, the default password is set to `book123`.

## Usage Instructions

### How to Book a Parking Spot
1. Register or log in using your credentials.
2. Visit the "Available Spots" section.
3. Choose your preferred date and time for parking.
4. Select a parking spot from the available options.
5. Confirm your reservation by clicking "Book Now."

### Managing Your Bookings
1. Access the "My Bookings" page from your dashboard.
2. View all your upcoming reservations.
3. Select a booking to modify or cancel as needed.

## Contributors
- **Ankith M** - 22bsm006@iiitdmj.ac.in


--- 

