const Namespace= require('../class/NameSpace')
const Room= require('../class/Room')

const wikiNS= new Namespace(0, 'wiki', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png', '/wiki')
const mozillaNS= new Namespace(1, 'mozilla', 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png', '/mozilla')
const linuxNS= new Namespace(2, 'linux', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png', '/linux')


wikiNS.addRoom(new Room(0, 0, 'New Article'))
wikiNS.addRoom(new Room(1, 0, 'Editors'))
wikiNS.addRoom(new Room(2, 0, 'Others'))

mozillaNS.addRoom(new Room(0, 1, 'Firefox'))
mozillaNS.addRoom(new Room(1, 1, 'SpiderMonkey'))
mozillaNS.addRoom(new Room(2, 1, 'SeaMonkey'))

linuxNS.addRoom(new Room(0, 2, 'Ubunto'))
linuxNS.addRoom(new Room(1, 2, 'Red Hat'))
linuxNS.addRoom(new Room(2, 2, 'Fedora'))
linuxNS.addRoom(new Room(3, 2, 'Kali'))

const nameSpaces= [wikiNS, mozillaNS, linuxNS]

module.exports= nameSpaces