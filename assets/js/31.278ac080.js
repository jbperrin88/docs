(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{278:function(t,s,a){"use strict";a.r(s);var e=a(29),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"widgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets"}},[t._v("#")]),t._v(" Widgets")]),t._v(" "),a("p",[t._v("Widgets are little tiles that a user can add to the interface home screen. They provide a quick overview or functions to your skills. Think a Philips Hue lamp adding a widget for every lamp the user has connected, allowing the user to click on the widget to toggle the light state. Or a widget for a shopping list displaying what's currently in your list. Or a widget displaying the temperature at your Netatmo devices. Or... Well, you got it I guess?")]),t._v(" "),a("h2",{attrs:{id:"widgets-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-structure"}},[t._v("#")]),t._v(" Widgets structure")]),t._v(" "),a("p",[t._v("Widgets come embedded with your skill. They are not mandatory but can be a nice addition for users using the interface. You can add more than one widget per skill, and the user decides which ones to use. To add a widget you must create the following structure in your existing skill structure, our HelloWorld skills:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".\n├─ widgets\n│  └─ css\n│     └─ common.css\n│     └─ HelloWorldWidget.css\n│  └─ img\n│  └─ js\n│     └─ HelloWorldWidget.js\n│  └─ lang\n│     └─ HelloWorldWidget.json\n│  └─ templates\n│     └─ HelloWorldWidget.html\n│  └─ HelloWorldWidget.py\n")])])]),a("p",[t._v("Let's break down this structure!")]),t._v(" "),a("h3",{attrs:{id:"css-common-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-common-css"}},[t._v("#")]),t._v(" css/common.css")]),t._v(" "),a("p",[t._v("This contains any css that is common between the widgets your skill proposes. If there's no common css rule, please add this to the file:")]),t._v(" "),a("p",[t._v("`/* empty */")]),t._v(" "),a("h3",{attrs:{id:"css-helloworldwidget-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-helloworldwidget-css"}},[t._v("#")]),t._v(" css/HelloWorldWidget.css")]),t._v(" "),a("p",[t._v("This is your widget dedicated css file! The default content should be as follow:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".HelloWorldWidget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #d1d1d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" border-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".HelloWorldWidget .icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The first class takes up the whole widget available space and defines the background color")]),t._v(" "),a("li",[t._v("The second class defines the widget icon")])]),t._v(" "),a("h3",{attrs:{id:"img"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#img"}},[t._v("#")]),t._v(" img")]),t._v(" "),a("p",[t._v("If your widgets uses image files, such as backgrounds, you could place them here, for organisation's sake")]),t._v(" "),a("h3",{attrs:{id:"js-helloworldwidget-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-helloworldwidget-js"}},[t._v("#")]),t._v(" js/HelloWorldWidget.js")]),t._v(" "),a("p",[t._v("The engine of your widget! If your widget is interactive, you can code whatever you want in there! Remember, we use Jquery and Jquery-UI so they are at your disposal for coding your stuff! A basic file should look like:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"lang-helloworldwidget-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lang-helloworldwidget-json"}},[t._v("#")]),t._v(" lang/HelloWorldWidget.json")]),t._v(" "),a("p",[t._v("This file can be used if your widget displays texts, such as html field labels, buttons or whatever that has text that should be translated. Remember what languages you made your skill compatible with! Your widget should support them too! The structure is the following:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"en"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello all"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"de"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hallo zusammen"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fr"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello à tous"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"templates-helloworldwidget-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templates-helloworldwidget-html"}},[t._v("#")]),t._v(" templates/HelloWorldWidget.html")]),t._v(" "),a("p",[t._v("This is what is rendered on the home page, it's your widget! A basic widget file looks like:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("HelloWorldWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("HelloWorldWidget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("widgetIcons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fas fa-space-shuttle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-hidden")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Your widget html code --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Remember the css classes we defined a little higher? See where they go now?\nAlso, do you remember the language file? Using automatic translation isn't that hard! Instead of hardcoding your language string, simply replace it by "),a("code",{pre:!0},[t._v("{{ lang.yourStringIndex }}")]),t._v(". This will automatically be replaced by, if your Alice instance runs in english, "),a("code",[t._v("HelloWorldWidget.json['en']['yourStringIndex']")])]),t._v(" "),a("h3",{attrs:{id:"helloworldwidget-py"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helloworldwidget-py"}},[t._v("#")]),t._v(" HelloWorldWidget.py")]),t._v(" "),a("p",[t._v("This is what makes your widget be loaded by Alice! A raw widget python file would be:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sqlite3\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Widget\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" core"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Widget "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WidgetSizes\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorldMap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Widget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n\tSIZE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WidgetSizes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w_extralarge_wide\n\tOPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sqlite3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Let's take a little look at this!")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("SIZE: Defines the size your widget is gonna render, in pixel:")]),t._v(" "),a("ul",[a("li",[t._v("w_tiny: 50x50")]),t._v(" "),a("li",[t._v("w_tiny_wide: 100x50")]),t._v(" "),a("li",[t._v("w_tiny_tall: 50x100")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w_small: 100x100")]),t._v(" "),a("li",[t._v("w_small_wide: 200x100")]),t._v(" "),a("li",[t._v("w_small_tall: 100x200")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w: 200x200")]),t._v(" "),a("li",[t._v("w_wide: 300x200")]),t._v(" "),a("li",[t._v("w_tall: 200x300")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w_large: 300x300")]),t._v(" "),a("li",[t._v("w_large_wide: 400x300")]),t._v(" "),a("li",[t._v("w_large_tall: 300x400")]),t._v(" "),a("li"),t._v(" "),a("li",[t._v("w_extralarge: 500x500")]),t._v(" "),a("li",[t._v("w_extralarge_wide: 700x500")]),t._v(" "),a("li",[t._v("w_extralarge_tall: 500x700")])])]),t._v(" "),a("li",[a("p",[t._v("OPTIONS")]),t._v(" "),a("ul",[a("li",[t._v("To be implemented, but will allow widget options")])])])]),t._v(" "),a("h2",{attrs:{id:"widgets-mqtt-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-mqtt-connection"}},[t._v("#")]),t._v(" Widgets mqtt connection")]),t._v(" "),a("p",[t._v("We provide a built-in way for your widgets to connect to Project Alice mqtt broker!")]),t._v(" "),a("p",[t._v("It is actually quite simple to use:")]),t._v(" "),a("ul",[a("li",[t._v("In your javascript file, add two function calls:\n"),a("ul",[a("li",[t._v("mqttRegisterSelf("),a("em",[t._v("myOnConnectFunction")]),t._v(", 'onConnect')")]),t._v(" "),a("li",[t._v("mqttRegisterSelf("),a("em",[t._v("myOnMessageFunction")]),t._v(", 'onMessage')")])])]),t._v(" "),a("li",[t._v("This registers "),a("code",[t._v("myOnConnectFunction")]),t._v(" and "),a("code",[t._v("myOnMessageFunction")]),t._v(" to the mqtt corresponding events!")]),t._v(" "),a("li",[t._v("Create the "),a("em",[t._v("myOnConnectFunction")]),t._v(" (name this function as you wish, as long as you declare it accordingly with mqttRegisterSelf):"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onConnect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MQTT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subscribe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'projectalice/logging/syslog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("The MQTT object is automatically available in your scripts. It is a paho.MQTT object. In the above example we subscribe to a topic when we just connect")]),t._v(" "),a("li",[t._v("Create the "),a("em",[t._v("myOnMessageFunction")]),t._v(" (name this function as you wish, as long as you declare it accordingly with mqttRegisterSelf):"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" payload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payloadString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("The onMessage function parses the payload and prints it in the logs")])]),t._v(" "),a("p",[t._v("And that's it! You don't have to worry about broker address, port or whatever!")]),t._v(" "),a("h2",{attrs:{id:"widgets-call-to-alice-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgets-call-to-alice-core"}},[t._v("#")]),t._v(" Widgets call to Alice Core")]),t._v(" "),a("p",[t._v("Beside the API we also have the possibility for your widgets to call functions on the core directly! You want to know the best? It's very simple! For this we use a "),a("code",[t._v("POST")]),t._v(" Ajax call directed to "),a("code",[t._v("/home/widget/")])]),t._v(" "),a("ul",[a("li",[t._v("In your widget javascript add an ajax call:"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/widget/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        skill"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MySkillName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        widget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ThisWidgetName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        func"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'functionToCall'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        param"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    contentType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'POST'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("answer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" theReturnedData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" answer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'theReturnedData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("Replace "),a("code",[t._v("MySkillName")]),t._v(" with the skill name the current widget is from and "),a("code",[t._v("ThisWidgetName")]),t._v(" with the name of the widget")]),t._v(" "),a("li",[t._v("Replace "),a("code",[t._v("func")]),t._v(" with the python function to call, in your widget "),a("code",[t._v(".py")]),t._v(" file")]),t._v(" "),a("li",[t._v("Add parameters for that function call if necessary, as a dictionary for named arguments")]),t._v(" "),a("li",[t._v("Once the call is done, "),a("code",[t._v("answer")]),t._v(" will contain any answer from your widget "),a("code",[t._v(".py")]),t._v(" script")]),t._v(" "),a("li",[t._v("In your widget "),a("code",[t._v(".py")]),t._v(" file, add the function you want to call:"),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("functionToCall")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'theReturnedData'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'It works'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("And that's it, your widget calls your function in Alice Core and it responds back with whatever you want!")]),t._v(" "),a("h2",{attrs:{id:"in-built-css-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-built-css-rules"}},[t._v("#")]),t._v(" In built css rules")]),t._v(" "),a("p",[t._v("The interface loads our css rules, and these are available at all time! Let me try to list the ones that are most important for you as a widget dev!")]),t._v(" "),a("h3",{attrs:{id:"variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[t._v("#")]),t._v(" Variables")]),t._v(" "),a("p",[t._v("We have some variables set for you to use in your widgets:")]),t._v(" "),a("h4",{attrs:{id:"hover-color-of-a-link-when-hovered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hover-color-of-a-link-when-hovered"}},[t._v("#")]),t._v(" --hover : Color of a link when hovered")]),t._v(" "),a("h4",{attrs:{id:"mainbg-main-color-of-the-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mainbg-main-color-of-the-background"}},[t._v("#")]),t._v(" --mainBG : Main color of the background")]),t._v(" "),a("h4",{attrs:{id:"windowbg-color-of-windows-above-the-main-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windowbg-color-of-windows-above-the-main-background"}},[t._v("#")]),t._v(" --windowBG : Color of windows above the main background")]),t._v(" "),a("h4",{attrs:{id:"secondary-secondary-color-of-windows-above-the-main-background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secondary-secondary-color-of-windows-above-the-main-background"}},[t._v("#")]),t._v(" --secondary : Secondary color of windows above the main background")]),t._v(" "),a("h4",{attrs:{id:"accentuated-accentuated-color-for-items-that-need-to-draw-attention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accentuated-accentuated-color-for-items-that-need-to-draw-attention"}},[t._v("#")]),t._v(" --accentuated : Accentuated color, for items that need to draw attention")]),t._v(" "),a("h4",{attrs:{id:"text-texts-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text-texts-color"}},[t._v("#")]),t._v(" --text : Texts color")]),t._v(" "),a("h4",{attrs:{id:"short-text-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#short-text-font"}},[t._v("#")]),t._v(" --short : Text font")]),t._v(" "),a("h4",{attrs:{id:"long-text-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#long-text-font"}},[t._v("#")]),t._v(" --long : Text font")]),t._v(" "),a("h4",{attrs:{id:"readable-text-font"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readable-text-font"}},[t._v("#")]),t._v(" --readable : Text font")]),t._v(" "),a("h3",{attrs:{id:"classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classes"}},[t._v("#")]),t._v(" Classes")]),t._v(" "),a("p",[t._v("Some reusable classes")]),t._v(" "),a("h4",{attrs:{id:"widget-to-be-used-for-widgets-the-wrapper-around"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widget-to-be-used-for-widgets-the-wrapper-around"}},[t._v("#")]),t._v(" .widget : To be used for widgets, the wrapper around")]),t._v(" "),a("h4",{attrs:{id:"tilecontainer-if-you-need-to-create-a-tile-system-this-is-used-for-the-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tilecontainer-if-you-need-to-create-a-tile-system-this-is-used-for-the-container"}},[t._v("#")]),t._v(" .tileContainer : If you need to create a tile system, this is used for the container")]),t._v(" "),a("h4",{attrs:{id:"tile-if-you-create-tiles-use-this-class-for-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tile-if-you-create-tiles-use-this-class-for-them"}},[t._v("#")]),t._v(" .tile : If you create tiles, use this class for them")]),t._v(" "),a("h4",{attrs:{id:"red-red-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#red-red-color-for-texts"}},[t._v("#")]),t._v(" .red : Red color for texts")]),t._v(" "),a("h4",{attrs:{id:"disabled-red-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabled-red-color-for-texts"}},[t._v("#")]),t._v(" .disabled : Red color for texts")]),t._v(" "),a("h4",{attrs:{id:"warning-red-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#warning-red-color-for-texts"}},[t._v("#")]),t._v(" .warning : Red color for texts")]),t._v(" "),a("h4",{attrs:{id:"green-green-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#green-green-color-for-texts"}},[t._v("#")]),t._v(" .green : Green color for texts")]),t._v(" "),a("h4",{attrs:{id:"saved-green-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saved-green-color-for-texts"}},[t._v("#")]),t._v(" .saved : Green color for texts")]),t._v(" "),a("h4",{attrs:{id:"yellow-yellow-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yellow-yellow-color-for-texts"}},[t._v("#")]),t._v(" .yellow : Yellow color for texts")]),t._v(" "),a("h4",{attrs:{id:"active-yellow-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#active-yellow-color-for-texts"}},[t._v("#")]),t._v(" .active : Yellow color for texts")]),t._v(" "),a("h4",{attrs:{id:"saving-yellow-color-for-texts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#saving-yellow-color-for-texts"}},[t._v("#")]),t._v(" .saving : Yellow color for texts")]),t._v(" "),a("h4",{attrs:{id:"hidden-display-none"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hidden-display-none"}},[t._v("#")]),t._v(" .hidden : Display None")]),t._v(" "),a("h4",{attrs:{id:"button-if-you-use-buttons-use-this-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#button-if-you-use-buttons-use-this-class"}},[t._v("#")]),t._v(" .button: If you use buttons, use this class")])])}),[],!1,null,null,null);s.default=n.exports}}]);