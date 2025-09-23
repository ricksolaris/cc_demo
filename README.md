# GitHub MCP 服务器配置与项目推送指南

根据 Model Context Protocol (MCP) 的规范，要添加 GitHub 服务器，需要使用正确的命令格式。同时，本指南也包含如何手动在GitHub网站创建仓库并推送本地代码。

## 正确的命令格式
应该使用以下格式：
```
claude mcp add github-server --env GITHUB_PERSONAL_ACCESS_TOKEN=your_github_token_here -- npx "@modelcontextprotocol/server-github"
```

## 注意事项
1. 不需要使用 `-y` 选项
2. 确保你的 GitHub Personal Access Token 是有效的
3. 确保你已经安装了 Node.js 和 npm

## 配置文件方式（推荐）
你也可以通过配置文件的方式来添加 MCP 服务器，在你的 Claude 配置文件中添加以下内容：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token_here"
      }
    }
  }
}
```

## 如何手动将本地项目推送到GitHub

以下是手动在GitHub网站创建仓库并推送本地代码的详细步骤：

### 步骤1: 在GitHub网站创建新仓库
1. 登录你的GitHub账号
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称输入: `cc_demo`
4. 可选：添加描述
5. 选择公开或私有（根据你的需求）
6. 不要勾选 "Initialize this repository with a README"（因为我们已有本地仓库）
7. 点击 "Create repository"

### 步骤2: 配置本地SSH密钥（如果没有）
1. 检查是否已有SSH密钥：
   ```
   dir %USERPROFILE%\.ssh
   ```
2. 如果没有id_rsa和id_rsa.pub文件，生成新的SSH密钥：
   ```
   ssh-keygen -t rsa -b 4096 -C "你的邮箱地址"
   ```
   - 按Enter接受默认文件位置
   - 设置一个安全的密码（可选）
3. 将公钥添加到GitHub：
   - 复制公钥内容：`type %USERPROFILE%\.ssh\id_rsa.pub | clip`
   - 在GitHub上，点击右上角头像 > Settings > SSH and GPG keys > New SSH key
   - 粘贴公钥内容，添加标题，点击 "Add SSH key"

### 步骤3: 生成GitHub Personal Access Token (PAT)（HTTPS协议使用）
1. 在GitHub上，点击右上角头像 > Settings > Developer settings > Personal access tokens > Generate new token
2. 输入描述信息（如 "Local repository access"）
3. 选择权限：勾选 `repo`（所有子权限）和 `workflow`
4. 点击页面底部的 "Generate token"
5. **重要**：复制生成的令牌并保存到安全的地方，离开页面后将无法再次查看

### 步骤4: 配置本地仓库并推送代码
1. 打开Windows命令提示符或PowerShell
2. 导航到你的项目目录：`cd d:\cc_demo`
3. 确保git配置已设置好用户名和邮箱：
   ```
   git config --global user.name "你的GitHub用户名"
   git config --global user.email "你的GitHub邮箱"
   ```
4. 设置远程仓库地址（SSH协议）：
   ```
   git remote add origin git@github.com:你的用户名/cc_demo.git
   ```
   或者使用HTTPS协议：
   ```
   git remote add origin https://github.com:你的用户名/cc_demo.git
   ```
5. 如果之前已有远程仓库配置，修改远程URL：
   ```
   git remote set-url origin git@github.com:你的用户名/cc_demo.git
   ```
   或者HTTPS：
   ```
   git remote set-url origin https://github.com:你的用户名/cc_demo.git
   ```
6. 推送代码：
   ```
   git push -u origin master
   ```