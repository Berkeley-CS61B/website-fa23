schedule:
	cd _data/ && python3 gen_yaml.py
serve:
	JEKYLL_ENV=debug bundle exec jekyll serve
prod:
	bundle exec jekyll serve
