# Fall 2023 Website

Fall 2023 Website - http://fa23.datastructur.es

Wiki Docs (probably outdated, check below first) - https://github.com/Berkeley-CS61B/docs/wiki

**Please, please, please wrap markdown files to 80 chars**

**If you have not committed before, please read the [docs](https://github.com/Berkeley-CS61B/docs/wiki) and PR your change(s).**

## Table of Contents

- [Work Items](#work-items)
- [File Structure](#file-structure)
- [Local Setup](#local-setup)
- [Deploying the Website](#deploying-the-website)
- [How to...](#how-to)
  - [Release a Lab, HW, or Project](#release-a-lab-hw-or-project)
  - [Release a Discussion](#release-a-discussion)
  - [Add/Update Announcements](#addupdate-announcements)
  - [Activate a Link on the Homepage Schedule](#activate-a-link-on-the-homepage-schedule)
  - [Add Course Staff](#add-course-staff)
- [More Links](#more-links)

## Work Items

- [ ] Document setup (Jekyll)
- [ ] Document website structure and layout
- [ ] Switch to SASS
- [ ] Improve favicon compatibility
- [ ] Prune outdated assets and files
- [ ] Add links to deleted Google Drive materials
- [ ] Searchability (via lunr.js)
- [x] Switch TOC to <https://github.com/allejo/jekyll-toc>
- [x] Heading links <https://github.com/allejo/jekyll-anchor-headings>

## File Structure

```
.
├── _announcements           # Announcements .md files
├── _data                    # Site data files (schedule, staff, lecture polls) and scripts
├── _includes                # See https://jekyllrb.com/docs/includes/
├── _layouts                 # Content HTML templates
├── _sass                    # Styling files
├── assets                   # Site assets (fonts, images, JS scripts)
├── materials                # Course materials (assignments, guides, discussions, etc.)
├── ...
├── CNAME                    # Specifies domain name
├── Gemfile                  # Dependencies
├── Makefile                 # Targets for building website locally and generating schedule
├── 404.html                 # Error page
├── about.md                 # Course Info page
├── announcements.html       # Announcements page
├── index.html               # Home page
├── resources.md             # Resources page
└── staff.html               # Staff page
```

## Local Setup

**Website repo:** (https://github.com/Berkeley-CS61B/website-fa23)

This page will walk you through on how to build the website locally so you can test out your changes before pushing to the public website. It's actually pretty simple!

### Step 0: Installing Ruby

We recommend installing Ruby using the official directions [here](https://gorails.com/setup). Make sure to select your appropriate operating system. Stop after you get done with rbenv. We're not installing rails.

### Step 1: Installing Jekyll

The website is built on Jekyll, which lets us do cool things like convert YAML and Markdown files to HTML files, so we don't have to worry (too much) about the underlying HTML that our website is built on. Follow the instructions [here](https://jekyllrb.com/docs/installation/).

We're using Jekyll 3.6.2.

### Step 2: Clone the Website

Run `git clone https://github.com/Berkeley-CS61B/website-fa23.git` or `git clone git@github.com:Berkeley-CS61B/website-fa23.git` in a memorable location.

### Step 3: Build the Website

1. There are two commands you can run:
   - make serve: This will serve the website and display all the pages regardless of whether they are released or not.
   - make prod: This will serve the website and apply special properties of pages (e.g. not displaying unreleased pages, etc.)
2. If the above two commands fail, try running bundle exec jekyll serve the first time you ever build the website.
   On MacOSX Big Sur (Ruby V2.6.3, Jekyll 4.2.0): if bundle exec jekyll serve fails, try bundle install first
   If bundle install fails, try bundle config build.ffi -- --with-cflags=-Wno-implicit-function-declaration then bundle install again
3. The website will be deployed (by default) at http://127.0.0.1:4000/. Ta-da!

## Deploying the Website

1. Add a file `CNAME` with the custom domain of the website: for example, `fa23.datastructur.es`.
2. Push changes to the website's Github repo.
3. On Github, under Settings &rarr; GitHub Pages, change the Custom Domain to the domain name in the `CNAME` file. No other settings need to be changed.
4. On Dreamhost (as of Fall 2020), go to Domains &rarr; datastructur.es &rarr; DNS. Then, add a custom DNS record with:

- name = .datastructur.es
- Type = CNAME
- Value = Berkeley-CS61B.github.io

  _It usually takes about an hour for these changes to propagate._

## How to...

This section goes over how to modify the website for common tasks. If you want a new tutorial to be added, please ping infra!

### Release a Lab, HW, or Project

1. Edit the spec markdown file and supporting files (images, etc.) in the assignment's folder under `materials`. _Please change the spec's main Markdown file (e.g. lab1.md) to index.md - this makes the url path nicer!_
2. To release an assignment spec unlinked (meaning that the contents are visible if you have the url, but there is no link to it from the homepage), edit the top of the spec's Markdown file to be `released: true`.
3. To **activate the link on the homepage**: see [Activate a Link on the Homepage Schedule](#activate-a-link-on-the-homepage-schedule).

### Release a Discussion

_Please don't add discussion PDFs to this repo. Add it to the SPA's drive instead!_

1. To add a discussion worksheet to the website, add the link in the corresponding week's .yml file in `_data` under that discussion's `link` variable.
2. To add a discussion resource (slides, video, solution), go to the week's .yml file in `_data` and add an entry under `resource_links`. For example, this entry should take the form:
   ```
   ...
   resource_links:
   - name: slides
     released: true/false # whether to activate the link on the schedule
     link: "https://docs.google.com/presentation/d/14bqo6_RosJbQxago7cnvdT1Vy9GSO6hL5c1CmzcBZp0/edit?usp=sharing"
   ```
3. Finally, to activate the discussion on the website, see [Activate a Link on the Homepage Schedule](#activate-a-link-on-the-homepage-schedule). \*Note: this `released: true` is under the discussion, separate from `resource_links`.

### Add/Update Announcements

1. `cd _announcements`
2. If adding a new announcement, make a copy of \_template.md: `cp _template.md week##.md`
3. Take a look at the announcement file:

   ```
   ---
   layout: announcement
   title: TITLE
   date: YYYY-MM-DD
   ---

   Your text here.
   ```

   Do not edit `layout`. Edit the title and date accordingly. Replace `Your text here.` with the announcement you wish to make. Markdown is supported!

4. Save
5. Test with `make serve`.

### Activate a Link on the Homepage Schedule

1. Go to `_data/week#.yml` and set the corresponding `released` flag to `true`.
2. Run the `gen_yaml.py` script in the `_data` directory. This script can also be run with `make schedule`. If successful, it should tell you that it finished updating `schedule.yml`.

### Add Course Staff

1. Create a spreadsheet with responses to the staff info form, but only columns for: Email Address, Full Name, Bio, Appointment, Photo, Pronouns, and Personal Website. Download this spreadsheet as a CSV and move it to `_data/staff.csv`.
2. Invoke the script `create_staff_ymls.py` (located in `_data`). This script will create two .yml files: `tas.yml` and `tutors.yml`. It also downloads the photos from Google Drive into a new folder `assets/img/staff`. Make the drive folder temporarily public so the script can access the photos.
3. Invoke the `resize.py` script in `assets/img/staff/`.

## More Links

- [Editing the Giant Schedule Table](https://github.com/Berkeley-CS61B/docs/wiki/Editing-the-Giant-Schedule-Table)
- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Jekyll Anchor Headings](https://github.com/allejo/jekyll-anchor-headings)
- [Jekyll Table of Contents](https://github.com/allejo/jekyll-toc)
