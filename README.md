# react-app
# SurveyJS POC with FastAPI + MySQL

## Architecture
- React frontend (SurveyJS Viewer + Creator)
- FastAPI backend to store/retrieve responses
- MySQL for persistence
- Kubernetes deployment with LoadBalancer service

## Deployment Steps
1. Build & Push Images:
   - Frontend: `docker buildx build --platform linux/amd64 -t <image> --push .`
   - Backend: `docker buildx build --platform linux/amd64 -t <image> --push .`

2. Deploy MySQL:
   - `kubectl apply -f k8s/mysql.yaml`

3. Deploy Backend:
   - `kubectl apply -f k8s/backend.yaml`

4. Deploy Frontend:
   - `kubectl apply -f frontend/surveyjs.yaml`

5. Access SurveyJS via LoadBalancer URL.

## Data Persistence
- Responses are saved as JSON in MySQL `responses` table.
- Editable surveys via `/creator` route.
