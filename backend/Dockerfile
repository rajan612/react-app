FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install OS dependencies required for mysql-connector-python
RUN apt-get update && apt-get install -y \
    gcc \
    libmariadb-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy application files
COPY . .

# Install dependencies
# Ensure mysql-connector-python is explicitly included here
RUN pip install --no-cache-dir mysql-connector-python fastapi uvicorn

# Or if you have a requirements.txt, use this instead:
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# Expose port
EXPOSE 8000

# Start the app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]