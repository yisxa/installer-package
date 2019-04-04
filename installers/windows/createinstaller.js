const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  const rootPath = path.join('./')
  const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join(outPath, 'Electron-tutorial-app-win32-ia32/'),
    authors: 'Christian Engvall',
    noMsi: false,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'electron-tutorial-app.exe',
    setupExe: 'installer.exe',
    setupIcon: path.join(rootPath, 'app', 'assets', 'images', 'icon', 'icon.ico')
  })
}
