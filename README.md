--------------------------
HOW TO RUN THE APPLICATION
--------------------------
1. Install Nodejs, npm

2. Open Nodejs command line

3. Direct to project directory, install Gulp:
npm install --save-dev gulp-install

4. Install Gulp plugins:
npm i gulp-htmlmin --save-dev
npm install gulp-clean-css --save-dev 
npm install --save-dev gulp-autoprefixer
npm install --save-dev gulp-uglify
npm install --save-dev gulp-image-optimization
npm install browser-sync gulp --save-dev

5. Run local server:
gulp

6. Execute ngrok.exe. In the ngrok command line, run remote server:
ngrok http 3000

--------------------
OPTIMIZATIONS I MADE
--------------------
1. index.html -> PageSpeed score >90 : 
- inline above-the-folde css and defer unneccessary styles, script
- mibnify html, css, js, optimize images using building tool Gulp
- erase some unneccessary styles in style.css

2. main.js -> 60FPS when scroll & Resize pizza size less than 5ms : 
- define variables outside the for loops
- replace querySelector with getElementById, getElementsByClassName

 
