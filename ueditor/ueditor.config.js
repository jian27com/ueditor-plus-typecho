/**
 * ueditor plus 完整配置项
 * 可以在这里配置整个编辑器的特性
 */
/**************************提示********************************
 * 所有被注释的配置项均为UEditor默认值。
 * 修改默认配置请首先确保已经完全明确该参数的真实用途。
 * 主要有两种修改方案，一种是取消此处注释，然后修改成对应参数；另一种是在实例化编辑器时传入对应参数。
 * 当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
 **************************提示********************************/

(function () {
  /**
   * 编辑器资源文件根路径。它所表示的含义是：以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
   * 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
   * "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/ueditor/"这样的路径。
   * 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
   * 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。当然，需要令此处的URL等于对应的配置。
   * window.UEDITOR_HOME_URL = "/xxxx/xxxx/";
   */
  var URL, CORS_URL;
  if (window.UEDITOR_HOME_URL) {
    URL = window.UEDITOR_HOME_URL;
  } else if (window.__msCDN) {
    URL = window.__msCDN + 'asset/vendor/ueditor/';
  } else if (window.__msRoot) {
    URL = window.__msRoot + 'asset/vendor/ueditor/';
  } else {
    URL = getUEBasePath();
  }
  if(window.UEDITOR_CORS_URL){
    CORS_URL = window.UEDITOR_CORS_URL;
  }else if (window.__msRoot) {
    CORS_URL = window.__msRoot + 'asset/vendor/ueditor/';
  }else if (window.UEDITOR_HOME_URL) {
    CORS_URL = window.UEDITOR_HOME_URL;
  } else {
    CORS_URL = getUEBasePath();
  }

  /**
   * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
   */
  window.UEDITOR_CONFIG = {

    // 为编辑器实例添加一个路径，这个不能被注释
    UEDITOR_HOME_URL: URL,
    // 需要能跨域的静态资源请求，主要用户弹窗页面等静态资源
    UEDITOR_CORS_URL: CORS_URL,

    // 服务器统一请求接口路径
    serverUrl: "/ueditor-plus/_demo_server/handle.php",
    // 服务器统一请求头信息，会在所有请求中带上该信息
    serverHeaders: {
      // 'Authorization': 'Bearer xxx'
    },

    //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的重新定义
    toolbars: [
      [
        "fullscreen",   // 全屏
        "source",       // 源代码
        "|",
        "undo",         // 撤销
        "redo",         // 重做
        "|",
        "bold",         // 加粗
        "italic",       // 斜体
        "underline",    // 下划线
        "fontborder",   // 字符边框
        "strikethrough",// 删除线
        "superscript",  // 上标
        "subscript",    // 下标
        "removeformat", // 清除格式
        "formatmatch",  // 格式刷
        "autotypeset",  // 自动排版
        "blockquote",   // 引用
        "pasteplain",   // 纯文本粘贴模式
        "|",
        "forecolor",    // 字体颜色
        "backcolor",    // 背景色
        "insertorderedlist",   // 有序列表
        "insertunorderedlist", // 无序列表
        "selectall",    // 全选
        "cleardoc",     // 清空文档
        "|",
        "rowspacingtop",// 段前距
        "rowspacingbottom",    // 段后距
        "lineheight",          // 行间距
        "|",
        "customstyle",         // 自定义标题
        "paragraph",           // 段落格式
        "fontfamily",          // 字体
        "fontsize",            // 字号
        "|",
        "directionalityltr",   // 从左向右输入
        "directionalityrtl",   // 从右向左输入
        "indent",              // 首行缩进
        "|",
        "justifyleft",         // 居左对齐
        "justifycenter",       // 居中对齐
        "justifyright",
        "justifyjustify",      // 两端对齐
        "|",
        "touppercase",         // 字母大写
        "tolowercase",         // 字母小写
        "|",
        "link",                // 超链接
        "unlink",              // 取消链接
        "anchor",              // 锚点
        "|",
        "imagenone",           // 图片默认
        "imageleft",           // 图片左浮动
        "imageright",          // 图片右浮动
        "imagecenter",         // 图片居中
        "|",
        "simpleupload",        // 单图上传
        "insertimage",         // 多图上传
        "emotion",             // 表情
        "scrawl",              // 涂鸦
        "insertvideo",         // 视频
        "attachment",          // 附件
        "insertframe",         // 插入Iframe
        "insertcode",          // 插入代码
        "pagebreak",           // 分页
        "template",            // 模板
        "background",          // 背景
        "formula",             // 公式
        "|",
        "horizontal",          // 分隔线
        "date",                // 日期
        "time",                // 时间
        "spechars",            // 特殊字符
        "wordimage",           // Word图片转存
        "|",
        "inserttable",         // 插入表格
        "deletetable",         // 删除表格
        "insertparagraphbeforetable",     // 表格前插入行
        "insertrow",           // 前插入行
        "deleterow",           // 删除行
        "insertcol",           // 前插入列
        "deletecol",           // 删除列
        "mergecells",          // 合并多个单元格
        "mergeright",          // 右合并单元格
        "mergedown",           // 下合并单元格
        "splittocells",        // 完全拆分单元格
        "splittorows",         // 拆分成行
        "splittocols",         // 拆分成列
        "|",
        "print",               // 打印
        "preview",             // 预览
        "searchreplace",       // 查询替换
        "help",                // 帮助
      ]
    ]

    // 自定义工具栏按钮点击，返回 true 表示已经处理点击，会阻止默认事件
    , toolbarCallback: function (cmd, editor) {
      // switch(cmd){
      //   case 'insertimage':
      //     editor.execCommand('insertHtml', '<p><img src="xxxxx" /></p>');
      //     console.log('toolbarCallback',cmd, editor)
      //     return true;
      //   case 'insertvideo':
      //     editor.execCommand('insertHtml', '<p><iframe src="xxxxx" /></p>');
      //     console.log('toolbarCallback',cmd, editor)
      //     return true;
      //   case 'attachment':
      //     console.log('toolbarCallback',cmd, editor)
      //     editor.execCommand('insertHtml', '<p><a href="xxx.zip">下载文件</a></p>');
      //     return true;
      // }
    }

    // 插入图片自定义配置
    , imageConfig: {
      // 禁止本地上传
      disableUpload: false,
      // 禁止在线管理
      disableOnline: false,
      // 自定义选择按钮
      selectCallback: null,
      // selectCallback: function(editor,cb){
      //     console.log('selectCallback',cb);
      //     setTimeout(function(){
      //       cb({
      //         path:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
      //         name:'测试图片'
      //       });
      //     },1000);
      // }
    }

    // 插入视频配置
    , videoConfig: {
      // 禁止本地上传,
      disableUpload: false,
      // 自定义选择按钮
      selectCallback: null,
      // selectCallback: function(editor,cb){
      //     console.log('selectCallback',cb);
      //     setTimeout(function(){
      //       cb({
      //         path:'https://www.bilibili.com/video/BV1y44y1g7NR?spm_id_from=333.1007.tianma.1-1-1.click',
      //         name:'测试视频'
      //       });
      //     },1000);
      // }
    }

    // 公式配置
    , formulaConfig: {
       // 公式渲染链接模板
       imageUrlTemplate: 'https://latex.codecogs.com/svg.image?{}',
       // 为了更稳定的公式渲染服务，可以使用
       // 魔众官方公式转图片渲染引擎 https://api.tecmz.com
    }

    // 自动保存
    , autoSaveEnable: true
    // 浏览器初始化时自动恢复上一次的内容
    , autoSaveRestore: false
    // 自动保存Key，为空时根据网址自动计算
    , autoSaveKey: null

    //当鼠标放在工具栏上时显示的tooltip提示,留空支持自动多语言配置，否则以配置值为准
    //,labelMap:{
    //    'anchor':'', 'undo':''
    //}

    //语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
    //lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
    //,lang:"zh-cn"
    //,langPath:URL +"lang/"

    //主题配置项,默认是default。有需要的话也可以使用如下这样的方式来自动多主题切换，当然，前提条件是themes文件夹下存在对应的主题文件：
    //现有如下皮肤:default
    //,theme:'default'
    //,themePath:URL +"themes/"

    //,zIndex : 900     //编辑器层级的基数,默认是900

    //针对getAllHtml方法，会在对应的head标签中增加该编码设置。
    //,charset:"utf-8"

    //若实例化编辑器的页面手动修改的domain，此处需要设置为true
    //,customDomain:false

    // 默认显示编辑器
    //,isShow : true

    // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值
    //,textarea:'editorValue'

    // 初始化编辑器的内容，也可以通过 textarea/script 给值
    ,initialContent:''

    //,autoClearinitialContent:true //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

    // 初始化时，是否让编辑器获得焦点
    ,focus:false

    // 编辑区自定义样式，如果自定义，最好给 p 标签如下的行高，要不输入中文时，会有跳动感
    ,initialStyle:'' // p{line-height:1em}

    //,iframeJsUrl: '' //给编辑区域的iframe引入一个js文件
    //,iframeCssUrl: URL + '/themes/iframe.css' //给编辑区域的iframe引入一个css文件
    // 给编辑器引入更多样式文件
    //,iframeCssUrlsAddition: []

    // 首行缩进距离,默认是 2em
    ,indentValue:'2em'

    // 初始化编辑器宽度,默认 1000
    // ,initialFrameWidth:1000
    // 初始化编辑器高度,默认 320
    // ,initialFrameHeight:320

    // 编辑器初始化结束后,编辑区域是否是只读的，默认是false
    ,readonly : false

    // getContent时，是否删除空的inlineElement节点（包括嵌套的情况）
    ,autoClearEmptyNode : true

    // 启用拖放上传
    //,enableDragUpload: true
    // 启用粘贴上传
    //,enablePasteUpload: true

    // 启用图片拉伸缩放
    //,imageScaleEnabled: true

    // 是否开启初始化时即全屏，默认关闭
    ,fullscreen : false

    //,imagePopup:true      //图片操作的浮层开关，默认打开

    // 自动同步编辑器要提交的数据
    //,autoSyncData:true
    // 是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹
    //,emotionLocalization:false

    // 粘贴只保留标签，去除标签所有属性
    //,retainOnlyLabelPasted: false

    // 是否默认为纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴
    //,pasteplain:false
    // 纯文本粘贴模式下的过滤规则
    //'filterTxtRules' : function(){
    //    function transP(node){
    //        node.tagName = 'p';
    //        node.setStyle();
    //    }
    //    return {
    //        //直接删除及其字节点内容
    //        '-' : 'script style object iframe embed input select',
    //        'p': {$:{}},
    //        'br':{$:{}},
    //        'div':{'$':{}},
    //        'li':{'$':{}},
    //        'caption':transP,
    //        'th':transP,
    //        'tr':transP,
    //        'h1':transP,'h2':transP,'h3':transP,'h4':transP,'h5':transP,'h6':transP,
    //        'td':function(node){
    //            //没有内容的td直接删掉
    //            var txt = !!node.innerText();
    //            if(txt){
    //                node.parentNode.insertAfter(UE.uNode.createText(' &nbsp; &nbsp;'),node);
    //            }
    //            node.parentNode.removeChild(node,node.innerText())
    //        }
    //    }
    //}()

    // 提交到后台的数据是否包含整个html字符串
    ,allHtmlEnabled:false

    //insertorderedlist
    //有序列表的下拉配置,值留空时支持多语言自动识别，若配置值，则以此值为准
    //,'insertorderedlist':{
    //      //自定的样式
    //        'num':'1,2,3...',
    //        'num1':'1),2),3)...',
    //        'num2':'(1),(2),(3)...',
    //        'cn':'一,二,三....',
    //        'cn1':'一),二),三)....',
    //        'cn2':'(一),(二),(三)....',
    //     //系统自带
    //     'decimal' : '' ,         //'1,2,3...'
    //     'lower-alpha' : '' ,    // 'a,b,c...'
    //     'lower-roman' : '' ,    //'i,ii,iii...'
    //     'upper-alpha' : '' , lang   //'A,B,C'
    //     'upper-roman' : ''      //'I,II,III...'
    //}

    //insertunorderedlist
    //无序列表的下拉配置，值留空时支持多语言自动识别，若配置值，则以此值为准
    //,insertunorderedlist : { //自定的样式
    //    'dash' :'— 破折号', //-破折号
    //    'dot':' 。 小圆圈', //系统自带
    //    'circle' : '',  // '○ 小圆圈'
    //    'disc' : '',    // '● 小圆点'
    //    'square' : ''   //'■ 小方块'
    //}
    //,listDefaultPaddingLeft : '30'//默认的左边缩进的基数倍
    //,listiconpath : 'http://bs.baidu.com/listicon/'//自定义标号的路径
    //,maxListLevel : 3 //限制可以tab的级数, 设置-1为不限制

    //,autoTransWordToList:false  //禁止word中粘贴进来的列表自动变成列表标签

    // 字体设置 label 留空支持多语言自动切换，若配置，则以配置值为准
    //,'fontfamily':[
    //    { label:'',name:'songti',val:'宋体,SimSun'},
    //    { label:'',name:'kaiti',val:'楷体,楷体_GB2312, SimKai'},
    //    { label:'',name:'yahei',val:'微软雅黑,Microsoft YaHei'},
    //    { label:'',name:'heiti',val:'黑体, SimHei'},
    //    { label:'',name:'lishu',val:'隶书, SimLi'},
    //    { label:'',name:'andaleMono',val:'andale mono'},
    //    { label:'',name:'arial',val:'arial, helvetica,sans-serif'},
    //    { label:'',name:'arialBlack',val:'arial black,avant garde'},
    //    { label:'',name:'comicSansMs',val:'comic sans ms'},
    //    { label:'',name:'impact',val:'impact,chicago'},
    //    { label:'',name:'timesNewRoman',val:'times new roman'}
    //]

    // 字号
    //,'fontsize':[10, 11, 12, 14, 16, 18, 20, 24, 36]

    // 段落格式 值留空时支持多语言自动识别，若配置，则以配置值为准
    //,'paragraph':{'p':'', 'h1':'', 'h2':'', 'h3':'', 'h4':'', 'h5':'', 'h6':''}

    // 段间距 值和显示的名字相同
    //,'rowspacingtop':['5', '10', '15', '20', '25']

    // 段间距 值和显示的名字相同
    //,'rowspacingbottom':['5', '10', '15', '20', '25']

    //行内间距 值和显示的名字相同
    //,'lineheight':['1', '1.5','1.75','2', '3', '4', '5']

    // customstyle
    //自定义样式，不支持国际化，此处配置值即可最后显示值
    //block的元素是依据设置段落的逻辑设置的，inline的元素依据BIU的逻辑设置
    //尽量使用一些常用的标签
    //参数说明
    //tag 使用的标签名字
    //label 显示的名字也是用来标识不同类型的标识符，注意这个值每个要不同，
    //style 添加的样式
    //每一个对象就是一个自定义的样式
    //,'customstyle':[
    //    {tag:'h1', name:'tc', label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;text-align:center;margin:0 0 20px 0;'},
    //    {tag:'h1', name:'tl',label:'', style:'border-bottom:#ccc 2px solid;padding:0 4px 0 0;margin:0 0 10px 0;'},
    //    {tag:'span',name:'im', label:'', style:'font-style:italic;font-weight:bold'},
    //    {tag:'span',name:'hi', label:'', style:'font-style:italic;font-weight:bold;color:rgb(51, 153, 204)'}
    //]

    // 打开右键菜单功能
    ,enableContextMenu: true
    //右键菜单的内容，可以参考plugins/contextmenu.js里边的默认菜单的例子，label留空支持国际化，否则以此配置为准
    //,contextMenu:[
    //    {
    //        label:'',       //显示的名称
    //        cmdName:'selectall',//执行的command命令，当点击这个右键菜单时
    //        //exec可选，有了exec就会在点击时执行这个function，优先级高于cmdName
    //        exec:function () {
    //            //this是当前编辑器的实例
    //            //this.ui._dialogs['inserttableDialog'].open();
    //        }
    //    }
    //]

    //快捷菜单
    , shortcutMenu: [
      // "fontfamily",   // 字体
      // "fontsize",     // 字号
      "bold",         // 加粗
      "italic",       // 斜体
      "underline",    // 下划线
      "strikethrough",// 删除线
      "fontborder",   // 字符边框
      "forecolor",    // 字体颜色
      // "shadowcolor", // 字体阴影
      "backcolor",   // 背景色
      "justifyleft",    // 居左对齐
      "justifycenter",  // 居中对齐
      "justifyright",   // 居右对齐
      "justifyjustify", // 两端对齐
      // "textindent",  // 首行缩进
      // "rowspacingtop",     // 段前距
      // "rowspacingbottom",  // 段后距
      // "outpadding",        // 两侧距离
      "lineheight",           // 行间距
      // "letterspacing" ,    // 字间距
      "insertorderedlist",    // 有序列表
      "insertunorderedlist",  // 无序列表
      "superscript",    // 上标
      "subscript",      // 下标
      "link",           // 超链接
      "unlink",         // 取消链接
      // "touppercase",    // 字母大写
      // "tolowercase"     // 字母小写
    ]

    // 是否启用元素路径，默认是显示
    ,elementPathEnabled : true
    // 是否开启字数统计
    ,wordCount:true
    // 允许的最大字符数
    ,maximumWords:10000
    //字数统计提示，{#count} 代表当前字数，{#leave}代表还可以输入多少字符数,留空支持多语言自动切换，否则按此配置显示
    //,wordCountMsg:''   //当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符
    //超出字数限制提示  留空支持多语言自动切换，否则按此配置显示
    //,wordOverFlowMsg:''    //<span style="color:red;">你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！</span>

    // 点击tab键时移动的距离,tabSize倍数，tabNode什么字符做为单位
    //,tabSize:4
    //,tabNode:'&nbsp;'

    // 清除格式时可以删除的标签
    //,removeFormatTags:'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var'
    // 清除格式时可以删除的属性
    //,removeFormatAttributes:'class,style,lang,width,height,align,hspace,valign'

    // 可以最多撤销退回的次数，默认20
    ,maxUndoCount:20
    // 当输入的字符数超过该值时，保存一次现场
    ,maxInputCount:1

    // 是否自动长高,默认true
    ,autoHeightEnabled:true

    //scaleEnabled
    //是否可以拉伸长高,默认true(当开启时，自动长高失效)
    //,scaleEnabled:false
    //,minFrameWidth:800    //编辑器拖动时最小宽度,默认800
    //,minFrameHeight:220  //编辑器拖动时最小高度,默认220

    //autoFloatEnabled
    //是否保持toolbar的位置不动,默认true
    //,autoFloatEnabled:true
    //浮动时工具栏距离浏览器顶部的高度，用于某些具有固定头部的页面
    //,topOffset:30
    //编辑器底部距离工具栏高度(如果参数大于等于编辑器高度，则设置无效)
    //,toolbarTopOffset:400

    //设置远程图片是否抓取到本地保存
    ,catchRemoteImageEnable: true //设置是否抓取远程图片

    //pageBreakTag
    //分页标识符,默认是_ueditor_page_break_tag_
    //,pageBreakTag:'_ueditor_page_break_tag_'

    // 自动排版参数
    , autotypeset: {
      // 合并空行
      mergeEmptyline: true,
      // 去掉冗余的class
      removeClass: true,
      // 去掉空行
      removeEmptyline: false,
      // 段落的排版方式，可以是 left,right,center,justify 去掉这个属性表示不执行排版
      textAlign: "left",
      // 图片的浮动方式，独占一行剧中,左右浮动，默认: center,left,right,none 去掉这个属性表示不执行排版
      imageBlockLine: "center",
      // 根据规则过滤没事粘贴进来的内容
      pasteFilter: false,
      // 去掉所有的内嵌字号，使用编辑器默认的字号
      clearFontSize: false,
      // 去掉所有的内嵌字体，使用编辑器默认的字体
      clearFontFamily: false,
      // 去掉空节点
      removeEmptyNode: false,
      // 可以去掉的标签
      removeTagNames: { div: 1 },
      // 行首缩进
      indent: false,
      // 行首缩进的大小
      indentValue: "2em",
      // 全角转半角
      bdc2sb: false,
      // 半角转全角
      tobdc: false
    }

    //表格是否可以拖拽
    //,tableDragable: true

    //sourceEditor
    //源码的查看方式,codemirror 是代码高亮，textarea是文本框,默认是codemirror
    //注意默认codemirror只能在ie8+和非ie中使用
    //,sourceEditor:"codemirror"
    //如果sourceEditor是codemirror，还用配置一下两个参数
    //codeMirrorJsUrl js加载的路径，默认是 URL + "third-party/codemirror/codemirror.js"
    //,codeMirrorJsUrl:URL + "third-party/codemirror/codemirror.js"
    //codeMirrorCssUrl css加载的路径，默认是 URL + "third-party/codemirror/codemirror.css"
    //,codeMirrorCssUrl:URL + "third-party/codemirror/codemirror.css"
    //编辑器初始化完成后是否进入源码模式，默认为否。
    //,sourceEditorFirst:false

    //iframeUrlMap
    //dialog内容的路径 ～会被替换成URL,垓属性一旦打开，将覆盖所有的dialog的默认路径
    //,iframeUrlMap:{
    //    'anchor':'~/dialogs/anchor/anchor.html',
    //}

    //allowLinkProtocol 允许的链接地址，有这些前缀的链接地址不会自动添加http
    //, allowLinkProtocols: ['http:', 'https:', '#', '/', 'ftp:', 'mailto:', 'tel:', 'git:', 'svn:']

    //默认过滤规则相关配置项目
    //,disabledTableInTable:true  //禁止表格嵌套
    // 允许进入编辑器的 div 标签自动变成 p 标签
    ,allowDivTransToP:true
    // 默认产出的数据中的color自动从rgb格式变成16进制格式
    ,rgb2Hex:true
  };

  function getUEBasePath(docUrl, confUrl) {
    return getBasePath(
      docUrl || self.document.URL || self.location.href,
      confUrl || getConfigFilePath()
    );
  }

  function getConfigFilePath() {
    var configPath = document.getElementsByTagName("script");

    return configPath[configPath.length - 1].src;
  }

  function getBasePath(docUrl, confUrl) {
    var basePath = confUrl;

    if (/^(\/|\\\\)/.test(confUrl)) {
      basePath =
        /^.+?\w(\/|\\\\)/.exec(docUrl)[0] + confUrl.replace(/^(\/|\\\\)/, "");
    } else if (!/^[a-z]+:/i.test(confUrl)) {
      docUrl = docUrl.split("#")[0].split("?")[0].replace(/[^\\\/]+$/, "");

      basePath = docUrl + "" + confUrl;
    }

    return optimizationPath(basePath);
  }

  function optimizationPath(path) {
    var protocol = /^[a-z]+:\/\//.exec(path)[0],
      tmp = null,
      res = [];

    path = path.replace(protocol, "").split("?")[0].split("#")[0];

    path = path.replace(/\\/g, "/").split(/\//);

    path[path.length - 1] = "";

    while (path.length) {
      if ((tmp = path.shift()) === "..") {
        res.pop();
      } else if (tmp !== ".") {
        res.push(tmp);
      }
    }

    return protocol + res.join("/");
  }

  window.UE = {
    getUEBasePath: getUEBasePath
  };
})();
