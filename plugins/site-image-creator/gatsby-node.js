const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { projects } = require('../../src/data/links.json');

// Only runs during Gatsby Build process (not dev)
exports.onPostBuild = async (options) => {
  console.log('\nPost Build - generating images\n');
  const promises = projects.map(project => printImage(project));
  await Promise.all(promises);
};
async function printImage(project) {
  const browser = await puppeteer.launch({ headless: true , defaultViewport: { width: 1920, height: 1080 }});
  const page = await browser.newPage();
  await page.goto(project.dUrl , { waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  await page.screenshot({
    path: path.join(
      __dirname,
      '..',
      '..',
      'public',
      `${project.title}.png`,
    ),
  })
  await browser.close();
  return;
}