// Sets up the downloader
const youtubeMp3Converter = require('youtube-mp3-converter')
// creates Download function
const convertLinkToMp3 = youtubeMp3Converter('./mp3')
// Downloads mp3 and Returns path were it was saved.
const pathToMp3 =  convertLinkToMp3('https://youtu.be/NucJk8TxyRg?si=Q1Q7FcpJ135Js4vT')
