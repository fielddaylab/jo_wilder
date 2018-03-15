make: build
	
build: run
	
run:
	open ./index.html
server:
	python -m SimpleHTTPServer >/dev/null 2>&1 &

deploy:
	rsync -vrc * phildo@phildogames.com:/var/www/html/scratch/capitol --exclude-from rsync-exclude

