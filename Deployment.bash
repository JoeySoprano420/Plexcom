git checkout -b gh-pages
mkdir public
mv index.html public/
mv modules/ public/modules/
git add public
git commit -m "Add VACU Module Explorer for GitHub Pages"
git push origin gh-pages
