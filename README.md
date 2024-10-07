# Digiplus
# SIM Card Activation Service

## Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Testing the API](#testing-the-api)
- [Deployment](#deployment)
- [Assumptions and Decisions](#assumptions-and-decisions)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

## Project Overview

The **SIM Card Activation Service** is a RESTful API designed for a telecom company to manage SIM card operations. This service allows for the activation and deactivation of SIM cards, as well as retrieving detailed information about each SIM card. The primary goal is to provide a reliable and scalable solution to handle SIM card lifecycle management efficiently.

## Technology Stack

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB (NoSQL)
- **ORM:** Mongoose
- **Version Control:** Git & GitHub
- **Deployment Platform:** Heroku
- **Other Tools:** Postman for API testing

## Database Schema

The application uses MongoDB to store SIM card information. The schema is defined using Mongoose for object modeling.

### SIM Card Schema

| Field           | Type       | Description                                   |
| --------------- | ---------- | --------------------------------------------- |
| simNumber       | String     | Unique identifier for the SIM card.           |
| phoneNumber     | String     | Associated phone number.                      |
| status          | String     | Current status (`active` or `inactive`).      |
| activationDate  | Date       | Timestamp when the SIM was activated.          |

