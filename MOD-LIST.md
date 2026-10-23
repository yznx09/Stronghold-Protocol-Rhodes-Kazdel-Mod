# Mod 索引清单

> 本文件是仓库内 Mod 的完整索引，仓库门面说明见 [README.md](README.md)。
> 非官方 Mod 收集与归档，仅用于个人学习、备份与交流。

仓库本身不存放任何二进制文件（`clone` 下来只有几百 KB），所有 Mod 安装包都在 **[Releases 页面](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases)** 下载，最新版为 **v1.5.5**（35 个包，约 79 MB）。

> **关于文件名**：GitHub 的 Release 附件接口会剥离文件名中的中文字符，因此 Release 上的附件统一使用英文文件名。下表列出「原名 ↔ Release 下载名」的对应关系，本地文件仍是中文名。

---

## 下载与安装

1. 打开 [Releases 页面](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases)，按对照表找到需要的包
2. 下载后解压，得到一个含 `install.mjs` / `一键安装卸载.bat` 的目录，先读里面的 `安装说明.md`
3. 双击 `一键安装卸载.bat` 选「1 检查并安装」，或命令行执行 `node install.mjs "你的游戏目录"`
4. 重启游戏生效（改服务端的包需要重启服务器，包内说明会写）

> 前置条件：Node.js 22 或更新；游戏目录是含 `public/`、`server/`、`shared/` 的那一层。
> 少数纯数据内容包没有安装器，按包内说明解压到游戏对应目录即可。

> 部分 Mod 之间存在依赖或冲突（例如多个大厅 UI 改版），建议一次只装一个，出问题就先 `--uninstall` 还原再逐个加回来定位。

---

## 盟约玩法

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| 卡兹戴尔盟约mod.zip | `kazdel-covenant-mod.zip` | 卡兹戴尔盟约相关玩法 |
| 罗德岛盟约mod.zip | `rhodes-island-covenant-mod.zip` | 罗德岛盟约相关玩法 |
| 变形同构体加强mod.zip | `polymorph-buff-mod.zip` | 变形同构体单位加强 |
| 灵巧盟约装备.zip | `nimble-covenant-gear.zip` | 灵巧系盟约装备 |
| 盟约与策略查看mod.zip | `covenant-strategy-viewer-mod.zip` | 查看已签订盟约与策略 |
| 同盟模拟mod.zip | `alliance-sim-mod.zip` | 同盟模拟玩法 |
| 商店刷新盟约装备几率提升mod.zip | `shop-covenant-gear-rateup-mod.zip` | 提高商店刷出盟约装备的概率 |
| 装备拆卸mod.zip | `equipment-dismantle-mod.zip` | 装备拆卸功能 |

## 干员相关

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| 干员满练mod.zip | `operator-max-level-mod.zip` | 干员满练度 |
| 干员特质查看mod.zip | `operator-trait-viewer-mod.zip` | 查看干员特质 |
| 干员时装数据补丁.zip | `operator-skin-data-patch.zip` | 时装数据补丁 |
| 休整期切换技能模组mod.zip | `rest-period-skill-switch-mod.zip` | 休整期切换技能模组 |
| 休整期切换技能模组mod（修复自定义干员无法切换）.zip | `rest-period-skill-switch-mod-fix.zip` | 上一项的修复版，解决自定义干员无法切换的问题 |

## 地图 / 地区内容

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| columbia.zip | `columbia.zip` | 哥伦比亚相关内容 |
| rimbilliton.zip | `rimbilliton.zip` | Rimbilliton 相关内容 |
| 雷姆必拓（最新版-含暗索）.zip | `rimbilliton-latest-with-ansuo.zip` | 雷姆必拓地区内容，含暗索 |
| ave-mujica.zip | `ave-mujica.zip` | Ave Mujica 相关内容 |
| 地图「亮度」「冷暖度」控件mod.zip | `map-brightness-temperature-mod.zip` | 地图亮度与冷暖度调节控件 |

