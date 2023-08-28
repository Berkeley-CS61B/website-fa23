DPIC := $(shell which dpic)

include ../../../Makefile.spec

RSYNC_OPTIONS = --exclude '*.pdf'

$(PUBLISH_DIR): img/figure1.png 

%.ps: %.pic
	gtex --gpic=$(DPIC) --gpic-flags=-g $<
	$(RM) *.aux *.log *.out 

%.pdf: %.ps
	ps2pdf $< $@

img/figure1.png: figure1.ps img Makefile
	pstops -w8.5in -h11in '0(0in,0in)' $< > figure1a.ps
	gs -dBATCH -dNOPAUSE -dDEVICEWIDTHPOINTS=548  -dDEVICEHEIGHTPOINTS=700 -sDEVICE=png16m -sOutputFile=$@ figure1a.ps
	$(RM) figure1a.ps

img:
	mkdir $@
