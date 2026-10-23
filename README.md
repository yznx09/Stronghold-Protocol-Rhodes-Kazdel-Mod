# 卫戍协议：盟约 · 罗德岛 / 卡兹戴尔盟约 Mod

给 [sganggs/Stronghold-Protocol](https://github.com/sganggs/Stronghold-Protocol)（《明日方舟》「卫戍协议：盟约」非官方同人复刻）做的**同人 Mod 合集与归档**。

[![latest release](https://img.shields.io/github/v/release/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod?label=release&color=2ea44f)](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/latest)
[![downloads](https://img.shields.io/github/downloads/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/total?label=downloads)](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases)
[![packages](https://img.shields.io/badge/%E5%AE%89%E8%A3%85%E5%8C%85-35%20%E4%B8%AA-blue)](#%E5%8C%85%E4%B8%80%E8%A7%88)
[![license](https://img.shields.io/github/license/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod?label=license)](LICENSE)

> [!IMPORTANT]
> - 本项目是**非官方**第三方 Mod 归档，与鹰角网络（Hypergryph）、Yostar 及上游 Stronghold-Protocol 项目**没有隶属或授权关系**。
> - 《明日方舟》及「卫戍协议」相关的名称、角色、美术、音频、文本与数据，著作权归原权利人所有，本仓库不主张任何权利。
> - 所有 Mod **仅供个人学习交流**，严禁任何形式的商业用途（售卖、付费下载、收费开服、广告变现等）。
> - 使用 Mod 可能导致游戏崩溃、存档异常，**请先备份存档，风险自负**。
> - 如权利方认为内容不当，请开 Issue 联系，会第一时间删除。

---

## 目录

- [这是什么](#这是什么) · [下载](#下载) · [安装](#安装) · [包一览](#包一览)
- [兼容性](#兼容性--一次只装一个) · [仓库结构](#仓库结构) · [常见问题](#常见问题)
- [上传与维护规范](#上传与维护规范) · [版本记录](#版本记录) · [许可证与致谢](#许可证与致谢)

---

## 这是什么

一个**只做索引、不放二进制**的 Mod 归档仓库：

- 仓库本身很小（`clone` 下来约 200 KB），**不含任何安装包**；
- 全部安装包托管在 **[Releases](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases)**，每个 zip 可单独下载、单独安装；
- 完整清单（原名 ↔ Release 英文文件名对照）见 **[MOD-LIST.md](MOD-LIST.md)**。

当前最新版：**[v1.5.5](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/tag/v1.5.5)** — 35 个独立安装包，合计约 79 MB。

Mod 内容涵盖：盟约玩法与装备、干员调整、地图与地区内容（哥伦比亚 / 雷姆必拓 / Ave Mujica 等）、大厅 UI 改版（界面、视频背景、轮播图、在线音乐）、修复补丁、模拟模式（湮灭模拟 / 测试模拟）和 Mod 管理器。

---

## 下载

| 版本 | 日期 | 内容 |
| --- | --- | --- |
| **[v1.5.5](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/tag/v1.5.5)**（最新） | 2026-10-20 | 合集归档，**35 个独立包**，约 79 MB。推荐从这里挑 |
| [v1.5.4](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/tag/v1.5.4) | 2026-10-13 | 一键安装包，适配新 UI 与上游 0.2.5 |
| [v1.5.3.1](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/tag/v1.5.3.1) | 2026-10-13 | 跨版本一键安装包，适配 0.2.5 + 源石弧修复 |
| [v1.4.8](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/tag/v1.4.8) | 2026-10-12 | 适配上游 0.2.4 |
| [卡兹戴尔盟约](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/tag/%E5%8D%A1%E5%85%B9%E6%88%B4%E5%B0%94%E7%9B%9F%E7%BA%A6) | 2026-10-13 | 卡兹戴尔盟约 mod v2.1（早期版本） |

> **关于文件名**：GitHub 的 Release 附件接口会剥离文件名里的中文，所以附件统一用英文名（`卡兹戴尔盟约mod.zip` → `kazdel-covenant-mod.zip`）。本地解压后的目录名不受影响。对照表见 [MOD-LIST.md](MOD-LIST.md)。

---

## 安装

1. **下载**：打开 [Releases](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/latest)，按 [MOD-LIST.md](MOD-LIST.md) 的对照表找到需要的包，下载对应的 zip。
2. **解压**：解压得到一个 `mod-xxx/` 或 `<中文名>mod/` 目录，先读里面的 `安装说明.md` / `README.md`。
3. **安装**：包内如果有 `一键安装卸载.bat`，双击它选「1 检查并安装」；没有的话用命令行：

   ```bat
   node install.mjs "你的游戏目录"             :: 安装
   node install.mjs "你的游戏目录" --dry-run   :: 只看会做什么
   node install.mjs "你的游戏目录" --verify    :: 校验
   node install.mjs "你的游戏目录" --uninstall :: 还原
   ```

4. **生效**：重启游戏（部分包改的是服务端，需要重启**服务器**，包内说明会写）。

前置条件：**Node.js 22 或更新**；游戏目录是含 `public/`、`server/`、`shared/` 的那一层。

> 少数包是纯数据内容包，没有安装器，按包内说明解压到游戏对应目录即可。

---

## 包一览

按用途分类，完整表格（含每个包的功能说明）见 **[MOD-LIST.md](MOD-LIST.md)**。

| 分类 | 数量 | 代表包 |
| --- | --- | --- |
| 盟约玩法 | 8 | 卡兹戴尔盟约、罗德岛盟约、灵巧盟约装备、盟约与策略查看、装备拆卸 |
| 干员相关 | 5 | 干员满练、干员特质查看、休整期切换技能模组（含修复版） |
| 地图 / 地区内容 | 5 | 哥伦比亚、雷姆必拓（含暗索）、Ave Mujica、地图亮度冷暖度控件 |
| 大厅 UI / 视觉 | 7 | 大厅界面 UI、视频背景、轮播图、**在线音乐平台**、选择性安装包 |
| 修复 / 补丁 | 4 | 数值标签崩溃修复、卡兹戴尔立绘修复、源石弧修复、语音语言修复 |
| 模拟 / 测试 | 2 | 湮灭模拟、测试模拟（Forge 工坊包） |
| 工具 / 其他 | 4 | Mod 管理器（中/英）、查看装备、通讯机与寻呼模块加强 |

<p align="center">
  <a href="https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases/latest"><b>→ 去 Releases 下载</b></a>
</p>

---

## 兼容性 · 一次只装一个

- **安装器类 Mod 会改同一批文件**（`shared/protocol.js`、`public/js/ui/detailPanel.js`、`server/match/match/*.js` 等）。装第二个时会被安装器的「目标不是 release 原文」检查拦下，**想同时要多个功能就装整包**。
- 版本要对应：本仓库的包跨越上游 **0.2.4 / 0.2.5 / 0.3.x**。每个包适用的上游版本以包内 `安装说明.md` 为准；版本对不上会报「脏文件」或覆盖掉新版改动。
- 出问题的排查顺序：全部卸载（`--uninstall`）→ 确认游戏本身能跑 → 一次只加一个包。
- 大厅 UI 类（界面 / 视频背景 / 轮播图 / 在线音乐）之间有依赖关系，**在线音乐依赖大厅界面 UI**，装之前先确认。

---

## 仓库结构

```
.
├── README.md                ← 你正在看的门面说明
├── MOD-LIST.md              ← Mod 完整索引（原名 ↔ Release 文件名对照）
├── LICENSE                  ← GPL-3.0
├── .gitignore               ← 挡住安装包、日志、临时文件
├── .gitattributes           ← 统一 LF，二进制不做转换
└── docs/
    ├── 整包-使用说明.md                        ← 整包安装详解
    ├── 拆分包一览.md                           ← 11 个独立拆分包说明
    ├── 休整期可更换技能和模组-用法.txt          ← 玩法说明
    ├── 修复记录-变形同构体覆盖修复-20261021.md   ← 兼容性修复记录
    └── 移植记录-鸢0.3.1.1-20261023.md           ← 上游 0.3.1.1 功能移植记录
```

---

## 常见问题

**Q：为什么 clone 下来没有 Mod？**
A：本仓库只做索引，不存安装包。请到 [Releases](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases) 下载。

**Q：Release 里附件名是英文，对不上我看到的 Mod 名？**
A：GitHub 会剥离附件名里的中文。用 [MOD-LIST.md](MOD-LIST.md) 第 2 列对照。

**Q：装完进游戏没反应 / 报错？**
A：先确认上游版本对不对；再确认装的是「安装器类」还是「数据包类」。`--verify` 能校验安装完整性，`--uninstall` 能干净还原。

**Q：能同时装多个吗？**
A：改同一批文件的包不能。想一次要多个功能请装整包（v1.5.4 / v1.5.3.1）。

**Q：这些 Mod 会收集我的数据吗？**
A：不会。Mod 全部在你本机或你自己的服务器上运行，不联任何第三方统计接口。

---

## 上传与维护规范

**⚠️ 不要用网页的「Add files via upload」上传整个目录。** 2026-10-24 就因此误传过一次：把游戏开发目录整个拖了进来，带进 24 个服务器运行日志（含本机内网 IP）、`package.json`、1 MB 的 `MANIFEST.json` 和游戏本体 README，覆盖掉了本仓库 README。

维护时的正确流程：

1. **用 git 命令行提交**，`.gitignore` 才会生效（网页上传不读 `.gitignore`）：

   ```bat
   git add -A
   git status          :: 提交前一定看一遍，确认没有 *.log / tmp-* / package*.json
   git commit -m "docs: ..."
   git push
   ```

2. **发新包**：
   - 打包成 zip（**不要入库**，`.gitignore` 已忽略 `*.zip`）；
   - 附件名用英文，映射关系记进 `MOD-LIST.md`；
   - 追加到对应 Release（`gh release upload <tag> <file>`），或开新 Release；
   - 同步更新 `MOD-LIST.md` 与本文的版本号 / 包数。
3. **别入库的东西**：`*.log`、`tmp-*`、`node_modules/`、`package*.json`、`MANIFEST.json`、`mod.json`、`arkunpack_*`、任何 zip。

仓库还挂了一道自动防线 [`.github/workflows/repo-guard.yml`](.github/workflows/repo-guard.yml)：每次 push / PR 都会检查有没有上面这些文件、有没有超过 5 MB 的文件，有就直接红叉并列出文件名。

---

## 版本记录

| 版本 | 说明 |
| --- | --- |
| **v1.5.5** | 合集归档，35 个独立包。新增大厅在线音乐平台（QQ音乐 / 网易云 / 酷我，免登录导入公开歌单）、湮灭模拟 v3.1.7、大厅界面 UI / 视频背景 / 轮播图系列 |
| v1.5.4 | 一键安装包，适配新 UI 与上游 0.2.5 |
| v1.5.3.1 | 跨版本一键安装包，适配 0.2.5，含源石弧修复 |
| v1.4.8 | 适配上游 0.2.4；新增休整期自由更换技能和模组 |
| v1.4.0 | 商店刷新偏向已激活盟约的装备 |
| v1.3.2 | 普通安装自动下载同人包必需图片（约 3.4 MB） |

更细的改动见各 Release 说明与 `docs/` 下的记录。

---

## 许可证与致谢

- 本仓库自身的脚本、文档以 **[GPL-3.0](LICENSE)** 发布。
- **游戏本体素材**（美术、音频、文本、数据）版权归鹰角网络 / Yostar 所有，**不适用** GPL，仅随 Mod 作同人交流用途附带。
- 上游项目：[sganggs/Stronghold-Protocol](https://github.com/sganggs/Stronghold-Protocol) — 没有它就没有这些 Mod。
- 感谢各位 Mod 作者与测试玩家的反馈。

<details>
<summary><b>English summary</b></summary>

An unofficial, non-commercial **mod collection and archive** for [Stronghold-Protocol](https://github.com/sganggs/Stronghold-Protocol), a fan-made browser remake of the Arknights seasonal auto-chess / tower-defense mode.

This repository is an **index only** — it contains no binaries. All installable packages are hosted on the [Releases page](https://github.com/yznx09/Stronghold-Protocol-Rhodes-Kazdel-Mod/releases) (latest: **v1.5.5**, 35 packages, ~79 MB). See [MOD-LIST.md](MOD-LIST.md) for the full catalog and the original-Chinese ↔ release-filename mapping.

Each package ships an `install.mjs` installer:

```bat
node install.mjs "path\to\game"             :: install
node install.mjs "path\to\game" --verify    :: verify
node install.mjs "path\to\game" --uninstall :: restore
```

Requires Node.js 22+. Packages target different upstream versions (0.2.4 / 0.2.5 / 0.3.x) — check each package's `安装说明.md`. Mods that patch the same files cannot be installed together; use the all-in-one bundle instead.

Code and docs are GPL-3.0. All Arknights game assets remain the property of Hypergryph / Yostar and are **not** covered by that license. No affiliation with the rights holders.

</details>