## 大厅 UI / 视觉

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| 卫戍协议UI-选择性安装包.zip | `sp-ui-selective-installer.zip` | UI 选择性安装包，按需勾选组件 |
| 卫戍协议mod-大厅栏位开关-v1.3.2.zip | `sp-lobby-slot-toggle-v1.3.2.zip` | 大厅栏位开关 |
| 卫戍协议mod-大厅界面UI-mod-hubui-20261014.zip | `sp-lobby-ui-hubui-20261014.zip` | 大厅界面 UI（2026-10-14 版） |
| 卫戍协议mod-大厅视频背景-mod-hubvideo-v1.3.0.zip | `sp-lobby-video-bg-v1.3.0.zip` | 大厅视频背景 |
| 卫戍协议mod-大厅音乐在线平台-mod-hubmusic-v1.9.0.zip | `sp-lobby-music-online-v1.9.0.zip` | 大厅音乐接入 QQ音乐 / 网易云 / 酷我，QQ公开歌单免登录导入，搜索结果可加入播放列表，带目录扫描 / 悬浮播放器 / 双语歌词 / 歌词样式与锁定（需重启服务器） |
| 卫戍协议mod-大厅轮播图-mod-hubcarousel-v2.0.1.zip | `sp-lobby-carousel-v2.0.1.zip` | 大厅轮播图 |
| 轮播图mod-v1.0.0-backup.zip | `carousel-mod-v1.0.0-backup.zip` | 轮播图 v1.0.0 备份版 |

## 修复 / 补丁

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| 卫戍协议-数值标签崩溃修复.zip | `sp-value-label-crash-fix.zip` | 修复数值标签导致的崩溃 |
| 卡兹戴尔（修复立绘）.zip | `kazdel-portrait-fix.zip` | 卡兹戴尔立绘修复 |
| 罗德岛（源石弧修复）.zip | `rhodes-island-originium-arc-fix.zip` | 罗德岛源石弧修复 |
| 语音语言修复mod.zip | `voice-language-fix-mod.zip` | 语音 / 语言修复 |

## 模拟 / 测试

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| 测试模拟-forge工坊包-v1.0.0.zip | `test-sim-forge-workshop-v1.0.0.zip` | 测试模拟，Forge 工坊包格式 |
| 湮灭模拟-annihilation-sim-v3.1.7.zip | `annihilation-sim-v3.1.7.zip` | 湮灭模拟 v3.1.7 |

## 工具 / 其他

| 原名 | Release 下载名 | 说明 |
| --- | --- | --- |
| mod-manager.zip | `mod-manager.zip` | Mod 管理器 |
| 专属mod管理器.zip | `mod-manager-cn.zip` | 专用 Mod 管理器 |
| 查看装备mod.zip | `equipment-viewer-mod.zip` | 查看装备信息 |
| 简易通讯机和寻呼模块加强mod.zip | `communicator-pager-buff-mod.zip` | 简易通讯机与寻呼模块加强 |

---

## 说明

- 上表中的功能说明依据文件名与目录内容整理，具体效果以 Mod 实际内容为准。
- 目录中还有少量**尚未打包**的 Mod 文件夹（`阿戈尔盟约加强mod`、`整合包`、`无限卡池mod`、`干员部分修复mod`、`湮灭模式mod`、`同盟模拟人数修改mod`、`设置面板-修复前后`），可后续打包后追加到新 Release。
- 本地仓库的 `.gitignore` 会忽略所有 zip、已解压的 Mod 目录、`*.log` 与临时文件，因此工作目录里的这些内容不会误入版本库（但仍请用 git 命令行提交，网页上传不读 `.gitignore`）。

## 免责声明

- 本项目为**非官方**第三方 Mod 归档，与游戏官方及发行方无任何关联。
- 游戏本体及所有美术、音频、文本资源的著作权归原权利人所有，本项目不主张任何权利。
- 所有 Mod 仅供个人学习交流使用，请勿用于任何商业用途。
- 使用 Mod 可能导致游戏崩溃、存档异常或账号风险，**请自行备份存档，风险自负**。
- 如权利方认为内容不当，请联系删除，将在第一时间处理。
