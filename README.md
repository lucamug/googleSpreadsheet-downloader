# googleSpreadsheet-downloader

Javascript snippet to download a multi-sheets-Google-Spreadsheet in JSON

Script to download your multi-sheets-Google-spreadsheet in a simple format:

## Steps

1. Publish your Google spreadsheet first. Click on Publish to the web…

![Img1](https://cdn-images-1.medium.com/max/1600/1*29K0YmUoQTKv9gFMLnrI8A.png)

2. Click the Publish button…

![Img2](https://cdn-images-1.medium.com/max/1600/1*0xaWrWp6p7mlKr3EM4RjpQ.png)

3. Copy the ID…

![Img3](https://cdn-images-1.medium.com/max/2000/1*_yljb2z69CS-V6k9p-8jCQ.png)

4. Paste the ID into downloadTest.js


6. Run

`$ node downloadTest.js`

et voilà, the script will output a simplified version of your spreadsheet in JSON.
Note that the Spreadsheet that I use for the example is made of 3 sheets.

The snippet will automatically generate 4 JSON requests.

This is the spreadsheet that I used in the example: https://docs.google.com/spreadsheets/d/1Wl4MriZ-4HM_DmXWxHyH7Xt2VKoRPK3RfCji_KhFa7U/pubhtml
