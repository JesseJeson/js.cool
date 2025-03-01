/*
 ***** 已使用的子域名
 * ***********************
 *
 * 目前以下子域名已经启用
 * 提交一个 PR， 添加你想使用的的域名
 *
 *
 **** 说明
 * ***********
 *
 * KEY:         你提交的域名（如：`foo` 表示自定义子域名为 `foo.js.cool`）
 *
 * VALUE:       以 Github 为例，`foo.github.io` 表示用户/组织的主页，
 *              或 `foo.github.io/bar` 表示项目主页，也可以绑定 Gitee、 CODING.NET 等其它开源托管服务商。
 *
 * CLOUDFLARE:  目前 JS.COOL 使用的 DNS 服务商为 CloudFlare。默认情况下代理状态为自动（支持 SSL），
 *              通过 HTTPS 链接（如： https://foo.js.cool ）进行访问。
 *              但如果你不希望通过 CloudFlare 加速，可以选择 `仅限 DNS` 选项，
 *              只需要在你提交的代码后面添加 `// noCF` 注释即可。
 */
module.exports = {
  // Cloudflare CDN
  'github': 'cdn-github.willin.workers.dev', // github.com
  'fonts-gstatic': 'cdn-fonts-gstatic.willin.workers.dev', // fonts.gstatic.com
  'remix-i18n': 'remix-i18n.pages.dev',
  // 请在此处区域内添加自定义域名
  "color-ui": "colorui-kit.github.io",
  "icns": "icnskit.github.io",
  "j2me_games": "waifu-project.github.io",
  'cnchar': 'theajack.github.io',
  'leader': 'willin.github.io',
  'codewars': 'js-cool.github.io',
  'dataloader': 'wshow.github.io',
  'fcircle-doc': 'hexo-circle-of-friends-doc.vercel.app',
  'regexper': 'wshow.github.io',
  'hyperapp': 'willin.github.io',
  'anime': 'js-cool.github.io',
  'learn': 'hosting.gitbook.com',
  'vchart': 'willin.github.io',
  'graphql': 'willin.github.io',
  'speech': 'willin.github.io',
  'shorturl': '63a13201-210b-428a-bebc-299898afb42b.id.repl.co',
  'blockchain': 'willin.github.io',
  'antiadblock': 'js-cool.github.io',
  'noho': 'willin.github.io',
  //'jen': 'dirkhe1051931999.github.io',
  'uiw': 'uiwjs.github.io',
  'exam': 'exam-clock.vercel.app', //noCf
  'xrkffgg': 'xrkffgg.github.io',
  'interview': 'front-end-interview.netlify.app',
  'xiaomeiwu':'xiaomeiwu.github.io',
  'xiaopi': 'xiaopi.netlify.app',
  'xiaowang': 'xiaowang.netlify.app',
  'ip': 'ipip.vercel.app', // noCF
  'mingyan': 'lehs8n.coding-pages.com', //noCf
  'na': 'qq.mcust.cn',
  'rx': 'willin.github.io',
  'bbx': 'appser.gitee.io',
  'mengd': 'cname.vercel-dns.com',
  'kali': '551kdx.coding-pages.com',
  'kunkun': 'kunkun.netlify.app',
  'zwt': 'zwtdyhm.github.io',
  'zwtdwz': 'zwtdzh.github.io',
  'zwtdwlzd': 'zwtdwlid.github.io',
  'histcat': '76.76.21.21',
  'wangdabao-resume': 'wangdabaoqq.github.io',
  'wangdabao': 'wangdabaoqq.github.io',
  'resources': 'willin.github.io',
  'smallkunkun': 'kblog-dev.netlify.app',
  'zwtdwzym': 'zwtduserid.github.io',
  'kaodan': 'kaodan.github.io',
  'gatsby-demo': 'whitematrix.github.io',
  'box': 'qikaile.github.io',
  'hualin': 'liaochenlanruo.github.io',
  'authing-next': 'cname.vercel-dns.com',
  'rallie': 'ralliejs.github.io',
  'remix': 'remix-blog-demo.pages.dev',
  'atordvairn': 'atordvairn.vercel.app',
  'free-ss': 'free-ss.vercel.app',
  'retrounhash': 'retrounhash.vercel.app',
  'todoish':'academicgit.github.io',
  'god': 'godwhitetaiwan.github.io',
  'godwhite': 'godwhitetaiwan.github.io',
  'lzscxb': 'lzscxb.github.io',
  'fox': 'teror.vercel.app', //noCF
  'luca': 'lucatolton.github.io',
  // 请在此行之上新增一行并提交 Pull Request
  // 示例：
  // 'youarname': 'username.github.io' // noCF
  // 以下为已启用的保留域名，请勿修改
  '@': 'js-cool.github.io',
  'www': 'kv6xcc.coding-pages.com', // 国内镜像
  'logo': 'js-cool.github.io'
};
