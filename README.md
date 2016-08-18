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