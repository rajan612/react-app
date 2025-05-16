# ====== Variables ======
REGISTRY=artifacts.ssk8s.vibrenthealth.com/vibrent-base
IMAGE_NAME=surveyjs-frontend
NAMESPACE=surveyjs
DEPLOYMENT=surveyjs-app
PLATFORM=linux/amd64

VERSION ?= latest
IMAGE_TAG=$(REGISTRY)/$(IMAGE_NAME):$(VERSION)

# ====== Targets ======

.PHONY: all build push deploy rollout

all: build push deploy rollout

build:
	@echo "🔨 Building Docker image: $(IMAGE_TAG)"
	docker buildx build --platform $(PLATFORM) -t $(IMAGE_TAG) --build-arg NODE_OPTIONS=--openssl-legacy-provider --push .

push:
	@echo "📦 Image pushed: $(IMAGE_TAG)"

deploy:
	@echo "🚀 Updating Deployment image in namespace '$(NAMESPACE)'"
	kubectl set image deployment/$(DEPLOYMENT) surveyjs=$(IMAGE_TAG) -n $(NAMESPACE)

rollout:
	@echo "🔄 Rolling out Deployment restart for '$(DEPLOYMENT)'"
	kubectl rollout restart deployment/$(DEPLOYMENT) -n $(NAMESPACE)
	kubectl rollout status deployment/$(DEPLOYMENT) -n $(NAMESPACE)

clean:
	@echo "🧹 Cleaning dangling images"
	docker image prune -f

# ====== Usage ======
# Run: make VERSION=2
# Default is VERSION=latest
