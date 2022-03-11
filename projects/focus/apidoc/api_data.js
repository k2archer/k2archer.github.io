define({ "api": [
  {
    "type": "WebSocket",
    "url": "/websocket/{token}",
    "title": "",
    "group": "任务",
    "version": "0.0.0",
    "filename": "../tomato_server/server/src/main/java/com/k2archer/server/tomato/websocket/controller/TickingController.java",
    "groupTitle": "任务",
    "name": "WebsocketWebsocketToken"
  },
  {
    "type": "WebSocket",
    "url": "/websocket/{token}|cancelTicking",
    "title": "取消任务",
    "group": "任务",
    "description": "<p>取消一个番茄任务，同步通知更新到在线终端</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求 Token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "cancelTicking"
            ],
            "optional": false,
            "field": "action",
            "defaultValue": "cancelTicking",
            "description": "<p>请求动作</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tickingId",
            "description": "<p>任务ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"action\": \"cancelTicking\",\n\"tickingId\": 15\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"code\": 1,\n\"msg\": \"\",\n\"data\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../tomato_server/server/src/main/java/com/k2archer/server/tomato/websocket/controller/TickingController.java",
    "groupTitle": "任务",
    "name": "WebsocketWebsocketTokenCancelticking"
  },
  {
    "type": "WebSocket",
    "url": "/websocket/{token}|startTicking",
    "title": "开始任务",
    "group": "任务",
    "description": "<p>开始一个番茄任务，同步通知更新到在线终端</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>请求 Token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "startTicking"
            ],
            "optional": false,
            "field": "action",
            "defaultValue": "startTicking",
            "description": "<p>请求动作</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "{0...}"
            ],
            "optional": true,
            "field": "ticking",
            "description": "<p>长时(秒) 默认：60*25</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"action\": \"startTicking\",\n\"ticking\": 15\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tickingId",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startTime",
            "description": "<p>任务开始(UTC)时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ticking",
            "description": "<p>任务时长</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n\"code\": 1,\n\"msg\": \"\",\n\"data\": {\n\"tickingId\": 1,\n\"startTime\": 123,\n\"ticking\": 15\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../tomato_server/server/src/main/java/com/k2archer/server/tomato/websocket/controller/TickingController.java",
    "groupTitle": "任务",
    "name": "WebsocketWebsocketTokenStartticking"
  },
  {
    "type": "RESPONSE",
    "url": "ExceptionResponseBody",
    "title": "请求异常响应包装类",
    "group": "数据结构",
    "description": "<p>HTTP 请求异常后返回的 Body 包装结构, 继承自 <a href=\"/#api-数据结构-ResponseResponsebody\">请求响应包装类</a></p>",
    "parameter": {
      "fields": {
        "新增": [
          {
            "group": "新增",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>HTTP 请求路径</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../tomato_server/server/src/main/java/com/k2archer/server/tomato/exception/ExceptionResponseBody.java",
    "groupTitle": "数据结构",
    "name": "ResponseExceptionresponsebody"
  },
  {
    "type": "RESPONSE",
    "url": "ResponseBody",
    "title": "请求响应包装类",
    "group": "数据结构",
    "description": "<p>HTTP 请求返回的 Body 包装结构</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ResponseStateCode",
            "optional": false,
            "field": "code",
            "description": "<p><a href=\"/#api-数据结构-ResponseResponsestatecode\">响应状态码</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示消息</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\" : 0,\n\"message\" : \"\",\n\"data\": {\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../tomato_server/server/src/main/java/com/k2archer/server/tomato/bean/response/ResponseBody.java",
    "groupTitle": "数据结构",
    "name": "ResponseResponsebody"
  },
  {
    "type": "RESPONSE",
    "url": "ResponseBody",
    "title": "请求响应包装类",
    "group": "数据结构",
    "description": "<p>HTTP 请求返回的 Body 包装结构</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ResponseStateCode",
            "optional": false,
            "field": "code",
            "description": "<p><a href=\"/#api-数据结构-ResponseResponsestatecode\">响应状态码</a></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>提示消息</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"code\" : 0,\n\"message\" : \"\",\n\"data\": {\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../tomato_server/tomato_base/src/main/java/com/k2archer/common/BaseResponseBody.java",
    "groupTitle": "数据结构",
    "name": "ResponseResponsebody"
  },
  {
    "type": "RESPONSE",
    "url": "ResponseStateCode",
    "title": "通用响应状态码类",
    "group": "数据结构",
    "description": "<p>请求响应通用状态码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SUCCESS",
            "description": "<p>(1200) 接口请求成功, 并返回结果</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RESULT",
            "description": "<p>(1202) 接口请求成功, 无结果返回</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FAILURE",
            "description": "<p>(1204) 接口请求成功, 业务失败</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BAD_REQUEST",
            "description": "<p>(1400) 无效接口请求</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BAD_TOKEN",
            "description": "<p>(1401) 无效 Token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SERVER_ERROR",
            "description": "<p>(1500) 服务器错误</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../tomato_server/tomato_base/src/main/java/com/k2archer/common/ResponseStateCode.java",
    "groupTitle": "数据结构",
    "name": "ResponseResponsestatecode"
  },
  {
    "type": "POST",
    "url": "/api/user/login",
    "title": "登录",
    "group": "用户",
    "description": "<p>用户登录接口，登录成功后，需要用 Token 连接 WebSocket 服务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{JSON} Request-Body-Example:",
          "content": "{\n\"username\" : \"name\",\n\"password\" : \"pw\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "{\n\"code\" : 0,\n\"message\" : \"\",\n\"data\": {\n\"token\" : \"T2O3K4E5N123\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../tomato_server/server/src/main/java/com/k2archer/server/tomato/controller/UserController.java",
    "groupTitle": "用户",
    "name": "PostApiUserLogin"
  }
] });
