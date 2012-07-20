Ext.data.JsonP.Application({"component":false,"html_meta":{"aside":["            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_scope'><img src='guides/application_scope/icon.png' alt=''> Application Scope</a></p>\n            </div>\n"]},"tagname":"class","extends":null,"alternateClassNames":[],"inheritdoc":null,"mixedInto":[],"singleton":true,"uses":[],"statics":{"css_mixin":[],"cfg":[],"method":[],"property":[],"event":[],"css_var":[]},"parentMixins":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{"aside":[{"type":"guide","name":"application_scope"}]},"members":{"css_mixin":[],"cfg":[],"method":[{"tagname":"method","owner":"Application","meta":{},"name":"clear","id":"method-clear"},{"tagname":"method","owner":"Application","meta":{},"name":"get","id":"method-get"},{"tagname":"method","owner":"Application","meta":{},"name":"load","id":"method-load"},{"tagname":"method","owner":"Application","meta":{},"name":"set","id":"method-set"}],"event":[],"property":[],"css_var":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/NGN.Application.html#Application' target='_blank'>NGN.Application.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/application_scope'><img src='guides/application_scope/icon.png' alt=''> Application Scope</a></p>\n            </div>\n<p>The application scope is a globally accessible variable designed to store custom\napplication logic.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Application'>Application</span><br/><a href='source/NGN.Application.html#Application-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Application-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resets the application scope to it's original default (blank) . ...</div><div class='long'><p>Resets the application scope to it's original default (blank) .</p>\n</div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Application'>Application</span><br/><a href='source/NGN.Application.html#Application-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Application-method-get' class='name expandable'>get</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> property</span> ) : Mixed</div><div class='description'><div class='short'>Get a single property. ...</div><div class='long'><p>Get a single property. Supports nested properties, such as <code>get('my.nested.attribute')</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the application element to return.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-load' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Application'>Application</span><br/><a href='source/NGN.Application.html#Application-method-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Application-method-load' class='name expandable'>load</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> config</span> )</div><div class='description'><div class='short'>This method accepts a key/value object or an absolute path to a JSON file. ...</div><div class='long'><p>This method accepts a key/value object or an absolute path to a JSON file.\n<strong>Object</strong></p>\n\n<pre><code> var obj = {\n     title:      'Awesome App',\n            author:     'Acme, Inc.',\n            keywords:   'Awesome, App'\n }\n\n application.load(obj);\n</code></pre>\n\n<p><strong>Filepath</strong></p>\n\n<pre><code> application.load(__dirname + '/application.json');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>JSON Object or Filepath.</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Application'>Application</span><br/><a href='source/NGN.Application.html#Application-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Application-method-set' class='name expandable'>set</a>( <span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> property, Any value</span> )</div><div class='description'><div class='short'>Set a property in the application scope. ...</div><div class='long'><p>Set a property in the application scope.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>property</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Any<div class='sub-desc'><p>This may be a string, date, or any valid JavaScript object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","name":"Application","aliases":{},"superclasses":[],"requires":[],"id":"class-Application","subclasses":[],"files":[{"href":"NGN.Application.html#Application","filename":"NGN.Application.js"}]});