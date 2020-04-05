(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{278:function(t,e,s){"use strict";s.r(e);var o=s(29),i=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("p",[t._v("Yes, nobody and nothing's perfect but we try hard to be as close as perfect as possible. But hey, let's face it, it's a ton of code and it can go wrong, or maybe you made something wrong, or you're using hardware we've never tested, or.... Ok, I stop.... Let's find a solution to your problem! Keep in mind that the first boot can take up to 15 minutes on your settings, hardware and all! "),s("strong",[t._v("Do not unplug your device")]),t._v(" if nothing happens, you might cut Alice in the middle of her installing!")]),t._v(" "),s("p",[t._v("First thing we want to do is SSH to your device. Find out your device's IP and ssh to it using whatever you have. On Windows "),s("a",{attrs:{href:"https://www.9bis.net/kitty/#!pages/download.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kitty"),s("OutboundLink")],1),t._v(" is a good solution, on other platforms your can simply connect through your terminal.")]),t._v(" "),s("p",[t._v("There are many things we can check, this is one path I'm giving you, but it's not the only one!")]),t._v(" "),s("p",[t._v("First, let's check if the Project Alice service is up and running:")]),t._v(" "),s("p",[s("code",[t._v("sudo systemctl status ProjectAlice")])]),t._v(" "),s("p",[t._v("You should get some info about the service. If you check it for a while you'll notice that it either continues with normal operations in which case you have to wait for it to start, or you'll notice it crashes and restarts all the time or even says that the service is dead.")]),t._v(" "),s("p",[t._v("If the service is dead or restarts all the time, let's debug it! Stop Project Alice. First pres CTRL+C to stop the systemctl command and in your terminal type")]),t._v(" "),s("p",[s("code",[t._v("sudo systemctl stop ProjectAlice")])]),t._v(" "),s("p",[t._v("Let's start it manually to have a better vision of the logs. In your ssh terminal type")]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/pi/ProjectAlice\n./venv/bin/python main.py\n")])])]),s("p",[t._v("This will manually start ProjectAlice printing out every details and stopping if any unrecoverable error arises. Check for these errors and report them if any on "),s("a",{attrs:{href:"https://github.com/project-alice-assistant/ProjectAliceSatellite/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),s("OutboundLink")],1),t._v(". Read the logs carefully, they always give hint if something's missing, a setting not set, something wrong.")]),t._v(" "),s("p",[t._v("If there's no errors and Alice seems to start fine, the last log line, on first boot, should be something like")]),t._v(" "),s("p",[s("code",[t._v("This satellite is not yet registered for Project Alice. Searching for main unit")])]),t._v(" "),s("h4",{attrs:{id:"the-logs-say-this-satellite-is-not-yet-registered-for-project-alice-searching-for-main-unit-but-nothing-happens"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-logs-say-this-satellite-is-not-yet-registered-for-project-alice-searching-for-main-unit-but-nothing-happens"}},[t._v("#")]),t._v(' The logs say "This satellite is not yet registered for Project Alice. Searching for main unit" but nothing happens')]),t._v(" "),s("p",[t._v('At this point, you should ask alice to "Add a new satellite"')]),t._v(" "),s("p",[t._v("WIP")])])}),[],!1,null,null,null);e.default=i.exports}}]);