((Scratch) => {
    'use strict';

    const version = '0.2.4';

    const { Cast, ArgumentType, BlockType } = Scratch;

    Scratch.translate.setup({
        "zh": {
            "aness6040debugger.extName": "璋冭瘯鍣�",
            "aness6040debugger.windowText": "鎺у埗鍙�",
            "aness6040debugger.console": "鎺у埗鍙�",
            "aness6040debugger.inputTip": "杈撳叆锛�",
            "aness6040debugger.showConsole": "鎵撳紑鎺у埗鍙�",
            "aness6040debugger.hideConsole": "隐藏控制台",
            "aness6040debugger.breakpoint": "鏂偣",
            "aness6040debugger.breakpointAndLog": "鏂偣骞惰褰� [message]",
            "aness6040debugger.ifFalseBreakpoint": "濡傛灉 [boolean] 涓嶆垚绔嬪氨鏂偣",
            "aness6040debugger.ifFalseBreakpointAndLog": "濡傛灉 [boolean] 涓嶆垚绔嬪氨鏂偣骞惰褰� [message]",
            "aness6040debugger.testBreakpoint": "濡傛灉 [boolean] [type] 灏辨柇鐐�",
            "aness6040debugger.testBreakpointAndLog": "濡傛灉 [boolean] [type] 灏辨柇鐐瑰苟璁板綍 [message]",
            "aness6040debugger.clearConsole": "娓呴櫎鎺у埗鍙�",
            "aness6040debugger.output": "鎺у埗鍙� [type] [message]",
            "aness6040debugger.log": "璁板綍",
            "aness6040debugger.warn": "璀﹀憡",
            "aness6040debugger.error": "閿欒",
            "aness6040debugger.outputWithColor": "杈撳嚭 [color] 鑹茬殑 [message]",
            "aness6040debugger.test": "娴嬭瘯 [boolean] 濡傛灉 [type] 璁板綍 [message]",
            "aness6040debugger.testTip": "娴嬭瘯锛歔message]",
            "aness6040debugger.true": "鎴愮珛",
            "aness6040debugger.false": "涓嶆垚绔�",
            "aness6040debugger.trueOrFalse": "鎴愮珛鎴栦笉鎴愮珛",
            "aness6040debugger.pass": "✅",
            "aness6040debugger.fail": "❌",
            "aness6040debugger.logStage": "璁板綍鑸炲彴鍥剧墖",
            "aness6040debugger.whenInput": "褰撹緭鍏�",
            "aness6040debugger.getLastInput": "鏈€鍚庝竴娆¤緭鍏�",
            "aness6040debugger.tipForHelp": "杈撳叆 \"help\" 鑾峰彇 > 甯姪銆�",
            "help": "甯姪锛�<br><br>銆€銆€鏂偣锛氭殏鍋滅▼搴忚繘琛岃皟璇曪紝瑕佺户缁墽琛岃鎸変笅銆岀户缁€嶉敭銆�<br>銆€銆€鎺у埗鍙帮細涓€涓彲浠ヨ繘琛岃緭鍏ヨ緭鍏ヤ笌杈撳嚭鐨勭獥鍙ｃ€�<br>銆€銆€杈撳嚭锛氬彲浠ュ湪鍏抽敭鐐规墦鍗版枃瀛楁垨鍙橀噺鏉ヨ皟璇曠▼搴忕殑杩愯銆�<br>銆€銆€杈撳叆锛氱偣鍑讳笂闈㈢殑銆�>銆嶆寜閽繘琛岃緭鍏ワ紝<br>銆€銆€銆€銆€銆€杈撳叆鍙互琚€屽綋杈撳叆銆嶄笌銆屾渶鍚庝竴娆¤緭鍏ャ€嶆娴嬪埌銆�"
        },
        "zh-tw": {
            "aness6040debugger.extName": "鍋甸尟鍣�",
            "aness6040debugger.windowText": "涓绘帶鍙�",
            "aness6040debugger.console": "涓绘帶鍙�",
            "aness6040debugger.inputTip": "杓稿叆锛�",
            "aness6040debugger.showConsole": "闁嬫斁涓绘帶鍙�",
            "aness6040debugger.hideConsole": "隐藏控制台",
            "aness6040debugger.breakpoint": "涓柗榛�",
            "aness6040debugger.breakpointAndLog": "涓柗浣佃閷� [message]",
            "aness6040debugger.ifFalseBreakpoint": "濡傛灉 [boolean] 涓嶆垚绔嬪氨涓柗",
            "aness6040debugger.ifFalseBreakpointAndLog": "濡傛灉 [boolean] 涓嶆垚绔嬪氨涓柗浣佃閷� [message]",
            "aness6040debugger.testBreakpoint": "濡傛灉 [boolean] [type] 灏变腑鏂�",
            "aness6040debugger.testBreakpointAndLog": "濡傛灉 [boolean] [type] 灏变腑鏂蜂降瑷橀寗 [message]",
            "aness6040debugger.clearConsole": "娓呴櫎涓绘帶鍙�",
            "aness6040debugger.output": "涓绘帶鍙� [type] [message]",
            "aness6040debugger.log": "瑷橀寗",
            "aness6040debugger.warn": "璀﹀憡",
            "aness6040debugger.error": "閷",
            "aness6040debugger.outputWithColor": "杓稿嚭 [color] 椤旇壊鐨� [message]",
            "aness6040debugger.test": "娓 [boolean] 濡傛灉 [type] 瑷橀寗 [message]",
            "aness6040debugger.testTip": "娓锛歔message]",
            "aness6040debugger.true": "鎴愮珛",
            "aness6040debugger.false": "涓嶆垚绔�",
            "aness6040debugger.trueOrFalse": "鎴愮珛鎴栦笉鎴愮珛",
            "aness6040debugger.pass": "✅",
            "aness6040debugger.fail": "❌",
            "aness6040debugger.logStage": "瑷橀寗鑸炲彴鍦栧儚",
            "aness6040debugger.whenInput": "鐣惰几鍏�",
            "aness6040debugger.getLastInput": "鏈€寰屼竴娆¤几鍏�",
            "aness6040debugger.tipForHelp": "杓稿叆 \"help\" 瀵熺湅 > 骞姪銆�",
            "help": "骞姪锛�<br><br>銆€銆€涓柗榛烇細鏆仠绋嬪紡閫茶瑾胯│锛岃绻肩簩鍩疯璜嬫寜涓嬨€岀辜绾屻€嶉嵉銆�<br>銆€銆€涓绘帶鍙帮細涓€鍊嬪彲浠ラ€茶杓稿叆杓稿嚭鐨勮绐椼€�<br>銆€銆€杓稿嚭锛氬彲浠ュ湪闂滈嵉榛炲垪鍗版枃瀛楁垨璁婃暩渚嗚瑭︾▼寮忕殑閬嬭銆�<br>銆€銆€杓稿叆锛氶粸鎿婁笂闈㈢殑銆�>銆嶆寜閳曢€茶杓稿叆锛�<br>銆€銆€銆€銆€銆€杓稿叆鍙互琚€岀暥杓稿叆銆嶈垏銆屾渶寰屼竴娆¤几鍏ャ€嶆娓埌銆�"
        },
        "ja": {
            "aness6040debugger.extName": "銉囥儛銉冦偓銉�",
            "aness6040debugger.windowText": "銈炽兂銈姐兗銉�",
            "aness6040debugger.console": "銈炽兂銈姐兗銉�",
            "aness6040debugger.inputTip": "鍏ュ姏锛�",
            "aness6040debugger.showConsole": "銈炽兂銈姐兗銉倰闁嬨亸",
            "aness6040debugger.breakpoint": "銉栥儸銉笺偗銉濄偆銉炽儓",
            "aness6040debugger.breakpointAndLog": "銉栥儸銉笺偗銉濄偆銉炽儓銇ㄨ閷� [message]",
            "aness6040debugger.ifFalseBreakpoint": "銈傘仐 [boolean] 銇屽伣銇倝銉栥儸銉笺偗銉濄偆銉炽儓",
            "aness6040debugger.ifFalseBreakpointAndLog": "銈傘仐 [boolean] 銇屽伣銇倝銉栥儸銉笺偗銉濄偆銉炽儓銇ㄨ閷� [message]",
            "aness6040debugger.testBreakpoint": "銈傘仐 [boolean] 銇� [type] 銇倝銉栥儸銉笺偗銉濄偆銉炽儓",
            "aness6040debugger.testBreakpointAndLog": "銈傘仐 [boolean] 銇� [type] 銇倝銉栥儸銉笺偗銉濄偆銉炽儓銇ㄨ閷� [message]",
            "aness6040debugger.clearConsole": "銈炽兂銈姐兗銉倰銈儶銈�",
            "aness6040debugger.output": "銈炽兂銈姐兗銉� [type] [message]",
            "aness6040debugger.log": "瑷橀尣",
            "aness6040debugger.warn": "璀﹀憡",
            "aness6040debugger.error": "銈ㄣ儵銉�",
            "aness6040debugger.outputWithColor": "鍑哄姏 [color] 鑹层伄 [message]",
            "aness6040debugger.test": "銉嗐偣銉堬細銈傘仐 [boolean] 銇� [type] 銇倝瑷橀尣 [message]",
            "aness6040debugger.testTip": "銉嗐偣銉堬細[message]",
            "aness6040debugger.true": "鐪�",
            "aness6040debugger.false": "鍋�",
            "aness6040debugger.trueOrFalse": "鐪熴伨銇熴伅鍋�",
            "aness6040debugger.pass": "✅",
            "aness6040debugger.fail": "❌",
            "aness6040debugger.logStage": "銈广儐銉笺偢鐢诲儚銈掕閷�",
            "aness6040debugger.whenInput": "鍏ュ姏鏅�",
            "aness6040debugger.getLastInput": "鏈€寰屻伄鍏ュ姏銈掑彇寰�",
            "aness6040debugger.tipForHelp": "\"help\" 銈掑叆鍔涖仐銇� > 銉樸儷銉椼倰琛ㄧず銆�",
            "help": "銉樸儷銉楋細<br><br>銆€銆€銉栥儸銉笺偗銉濄偆銉炽儓锛氥儣銉偘銉┿儬銈掋儑銉愩儍銈般仚銈嬨仧銈併伀涓€鏅傚仠姝€仐銇俱仚銆�<br>銆€銆€銆€銆€銆€銆岀稓琛屻€嶃偔銉笺倰鎶笺仐銇﹀疅琛屻倰缍氥亼銇︺亸銇犮仌銇勩€�<br>銆€銆€銈炽兂銈姐兗銉細鍏ュ嚭鍔涖倰琛屻亞銈︺偅銉炽儔銈︺仹銇欍€�<br>銆€銆€鍑哄姏锛氥儑銉愩儍銈颁腑銇偔銉笺儩銈ゃ兂銉堛仹銉嗐偔銈广儓銈勫鏁般倰鍗板埛銇椼伨銇欍€�<br>銆€銆€鍏ュ姏锛氫笂銇€岋紴銆嶃儨銈裤兂銈掋偗銉儍銈仐銇﹀叆鍔涖仐銇俱仚銆�<br>銆€銆€銆€銆€銆€鍏ュ姏銇€屽叆鍔涙檪銆嶃仺銆屾渶寰屻伄鍏ュ姏銈掑彇寰椼€嶃仹妞滃嚭銇曘倢銇俱仚銆�"
        },
        "he": {
            "aness6040debugger.extName": "诪谞驻讛 砖讙讬讗讜转",
            "aness6040debugger.windowText": "拽讜谞住讜诇讛",
            "aness6040debugger.console": "拽讜谞住讜诇讛",
            "aness6040debugger.inputTip": "拽诇讟:",
            "aness6040debugger.showConsole": "驻转讬讞转 拽讜谞住讜诇讛",
            "aness6040debugger.breakpoint": "谞拽讜讚转 注爪讬专讛",
            "aness6040debugger.breakpointAndLog": "谞拽讜讚转 注爪讬专讛 讜专讬砖讜诐 [message]",
            "aness6040debugger.ifFalseBreakpoint": "讗诐 [boolean] 砖拽专, 转爪讜专祝 谞拽讜讚转 注爪讬专讛",
            "aness6040debugger.ifFalseBreakpointAndLog": "讗诐 [boolean] 砖拽专, 转爪讜专祝 谞拽讜讚转 注爪讬专讛 讜专讬砖讜诐 [message]",
            "aness6040debugger.testBreakpoint": "讗诐 [boolean] 讛讜讗 [type] 讗讝 谞拽讜讚转 注爪讬专讛",
            "aness6040debugger.testBreakpointAndLog": "讗诐 [boolean] 讛讜讗 [type] 讗讝 谞拽讜讚转 注爪讬专讛 讜专讬砖讜诐 [message]",
            "aness6040debugger.clearConsole": "谞讬拽讜讬 拽讜谞住讜诇讛",
            "aness6040debugger.output": "拽讜谞住讜诇讛 [type] [message]",
            "aness6040debugger.log": "专讬砖讜诐",
            "aness6040debugger.warn": "讗讝讛专讛",
            "aness6040debugger.error": "砖讙讬讗讛",
            "aness6040debugger.outputWithColor": "驻诇讟 讘爪讘注 [color] [message]",
            "aness6040debugger.test": "讘讚讬拽讛 [boolean] 讗诐 [type] 专砖讜诐 [message]",
            "aness6040debugger.testTip": "讘讚讬拽讛: [message]",
            "aness6040debugger.true": "谞讻讜谉",
            "aness6040debugger.false": "诇讗 谞讻讜谉",
            "aness6040debugger.trueOrFalse": "谞讻讜谉 讗讜 诇讗 谞讻讜谉",
            "aness6040debugger.pass": "✅",
            "aness6040debugger.fail": "❌",
            "aness6040debugger.logStage": "专讬砖讜诐 转诪讜谞转 讛讘诪讛",
            "aness6040debugger.whenInput": "讻讗砖专 拽诇讟",
            "aness6040debugger.getLastInput": "拽讘诇转 拽诇讟 讗讞专讜谉",
            "aness6040debugger.tipForHelp": "讛拽诇讚 \"注讝专讛\" 讻讚讬 诇讛爪讬讙 注讝专讛 砖诇 >",
            "help": "注讝专讛:<br><br>谞拽讜讚转 注爪讬专讛:<br>讛砖讛讛 讗转 讛转讻谞讬转 诇爪讜专讱 谞讬驻讜讬 讘讗讙讬诐, 诇讞抓 注诇 \"讛诪砖讱\"讻讚讬 诇讞讚砖 <br>讗转 讛讘讬爪讜注.<br><br>拽讜谞住讜诇讛:<br>讞诇讜谉 注讘讜专 拽诇讟 讜驻诇讟.<br><br>驻诇讟:<br>讛讚驻住 讟拽住讟 讗讜 诪砖转谞讬诐 讘谞拽讜讚讜转 诪驻转讞 诇爪讜专讱 谞讬驻讜讬 讘讗讙讬诐.<br><br>拽诇讟:<br>诇讞抓 注诇 讛讻驻转讜专 \">\" 诇诪注诇讛 讻讚讬 诇讛讝讬谉, 谞讬转谉 诇讝讛讜转 讗转 讛拽诇讟 讻<br>\"讻讗砖专 拽诇讟\" 讗讜 \"拽讘诇转 拽诇讟 讗讞专讜谉\"."
        }
    });
    let messageText = '';
    const formatMessage = Scratch.translate;
    const lang = (id, defaultValue) => Scratch.translate({ id: id, default: defaultValue });

    const SymbolsNerdFont = 'data:font/ttf;base64,' + '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';
    let IconFont = document.createElement('style');
    IconFont.appendChild(document.createTextNode(`
        @font-face {
            font-family: 'IconFont';
            src: url('${SymbolsNerdFont}');
        }
    `));
    document.head.appendChild(IconFont);

    const inputIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMjIiCiAgIGhlaWdodD0iMjIiCiAgIHZpZXdCb3g9IjAgMCA1LjgyMDgzMzMgNS44MjA4MzM0IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9Iue7mOWbvi5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxIgogICAgIHBhZ2Vjb2xvcj0iIzUwNTA1MCIKICAgICBib3JkZXJjb2xvcj0iI2VlZWVlZSIKICAgICBib3JkZXJvcGFjaXR5PSIxIgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIwIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjNTA1MDUwIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJtbSIKICAgICBpbmtzY2FwZTp6b29tPSIzNy43NzI3MjciCiAgICAgaW5rc2NhcGU6Y3g9IjkuMjI2MjMzNSIKICAgICBpbmtzY2FwZTpjeT0iMTEuNjYxODUzIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIxOTEyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzEiIC8+PGRlZnMKICAgICBpZD0iZGVmczEiIC8+PHBhdGgKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIgogICAgIGQ9Ik0gMS4yMjQ5MDY1LDQuOTc5ODQ5NyBDIDEuMTUzMjY5NCw0Ljk2NTQxMjkgMS4xMDg3OTU2LDQuOTIyNzM0NCAxLjA4MTM3MzgsNC44NDIxMTEgMS4wNTYzNjA2LDQuNzY4NTY5MiAxLjA1MzY3ODYsNC43Mzc1NjIyIDEuMDUzNjc4Niw0LjUyMTkyNTEgYyAwLC0wLjE3NDk3ODcgMC4wMDEzNiwtMC4yMDkzNDc5IDAuMDEwMTE4LC0wLjI1NjAwODkgQyAxLjA5NjU2OTQsNC4wOTEzNDg4IDEuMTY2MDg5NCw0LjAwMTgyOTEgMS4zNTgxNDgyLDMuODg2ODg0OSAxLjM5MjI2MzIsMy44NjY0Njc3IDEuNTE3MTg5NCwzLjc5Njk0MDcgMS42MzU3NjE5LDMuNzMyMzgwNiAyLjQ0NjYwNiwzLjI5MDg5NDIgMi42OTg2MjE1LDMuMTUyNzMwMSAyLjc0NTc2MjcsMy4xMjM4Mzc4IDIuODU0MDAwNywzLjA1NzQ5OTkgMi45MTIwMDE4LDIuOTgzMDM2OSAyLjkxMjAwMTgsMi45MTA0MTY2IGMgMCwtMC4wNzI2MiAtMC4wNTgwMDEsLTAuMTQ3MDgzMyAtMC4xNjYyMzkxLC0wLjIxMzQyMTIgQyAyLjY5ODYyMTUsMi42NjgxMDMxIDIuNDQ2NjA2LDIuNTI5OTM5IDEuNjM1NzYxOSwyLjA4ODQ1MjYgMS41MTcxODk0LDIuMDIzODkyNSAxLjM5MjI2MzIsMS45NTQzNjU1IDEuMzU4MTQ4MiwxLjkzMzk0ODMgMS4xNjYwODk0LDEuODE5MDA0MSAxLjA5NjU2OTQsMS43Mjk0ODQ0IDEuMDYzNzk2OSwxLjU1NDkxNyAxLjA1NTAzNywxLjUwODI1NiAxLjA1MzY3ODYsMS40NzM4ODY4IDEuMDUzNjc4NiwxLjI5ODkwODIgYyAwLC0wLjIxNTYzNzIgMC4wMDI2OCwtMC4yNDY2NDQyIDAuMDI3Njk1LC0wLjMyMDE4NjAyIDAuMDMzMzk1LC0wLjA5ODE4NTkgMC4wODk4NywtMC4xMzk5MzcyOSAwLjE4ODM5MSwtMC4xMzkyNzYxOCAwLjA4NjU5Miw1LjgxMDZlLTQgMC4xMjQ2MjI1LDAuMDE2OTM1MyAwLjQ0Mzg1MSwwLjE5MDg2NzIgMC4xNTI4MjUsMC4wODMyNjcgMC4zMTkwOTQ2LDAuMTczODE2IDAuMzY5NDg3OSwwLjIwMTIyMDUgMC4wNTAzOTMsMC4wMjc0MDQgMC40MDIwNjg3LDAuMjE5MDE5OSAwLjc4MTUwMDgsMC40MjU4MTIgMC4zNzk0MzIxLDAuMjA2NzkyMiAwLjc3NDc2MzcsMC40MjIxNjY4IDAuODc4NTE0NiwwLjQ3ODYxMDIgMC45MjM4MTE5LDAuNTAyNTc5MyAxLjAwMjI0MzEsMC41NDYwOSAxLjA1NjM3MzUsMC41ODYwMzY3IDAuMTYyNzI3MiwwLjEyMDA4ODIgMC4xNjI3MjcyLDAuMjU2NzU5OSAwLDAuMzc2ODQ4IEMgNC43NDUzNjIyLDMuMTM4Nzg3MyA0LjY2NjkzMSwzLjE4MjI5OCAzLjc0MzExOTEsMy42ODQ4NzczIDMuNjM5MzY4MiwzLjc0MTMyMDcgMy4yNDQwMzY2LDMuOTU2Njk1MyAyLjg2NDYwNDUsNC4xNjM0ODc1IDIuNDg1MTcyNCw0LjM3MDI3OTYgMi4xMzM0OTcxLDQuNTYxODk1MSAyLjA4MzEwMzcsNC41ODkyOTk1IDIuMDMyNzEwNCw0LjYxNjcwNCAxLjg2NjQ0MDgsNC43MDcyNTMyIDEuNzEzNjE1OCw0Ljc5MDUyIDEuNDkyMjAzMyw0LjkxMTE1NjggMS40MjQzMTUsNC45NDU2Nzc0IDEuMzc5NDU2OCw0Ljk2MDQzNyAxLjMxOTExNzUsNC45ODAyOTAzIDEuMjYyNDI3LDQuOTg3NDExIDEuMjI0OTA2NSw0Ljk3OTg0OTcgWiIKICAgICBpZD0icGF0aDEiIC8+PC9zdmc+Cg==';
    const closeIcon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJjbG9zZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTE1LjQ2NDkzNSwxNS40NjcyOTcgQzE0Ljc2NDQwNTksMTYuMTc3NzcwNSAxMy42MTg1ODc3LDE2LjE3Nzc3MDUgMTIuOTA4MTE0MiwxNS40NjcyOTcgTDkuOTk4ODE4OTksMTIuNTU4MDAxOCBMNy4wODg0MTg4NSwxNS40NjcyOTcgQzYuMzgyMzY1MDYsMTYuMTczMzUwOCA1LjIzNzY1MTg3LDE2LjE3MzM1MDggNC41MzE1OTgwNywxNS40NjcyOTcgQzQuMTc5MTIzNjQsMTUuMTE0ODIyNiA0LjAwMDEyNDA5LDE0LjY0ODUzOTggNC4wMDAxMjQwOSwxNC4xODg4ODY2IEM0LjAwMDEyNDA5LDEzLjcyODEyODUgNC4xNzkxMjM2NCwxMy4yNjI5NTA2IDQuNTMxNTk4MDcsMTIuOTEwNDc2MiBMNy40NDA4OTMyOCwxMC4wMDExODEgTDQuNTI3MTc4MzMsNy4wODYzNjExMiBDNC4xNzM1OTg5Nyw2LjczMjc4MTc2IDMuOTk0NTk5NDEsNi4yNjc2MDM5MSA0LjAwMDEyNDA5LDUuODAyNDI2MDYgQzQuMDAwMTI0MDksNS4zNDE2Njc5NSA0LjE3MzU5ODk3LDQuODgyMDE0NzcgNC41MjcxNzgzMyw0LjUyOTU0MDM0IEM1LjIzMjEyNzE5LDMuODIzNDg2NTUgNi4zNzY4NDAzOCwzLjgyMzQ4NjU1IDcuMDgzOTk5MTEsNC41Mjk1NDAzNCBMOS45OTg4MTg5OSw3LjQ0MzI1NTI5IEwxMi45MTI1MzM5LDQuNTI5NTQwMzQgQzEzLjYxODU4NzcsMy44MjM0ODY1NSAxNC43NjQ0MDU5LDMuODIzNDg2NTUgMTUuNDcwNDU5Nyw0LjUyOTU0MDM0IEMxNi4xNzY1MTM0LDUuMjM0NDg5MiAxNi4xNzY1MTM0LDYuMzgwMzA3MzMgMTUuNDcwNDU5Nyw3LjA4NjM2MTEyIEwxMi41NTQ1MzQ4LDEwLjAwMTE4MSBMMTUuNDcwNDU5NywxMi45MTQ4OTYgQzE2LjE3NjUxMzQsMTMuNjIwOTQ5NyAxNi4xNzY1MTM0LDE0Ljc1NTcxODUgMTUuNDY0OTM1LDE1LjQ2NzI5NyIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=';
    const clearIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00LjU0OCA3aDEwLjkwNGEuNS41IDAgMCAxIC40OTguNTQ1bC0uNzg1IDguNjM1QTIgMiAwIDAgMSAxMy4xNzQgMThINi44MjdhMiAyIDAgMCAxLTEuOTkyLTEuODJMNC4wNSA3LjU0NkEuNS41IDAgMCAxIDQuNTQ4IDd6bTIuNzg1LTMgLjU1My0xLjY1OEEuNS41IDAgMCAxIDguMzYgMmgzLjI4YS41LjUgMCAwIDEgLjQ3NC4zNDJMMTIuNjY3IDRIMTYuNWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTEzYS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNWgzLjgzM3ptMS4wNTQgMGgzLjIyNmwtLjMzNC0xSDguNzIxbC0uMzM0IDF6TTEwIDExLjcybDEuNTk1LTEuNTk1YS41LjUgMCAwIDEgLjcwNyAwbC4wNzMuMDczYS41LjUgMCAwIDEgMCAuNzA3TDEwLjc4IDEyLjVsMS41OTUgMS41OTVhLjUuNSAwIDAgMSAwIC43MDdsLS4wNzMuMDczYS41LjUgMCAwIDEtLjcwNyAwTDEwIDEzLjI4bC0xLjU5NSAxLjU5NWEuNS41IDAgMCAxLS43MDcgMGwtLjA3My0uMDczYS41LjUgMCAwIDEgMC0uNzA3TDkuMjIgMTIuNWwtMS41OTUtMS41OTVhLjUuNSAwIDAgMSAwLS43MDdsLjA3My0uMDczYS41LjUgMCAwIDEgLjcwNyAwTDEwIDExLjcyeiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIiBmaWxsPSIjRkZGIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=';
    const extIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NS4xMTYwNSIgaGVpZ2h0PSI4NS4xMTYxNiIgdmlld0JveD0iMCwwLDg1LjExNjA1LDg1LjExNjE2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk3LjQ0MTk3LC0xMzcuNDQxOTIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMTk3LjQ0MTk3LDIyMi41NTgwOHYtODUuMTE2MTZoODUuMTE2MDV2ODUuMTE2MTZ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIxMS43NzQ5NCwyMTEuOTQ0NTNjLTcuMDYzNzksMCAtMTIuNzkwMTIsLTUuNzI2MzMgLTEyLjc5MDEyLC0xMi43OTAxMnYtMzguMzA4NzljMCwtNy4wNjM3OSA1LjcyNjMzLC0xMi43OTAxMiAxMi43OTAxMiwtMTIuNzkwMTJoNTYuNDUwMTJjNy4wNjM3OSwwIDEyLjc5MDEyLDUuNzI2MzMgMTIuNzkwMTIsMTIuNzkwMTJ2MzguMzA4NzljMCw3LjA2Mzc5IC01LjcyNjMzLDEyLjc5MDEyIC0xMi43OTAxMiwxMi43OTAxMnoiIGZpbGw9IiMzZjNmM2YiLz48cGF0aCBkPSJNMjA2LjU1MTc3LDE2NC4zOTIxM2wyMi4wNjU4NywxNS42NzMyNWwtMjEuODA5OTQsMTUuNDE4MzFsLTAuMDgwMzUsLTcuODk1NjNsMTIuNjk2MjksLTcuNTQ3MTRsLTEyLjc5NzQ2LC04LjU2OTkxeiIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGQ9Ik0yMjkuOTUxMTMsMTk1LjE4NDUydi01LjMzOTAzaDI1LjIwNTE3djUuMzM5MDN6IiBmaWxsPSIjZmZmZmZmIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6NDIuNTU4MDI1NzYwODY2NDM6NDIuNTU4MDc5MDgzMTA1NDEtLT4=";
    const getDarkMode = () => {
        try {
            let theme = JSON.parse(localStorage.getItem('tw:theme'));
            return theme.gui === 'dark';
        }
        catch (error) {
            return localStorage.getItem('tw:theme') === 'dark'; // 鍏煎鏃х増鏈� TW
        }
    };

    const rtlLang = ['ar', 'fa', 'he', 'ckb'];
    let isDark = getDarkMode();
    let forceTheme = false;
    let isRTL = rtlLang.includes(localStorage.getItem('tw:language'));

    let consoleWindowShown = false;
    let defaultHelpMessage = 'enable';

    let consoleWindow = document.createElement('div');
    consoleWindow.style.position = 'fixed';
    consoleWindow.style.top = '50%';
    consoleWindow.style.left = '50%';
    consoleWindow.style.transform = 'translate(-50%, -50%)';
    consoleWindow.style.width = '600px';
    consoleWindow.style.height = '400px';
    consoleWindow.style.overflow = 'auto';
    consoleWindow.style.borderRadius = '10px';
    consoleWindow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    consoleWindow.style.display = 'none';
    consoleWindow.style.fontFamily = 'IconFont, Cascadia Code, Consolas, Courier New, Menlo, 绛夌嚎, monospace';
    consoleWindow.style.paddingBottom = '5px';
    consoleWindow.style.overflowX = 'hidden';
    consoleWindow.style.zIndex = 999;
    document.body.appendChild(consoleWindow);

    let isDragging = false; // 鏍囪鏄惁姝ｅ湪鎷栧姩
    let offset = { x: 0, y: 0 }; // 榧犳爣鐐瑰嚮浣嶇疆涓庣獥鍙ｅ乏涓婅鐨勫亸绉婚噺

    // 鍒涘缓鏍囬鏍�
    let titleBar = document.createElement('div');
    titleBar.style.height = '40px';
    titleBar.style.lineHeight = '40px';
    titleBar.style.paddingLeft = '12px';
    titleBar.style.paddingRight = '12px';
    titleBar.style.cursor = 'move';
    titleBar.style.fontSize = '16px';
    if (typeof vm.runtime !== "undefined" && typeof vm.runtime.platform !== "undefined" && typeof vm.runtime.platform.name !== "undefined") {
        titleBar.innerText = lang('aness6040debugger.windowText', 'Console') + ' @' + version + ' - ' + vm.runtime.platform.name;
    } else if ((Scratch.extensions.isElectraMod ? true : (Scratch.extensions.isPenguinMod ? true : false))) {
        titleBar.innerText = lang('aness6040debugger.windowText', 'Console') + ' @' + version + ' - ' + 
                    (Scratch.extensions.isElectraMod ? "ElectraMod" : 
                    (Scratch.extensions.isPenguinMod ? "PenguinMod" : "Scratch"));
    } else {
        titleBar.innerText = lang('aness6040debugger.windowText', 'Console') + ' @' + version;
    }
    titleBar.style.position = 'sticky';
    titleBar.style.top = '0px';
    titleBar.style.textAlign = 'center';
    consoleWindow.appendChild(titleBar);

    // 鍒涘缓鍐呭鍖哄煙
    let content = document.createElement('div');
    content.style.position = 'absolute';
    content.style.width = '100%';
    content.style.height = '360px';
    // content.style.backgroundColor = '#FF0000';
    content.style.bottom = '0';
    content.style.overflow = 'auto';
    content.style.paddingTop = '5px';
    consoleWindow.appendChild(content);

    // 鍒涘缓鍏抽棴鎸夐挳
    let closeButton = document.createElement('img');
    closeButton.src = closeIcon;
    closeButton.style.position = 'absolute';
    closeButton.style.top = '12px';
    closeButton.style.width = '16px';
    closeButton.style.height = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.classList.add('icon');
    titleBar.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        consoleWindow.style.display = 'none';
        inputWindow.style.display = 'none';
        consoleWindowShown = false;
    });

    // 鍒涘缓娓呯┖鎸夐挳
    let clearButton = document.createElement('img');
    clearButton.src = clearIcon;
    clearButton.style.position = 'absolute';
    clearButton.style.top = '12px';
    clearButton.style.width = '16px';
    clearButton.style.height = '16px';
    clearButton.style.cursor = 'pointer';
    clearButton.classList.add('icon');
    titleBar.appendChild(clearButton);

    clearButton.addEventListener('click', () => {
        // 娓呯┖鎺у埗鍙�
        clearConsoleText();
    });

    // 鍒涘缓杈撳叆鎸夐挳
    let inputButton = document.createElement('img');
    inputButton.src = inputIcon;
    inputButton.style.position = 'absolute';
    inputButton.style.top = '12px';
    inputButton.style.width = '16px';
    inputButton.style.height = '16px';
    inputButton.style.cursor = 'pointer';
    inputButton.classList.add('icon');
    titleBar.appendChild(inputButton);

    // 鍒涘缓杈撳叆鍐呭鐨勭獥鍙�
    let inputWindow = document.createElement('div');
    inputWindow.style.position = 'absolute';
    inputWindow.style.top = `calc(${consoleWindow.style.top} + 228px)`;
    inputWindow.style.transform = 'translate(-50%, -50%)';
    inputWindow.style.width = '400px';
    inputWindow.style.height = '30px';
    inputWindow.style.overflow = 'hidden';
    inputWindow.style.overflowX = 'hidden';
    inputWindow.style.boxShadow = '0 0 10px 4px rgba(0, 0, 0, 0.2)';
    inputWindow.style.borderRadius = '10px';
    inputWindow.style.display = 'none';
    inputWindow.style.paddingBottom = '5px';
    inputWindow.style.zIndex = '1000';
    inputWindow.style.userSelect = 'none';
    document.body.appendChild(inputWindow);

    let inputWindowIcon = document.createElement('img');
    inputWindowIcon.src = inputIcon;
    inputWindowIcon.style.position = 'absolute';
    inputWindowIcon.style.width = '22px';
    inputWindowIcon.style.height = '22px';
    inputWindowIcon.style.top = '6px';
    inputWindowIcon.classList.add('icon');
    inputWindow.appendChild(inputWindowIcon);

    // 鍒涘缓杈撳叆妗�
    let inputBox = document.createElement('input');
    inputBox.style.position = 'absolute';
    inputBox.style.width = 'calc(100% - 40px)';
    inputBox.style.height = '30px';
    inputBox.style.background = '#FFFFFF00';
    inputBox.style.fontFamily = 'Cascadia Code, Consolas, Courier New, Menlo, 绛夌嚎, monospace';
    inputBox.style.borderColor = 'transparent';
    inputBox.style.outline = 'none';
    inputWindow.appendChild(inputBox);

    // 鎻愪氦
    function inputmessage(messageText) {
        switch (messageText.toLowerCase()) {
            case 'ext -v':
                addText({ message: `v${version}`, bullet: '>' });
                break;
            case 'help':
                if (defaultHelpMessage === 'enable') {
                    addText({
                        message: '> ' + lang(
                            'help',
                            'Help:<br><br>   Breakpoint: Pause the program for debugging, press<br>               "Continue" to resume execution.<br>   Console: A window for input and output.<br>   Output: Print text or variables at key points to debug.<br>   Input: Click the ">" button above to input,<br>          input can be detected as<br>          "when input" or "get last input".'
                        ).replace(/ /g, '&nbsp;') + '<br>&nbsp;',
                        innerHTML: true
                    });
                } else {
                    lastInput = messageText;
                    if (defaultHelpMessage === 'completlydisable') {
                        addText({ message: messageText, bullet: `$ ` });
                    }
                    vm.runtime.startHats('aness6040debugger_whenInput');
                }
                break;
            default:
                addText({ message: messageText, bullet: `$ ` });
                lastInput = messageText;
                vm.runtime.startHats('aness6040debugger_whenInput');
                break;
        }
    }
    
    inputBox.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            let messageText = inputBox.value;
            inputBox.value = '';
            inputmessage(messageText);
        }
    });
    

    // 杈撳叆鎺у埗鎸夐挳
    inputButton.addEventListener('click', () => {
        const iptWdSty = inputWindow.style;
        if (iptWdSty.display === 'none') iptWdSty.display = 'block';
        else iptWdSty.display = 'none';
    });

    let lastInput = '';

    titleBar.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    function handleMouseDown(event) {
        if (event.target === titleBar) {
            isDragging = true;

            // 璁＄畻榧犳爣鐐瑰嚮浣嶇疆涓庣獥鍙ｅ乏涓婅鐨勫亸绉婚噺
            offset.x = event.clientX - consoleWindow.offsetLeft;
            offset.y = event.clientY - consoleWindow.offsetTop;
        }
    }

    function handleMouseMove(event) {
        if (isDragging) {
            event.preventDefault(); // 鍙栨秷榛樿琛屼负

            // 璁＄畻绐楀彛鏂扮殑浣嶇疆
            const newX = event.clientX - offset.x;
            const newY = event.clientY - offset.y;

            // 鏇存柊绐楀彛浣嶇疆
            consoleWindow.style.left = newX + 'px';
            consoleWindow.style.top = newY + 'px';

            // 鏇存柊杈撳叆绐楀彛鐨勪綅缃�
            inputWindow.style.top = `calc(${consoleWindow.style.top} + 228px)`;
            inputWindow.style.left = !isRTL ? `calc(${getComputedStyle(consoleWindow).left} - 100px)` : 'auto';
            inputWindow.style.right = isRTL ? `calc(${getComputedStyle(consoleWindow).right} + 100px)` : 'auto';
        }
    }

    let lastTheme = localStorage.getItem('tw:theme');
    let lastLanguage = localStorage.getItem('tw:language');

    function checkLocalStorageChange() {
        if (consoleWindow.style.display == 'block') {
            const currentTheme = localStorage.getItem('tw:theme');
            const currentLanguage = localStorage.getItem('tw:language');

            if (currentTheme !== lastTheme || currentLanguage !== lastLanguage) {
                changeWindowColor();
                lastTheme = currentTheme;
                lastLanguage = currentLanguage;
            }
        }
    }

    setInterval(checkLocalStorageChange, 500);

    function changeWindowColor() {
        if (!forceTheme) {
            isDark = getDarkMode();
        }
        isRTL = rtlLang.includes(localStorage.getItem('tw:language'));
        inputWindow.style.top = `calc(${consoleWindow.style.top} + 228px)`;
        inputWindow.style.left = `calc(${consoleWindow.style.left} - 100px)`;
        inputWindow.style.left = !isRTL ? `calc(${getComputedStyle(consoleWindow).left} - 100px)` : 'auto';
        inputWindow.style.right = isRTL ? `calc(${getComputedStyle(consoleWindow).right} + 100px)` : 'auto';
        if (isRTL) {
            consoleWindow.style.direction = 'rtl';
            inputWindow.style.direction = 'rtl';
            inputWindowIcon.style.transform = 'scaleX(-1)';
            closeButton.style.left = '12px';
            closeButton.style.right = 'auto';
            clearButton.style.left = '60px';
            clearButton.style.right = 'auto';
            inputButton.style.left = '108px';
            inputButton.style.right = 'auto';
            inputButton.style.transform = 'scaleX(-1)';
            inputBox.style.left = 'auto';
            inputBox.style.right = '40px';
            inputWindowIcon.style.left = 'auto';
            inputWindowIcon.style.right = '12px';
        } else {
            consoleWindow.style.direction = 'ltr';
            inputWindow.style.direction = 'ltr';
            inputWindowIcon.style.transform = 'scaleX(1)';
            closeButton.style.left = 'auto';
            closeButton.style.right = '12px';
            clearButton.style.left = 'auto';
            clearButton.style.right = '60px';
            inputButton.style.left = 'auto';
            inputButton.style.right = '108px';
            inputButton.style.transform = 'scaleX(1)';
            inputBox.style.left = '40px';
            inputBox.style.right = 'auto';
            inputWindowIcon.style.left = '12px';
            inputWindowIcon.style.right = 'auto';
        }
        if (isDark) {
            consoleWindow.style.backgroundColor = '#111111';
            consoleWindow.style.color = '#FFF';
            titleBar.style.backgroundColor = '#1E1E1E';
            titleBar.style.color = '#FFF';
            closeButton.style.filter = 'none';
            clearButton.style.filter = 'none';
            inputButton.style.filter = 'none';
            inputWindow.style.backgroundColor = '#111111';
            inputWindow.style.color = '#FFF';
            inputWindowIcon.style.filter = 'none';
        }
        else {
            consoleWindow.style.backgroundColor = '#FAFAFA';
            consoleWindow.style.color = '#474747';
            titleBar.style.backgroundColor = '#CDCDCD';
            titleBar.style.color = '#000';
            closeButton.style.filter = 'invert(1)';
            clearButton.style.filter = 'invert(1)';
            inputButton.style.filter = 'invert(1)';
            inputWindow.style.backgroundColor = '#FAFAFA';
            inputWindow.style.color = '#474747';
            inputWindowIcon.style.filter = 'invert(1)';
        }
    }

    function handleMouseUp() {
        isDragging = false;
    }

    function clearConsoleText() {
        content.innerHTML = '';
    }

    let lastLog = '';
    let lastLogEncoded = '';
    let lastLogColor = '';
    let lastLogTimestamp;
    
    function addText({ message, color, bullet = '', innerHTML = false }) {
        const logElement = document.createElement('div');
        logElement.style.color = color;
        logElement.style.fontSize = '16px';
        logElement.style.paddingLeft = '10px';
        logElement.style.paddingRight = '10px';
    
        if (innerHTML) {
            logElement.innerHTML = message;
        } else {
            let inner = isRTL ? `
                <div style="display: flex; justify-content: space-between; direction: rtl;">
                    ${bullet === '' ? '' : `<span>${bullet}</span><span>&nbsp;</span>`}
                    <span style="flex-grow: 1; text-align: right;">${message}</span>
                </div>
            ` : `
                <div style="display: flex; justify-content: space-between; direction: ltr;">
                    ${bullet === '' ? '' : `<span>${bullet}</span><span>&nbsp;</span>`}
                    <span style="flex-grow: 1; text-align: left;">${message}</span>
                </div>
            `;
            logElement.innerHTML = inner;
        }
    
        content.appendChild(logElement);
    
        lastLog = message;
        lastLogEncoded = lastLog.replace(/ /g, '&nbsp;');
        lastLogColor = color ?? '';
        lastLogTimestamp = Date.now();
    
        while (content.children.length > maxMessage) {
            content.removeChild(content.children[0]);
        }
    }      

    function addImg(base64ImageData) {
        const imageElement = document.createElement('img');
        imageElement.src = base64ImageData;
        imageElement.style.borderRadius = '10px';
        imageElement.style.width = '150px';
        imageElement.style.margin = '10px';
        content.appendChild(imageElement);

        content.appendChild(document.createElement('br'));

        while (content.children.length > maxMessage) {
            content.removeChild(content.children[0])
        }
    }

    let maxMessage = 50;

    addText({
        color: '#808080',
        message: `<h1>Debugger Console</h1><br><h3>v${version}</h3><br>Originally by NOname (Based on turboWarp CN) and continued by Aness6040 (actual extension).<br><br>` + lang('aness6040debugger.tipForHelp', 'Type "help" to view > help.'),
    });

    class Aness6040debugger {
        getInfo() {
            return {
            color1: '#808080',
            color2: '#737373',
            color3: '#666666',
            blockIconURI: extIcon,
                id: 'aness6040debugger',
                name: lang('aness6040debugger.extName', 'Debugger Console'),
                blocks: [
                    '---',
                    {
                        func: 'switchTheme',
                        opcode: 'switchTheme',
                        blockType: BlockType.BUTTON,
                        text: lang('aness6040debugger.switchTheme', 'Switch theme')
                    },
                    {
                        func: 'setThemeAuto',
                        opcode: 'setThemeAuto',
                        blockType: BlockType.BUTTON,
                        text: lang('aness6040debugger.setThemeAuto', 'Set Theme to Auto')
                    },
                    '---',
                    {
                        opcode: 'showConsole',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.showConsole', 'show console')
                    },
                    {
                        opcode: 'hideConsole',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.hideConsole', 'hide console')
                    },
                    {
                        opcode: 'consoleShown',
                        blockType: BlockType.BOOLEAN,
                        text: lang('aness6040debugger.consoleShown', 'console shown?')
                    },
                    {
                        opcode: 'breakpoint',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.breakpoint', 'breakpoint')
                    },
                    {
                        opcode: 'breakpointAndLog',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.breakpointAndLog', 'breakpoint and log [message]'),
                        arguments: {
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'ifFalseBreakpoint', // 鏃у潡
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.ifFalseBreakpoint', 'if [boolean] is false, then breakpoint'),
                        arguments: {
                            boolean: {
                                type: ArgumentType.BOOLEAN
                            }
                        },
                        hideFromPalette: true
                    },
                    {
                        opcode: 'ifFalseBreakpointAndLog', // 鏃у潡
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.ifFalseBreakpointAndLog', 'if [boolean] is false, then breakpoint and log [message]'),
                        arguments: {
                            boolean: {
                                type: ArgumentType.BOOLEAN
                            },
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        },
                        hideFromPalette: true
                    },
                    {
                        opcode: 'testBreakpoint',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.testBreakpoint', 'if [boolean] is [type], then breakpoint'),
                        arguments: {
                            boolean: {
                                type: ArgumentType.BOOLEAN
                            },
                            type: {
                                type: ArgumentType.STRING,
                                menu: 'testType'
                            }
                        }
                    },
                    {
                        opcode: 'testBreakpointAndLog',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.testBreakpointAndLog', 'if [boolean] is [type], then breakpoint and log [message]'),
                        arguments: {
                            boolean: {
                                type: ArgumentType.BOOLEAN
                            },
                            type: {
                                type: ArgumentType.STRING,
                                menu: 'testType'
                            },
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'clearConsole',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.clearConsole', 'clear console')
                    },
                    {
                        opcode: 'output',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.output', 'console [type] [message]'),
                        arguments: {
                            type: {
                                type: ArgumentType.STRING,
                                menu: 'outputType'
                            },
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'outputWithColor',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.outputWithColor', 'output [message] color [color]'),
                        arguments: {
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            },
                            color: {
                                type: ArgumentType.COLOR,
                                defaultValue: '#61AFEF'
                            }
                        }
                    },
                    {
                        opcode: 'test',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.test', 'test [boolean] if [type] comment [message]'),
                        arguments: {
                            boolean: {
                                type: ArgumentType.BOOLEAN,
                            },
                            type: {
                                type: ArgumentType.STRING,
                                menu: 'testType'
                            },
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },
                    {
                        opcode: 'logStage',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.logStage', 'log stage')
                    },
                    {
                        opcode: 'enabledisableDefaultHelpMessage',
                        blockType: BlockType.COMMAND,
                        text: lang('aness6040debugger.enabledisableDefaultHelpMessage', '[enabledisable] default help message'),
                        arguments: {
                            enabledisable: {
                                type: ArgumentType.STRING,
                                menu: 'enabledisable'
                            }
                        }
                    },
                    {
                        opcode: 'defaultHelpMessageEnabled',
                        blockType: BlockType.BOOLEAN,
                        text: lang('aness6040debugger.defaultHelpMessageEnabled', 'default help message enabled?'),
                    },
                    '---',
                    {
                        opcode: 'whenInput',
                        blockType: BlockType.EVENT,
                        isEdgeActivated: false,
                        text: '[ICON]' + lang('aness6040debugger.whenInput', 'when input'),
                        arguments: {
                            ICON: {
                                type: ArgumentType.IMAGE,
                                dataURI: inputIcon,
                                flipRTL: true
                            }
                        }
                    },
                    {
                        opcode: 'getLastInput',
                        blockType: BlockType.REPORTER,
                        text: '[ICON]' + lang('aness6040debugger.getLastInput', 'get last input'),
                        arguments: {
                            ICON: {
                                type: ArgumentType.IMAGE,
                                dataURI: inputIcon,
                                flipRTL: true
                            }
                        }
                    },
                    {
                        opcode: 'getLastLog',
                        blockType: BlockType.REPORTER,
                        text: '[ICON]' + lang('aness6040debugger.getLastLog', 'get last log [log]'),
                        arguments: {
                            ICON: {
                                type: ArgumentType.IMAGE,
                                dataURI: inputIcon,
                                flipRTL: true
                            },
                            log: {
                                type: ArgumentType.STRING,
                                menu: 'logType'
                            }
                        }
                    },
                    {
                        opcode: 'sendMessageInput',
                        blockType: BlockType.COMMAND,
                        text: '[ICON]' + lang('aness6040debugger.sendMessageInput', 'send [message] in input'),
                        arguments: {
                            ICON: {
                                type: ArgumentType.IMAGE,
                                dataURI: inputIcon,
                                flipRTL: true
                            },
                            message: {
                                type: ArgumentType.STRING,
                                defaultValue: 'help'
                            }
                        }
                    },
                    '---',
                    {
                        opcode: 'version',
                        blockType: BlockType.REPORTER,
                        text: 'version',
                    },
                    {
                        opcode: 'isDarkMode',
                        blockType: BlockType.BOOLEAN,
                        text: lang('aness6040debugger.isDarkMode', 'Is Dark Mode? (Console)'),
                    }
                ],
                menus: {
                    outputType: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.log',
                                    default: 'log'
                                }),
                                value: 'log'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.warn',
                                    default: 'warn'
                                }),
                                value: 'warn'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.error',
                                    default: 'error'
                                }),
                                value: 'error'
                            }
                        ]
                    },
                    testType: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.true',
                                    default: 'true'
                                }),
                                value: 'true'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.false',
                                    default: 'false'
                                }),
                                value: 'false'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.trueOrFalse',
                                    default: 'true or false'
                                }),
                                value: 'all'
                            }
                        ]
                    },
                    enabledisable: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.enable',
                                    default: 'enable'
                                }),
                                value: 'enable'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.disable',
                                    default: 'disable'
                                }),
                                value: 'disable'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.completlydisable',
                                    default: 'completly disable'
                                }),
                                value: 'completlydisable'
                            },
                        ]
                    },
                    logType: {
                        acceptReporters: false,
                        items: [
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.text',
                                    default: 'Text (HTML)'
                                }),
                                value: 'text'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.textEncoded',
                                    default: 'Text (HTML with encodes)'
                                }),
                                value: 'textEncoded'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.color',
                                    default: 'color (HEX Code)'
                                }),
                                value: 'color'
                            },
                            {
                                text: formatMessage({
                                    id: 'aness6040debugger.timestamp',
                                    default: 'Timestamp'
                                }),
                                value: 'timestamp'
                            }
                        ]
                    },
                }
            };
        }

        switchTheme () {
            forceTheme = true;
            isDark = !isDark;
            changeWindowColor();
        }
        setThemeAuto () {
            forceTheme = false;
            changeWindowColor();
        }
        showConsole() {
            consoleWindow.style.left = '50%'
            consoleWindow.style.top = '50%';
            consoleWindow.style.display = 'block';
            changeWindowColor();
            consoleWindowShown = true;
        }
        hideConsole() {
            consoleWindow.style.display = 'none';
            inputWindow.style.display = 'none';
            consoleWindowShown = false;
        }

        consoleShown() {
            return consoleWindowShown;
        }

        breakpoint() {
            const pauseButtonSelector = vm.runtime.isPackaged ? '[class*="pause-button"]' : 'img.pause-btn.addons-display-none-pause';
            const pauseButton = document.querySelector(pauseButtonSelector);

            if (pauseButton) {
                pauseButton.click();
            }
        }

        breakpointAndLog({ message }) {
            this.output({ type: 'log', message: message });
            this.breakpoint();
        }

        ifFalseBreakpoint({ boolean }) {
            boolean = Cast.toBoolean(boolean);
            if (!boolean) this.breakpoint();
        }

        ifFalseBreakpointAndLog({ boolean, message }) {
            boolean = Cast.toBoolean(boolean);
            if (!boolean) {
                addText({
                    bullet: '>',
                    message: message,
                    color: '#E06C75'
                });
                this.breakpoint();
            }
        }

        testBreakpoint({ boolean, type }) {
            boolean = Cast.toBoolean(boolean);
            if (boolean === false && type === 'true') return;
            if (boolean === true && type === 'false') return;
            this.breakpoint();
        }

        testBreakpointAndLog({ boolean, type, message }) {
            boolean = Cast.toBoolean(boolean);
            if (boolean === false && type === 'true') return;
            if (boolean === true && type === 'false') return;
            addText({
                bullet: lang(`aness6040debugger.${boolean ? 'pass' : 'fail'}`, boolean ? '✅' : '❌'),
                message: message,
                color: Cast.toBoolean(boolean) ? '#98C379' : '#E06C75'
            });
            this.breakpoint();
        }

        ifFalseBreakpointAndLog({ boolean, message }) {
            boolean = Cast.toBoolean(boolean);
            if (!boolean) {
                addText({
                    bullet: '>',
                    message: message,
                    color: '#E06C75'
                });
                this.breakpoint();
            }
        }

        clearConsole() {
            clearConsoleText();
        }

        output({ type, message }) {
            if (type === 'log') {
                addText({ bullet: '>', message: message });
                return;
            }
            const outputColor = {
                warn: '#E5C07B',
                error: '#E06C75'
            };
            const bullet = {
                warn: '>',
                error: '>'
            };
            addText({
                bullet: bullet[type],
                message: message,
                color: outputColor[type]
            });
        }

        outputWithColor(args) {
            addText(args);
        }

        test({ boolean, type, message }) {
            if (boolean === false && type === 'true') return;
            if (boolean === true && type === 'false') return;

            let mess = lang('aness6040debugger.testTip', 'test: [message]');
            mess = mess.replace('[message]', message)
            addText({
                color: Cast.toBoolean(boolean) ? '#98C379' : '#E06C75',
                message: mess,
                bullet: lang(`aness6040debugger.${boolean ? 'pass' : 'fail'}`, boolean ? '✅' : '❌')
            });
        }

        logStage() {
            new Promise((resolve) => {
                vm.runtime.renderer.requestSnapshot((uri) => {
                    resolve(uri);
                });
            }).then((base64ImageData) => {
                addImg(base64ImageData);
            });
        }

        enabledisableDefaultHelpMessage(args){
          if (args.enabledisable === 'enable') {
            defaultHelpMessage = 'enable';
          } 
          else if (args.enabledisable === 'disable') {
            defaultHelpMessage = 'disable';
          }
          else if (args.enabledisable === 'completlydisable') {
            defaultHelpMessage = 'completlydisable';
          }
        }
        defaultHelpMessageEnabled(){
            if (defaultHelpMessage === 'enable') {
                return true;
              } 
              else {
                return false;
              }
        }

        getLastInput() {
            return lastInput;
        }

        getLastLog(args) {
            if (args.log === 'text') {
                return lastLog;
              } 
              else if (args.log === 'textEncoded') {
                return lastLogEncoded;
              }
              else if (args.log === 'color') {
                return lastLogColor;
              }
              else if (args.log === 'timestamp') {
                return lastLogTimestamp;
              }
              else {
                return '';
              }
        }

        sendMessageInput(args) {
            messageText = args.message;
            inputmessage(messageText);
            lastInput = messageText;
        
        }

        version() {
          return version;
        }

        isDarkMode () {
            return isDark;
        }
    }

    Scratch.extensions.register(new Aness6040debugger());
})(Scratch);