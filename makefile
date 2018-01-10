make: build
	
build: run
	
run:
	open ./index.html
server:
	python -m SimpleHTTPServer >/dev/null 2>&1 &
eengine:
	vim engine/gen_data.sh
cengine:
	engine/gen_data.sh

