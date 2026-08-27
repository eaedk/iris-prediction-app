# 🌸 Iris Classifier — My First Next.js Project

A small but complete Machine Learning web application built with **Next.js**, **TypeScript**, **React**, and a **Random Forest classifier**.

This project is also my **first application built with Next.js**. I created it as a practical way to learn the framework by building something more interesting than a traditional CRUD or todo application: a real end-to-end ML application with data exploration, server-side prediction, API routes, interactive components, and a reusable UI.

---

## 🎯 Project Goal

The application predicts the species of an Iris flower from four measurements:

* Sepal length
* Sepal width
* Petal length
* Petal width

The model classifies the flower into one of three species:

* **Iris Setosa**
* **Iris Versicolor**
* **Iris Virginica**

The project is based on the famous **Iris dataset**, one of the most widely used introductory datasets in Machine Learning.

---

## ✨ Current Features

### 🏠 Dashboard

The home page gives an overview of the project and dataset:

* 150 Iris samples
* 3 species
* 4 input variables
* Random Forest model
* Quick access to the prediction interface

### 🔮 Interactive Prediction

Users can enter the four measurements of an Iris flower and obtain a prediction.

Example:

```text
Sepal length: 5.1 cm
Sepal width:  3.5 cm
Petal length: 1.4 cm
Petal width:  0.2 cm
```

Result:

```text
Iris Setosa
```

The prediction interface also includes:

* Input validation
* Loading state
* Error handling
* Quick examples for each Iris species
* Prediction confidence
* Class probabilities
* Display of the submitted measurements

---

## 📊 Dataset Explorer

The application includes a dedicated page to explore the Iris dataset.

Features include:

* Interactive scatter plot
* Dynamic X and Y feature selection
* Visualization of the three Iris classes
* Number of samples per species
* Dataset preview table

This part of the project helped me experiment with the interaction between **Server Components and Client Components**.

---

## 🧠 Machine Learning

The classifier uses a:

```text
Random Forest Classifier
```

The model is trained directly from the Iris dataset using:

* `ml-dataset-iris`
* `ml-random-forest`

The prediction pipeline is:

```text
User
 │
 ▼
Prediction Form
 │
 ▼
POST /api/predict
 │
 ▼
Next.js Route Handler
 │
 ▼
Random Forest Model
 │
 ▼
Prediction + probabilities
 │
 ▼
React UI
```

One interesting aspect of this project is that the ML model does not require a separate Python backend.

The entire application can run inside the **Next.js application**.

---

## 🏗️ Architecture

```text
iris-prediction-app/
│
├── app/
│   ├── api/
│   │   └── predict/
│   │       └── route.ts
│   │
│   ├── about/
│   │   └── page.tsx
│   │
│   ├── dataset/
│   │   └── page.tsx
│   │
│   ├── prediction/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── DatasetChart.tsx
│   ├── DatasetTable.tsx
│   ├── PredictionForm.tsx
│   ├── PredictionResult.tsx
│   ├── Sidebar.tsx
│   └── StatCard.tsx
│
├── lib/
│   ├── iris-dataset.ts
│   └── iris-model.ts
│
├── docs/
│   └── mockups/
│
├── public/
│
└── README.md
```

---

## ⚙️ Technologies

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Lucide React**

### Data Visualization

* **Recharts**

### Machine Learning

* **ml-random-forest**
* **ml-dataset-iris**

### Backend

Next.js **Route Handlers** are used to expose the prediction API.

```text
POST /api/predict
```

No separate backend service is required.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/eaedk/iris-prediction-app.git
cd iris-prediction-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔌 Prediction API

The application exposes a simple API.

### Endpoint

```text
POST /api/predict
```

### Request

```json
{
  "sepalLength": 5.1,
  "sepalWidth": 3.5,
  "petalLength": 1.4,
  "petalWidth": 0.2
}
```

### Example response

```json
{
  "classId": 0,
  "species": "setosa",
  "confidence": 0.98,
  "probabilities": {
    "setosa": 0.98,
    "versicolor": 0.02,
    "virginica": 0
  }
}
```

---

## 🧪 Example Inputs

### Setosa

```text
5.1
3.5
1.4
0.2
```

### Versicolor

```text
5.9
2.8
4.3
1.3
```

### Virginica

```text
6.3
3.3
6.0
2.5
```

---

# 📚 What I Learned

Because this is my **first project using Next.js**, the main objective was not only to create an Iris classifier but also to understand how a modern Next.js application is structured.

