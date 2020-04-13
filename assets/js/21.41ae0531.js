(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{283:function(t,e,a){"use strict";a.r(e);var s=a(29),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wakeword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wakeword"}},[t._v("#")]),t._v(" Wakeword")]),t._v(" "),a("p",[t._v("There are two types of wakewords for Alice.\nThe global wakewords, that work for everybody, and are preinstalled. And the personal wakewords, that only work for one person and are individually created in runtime.")]),t._v(" "),a("h2",{attrs:{id:"global-wakeword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-wakeword"}},[t._v("#")]),t._v(" Global wakeword")]),t._v(" "),a("p",[t._v("At the moment following global wakewords are supported:")]),t._v(" "),a("ul",[a("li",[t._v('"Hey Snips"')])]),t._v(" "),a("p",[t._v("This is subject to change and will be replaced when multiple wakeword engines are supported.")]),t._v(" "),a("h2",{attrs:{id:"personal-wakeword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#personal-wakeword"}},[t._v("#")]),t._v(" Personal wakeword")]),t._v(" "),a("p",[t._v("The personal wakeword is created after a new user is registered for Alice.\nThis can be right after her start for the first user, or when you add in a new user later on.\nWhen you decide to not add a wakeword at the start, you (currently) have two ways to add it later on.")]),t._v(" "),a("h3",{attrs:{id:"reset-everything"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-everything"}},[t._v("#")]),t._v(" Reset everything")]),t._v(" "),a("p",[t._v("Delete all memory of Alice and start over with the user creation of the Admin.\nThis way is only recommended when you just created your instance of Alice.")]),t._v(" "),a("div",{staticClass:"language-Batchfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sudo rm ~/ProjectAlice/system/database/data.db\nsudo systemctl restart Alice\n")])])]),a("h3",{attrs:{id:"create-a-wakeword-manually"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-wakeword-manually"}},[t._v("#")]),t._v(" Create a wakeword manually")]),t._v(" "),a("p",[t._v("Here you will create your own recordings, cut them on any device and insert them into Alice.")]),t._v(" "),a("ol",[a("li",[t._v('Record yourself 3 times saying "Hey Alice". Name the files 0.wav 1.wav and 2.wav')]),t._v(" "),a("li",[t._v("Crop the recording as close as possible (cutting of a millisecond should be better than keeping too much silence)")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("A free tool for this could be "),a("a",{attrs:{href:"https://www.audacity.de/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Audacity"),a("OutboundLink")],1)])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("Move the files to ~/ProjectAlice/trained/hotwords/%username%/. Add your username into the path, it should always be written in lower case!")])]),t._v(" "),a("li",[a("p",[t._v('Create a file "config.json" in the same folder with following content (again replace the %username% with your name, all lower case)')])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"num_mel_bins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"povey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kind"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"personal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"window_size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cepstral_lifter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use_energy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"energy_floor"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from_mfcc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dtw_ref"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.22")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"raw_energy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frame_length_ms"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"frame_shift_ms"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preemphasis_coefficient"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.97")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to_mfcc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sample_rate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dither"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mel_low_freq"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shift"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"num_mfcc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"band_radius"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hotword_key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%username%"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[a("code",[t._v("sudo nano /etc/snips.toml")])])]),t._v(" "),a("li",[a("p",[t._v("Modify the following block to include the path to your wakeword and the sensitivity. Don't forget to replace %username%!")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[snips-hotword]\nmodel = ["/home/pi/ProjectAlice/trained/hotwords/snips_hotword=0.53","/home/pi/ProjectAlice/trained/hotwords/%username%=0.48"]\n')])])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("Restart Alice")])]),t._v(" "),a("p",[a("code",[t._v("sudo systemctl restart ProjectAlice")])])])}),[],!1,null,null,null);e.default=r.exports}}]);