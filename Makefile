#!make
include .env
export

default:	| setup build

init:
	cp .env .env.dist

setup:
	npm install

build:
	npm run build

serve:
	./node_modules/.bin/coveops serve \
		--org-id $(ORG_ID) \
		--token $(TOKEN) \
		--port $(SERVER_PORT) \
		--search-url $(COVEO_SEARCH_URL)

pack: 
	npm pack

publish:
	npm publish --access public

	
.PHONY: default init setup build serve pack publish