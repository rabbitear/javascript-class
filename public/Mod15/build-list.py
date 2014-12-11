#!/usr/bin/python
# this takes all the voice files and builds a unordered html list.

import os
# get a list of the files in the directory.
filelist = os.listdir('.')

print(filelist)

for fn in filelist:
    numpinyin = fn.replace('.wav','')
    print('        <li id="' + numpinyin + '"><a href="#">')
    print('            <span class="bigfont">&#22823;&#23478;</span><br />')
    print('            <span class="smallfont">' + numpinyin + '</span>')
    print('        </a></li>')