Through this project I experimented with:

* App Router
* File-based routing
* Layouts
* Server Components
* Client Components
* React state
* TypeScript
* API Route Handlers
* `fetch`
* Dynamic navigation
* Reusable components
* Data visualization
* Form validation
* Error handling
* Loading states
* Machine Learning integration

One of the most interesting lessons was understanding where code executes.

For example:

```text
page.tsx
      ↓
Server Component

PredictionForm.tsx
      ↓
Client Component

/api/predict/route.ts
      ↓
Server

iris-model.ts
      ↓
Machine Learning logic
```

This distinction is one of the concepts I wanted to understand through this project.

---

# 🔭 Possible Future Features

There are many ways this small project could evolve.

## Machine Learning

* Proper train/test split
* Calculate real model accuracy
* Display confusion matrix
* Precision, recall and F1-score
* Cross-validation
* Compare several algorithms
* Logistic Regression
* Decision Tree
* K-Nearest Neighbors
* SVM
* Random Forest
* Model selection interface
* Hyperparameter tuning
* Feature importance visualization
* Model versioning

## Data Exploration

* Histogram for each feature
* Box plots
* Correlation matrix
* Pair plots
* Species filtering
* Interactive dataset search
* Pagination
* Column sorting
* CSV export
* Dataset statistics
* Min / max / mean / standard deviation

## Prediction

* Prediction history
* Batch prediction
* CSV upload
* Download prediction results
* Compare several flowers
* Probability visualization
* Uncertainty warnings
* Input ranges based on dataset statistics

## UI / UX

* Dark mode
* Responsive mobile sidebar
* Animations
* Toast notifications
* Skeleton loaders
* Better Iris illustrations
* Interactive onboarding
* Accessible keyboard navigation
* Improved mobile experience

## Backend

The project could later evolve toward a more traditional ML architecture:

```text
Next.js
   │
   ▼
FastAPI
   │
   ▼
Python ML Model
```

This would make it possible to use:

* scikit-learn
* XGBoost
* LightGBM
* PyTorch
* TensorFlow

while keeping Next.js for the frontend.

## Database

Add PostgreSQL to store:

* Predictions
* User sessions
* Models
* Experiments
* Metrics
* Dataset versions

Possible stack:

```text
Next.js
   │
   ├── PostgreSQL
   │
   └── ML API
```

## Authentication

Add:

* User registration
* Login
* Personal prediction history
* Admin dashboard

Possible tools:

* Auth.js
* Clerk
* Supabase Auth

## MLOps

A more advanced version could include:

* MLflow
* Model registry
* Experiment tracking
* Model versioning
* Drift monitoring
* Prediction monitoring
* Automated retraining

---

# 🌱 Possible Evolution

A more ambitious version of the project could become a generic **Machine Learning Prediction Platform**.

Instead of being limited to Iris:

```text
Upload dataset
      ↓
Select target
      ↓
Train models
      ↓
Evaluate models
      ↓
Deploy model
      ↓
Generate prediction API
      ↓
Use interactive dashboard
```

The Iris classifier would then become the first use case of a much larger system.

---

## 🛣️ Roadmap

### V1

* [x] Next.js application
* [x] Iris dataset
* [x] Random Forest
* [x] Prediction API
* [x] Interactive form
* [x] Dataset visualization
* [x] Prediction probabilities
* [x] Dashboard

### V2

* [ ] Proper train/test evaluation
* [ ] Real accuracy metrics
* [ ] Confusion matrix
* [ ] Feature importance
* [ ] Multiple ML models
* [ ] Improved responsive design

### V3

* [ ] PostgreSQL
* [ ] Prediction history
* [ ] Authentication
* [ ] Batch prediction
* [ ] CSV upload
* [ ] Model comparison

### V4

* [ ] Python ML backend
* [ ] MLflow
* [ ] Model registry
* [ ] Monitoring
* [ ] Automated deployment

---

## 💡 Why This Project?

I wanted my first Next.js project to involve more than rendering pages.

The goal was to understand how Next.js could be used to build a complete application combining:

```text
Frontend
+
Backend
+
API
+
Data
+
Machine Learning
```

The Iris dataset is intentionally simple, which makes it possible to focus on understanding the framework and the overall application architecture.

It is a small project, but it provides a solid foundation for building more advanced **AI and Machine Learning applications with Next.js**.

---

## 📄 License

This project is intended primarily for learning, experimentation and demonstration.
