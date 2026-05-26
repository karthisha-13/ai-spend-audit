# Architecture Overview

This project evolved over multiple days, improving from basic UI → logic → product-level UX.

---

## 🟢 Day 3 – Frontend Foundation

### 1. Frontend
- Built using Next.js (App Router)
- Pages:
  - Login Page (/login)
  - Main Dashboard (/)

### 2. Components
- Login Form:
  - Takes username input
  - Stores user in localStorage
- Basic Audit Form UI:
  - Inputs for tool, plan, spend, users, use case

### 3. State Management
- React useState used for:
  - Form inputs
  - Result display

---

## 🔵 Day 4 – Logic & Functionality

### 4. Routing & Navigation
- useRouter from Next.js used
- Protected route:
  - If no user in localStorage → redirect to /login

### 5. Authentication (Basic)
- Client-side authentication using localStorage
- Login → stores username
- Logout → removes user and redirects

### 6. Business Logic (Core Feature)
- Spend analysis:
  - >100 → High spending
  - >50 → Moderate spending
  - ≤50 → Optimized

- Suggestions:
  - High → downgrade plan
  - Moderate → optimize usage
  - Low → no change

- Savings estimation added

### 7. Validation
- Prevents submission if fields are empty
- Displays warning message

---

## 🟣 Day 5 – UX & Product Layer

### 8. UI Improvements
- Centered layout with card-based design
- Improved spacing and readability
- Smooth animations (fade, hover)

### 9. Dashboard (New)
- Added analytics cards:
  - Estimated savings
  - Spend level (High/Medium/Low)
  - Efficiency status

### 10. UX Enhancements
- Dynamic result display
- Multi-line structured output
- Visual feedback instead of plain text

### 11. Personalization
- Displays logged-in username
- Improved placement (centered header)

---

## 🧠 Overall Architecture Summary

- **Frontend:** Next.js (App Router)
- **State:** React useState
- **Storage:** localStorage
- **Auth:** Client-side (basic)
- **Logic:** Rule-based audit system
- **UX:** Card UI + dashboard analytics

---

## 🚀 Future Improvements (Planned)

- Add charts for spending visualization
- Store audit history
- Backend integration (database)
- Real authentication (JWT / OAuth)
