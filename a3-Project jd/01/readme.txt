AJAX PROJECT:
 * Web前端集成开发工具 - WebStorm
   * 安装完成后,双击执行文件
     * 弹出窗口(complete installation),点击"OK"按钮
     * 弹出窗口(License Activation)-激活WebStorm软件
       * 选择"License server"选项
       * 在"License server address"文本框中输入
         http://15.idea.lanyus.com/
       * 点击"OK"按钮即可
     * 弹出窗口(initial Configuration-初始化配置)
       * Keymap scheme - Eclipse
       * IDE theme - Intellij
       * Editer colors and fonts - Default
       * 点击"OK"按钮
     * 弹出欢迎窗口(Welcome to WebStorm)
       * Create new Project - 创建新工程
         * 选择创建新工程
       * Open - 打开已有工程
       * Check out from Version Control - 从版本控制下载工程
   * 创建新工程
     * 弹出选择哪类工程
       * 选择"Empty Project"
       * 在"Location"输入框中,输入当前工程保存的路径
         E:\workspace\project06
       * 点击"Create"按钮
   * 配置WebStorm
     * 点击工具栏"File"->"Setting",弹出配置窗口
     * 打开"Editor"->"Colors & Fonts"选项
       * 选项"Scheme" - 选择编辑器的主题样式
     * 选择"Colors & Fonts"->"Font"选项
       * 选择好"Scheme"主题,点击"Save as"按钮
       * 为另存为的主题,定义名称
       * 配置"Editor"->"Size"设置字体的大小
       * 点击"Apply"按钮,点击"OK"按钮
   * WebStorm如何创建PHP页面
     * 注意
       * WebStorm默认并不支持PHP
       * 下载PHPStorm软件
     * 配置PHP
       * 点击工具栏"File"->"Setting",弹出配置窗口
       * 选择"Editor"->"File Types"选项
       * 在"Recognized File Types"选项中,找到"PHP Files"选项
       * 在"Registers Patterns"选项中,点击"+"按钮,弹出配置窗口
         输入:*.php
	 点击"OK"按钮
       * 点击"Apply"按钮,点击"OK"按钮
     * 创建PHP模板
       * 在工程目录操作区,鼠标右键"New"->"Edit File Templates"选项,弹出模板窗口
       * 具体创建过程,参考"创建PHP模板.jpg"
 * Ajax案例 - 京东用户中心功能
   * 订单查询 - (客户端|服务器端|数据库)
   * 消费记录 - (Canvas)
   * 幸运抽奖 - (Canvas)
 * 订单查询功能
   * 数据库设计
     * jd_orders表 - 订单表
     * jd_products表 - 商品表
     * jd_order_product_detail表 - 订单商品关系表
   * 订单页面
     * 样式
       * 左侧菜单
         * class为selected,表示当前菜单被选中
       * 右侧内容区
         * <div id="orderContent">,表示订单界面
	 * <div id="recordContent">,表示消费记录
	 * <div id="lotteryContent">,表示幸运抽奖
     * 
   * 服务器端
     * 连接MySQL数据库
     * 定义SQL语句
       * 关联查询语句
         SELECT 字段名1,字段名2,...
	 FROM 表名1,表名2,...
	 WHERE 表名1.字段名1=表名2.字段名2
	 AND 条件
     * 
   * 
 * 
