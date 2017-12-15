make: build
	
build: run
	
run:
	open ./index.html
server:
	python -m SimpleHTTPServer >/dev/null 2>&1 &

