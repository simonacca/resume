run:
	yarn run start
deploy:
	yarn run build
	scp -r build/* root@maho:/srv/static/acca.science/cv
